// imports
import './App.css';
// hooks imports
import { useState } from 'react';

// other packages imports
import { useFormik } from 'formik';
import * as yup from 'yup';

// validation schema was created using yup package
const validation = yup.object({
    name: yup
        .string()
        .required("Name should not be empty"),
    emailid: yup
        .string()
        .required("Email id should not be empty")
        // eslint-disable-next-line 
        .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "invalid email"),
    contactno: yup
        .string()
        .min(10, "Enter the valid phone number")
        .max(10, "Enter the valid phone number")
        .required("Contact should not be empty"),
    country: yup
        .string()
        .required("Country should not be empty"),
    state: yup
        .string()
        .required(" State should not be empty"),
    city: yup
        .string()
        .required("City should not be empty"),
    message: yup
        .string()
        .required("Message should not be empty"),
})

// root component
function App() {
  const [formvalues, setformvalues] = useState();


  const { values, errors, touched, handleChange, handleSubmit, handleBlur } = useFormik({
      initialValues: { name: "", emailid: "", contactno: "", country: "", state: "", city: "", message: "" },
      validationSchema: validation,
      onSubmit: (data) => {
          setformvalues(data);
      }
  });

  return (
      <div>

          {/* form needs to be diplayed in the initial state */}
          {(formvalues === undefined) ?
              <div className=" form-div" >
                  <h3>Registration form:</h3>
                  <form onSubmit={handleSubmit} className="form">

                      {/* name filed */}
                      <label>Name</label>
                      <input
                          className="form-fields"
                          type="text"
                          name="name"
                          value={values.name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="Enter the Name"
                      />
                      {errors.name && touched.name ? (<div>{errors.name}</div>) : null}

                      {/* email field */}
                      <label>Email</label>
                      <input
                          className="form-fields"
                          type="text"
                          name="emailid"
                          value={values.emailid}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="Enter the Email id"
                      />
                      {errors.emailid && touched.emailid ? (<div>{errors.emailid}</div>) : null}

                      {/* contact number field */}
                      <label>Contact number</label>
                      <input
                          className="form-fields"
                          type="text"
                          name="contactno"
                          value={values.contactno}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="Enter the Contact number"
                      />
                      {errors.contactno && touched.contactno ? (<div>{errors.contactno}</div>) : null}

                      {/* country field */}
                      <label>Country</label>
                      <input
                          className="form-fields"
                          type="text"
                          name="country"
                          value={values.country}
                          onChange={handleChange}
                          placeholder="Enter the Country "
                      />
                      {errors.country && touched.country ? (<div>{errors.country}</div>) : null}

                      {/* state field */}
                      <label>State</label>
                      <input
                          className="form-fields"
                          type="text"
                          name="state"
                          value={values.state}
                          onChange={handleChange}
                          placeholder="Enter the State "
                      />
                      {errors.state && touched.state ? (<div>{errors.state}</div>) : null}

                      {/* city field */}
                      <label>City</label>
                      <input
                          className="form-fields"
                          type="text"
                          name="city"
                          value={values.city}
                          onChange={handleChange}
                          placeholder="Enter the City "
                      />
                      {errors.city && touched.city ? (<div>{errors.city}</div>) : null}

                      {/* message field */}
                      <label>Message</label>
                      <textarea
                          className="form-fields"
                          type="text"
                          name="message"
                          value={values.message}
                          onChange={handleChange}
                          placeholder="Enter the Message"
                      ></textarea>
                      {errors.message && touched.message ? (<div>{errors.message}</div>) : null}


                      <button type="submit" className="btn btn-primary">Submit</button>
                  </form>
              </div> :

              // display after form submission
              <div className="card card-body">
                  <h5>Details</h5>
                  <p>Name :{formvalues.name}</p>
                  <p>Email id :{formvalues.emailid}</p>
                  <p>Phone:{formvalues.contactno}</p>
                  <p>Country:{formvalues.country}</p>
                  <p>State:{formvalues.state}</p>
                  <p>City:{formvalues.city}</p>
                  <p>Message:{formvalues.message}</p>
              </div>

          }
      </div>


  )

}

export default App;
