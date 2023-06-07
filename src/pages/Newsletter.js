import NewsletterSignup from "../component/NewsletterSignup";

const NewsletterPage = () => {
  return (
    <>
      <h1>Join our exciting Newsletters!</h1>
      <NewsletterSignup />
    </>
  );
};

export default NewsletterPage;

export const newsletterSignupAction = async ({ request }) => {
  const data = await request.formData();
  const email = data.get("email");

  console.log(email);
  return { message: "Signup successful!" };
};
