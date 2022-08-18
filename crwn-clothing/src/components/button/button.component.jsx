import './button.styles.scss';

const BUTTON_TYPE_CLASSES = {
    signUp:     'sign-up',
    google:     'google-sign-in',
    inveted:    'inveted',
}
 
const Button = ({buttonName, buttonType, ...otherProps}) => {
    return (
        <button 
            className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
            {...otherProps}
        >
            {buttonName}
        </button>
    )
 }

export default Button;
