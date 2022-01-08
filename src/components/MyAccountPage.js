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
      <nav aria-label="breadcrumb" class="breadcrumb-nav">
        <div class="container">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <a href="index.html">Home</a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              Dashboard
            </li>
          </ol>
        </div>
      </nav>
      <div class="container" />
      <div class="row" />
      <div class="col-lg-9 order-lg-last dashboard-content">
        <h2>Edit Account Information</h2>

        <form action="" onSubmit={handlesubmit} noValidate>
          <div class="row">
            <div class="col-sm-11">
              <div class="row">
                <div class="col-md-4">
                  <div class="form-group required-field">
                    <label for="acc-name">First Name</label>
                    <input
                      type="text"
                      class="form-control"
                      id="acc-name"
                      name="acc-name"
                      value={firstname}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div class="col-md-4">
                  <div class="form-group">
                    <label for="acc-mname">Middle Name</label>
                    <input
                      type="text"
                      class="form-control"
                      id="acc-mname"
                      name="acc-mname"
                      value={middlename}
                      onChange={(e) => setMiddleName(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div class="col-md-4">
                  <div class="form-group required-field">
                    <label for="acc-lastname">Last Name</label>
                    <input
                      type="text"
                      class="form-control"
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

          <div class="form-group required-field">
            <label for="acc-email">Email</label>
            <input
              type="email"
              class="form-control"
              id="acc-email"
              name="acc-email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div class="form-group required-field">
            <label for="acc-password">Password</label>
            <input
              type="password"
              class="form-control"
              id="acc-password"
              name="acc-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div class="mb-2"></div>

          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              id="change-pass-checkbox"
              value="1"
            />
            <label class="custom-control-label" for="change-pass-checkbox">
              Change Password
            </label>
          </div>
          <div id="account-chage-pass">
            <h3 class="mb-2">Change Password</h3>
            <div class="row">
              <div class="col-md-6">
                <div class="form-group required-field">
                  <label for="acc-pass2">Password</label>
                  <input
                    type="password"
                    class="form-control"
                    id="acc-pass2"
                    name="acc-pass2"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group required-field">
                  <label for="acc-pass3">Confirm Password</label>
                  <input
                    type="password"
                    class="form-control"
                    id="acc-pass3"
                    name="acc-pass3"
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="required text-right">* Required Field</div>
          <div class="form-footer">
            <a href="#">
              <i class="icon-angle-double-left"></i>Back
            </a>

            <div class="form-footer-right">
              <button type="submit" class="btn btn-primary">
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
