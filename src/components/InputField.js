import React from 'react'

const InputField = ({label, htmlfor, classNameDiv, className, type, name, onChange, errors} ) => {

        return (
            <div className={classNameDiv}>
                <i className={className.join(" ")}></i>
                <label htmlFor={htmlfor}>Your {label}</label>
                <input type={type} name={name} onChange={onChange} noValidate/>
                {errors.name && <p className="error">{errors.name}</p>}
            </div>
        )


}


export default InputField;