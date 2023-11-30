import { useState, useEffect } from "react";


import PokeFeed from "../../components/PokeFeed/PokeFeed";
import PageHeader from "../../components/Header/Header"

import { Grid } from "semantic-ui-react";

import tokenService from "../../utils/tokenService";

export default function FeedPage({ loggedUser, logout }) {
    const [pokes, setPokes] = useState([]);

    useEffect(() => {
        getPokes();
    }, []);

    async function getPokes() {
        try {
            const response = await fetch('/api/pokes', {
                method: "GET",
                headers: {
                    Authorization: "Bearer " + tokenService.getToken(),
                },
            })

            const data = await response.json();

            console.log(data);
            setPokes(data.pokes);
        } catch (err) {
            console.log(err);
        }
    }

    async function removePoke(pokeId){
        try{
            const responseFromServer = await fetch(`/api/pokes/${pokeId}`, {
                method: "DELETE",
                headers: {
                    Authorization: "Bearer " + tokenService.getToken(),
                },
            });
            const data = await responseFromServer.json();

            getPokes();

            console.log(data);
        } catch(err){
            console.log(err)
        }
    }

    return (
        <>
            <PageHeader logout={logout}/>
            <Grid centered>
                <Grid.Row>
                    <Grid.Column style={{ maxWidth: 1500 }}>
                        <PokeFeed
                            removePoke={removePoke}
                            pokes={pokes}
                            itemsPerRow={1}
                            isProfile={false}
                            loggedUser={loggedUser}
                        />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </>
    )

}