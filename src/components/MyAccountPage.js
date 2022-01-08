import { useState } from "react";

export default function MyAccountPage() {
  const [firstname, setFirstName] = useState("");
  const [middlename, setMiddleName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handlesubmit = function (event) {
    event.preventDefault();
    const contactList = {
      firstname,
      middlename,
      lastname,
      email,
      password,
    };
    console.log(contactList);
  };
  return (
    <div>
      {" "}
      <nav aria-label="breadcrumb" className="breadcrumb-nav">
        <div className="container">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="index.html">Home</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Dashboard
            </li>
          </ol>
        </div>
      </nav>
      <div className="container" />
      <div className="row" />
      <div className="col-lg-9 order-lg-last dashboard-content">
        <h2>Edit Account Information</h2>

        <form action="" onSubmit={handlesubmit} noValidate>
          <div className="row">
            <div className="col-sm-11">
              <div className="row">
                <div className="col-md-4">
                  <div className="form-group required-field">
                    <label for="acc-name">First Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="acc-name"
                      name="acc-name"
                      value={firstname}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="form-group">
                    <label for="acc-mname">Middle Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="acc-mname"
                      name="acc-mname"
                      value={middlename}
                      onChange={(e) => setMiddleName(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="form-group required-field">
                    <label for="acc-lastname">Last Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="acc-lastname"
                      name="acc-lastname"
                      value={lastname}
                      onChange={(e) => setLastName(e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="form-group required-field">
            <label for="acc-email">Email</label>
            <input
              type="email"
              className="form-control"
              id="acc-email"
              name="acc-email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group required-field">
            <label for="acc-password">Password</label>
            <input
              type="password"
              className="form-control"
              id="acc-password"
              name="acc-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-2"></div>

          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="change-pass-checkbox"
              value="1"
            />
            <label className="custom-control-label" for="change-pass-checkbox">
              Change Password
            </label>
          </div>
          <div id="account-chage-pass">
            <h3 className="mb-2">Change Password</h3>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group required-field">
                  <label for="acc-pass2">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="acc-pass2"
                    name="acc-pass2"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group required-field">
                  <label for="acc-pass3">Confirm Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="acc-pass3"
                    name="acc-pass3"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="required text-right">* Required Field</div>
          <div className="form-footer">
            <a href="#">
              <i className="icon-angle-double-left"></i>Back
            </a>

            <div className="form-footer-right">
              <button type="submit" className="btn btn-primary">
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
