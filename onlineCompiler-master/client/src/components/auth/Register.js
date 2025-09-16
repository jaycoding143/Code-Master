import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { register } from '../../actions/authActions';
import { clearErrors } from '../../actions/errorActions';
import { Alert, Button, Form } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './register.css';

const Register = ({ register, clearErrors, error, isAuthenticated }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });
    const [msg, setMsg] = useState(null);

    const history = useHistory();

    useEffect(() => {
        console.log('cleared errors');
        clearErrors();
    }, [clearErrors]);

    useEffect(() => {
        if (error && error.id === 'REGISTER_FAIL') {
            setMsg(error.msg.msg);
        } else {
            setMsg(null);
        }

        if (isAuthenticated) {
            history.push('/');
        }
    }, [error, isAuthenticated, history]);

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        const { name, email, password } = formData;

        const newUser = {
            name,
            email,
            password
        };

        register(newUser);
    };

    return (
        <Form onSubmit={onSubmit} className='register'>
            <h5>Register</h5>
            {msg && (
                <Alert variant="dark">
                    {msg + '!!!'}
                </Alert>
            )}
            <Form.Group controlId="Name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    onChange={onChange}
                    className="inp"
                />
            </Form.Group>
            <Form.Group controlId="Email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                    type="email"
                    name="email"
                    placeholder="something@example.com"
                    onChange={onChange}
                    className="inp"
                />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
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
            <Button variant="outline-success" type="submit">Register</Button>
        </Form>
    );
};

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
});

export default connect(mapStateToProps, { register, clearErrors })(Register);





// import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import { register } from '../../actions/authActions'
// import { clearErrors } from '../../actions/errorActions'
// import { Alert } from 'react-bootstrap'
// import { Button, Form } from 'react-bootstrap'

// class Register extends Component {
//     state = {
//         name: '',
//         email: '',
//         password: '',
//         msg: null
//     };

//     componentDidMount() {
//         // Clear Errors
//         console.log('cleared errors');
//         this.props.clearErrors();
//     }

//     componentDidUpdate(prevProps) {
//         const { error } = this.props;
//         if (error !== prevProps.error) {
//             // Check for register error
//             if (error.id === 'REGISTER_FAIL') {
//                 this.setState({ msg: error.msg.msg })
//             } else {
//                 this.setState({ msg: null });
//             }
//         }
//         if(this.props.isAuthenticated) {
//             this.props.history.push('/')
//     }
//     }

//     onChange = e => {
//         this.setState({ [e.target.name]: e.target.value });
//     };

//     onSubmit = e => {
//         e.preventDefault();

//         const { name, email, password } = this.state;

//         // Create user object
//         const newUser = {
//             name,
//             email,
//             password
//         };

//         // Attempt to register
//         this.props.register(newUser);
// }
//     render() {
//         return (
//             <Form onSubmit={this.onSubmit} className='register'>
//                 <h5>Register</h5>
//                 {this.state.msg ? (
//                     <Alert variant="dark">
//                         { this.state.msg + '!!!'}
//                     </Alert>
//                 ) : null}
//                 <Form.Group controlId="Name">
//                     <Form.Label>Name</Form.Label>
//                     <Form.Control
//                         type="text"
//                         name="name"
//                         placeholder="Your Name"
//                         onChange={this.onChange}
//                         className="inp"
//                     />
//                 </Form.Group>
//                 <Form.Group controlId="Email">
//                     <Form.Label>Email</Form.Label>
//                     <Form.Control
//                         type="email"
//                         name="email"
//                         placeholder="something@example.com"
//                         onChange={this.onChange}
//                         className="inp"
//                     />
//                     <Form.Text className="text-muted">
//                         We'll never share your email with anyone else.
//                     </Form.Text>
//                 </Form.Group>
//                 <Form.Group controlId='Password'> 
//                     <Form.Label>Password</Form.Label>
//                     <Form.Control
//                         type="password"
//                         name="password"
//                         placeholder='your password'
//                         onChange={this.onChange}
//                         className="inp"
//                     />
//                 </Form.Group>
//                 <Button variant='outline-success' type="submit">Register</Button>
//             </Form>
//         )
//     }
// }

// const mapStateToProps = state => {
//     return {
//         isAuthenticated: state.auth.isAuthenticated,
//         error: state.error
//     }
// }

// export default connect(mapStateToProps, { register, clearErrors })(Register)
// import React, { useState } from 'react';
// import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';

// const Register = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState(null);

//   const onSubmit = (e) => {
//     e.preventDefault();
//     if (!name || !email || !password) {
//       setError('Please fill in all fields');
//       return;
//     }
//     // Call your register logic here
//   };

//   return (
//     <Container className="min-vh-75 d-flex justify-content-center align-items-center pt-5 fade-in">
//       <Row className="w-100 justify-content-center">
//         <Col xs={12} sm={8} md={6} lg={4}>
//           <h2 className="mb-4 text-center">Register</h2>
//           {error && <Alert variant="danger">{error}</Alert>}
//           <Form onSubmit={onSubmit} autoComplete="off">
//             <Form.Group controlId="formName" className="mb-3">
//               <Form.Label>Name</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter your full name"
//                 value={name}
//                 autoComplete="off"
//                 onChange={(e) => setName(e.target.value)}
//               />
//             </Form.Group>

//             <Form.Group controlId="formEmail" className="mb-3">
//               <Form.Label>Email address</Form.Label>
//               <Form.Control
//                 type="email"
//                 placeholder="Enter your email"
//                 value={email}
//                 autoComplete="off"
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </Form.Group>

//             <Form.Group controlId="formPassword" className="mb-4">
//               <Form.Label>Password</Form.Label>
//               <Form.Control
//                 type="password"
//                 placeholder="Create a password"
//                 value={password}
//                 autoComplete="off"
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//             </Form.Group>

//             <Button variant="primary" type="submit" className="w-100">
//               Register
//             </Button>
//           </Form>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default Register;
