import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginThunk } from "../../redux/auth/operations";

function LoginForm() {
  const dispatch = useDispatch();
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Email required"),
    password: Yup.string()
      .min(6, "Min 6 symbols")
      .required("Password required"),
  });

  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = (values) => {
    dispatch(loginThunk(values));
  };

  return (
    <div>
      <div>
        <div>
          <h1>Login</h1>
        </div>
        <div>
          <div>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              <Form>
                <fieldset>
                  <label>Email</label>
                  <Field
                    type="email"
                    name="email"
                    className="input"
                    placeholder="Email"
                  />
                  <ErrorMessage
                    name="email"
                    component="span"
                    className="email"
                  />
                  <label>Password</label>
                  <Field
                    name="password"
                    type="password"
                    className="input"
                    placeholder="Password"
                  />
                  <ErrorMessage
                    className="password"
                    component="span"
                    name="password"
                  />
                  <button type="submit">Login</button>

                  <Link to="/register">
                    You don't have an account? Sign up!
                  </Link>
                  <Link to="/">Back to Homepage</Link>
                </fieldset>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
