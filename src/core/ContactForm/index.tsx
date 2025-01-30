import React, { useEffect, useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import emailjs from '@emailjs/browser';
import LabelField, { CheckBoxField } from '../Input';
import { SubmitButton } from '../Button';

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
                <LabelField
                  labelProps={{
                    htmlFor: 'firstName',
                    children: 'First Name',
                  }}
                  fieldProps={{
                    type: 'text',
                    id: 'firstName',
                    name: 'firstName',
                  }}
                />
              </div>
              <div className="col col--6">
                <LabelField
                  labelProps={{
                    htmlFor: 'lastName',
                    children: 'Last Name',
                  }}
                  fieldProps={{
                    type: 'text',
                    id: 'lastName',
                    name: 'lastName',
                  }}
                />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <LabelField
                  labelProps={{
                    htmlFor: 'email',
                    children: 'Work Email',
                  }}
                  fieldProps={{
                    type: 'text',
                    id: 'email',
                    name: 'email',
                  }}
                />
              </div>
            </div>

            <div className="row">
              <div className="col">
                <CheckBoxField
                  labelProps={{
                    htmlFor: 'optIn',
                    children:
                      'I agree to receive communications from KlearLink Data Technologies Inc.',
                  }}
                  fieldProps={{
                    type: 'checkbox',
                    id: 'optIn',
                    name: 'optIn',
                  }}
                />
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
                <SubmitButton type="primary" disabled={isSubmitting}>
                  Submit
                </SubmitButton>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
