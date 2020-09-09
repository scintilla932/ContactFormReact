import { useState,useEffect } from 'react'

const useForm = (callback, Validate) => {
    const [values, setValues] = useState({ name:"", email: "", phone: "", message:"" });
    const [errors, setErrors] = useState({});

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = event => {
        const { name, value } = event.target

        setValues({
            ...values,
            [name]: value
        });
    }

    const handleSubmit = event => {
        event.preventDefault();
        setErrors(Validate(values))
        setIsSubmitting(true);
     
    }

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
          callback();
        }
      }, [errors]);
    

    return {
        handleChange,
        handleSubmit,
        values,
        errors,
        isSubmitting
    }
}


export default useForm