import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUSerDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import './sign-up-form.styles.scss';

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
        <div className="sign-up-container">
            <h2>I don't have an account</h2>
            <span>Sing up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label='Display Name' formType='signUp' type='text' required onChange={handleChange} name='displayName' value={displayName}/>
                <FormInput label='Email' formType='signUp' type='email' required onChange={handleChange} name='email' value={email}/>
                <FormInput label='Password' formType='signUp' type='password' required onChange={handleChange} name='password' value={password}/>
                <FormInput label='ConfirmPassword' formType='signUp' type='password' required onChange={handleChange} name='confirmedPassword' value={confirmedPassword}/>
                <Button type='submit' buttonName={'Sign up'} buttonType='signUp'/>
            </form>
        </div>
    );
}

export default SingUpForm;
