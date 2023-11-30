const Poke = require("../models/poke");

const S3 = require('aws-sdk/clients/s3');

const s3 = new S3();

const { v4: uuidv4 } = require('uuid')

module.exports = {
    create,
    index
}

function create(req, res) {
    console.log(req.file, req.body, req.user);

    if (!req.file) return res.status(400).json({ error: 'Please submit a photo' })

    const filePath = `pokedexTesting/${uuidv4()}-${req.file.originalname}`

    const params = { Bucket: process.env.BUCKET_NAME, Key: filePath, Body: req.file.buffer }

    s3.upload(params, async function (err, data) {
        if (err) {
            console.log('=========================')
            console.log(err, ' <-- error from aws')
        }
        try {
            const pokeDoc = await Poke.create({
                user: req.user,
                photoUrl: data.Location,
                description: req.body.description,
                name: req.body.name,
                type: req.body.type,
            })

            await pokeDoc.populate('user')

            res.status(201).json({ poke: pokeDoc })

        } catch (err) {
            console.log(err, " <- error in create pokemon")
            res.json({ error: 'Problem with creatinga pokemon, try again' })
        }
    })
}

async function index(req, res){
    try{
        const pokes = await Poke.find({}).populate("user").exec();
        res.status(200).json({ pokes });
    } catch (err){
        res.json({error: err})
    }
}