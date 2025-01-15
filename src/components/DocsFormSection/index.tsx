import React, { useState } from 'react';

const DocsForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    optIn: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div id="documentation-section">
      <div className="row">
        <div className="col col--8 col--offset-2">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col col--6">
                <label htmlFor="firstName" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="form-control input-material"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col col--6">
                <label htmlFor="lastName" className="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="form-control input-material"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="row">
              <div className="col">
                <label htmlFor="email" className="form-label">
                  Work Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control input-material"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="row">
              <div className="col">
                <div className="form-check">
                  <input
                    type="checkbox"
                    id="optIn"
                    name="optIn"
                    className="form-check-input"
                    checked={formData.optIn}
                    onChange={handleChange}
                  />
                  <label htmlFor="optIn" className="form-check-label">
                    I agree to receive communications from Clearlinc Data
                    Technologies Inc.
                  </label>
                </div>
              </div>
            </div>
            <div id="docsform" style={{ marginTop: '1rem' }} className="row">
              <div className="col text-center">
                <button
                  type="submit"
                  className="button button--primary button--lg main"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DocsForm;
