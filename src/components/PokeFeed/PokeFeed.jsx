import PokeCard from "../PokeCard/PokeCard";
import { Card } from 'semantic-ui-react';

export default function PokeFeed({pokes, isProfile, loggedUser }){
    const pokeCards = pokes.map((poke) =>{
        return <PokeCard pokes={pokes} isProfile={isProfile} loggedUser={loggedUser} />
    })

    return (
        <Card.Group itemsPerRow={3}>
            {pokeCards}
        </Card.Group>
    )
}