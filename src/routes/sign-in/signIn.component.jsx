import { async } from "@firebase/util";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
const SignIn = () => {
  const googleLogin = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };
  return (
    <div>
      <h3>sign in pageee</h3>
      <button onClick={googleLogin}>Sign In With Google</button>
    </div>
  );
};

export default SignIn;
