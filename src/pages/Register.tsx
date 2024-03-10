import { FC, useState, ChangeEvent, FormEvent } from "react";
import { Link } from "react-router-dom";
import SocialMedia from "../components/SocialMedia";
import FormInput from "../components/FormInput";
import MyPopupModal from "../components/MyPopupModal";
import PrivacyPolicyPopup from "../components/PrivacyPolicyPopup";

interface RegisterProps {}

interface Input {
  id: number;
  name: string;
  type: string;
  errorMessage: string;
  label: string;
  pattern?: string;
  required: boolean;
}

const Register: FC<RegisterProps> = () => {
  const [values, setValues] = useState<{
    email: string;
    password: string;
    confirmPassword: string;
    username: string;
    [key: string]: string;
    title: string;
  }>({
    email: "",
    password: "",
    confirmPassword: "",
    username: "",
    title: "",
  });

  const inputs: Input[] = [
    {
      id: 1,
      name: "email",
      type: "email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 2,
      name: "password",
      type: "password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 3,
      name: "confirmPassword",
      type: "password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
    {
      id: 4,
      name: "username",
      type: "text",
      errorMessage: "Please Enter Name",
      label: "Username",
      required: true,
    },
  ];

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  //popup
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-6">
              <div className="login_info regform">
                <form onSubmit={handleSubmit}>
                  <h2 className="log-title">Register to MAIA</h2>
                  {inputs.map((input: Input) => (
                    <FormInput
                      key={input.id}
                      {...input}
                      value={values[input.name]}
                      onChange={onChange}
                    />
                  ))}
                  <div className="col-12 mb-3">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="gridCheck"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="gridCheck"
                        onClick={handleShow}
                      >
                        I agree with the{" "}
                        <a href="#">Terms and Privacy Policy</a>
                      </label>
                    </div>
                  </div>
                  <div className="col-12 mb-3">
                    <button
                      type="submit"
                      className="btn btn-primary register-btn"
                    >
                      Register
                    </button>
                  </div>
                  <div className="col-12 mb-3">
                    <p className="text-center">
                      Already Registered? <Link to="/">Log In</Link>
                    </p>
                  </div>
                  <SocialMedia />
                </form>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6">
              <div className="login_quote">
                <figure>
                  <blockquote className="blockquote">
                    <p>
                      "MAIA helped me clone a bumblebee, and split an atom all
                      at the same time"
                    </p>
                  </blockquote>
                  <figcaption className="blockquote-footer">
                    <cite title="Source Title">J.Deere</cite>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
      <MyPopupModal
        show={show}
        title="Privacy Policy"
        handleClose={handleClose}
      >
        <PrivacyPolicyPopup />
      </MyPopupModal>
    </>
  );
};

export default Register;
