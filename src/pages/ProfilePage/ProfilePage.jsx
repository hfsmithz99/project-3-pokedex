import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import PageHeader from "../../components/Header/Header";
import ProfileInfo from "../../components/ProfileInfo/ProfileInfo";
import PokeFeed from "../../components/PokeFeed/PokeFeed";

import { Grid } from 'semantic-ui-react'

import tokenService from "../../utils/tokenService";


export default function ProfilePage({ loggedUser }) {
    const [profileUser, setProfileUser] = useState({});
    const [pokes, setPokes] = useState([]);

    const [loading, setLoading] = useState(false);
    const [ErrorMessage, setErrorMessage] = useState('');

    const { username } = useParams();

    async function getProfile() {
        try {
            setLoading(true);

            const responseFromServer = await fetch(`/api/users/${username}`, {
                method: 'GET',
                headers: {
                    Authorization: "Bearer " + tokenService.getToken(),
                },
            })

            if (!responseFromServer.ok) setErrorMessage("Profile doesn't exist")
            console.log(responseFromServer)
            const data = await responseFromServer.json();

            console.log(data);

            setLoading(false);
            setProfileUser(data.user);
            setPokes(data.data);
        } catch (err) {
            console.log(err);
            setLoading(false);
            setErrorMessage("Profile doesn't exist")
        }
    }

    useEffect(() => {
        console.log(username);

        getProfile();
    }, [username]);

    if (ErrorMessage) {
        return (
            <>
                <PageHeader />
                <h1>{ErrorMessage}</h1>
            </>
        )
    }

    if (!pokes.length && loading) {
        return (
            <>
                <PageHeader />
                <h1>Loading...</h1>
            </>
        )
    }

    return (
        <Grid>
            <Grid.Row>
                <Grid.Column>
                    <PageHeader />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                    <ProfileInfo user={profileUser} />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row centered>
                <Grid.Column style={{ maxWidth: 750 }}>
                    <PokeFeed itemsPerRow={3} pokes={pokes} isProfile={true} loggedUser={loggedUser} />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}