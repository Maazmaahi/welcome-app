import React from 'react';

import './sign-in-and-sign-up.style.scss';

import SignIn from '../../components/sign-in/Sign-in.component';
import SignUp from '../../components/sign-up/Sign-up.component';

const SignInAndSignUp = () => (
    <div className='sign-in-and-sign-up'>
        <SignIn />
        <SignUp />
    </div>
);

export default SignInAndSignUp;
