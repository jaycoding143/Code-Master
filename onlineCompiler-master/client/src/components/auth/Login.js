
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/authActions';
import { clearErrors } from '../../actions/errorActions';
import { Alert, Button, Form } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
 import './login.css';

const Login = ({ login, clearErrors, error, isAuthenticated }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState(null);

    const history = useHistory();

    useEffect(() => {
        console.log('cleared errors');
        clearErrors();
    }, [clearErrors]);

    useEffect(() => {
        if (error && error.id === 'LOGIN_FAIL') {
            setMsg(error.msg.msg);
        } else {
            setMsg(null);
        }

        if (isAuthenticated) {
            history.push('/files');
        }
    }, [error, isAuthenticated, history]);

    const onChange = (e) => {
        const { name, value } = e.target;
        if (name === 'email') {
            setEmail(value);
        } else if (name === 'password') {
            setPassword(value);
        }
    };

    const onSubmit = (e) => {
        e.preventDefault();
        console.log('Submit');

        const user = {
            email,
            password
        };

        login(user);
    };

    return (
        <Form onSubmit={onSubmit} className="login container">
            <h5>Login</h5>
            {msg ? (
                <Alert variant="dark">
                    {msg + '!!!'}
                </Alert>
            ) : null}
            <Form.Group controlId="Email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                    type="email"
                    name="email"
                    placeholder="something@example.com"
                    onChange={onChange}
                    className="inp"
                />
            </Form.Group>
            <Form.Group controlId="Password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    name="password"
                    placeholder="your password"
                    onChange={onChange}
                    className="inp"
                />
            </Form.Group>
            <Button variant="outline-success" type="submit">Login</Button>
        </Form>
    );
};

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
});

export default connect(mapStateToProps, { login, clearErrors })(Login);


