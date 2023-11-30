import { Card, Icon, Image } from "semantic-ui-react";

export default function PokeCard({ poke, isProfile, loggedUser }) {

    return (
        <Card >
            <Image src={`${poke.photoUrl}`} wrapped ui={false} size="large"/>
            <Card.Content>
                <Card.Header>{poke.name}</Card.Header>
                <Card.Description>
                    {poke.description}
                </Card.Description>
                <Card.Description>
                    {poke.type}
                </Card.Description>
            </Card.Content>
        </Card>
    )
}

