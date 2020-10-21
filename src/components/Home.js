import React from 'react';
import { auth } from '../firebase/firebase.utils';

export const Home = () => {
    return (
        <div>
             Welcome Home
            <div className='option' onClick={() => auth.signOut()}>
                SIGN OUT
            </div>
        </div>
    );
}
