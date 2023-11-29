import { Card, Icon, Image } from "semantic-ui-react";

export default function PokeCard({ pokes, isProfile, loggedUser }) {

    return (
        <Card>
            <Card.Content textAlign="left">
                <Image
                    floated="left"
                    size="large"
                    src={
                        pokes.user.photoUrl
                            ? pokes.user.photoUrl
                            : "https://react.semantic-ui.com/images/wireframe/square-image.png"
                    }
                />
                <Card.Header floated="right">{pokes.name}</Card.Header>
            </Card.Content>
            <Image src={`${pokes.photoUrl}`} wrapped ui={false} />
            <Card.Content>
                <Card.Description>{pokes.description}</Card.Description>
            </Card.Content>
            <Card.Content extra textAlign="center">
                <Card.Description>{pokes.type}</Card.Description>
            </Card.Content>
        </Card>
    )
}

