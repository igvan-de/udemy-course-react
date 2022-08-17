import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import { useState } from "react";
import "./sign-in-form.styles.scss";

const defaultFormFields = {
    email:              '',
    password:           ''
};


const SignInForm = () => {
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
    
    return (
        <div className="sign-in-container">
            <h2>I have an account</h2>
            <span>Sing in with your email and password or Gmail</span>
            <form>
                <FormInput label='Email' type='email' required onChange={handleChange} name='email' value={email}/>
                <FormInput label='Password' type='password' required onChange={handleChange} name='password' value={password}/>
                <div className="buttons-container">
                    <Button type='submit' buttonName={'Sign in'}/>
                    <Button type='submit' buttonName={'Sign in with Google'} buttonType='google'/>
                </div>
            </form>
        </div>
    );
}

export default SignInForm;
