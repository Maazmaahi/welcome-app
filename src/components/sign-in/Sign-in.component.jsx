import React from 'react';

import './Sign-in.style.scss';

import FormInput from '../form-input/Form-input.component';
import CustomButton from '../custom-button/Custom-button.component';

import {auth, signInWithGoogle} from '../../firebase/firebase.utils';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            msg: '',
        }
    }

    handleSubmit = async event => {
        const url = "/";
        let m;
        event.preventDefault();

        const {email, password} = this.state;

        try {
                await auth.signInWithEmailAndPassword(email, password);
                this.setState({email: '', password: ''});
        } catch (error) {
            m = error.message;
            this.setState({msg: m, email: '', password: ''});
            console.log(error, this.state.msg);
        }

    }

    handleChange = event => {
        const {value, name} = event.target;

        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign with your email and paswword</span>
                <form onSubmit={(this.handleSubmit)}>
                    <FormInput
                        name='email'
                        type='email'
                        value={this.state.email}
                        handleChange={this.handleChange}
                        label='email'
                        required
                    />
                    <FormInput
                        name="password"
                        type="password"
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label='password'
                        required
                    />
                    <span style={{color: "red"}}>{this.state.msg}</span>
                    <div className='buttons'>
                        <CustomButton type='submit'>
                            Sign in
                        </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                            Sign in with Google
                        </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;
