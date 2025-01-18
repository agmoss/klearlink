import React, { useEffect, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import emailjs from '@emailjs/browser';

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  optIn: boolean;
};

const initialValues: FormValues = {
  firstName: '',
  lastName: '',
  email: '',
  optIn: false,
};

// Define validation schema using Yup
const validationSchema = Yup.object({
  firstName: Yup.string().required('First Name is required'),
  lastName: Yup.string().required('Last Name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  optIn: Yup.boolean().oneOf(
    [true],
    'You must agree to receive communications',
  ),
});

type ContactForm = {
  side: 'contact' | 'documentation';
};

const ContactForm: React.FC<ContactForm> = ({ side }) => {
  const PUBLIC_KEY = 'user_EhcGuuTTlPVyvTXyrF9L4';
  const SERVICE_ID = 'klearlink';
  const TEMPLATE_ID = 'template_uwuyvjq';

  useEffect(() => emailjs.init(PUBLIC_KEY), []);

  const [status, setStatus] = useState<'success' | 'error' | null>(null);

  const handleSubmit = async (values: FormValues) => {
    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
        from_first_name: values.firstName,
        from_last_name: values.lastName,
        from_work_email: values.email,
        side: side,
      });
      setStatus('success');
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <div id="documentation-section">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        validateOnBlur={false}
        validateOnChange={false}
      >
        {({ isSubmitting, errors }) => (
          <Form>
            <div className="row">
              <div className="col col--6">
                <label htmlFor="firstName" className="form-label">
                  First Name
                </label>
                <Field
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="form-control input-material"
                  label="First Name"
                />
              </div>
              <div className="col col--6">
                <label htmlFor="lastName" className="form-label">
                  Last Name
                </label>
                <Field
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="form-control input-material"
                />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label htmlFor="email" className="form-label">
                  Work Email
                </label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  className="form-control input-material"
                />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="form-check">
                  <Field
                    type="checkbox"
                    id="optIn"
                    name="optIn"
                    className="form-check-input"
                  />
                  <label htmlFor="optIn" className="form-check-label">
                    I agree to receive communications from Klearlink Data
                    Technologies Inc.
                  </label>
                </div>
              </div>
            </div>
            {Object.keys(errors).length > 0 && (
              <div className="row" style={{ marginTop: '1rem' }}>
                <div className="col col--6">
                  <div className="alert alert--danger" role="alert">
                    <ul style={{ margin: '0 0 0 0' }}>
                      {Object.values(errors).map((error, index) => (
                        <li key={index}>{error}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
            {status === 'success' && (
              <div className="row" style={{ marginTop: '1rem' }}>
                <div className="col col--6 text-center">
                  <div className="alert alert--success" role="alert">
                    Submission successful! We will reach out shorty.
                  </div>
                </div>
              </div>
            )}
            {status === 'error' && (
              <div className="row" style={{ marginTop: '1rem' }}>
                <div className="col col--6 text-center">
                  <div className="alert alert--danger" role="alert">
                    Submission failed. Please try again.
                  </div>
                </div>
              </div>
            )}
            <div id="docsform" style={{ marginTop: '1rem' }} className="row">
              <div className="col text-center">
                <button
                  type="submit"
                  className="button button--primary button--lg main"
                  disabled={isSubmitting}
                >
                  Submit
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
