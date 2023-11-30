import { useState, useEffect } from "react";


import PokeFeed from "../../components/PokeFeed/PokeFeed";

import { Grid } from "semantic-ui-react";

import tokenService from "../../utils/tokenService";

export default function FeedPage({ loggedUser }){
    const [pokes, setPokes] = useState([]);

    useEffect(() => {
        getPokes();
    }, []);

    async function getPokes() {
        try{
            const response = await fetch('/api/pokes',{
                method: "GET",
                headers: {
                    Authorization: "Bearer " + tokenService.getToken(),
                },
            })

            const data = await response.json();

            console.log(data);
            setPokes(data.pokes);
        } catch(err){
            console.log(err);
        }
    }

    return(
        <Grid centered>
            <Grid.Row>
                <Grid.Column style={{maxWidth: 1500}}>
                    <PokeFeed 
                        pokes={pokes}
                        itemsPerRow = {1}
                        isProfile={false}
                        loggedUser={loggedUser}
                    />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )

}