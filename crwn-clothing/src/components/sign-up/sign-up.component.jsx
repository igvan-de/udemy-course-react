import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUSerDocumentFromAuth } from '../../utils/firebase/firebase.utils';

const defaultFormFields = {
    displayName:        '',
    email:              '',
    password:           '',
    confirmedPassword:  ''
};

const SingUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {displayName, email, password, confirmedPassword} = formFields;

    const resetFromFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        
        // Get only the correct keyName of the object and sets in the correct value
        setFormFields({...formFields, [name]: value});
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        if (password !== confirmedPassword) {
            alert('The passwords do not match');
            return;
        } 
        
        try {
            const {user} = await createAuthUserWithEmailAndPassword(email, password);
            const userDocRef = await createUSerDocumentFromAuth(user, {displayName});
            resetFromFields();
        } catch(error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('Cannot create user, eamil already in use');
            } else {
                console.error(error);
            }
        }
    };

    return (
        <div>
            <h2>Sing up with your email and password</h2>
            <form onSubmit={handleSubmit}>
                <label>Display Name</label>
                <input type='text' required onChange={handleChange} name='displayName' value={displayName} placeholder='Display name you like'/>

                <label>Email</label>
                <input type='email' required onChange={handleChange} name='email' value={email} placeholder='Your email'/>

                <label>Password</label>
                <input type='password' required onChange={handleChange} name='password' value={password} placeholder='Your password'/>

                <label>Confirm Password</label>
                <input type='password' required onChange={handleChange} name='confirmedPassword' value={confirmedPassword} placeholder='Plase confirm your password'/>
                <button type='submit'>Sing Up</button>
            </form>
        </div>
    );
}

export default SingUpForm;
