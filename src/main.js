import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {auth, createUserProfileDocument} from "./firebase/firebase.utils";
import HomePage from "./pages/homepage/Homepage.component";

class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: null,
            user: null
        }
    }

    unsubscribeFromAuth = null

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);
                userRef.onSnapshot(snapShot => {
                    console.log(`snapshot :- ${snapShot}`);
                    this.setState({
                        currentUser: {
                            id: snapShot.id,
                            ...snapShot.data()
                        }
                    });
                });
            }
            this.setState({currentUser: userAuth});
        });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div>
                {this.state.currentUser ? <HomePage/> : <SignInAndSignUp/>}
            </div>
        );
    }
}

export default Main;
