import react from "react";
import FormSideBar from "./FormSideBar";
export default function Dashboard() {
  return (
    <react.Fragment>
      <main class="main">
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

        <div class="container mt-4">
          <div class="row">
            <div class="col-lg-9 order-lg-last dashboard-content">
              <h2>My Dashboard</h2>

              <div class="alert alert-success alert-intro" role="alert">
                Thank you for registering with Porto - Premium Template.
              </div>

              <div class="alert alert-success" role="alert">
                Hello, <strong>Porto customer!</strong> From your My Account
                Dashboard you have the ability to view a snapshot of your recent
                account activity and update your account information. Select a
                link below to view or edit information.
              </div>

              <div class="mb-4"></div>

              <h3>Account Information</h3>

              <div class="row">
                <div class="col-md-6">
                  <div class="card">
                    <div class="card-header">
                      Contact Information
                      <a href="#" class="card-edit">
                        Edit
                      </a>
                    </div>

                    <div class="card-body">
                      <p>
                        John Doe
                        <br />
                        porto_shop@gmail.com
                        <br />
                        <a href="#">Change Password</a>
                      </p>
                    </div>
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="card">
                    <div class="card-header">
                      newsletters
                      <a href="#" class="card-edit">
                        Edit
                      </a>
                    </div>

                    <div class="card-body">
                      <p>You are currently not subscribed to any newsletter.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="card">
                <div class="card-header">
                  Address Book
                  <a href="#" class="card-edit">
                    Edit
                  </a>
                </div>

                <div class="card-body">
                  <div class="row">
                    <div class="col-md-6">
                      <h4 class="">Default Billing Address</h4>
                      <address>
                        You have not set a default billing address.
                        <br />
                        <a href="#">Edit Address</a>
                      </address>
                    </div>
                    <div class="col-md-6">
                      <h4 class="">Default Shipping Address</h4>
                      <address>
                        You have not set a default shipping address.
                        <br />
                        <a href="#">Edit Address</a>
                      </address>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <FormSideBar />
          </div>
        </div>
      </main>
    </react.Fragment>
  );
}
