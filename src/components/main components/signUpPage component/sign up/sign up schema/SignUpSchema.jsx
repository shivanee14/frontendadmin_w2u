import * as Yup from "yup";

function signUpSchema() {
  return Yup.object({
    fname: Yup.string().min(2).max(25).required("Please enter your first name"),
    lname: Yup.string().min(2).max(25).required("Please enter your last name"),
    email: Yup.string().email().required("Please enter your email"),
    password: Yup.string()
      .required("Please enter your password")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
    confirm_password: Yup.string()
      .required("Enter your password again")
      .oneOf([Yup.ref("password"), null], "Password must match"),
  });
}

export default signUpSchema;
