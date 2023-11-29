import { Header, Segment } from "semantic-ui-react";

export default function PageHeader({user, logout}){
    return (
        <Segment>
            <Header as= 'h2'>
                Header Here
            </Header>
        </Segment>
    )
}