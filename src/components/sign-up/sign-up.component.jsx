import { useState, useContext } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import "./sign-up.styles.scss";
import { UserContext } from "../../contexts/user.context";

const defaultFormFields = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { name, email, password, confirmPassword } = formFields;

  const { setCurrentUser } = useContext(UserContext);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      setCurrentUser(user);
      await createUserDocumentFromAuth(user, { name });
      resetFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("This e-mail already signed-up, use another one ");
      } else {
        console.log("This is an error", error.message);
      }
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Don't You Have An Account?</h2>
      <span>Sign Up With E-Mail</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Name"
          type="text"
          required
          onChange={handleChange}
          name="name"
          value={name}
        />
        <FormInput
          label="E-Mail"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />
        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <FormInput
          label="Confim Password"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
