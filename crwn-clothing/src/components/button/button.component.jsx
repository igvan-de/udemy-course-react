import './button.styles.scss';

const BUTTON_TYPE_CLASSES = {
    google:     'google-sign-in',
    inveted:    'inveted',
}
 
const Button = ({buttonName, buttonType, ...otherProps}) => {

    console.log(buttonName);

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
