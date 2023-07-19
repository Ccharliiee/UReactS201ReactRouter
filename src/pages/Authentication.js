import { json, redirect } from "react-router-dom";

import AuthForm from "../component/AuthForm";

const AuthenticationPage = () => {
  return <AuthForm />;
};

export default AuthenticationPage;

export const authAction = async ({ request }) => {
  const searchParams = new URL(request.url).searchParams;
  const mode = searchParams.get("mode") === "login" ? "login" : "signup";

  const data = await request.formData();
  const authData = {
    email: data.get("email"),
    password: data.get("password"),
  };

  const response = await fetch(process.env.REACT_APP_AuthAPI + mode, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(authData),
  });

  if (response.status === 422 || response.status === 401) {
    return response;
  }

  if (!response.ok) {
    throw json({ message: "Could not authenticate user." }, { status: 500 });
  }

  const responseData = await response.json();
  const eventsAccessToken = responseData.token;

  localStorage.setItem("eventsAccess", eventsAccessToken);

  return redirect("/");
};
