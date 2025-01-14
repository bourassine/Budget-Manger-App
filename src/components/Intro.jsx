import { Form, Link } from "react-router-dom";
import { UserPlusIcon } from "@heroicons/react/24/solid";
import illustration from "../assets/illustration.jpg";

const Intro = () => {
  return (
    <div className="intro">
      <div>
        <h1>
          Take Control of <span className="accent">Your Money</span>
        </h1>
        <p>
          Personal budgeting is the secret to financial freedom. Start your journey today.
        </p>
        {/* Formulaire de connexion avec email et mot de passe */}
        <Form method="post">
          <input
            type="email"
            name="email"
            required
            placeholder="Enter your email"
            aria-label="Your Email"
            autoComplete="email"
          />
          <input
            type="password"
            name="password"
            required
            placeholder="Enter your password"
            aria-label="Your Password"
            autoComplete="new-password"
          />
          <input type="hidden" name="_action" value="loginUser" />
          <button type="submit" className="btn btn--dark">
            <span>Login</span>
            <UserPlusIcon width={20} />
          </button>
        </Form>

        {/* Lien vers la page d'inscription */}
        <Link to="/register" className="btn btn--light">
          <span>Create New Account</span>
        </Link>
      </div>
      <img src={illustration} alt="Person with money" width={600} />
    </div>
  );
};

export default Intro;
