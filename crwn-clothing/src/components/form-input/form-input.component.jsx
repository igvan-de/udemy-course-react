import './form-input.styles.scss';

const FORM_TYPE_CLASSES = {
    signUp:     'sign-up',
}

const FormInput = ({label, formType, ...otherProps }) => {
    return (
        <div className="group">
            <input className={`form-input ${FORM_TYPE_CLASSES[formType]}`} {...otherProps}/>
            {label && (
                <label className={`${otherProps.value.length ? 'shrink' : ''} form-input_label ${FORM_TYPE_CLASSES[formType]}`}>{label}</label>
            )}
        </div>
    )
}

export default FormInput;
