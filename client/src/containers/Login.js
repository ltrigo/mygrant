import React, { Component } from 'react';
import { Button, Container, Form, Header, Input } from 'semantic-ui-react';
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';
import '../css/Login.css';


class Login extends Component {
    static propTypes = { cookies: instanceOf(Cookies).isRequired };

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            errorMessage: '',
            password: ''
        };

        this.emailField = null;

        this.setEmailField = component => {
            this.emailField = component;
        };

    }

    // Focus on the email input
    componentDidMount() {
        this.emailField.focus();
    }

    // Update the state with the data that was inserted
    handleInput(event, data) {
        this.setState({ [data.name]: data.value });
    }

    // Submit the form
    submitForm(event) {
        event.preventDefault();

        const { cookies } = this.props;

        if (this.state.email === '' || this.state.password === '') {
            return;
        }

        const data = {
            password: this.state.password,
            username: this.state.email
        };

        fetch('api/auth/login', {
            body: JSON.stringify(data),
            headers: { 'content-type': 'application/json' },
            method: 'POST'
        }).then(res => {
            if (res.status === 200) {
                res.json()
                    .then(parsed => {
                        cookies.set('id_token', parsed.token, {
                            // httpOnly: true,
                            // secure: true
                            path: '/'
                        });
                    });
            }
        });
    }

    render() {
        return (
            <Container className="main-container">
                <div>
                    <Header as="h1">Login</Header>
                    <Form onSubmit={this.submitForm.bind(this)} >
                        <Form.Field >
                            <label>{'your email'.toUpperCase()}</label>
                            <Input
                                type="email"
                                name="email"
                                placeholder="you@email.com"
                                onChange={this.handleInput.bind(this)}
                                ref={this.setEmailField}
                            />
                        </Form.Field>
                        <Form.Field >
                            <label>{'your password'.toUpperCase()}</label>
                            <Input
                                type="password"
                                name="password"
                                onChange={this.handleInput.bind(this)}
                            />
                        </Form.Field>
                        <Button fluid circular className="mygrant-button" content={'log in'.toUpperCase()}></Button>
                    </Form>
                </div>
            </Container>
        );
    }
}

export default withCookies(Login);
