import {
  Form,
  Link,
  useSearchParams,
  useActionData,
  useNavigation,
} from "react-router-dom";

import classes from "./AuthForm.module.css";

const AuthForm = () => {
  const [searchParams] = useSearchParams();
  const responseData = useActionData();
  const navigationData = useNavigation();

  const isLogin = searchParams.get("mode") === "login";
  const isSubmitting = navigationData.state === "submitting";

  return (
    <>
      <Form method="post" className={classes.form}>
        <h1>{isLogin ? "Log in" : "Create account"}</h1>
        {responseData?.errors && (
          <ul>
            {Object.values(responseData.errors).map((err) => (
              <li key={err}>{err}</li>
            ))}
          </ul>
        )}
        {responseData?.message && <p>{responseData.message}</p>}
        <p>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" required />
        </p>
        <p>
          <label htmlFor="image">Password</label>
          <input id="password" type="password" name="password" required />
        </p>
        <div className={classes.actions}>
          <Link to={`?mode=${isLogin ? "signup" : "login"}`}>
            {isLogin ? "Create account" : "Login"}
          </Link>
          <button disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </div>
      </Form>
    </>
  );
};

export default AuthForm;
