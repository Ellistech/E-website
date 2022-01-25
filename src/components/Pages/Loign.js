export default function Login() {
    return (
        <main class="main">
        <nav aria-label="breadcrumb" class="breadcrumb-nav">
            <div class="container">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                    <li class="breadcrumb-item active" aria-current="page">Login</li>
                </ol>
            </div>
        </nav>

        <div class="container mt-4">
            <div class="heading mb-4">
                <h2 class="title">login</h2>
                <p>Please enter your email address & Password For login.</p>
            </div>

            <form action="#">
                <div class="form-group required-field">
                    <label for="reset-email">Email</label>
                    <input type="email" class="form-control" id="reset-email" name="reset-email" required/>
                </div>

                <div class="form-group required-field">
                    <label for="reset-email">Password</label>
                    <input type="Password" class="form-control" id="password" name="password" required/>
                </div>

                <div class="form-footer">
                    <button type="submit" class="btn btn-primary">Login</button>
                </div>
            </form>
        </div>

        <div class="mb-10"></div>
    </main>

    )
}