import { Card, Icon, Image, Button } from "semantic-ui-react";

export default function PokeCard({ poke, isProfile, loggedUser, removePoke }) {

    return (
        <Card >
            <Image src={`${poke.photoUrl}`} wrapped ui={false} size="small"/>
            <Card.Content>
                <Card.Header>{poke.name}</Card.Header>
                <Card.Description>
                   Description: {poke.description}
                </Card.Description>
                <Card.Description>
                  Type:  {poke.type}
                </Card.Description>
            </Card.Content>
            <Button onClick={() => removePoke(poke._id)}>Remove Pokemon</Button>
        </Card>
    )
}

