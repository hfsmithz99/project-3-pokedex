import { Segment, Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
import userService from "../../utils/userService";

export default function PageHeader({ user, logout }) {



    return (
        <Segment>
            <Menu>
                <Menu.Item
                    name='Main'
                    as={Link}
                    to='/'
                >
                    Main Page
                </Menu.Item>
                <Menu.Item
                    name='Add Pokemon'
                    as={Link}
                    to='/add'
                >
                    Add Pokemon
                </Menu.Item>
                <Menu.Item
                    name='Sign Up'
                    as={Link}
                    to='/signup'
                >
                    Sign Up
                </Menu.Item>
                <Menu.Item
                    name='Log In'
                    as={Link}
                    to='/login'
                >
                    Log In
                </Menu.Item>
                <Menu.Item
                onClick={logout}
                >
                    Logout
                </Menu.Item>
            </Menu>
        </Segment>
    )
}