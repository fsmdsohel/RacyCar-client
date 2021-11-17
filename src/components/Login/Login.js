import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Container, Row, Toast } from "react-bootstrap";
import { toast } from "react-hot-toast";
import { Link, useHistory, useLocation } from "react-router-dom";
import githubLogo from "../../assests/images/signupLogo/github.png";
import googleLogo from "../../assests/images/signupLogo/Google__G__Logo.svg.png";
import unloack from "../../assests/images/undraw_unlock_-24-mb.svg";
import useAuth from "../../hook/useAuth";
import "./Login.css";

const SignUp = ({ signUp }) => {
  const { firebaseContext } = useAuth();
  const [showA, setShowA] = useState(true);
  const {
    signInWithGoogle,
    signInWithGithub,
    userRegistration,
    handleInput,
    signUpWithEmailAndPass,
    signInWithEmailAndPass,
    setUserRegistration,
  } = firebaseContext;

  const location = useLocation();
  const history = useHistory();

  const redirect_uri = location.state?.from || "/";
  const handleLoginCallBack = () => {
    history.push(redirect_uri);
    toast.success("Successfully Login!");
  };
  const handleSignUpCallBack = () => {
    history.push(redirect_uri);
    toast.success("Successfully SignUp!");
  };

  const handleUser = ({ email, name }) => {
    const url = `/users`;
    axios
      .put(url, {
        email: email,
        name: name,
      })
      .then((res) => {});
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle(handleLoginCallBack, handleUser);
  };
  const handleGithubSignIn = () => {
    signInWithGithub(handleLoginCallBack, handleUser);
  };

  const handleEmailAndPassSignUp = () => {
    signUpWithEmailAndPass(handleSignUpCallBack, handleUser);
  };

  const handleEmailAndPassSignIn = () => {
    signInWithEmailAndPass(handleLoginCallBack, handleUser);
  };

  const toggleShowA = () => setShowA(!showA);

  useEffect(() => {
    if (!signUp) {
      setUserRegistration({
        username: "",
        fullname: "",
        email: "admin@admin.com",
        password: "123456",
        imageUrl: "",
      });
      setShowA(true);
    } else {
      setUserRegistration({
        username: "",
        fullname: "",
        email: "",
        password: "",
        imageUrl: "",
      });
      setShowA(false);
    }
  }, [signUp]);
  return (
    <>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <Toast show={showA} onClose={toggleShowA}>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Note</strong>
          </Toast.Header>
          <Toast.Body>
            <small>
              If you login this fillup email and password you can access admin
              dashboard and if you sign up or sign in other account than you can
              not access admin panel
            </small>
          </Toast.Body>
        </Toast>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Container>
          <div className="loader_wrapper d-none">
            <div className="loader"></div>
          </div>
          <div className="form_wrapper">
            <Row className="mt-5 flex_column_reverse">
              <Col
                style={{ flexDirection: "column", alignItems: "" }}
                className="form_item"
                lg="6"
                md="12"
              >
                <Link
                  to="/"
                  style={{ marginBottom: "50px", fontSize: "16px" }}
                  className="btn_round"
                >
                  Back to Home
                </Link>
                <img
                  className="img-fluid"
                  style={{
                    height: "auto",
                  }}
                  src={unloack}
                  alt=""
                />
              </Col>
              <Col
                style={{ flexDirection: "column", alignItems: "start" }}
                className="form_item"
                lg="6"
                md="12"
              >
                <div className="form">
                  <div className="form_header">
                    <h1>Welcome Back!</h1>
                    <p>login to continue</p>
                  </div>
                  <form onSubmit={(e) => e.preventDefault()}>
                    {signUp ? (
                      <>
                        <input
                          type="text"
                          name="fullname"
                          className="input_field"
                          placeholder="Full Name"
                          value={userRegistration.fullname}
                          onChange={handleInput}
                          required
                        />
                        <input
                          type="text"
                          name="email"
                          className="input_field"
                          placeholder="Email"
                          value={userRegistration.email}
                          onChange={handleInput}
                          required
                        />
                        <input
                          type="text"
                          name="imageUrl"
                          className="input_field"
                          placeholder="Photo url"
                          value={userRegistration.imageUrl}
                          onChange={handleInput}
                          required
                        />
                        <input
                          type="password"
                          name="password"
                          className="input_field"
                          placeholder="Password"
                          value={userRegistration.password}
                          onChange={handleInput}
                          required
                        />
                        <div className="forgot">
                          <Link to="/login">Login Here</Link>
                          <Link to="/forgot-password">Forgot Password?</Link>
                        </div>
                        <input
                          className="btn_round"
                          style={{
                            fontSize: "16px",
                            minHeight: "48px",
                            maxWidth: "100%",
                            marginBottom: "16px",
                          }}
                          type="submit"
                          value="Sign Up"
                          onClick={handleEmailAndPassSignUp}
                        />
                      </>
                    ) : (
                      <>
                        <input
                          type="text"
                          name="email"
                          className="input_field"
                          placeholder="Email"
                          value={userRegistration.email}
                          onChange={handleInput}
                          required
                        />
                        <input
                          type="password"
                          name="password"
                          className="input_field"
                          placeholder="Password"
                          value={userRegistration.password}
                          onChange={handleInput}
                          required
                        />
                        <div className="forgot">
                          <Link to="/sign-up">Register Here</Link>
                          <Link to="/forgot-password">Forgot Password?</Link>
                        </div>
                        <input
                          className="btn_round"
                          style={{
                            fontSize: "16px",
                            minHeight: "48px",
                            maxWidth: "100%",
                            marginBottom: "16px",
                          }}
                          type="submit"
                          onClick={handleEmailAndPassSignIn}
                          value="Log In"
                        />
                      </>
                    )}
                    <div className="form_item sign">
                      <p className="text-white">Or Connect With Other</p>
                      <div onClick={handleGoogleSignIn} className="input_field">
                        <img src={googleLogo} alt="" />
                        CONTINUE WITH GOOGLE
                      </div>
                      <div
                        style={{
                          marginBottom: "0px",
                        }}
                        onClick={handleGithubSignIn}
                        className="input_field"
                      >
                        <img src={githubLogo} alt="" />
                        CONTINUE WITH GITHUB
                      </div>
                    </div>
                  </form>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default SignUp;
