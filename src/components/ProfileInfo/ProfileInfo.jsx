import { Image, Grid, Segment } from "semantic-ui-react";

export default function ProfileInfo({ user }) {
    return (
    <Grid textAlign="center" columns={2}>
        <Grid.Row>
            <Grid.Column>
                Image Here
            </Grid.Column>
            <Grid.Column textAlign="left" style={{ maxWidth: 450 }}>
                <Segment vertical>
                    <h3>{user.username}</h3>
                </Segment>
                <Segment>
                    other info here
                </Segment>
            </Grid.Column>
        </Grid.Row>
    </Grid>
    )
}