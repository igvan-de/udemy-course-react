import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import { useState } from "react";
import "./sign-in-form.styles.scss";
import { signInEmailAndPassword, signInWithGoogleRedirect } from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
    email:              '',
    password:           ''
};

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email, password} = formFields;

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
        
        try {
            const response = await signInEmailAndPassword(email, password);
            if (response != null) {
                resetFromFields();
            }
        } catch(error) {
            switch(error.code) {
                case 'auth/wrongPassword': {
                    alert('Wrong password for email');
                    break;
                }
                case 'auth/user-not-found': {
                    alert('No user found with this email');
                    break;
                }
                default:
                    alert(error.code);
            }
        }
    };
    
    return (
        <div className="sign-in-container">
            <h2>I have an account</h2>
            <span>Sing in with your email and password or Gmail</span>
            <form>
                <FormInput label='Email' type='email' required onChange={handleChange} name='email' value={email}/>
                <FormInput label='Password' type='password' required onChange={handleChange} name='password' value={password}/>
                <div className="buttons-container">
                    <Button type='submit' buttonName={'Sign in'} onClick={handleSubmit}/>
                    <Button type='button' buttonName={'Sign in with Google'} buttonType='google' onClick={signInWithGoogleRedirect}/>
                </div>
            </form>
        </div>
    );
}

export default SignInForm;
