import { useState, useEffect } from 'react';

import AddPokeForm from '../../components/AddPokeForm/AddPokeForm';

import tokenService from '../../utils/tokenService';

export default function AddPokePage({ loggedUser }) {

    const [pokes, setPokes] = useState([]);

    async function addPoke(formData) {
        try {
            const response = await fetch("/api/pokes", {
                method: "POST",
                body: formData,
                headers: {
                    Authorization: "Bearer " + tokenService.getToken(),
                },
            })

            const data = await response.json();

            console.log(data, "<--- from server")
            setPokes([data.poke, ...pokes]);
        } catch (err) {
            console.log(err);
        }
    }
    return(
        <AddPokeForm addPoke={addPoke} />
    )
}