import { useState } from "react";

import {
    Button,
    Form,
    Grid,
    Header,
    Image,
    Segment
} from "semantic-ui-react"

import { useNavigate } from "react-router-dom";

import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'

import userService from "../../utils/userService";

export default function SignUpPage({ handleSignUpAndLogin }) {
    const [state, setState] = useState({
        username: '',
        email: '',
        password: '',
        passwordConf: '',
    })

    const [photo, setPhoto] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData();

        formData.append('photo', photo);
        formData.append('username', state.username);
        formData.append('email', state.email);
        formData.append('password', state.password);
        console.log(formData);

        try {

            await userService.signup(formData);

            handleSignUpAndLogin();

            navigate('/')

        } catch (err) {
            console.log(err.message)
            setError('Try signing up again')
        }
    }

    function handleChange(e) {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    function handleFileInput(e) {
        setPhoto(e.target.files[0])
    }

    return (
        <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
            <Header as="h2" color="purple" textAlign="center">
                SignUp
            </Header>
            <Form autoComplete="off" onSubmit={handleSubmit}>
                <Segment stacked>
                    <Form.Input
                        name="username"
                        placeholder="username"
                        value={state.username}
                        onChange={handleChange}
                        required
                    />
                    <Form.Input
                        type="email"
                        name="email"
                        placeholder="email"
                        value={state.email}
                        onChange={handleChange}
                        required
                    />
                    <Form.Input
                        name="password"
                        type="password"
                        placeholder="password"
                        value={state.password}
                        onChange={handleChange}
                        required
                    />
                    <Form.Input
                        name="passwordConf"
                        type="password"
                        placeholder="Confirm Password"
                        value={state.passwordConf}
                        onChange={handleChange}
                        required
                    />
                    <Form.Field>
                        <Form.Input
                            type="file"
                            name="photo"
                            placeholder="upload image"
                            onChange={handleFileInput}
                        />
                    </Form.Field>
                    <Button type="submit" className="btn">
                        Signup
                    </Button>
                </Segment>
            </Form>
        </Grid>
    )
}
