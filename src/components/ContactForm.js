import React from 'react'
import InputField from './InputField'
import useForm from './useForm.js'
import Validate from './Validate.js'

const ContactForm = () => {
  const { handleChange, handleSubmit, values, errors, isSubmitting} = useForm(submit, Validate);

  function submit() {
    console.log("Submitted Successfully");
    Object.keys(values).forEach(key => {
      console.log(key, values[key]);
    });
  }

  return (
    <div className="container">
      <h1>Contact Us</h1>
      <div className="form">
        <form onSubmit={handleSubmit} noValidate>
          <InputField type="text" name="name" value={values.name} onChange={handleChange} htmlFor="name" label="Name" classNameDiv="input-field" className={["fa", "fa-user", "prefix"]} errors={errors}/>
          {/* {errors.name && <p className="error">{errors.name}</p>} */}
          <InputField  type="email" name="email" value={values.email} onChange={handleChange} htmlFor="email" label="Email" classNameDiv="input-field" className={["fa", "fa-envelope", "prefix"]} errors={errors}/>
          {/* {errors.email && <p className="error">{errors.email}</p>} */}
          <InputField  type="phone" name="phone" value={values.phone} onChange={handleChange} htmlFor="phone" label="Phone Number" classNameDiv="input-field" className={["fa", "fa-phone", "prefix"]} errors={errors}/>
          {/* {errors.phone && <p className="error">{errors.phone}</p>} */}
          <div className="input-field">
            <i className="fa fa-comments prefix"></i>
            <label htmlFor="name">Your Message Here</label>
            <textarea name="message" name="message" value={values.message} onChange={handleChange}></textarea>
            {errors.message && <p className="error">{errors.message}</p>}
          </div>
          <div className="btn">
            <button>Submit</button>
          </div>
        </form>
        {isSubmitting && (
          <div className="entries">
            
              <h3>Name: {values.name}</h3>
              <h3>Email: {values.email}</h3>
              <h3>Phone: {values.phone}</h3>
              <h3>Message: {values.message}</h3>
            
          </div> )}
      </div>
    </div>
  );
}

export default ContactForm