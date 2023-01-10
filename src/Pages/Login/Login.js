import React, { useState } from "react";
import Person from "@material-ui/icons/Person";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loginAuth, setLoginAuth] = useState(true);
  const [submitValue, setSubmitValue] = useState("Login Now");
  let history = useHistory();

  function validateFormFields() {
    if (loginAuth !== true) {
      return "btn btn-danger form-control";
    }
    if (username.length >= 6 && password.length >= 6) {
      return "btn btn-success form-control";
    } else {
      return "d-none";
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (username === "MATTHEW" && password === "123321") {
      console.log(username);
      history.push("/upload");
    } else {
      setSubmitValue('Failed Try Again')
      setLoginAuth(false);
    }
  }
  return (
    <div className="row" style={{ placeContent: "center" }}>
      <div className="col-sm-12 col-md-12 col-lg-6">
        <div className="container bg-dark p-3">
          <div className="d-flex justify-content-between">
            <Person className="text-info" />
            <div className="text-center h6 text-uppercase">login now</div>
          </div>
          <hr />

          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="username" className="text-capitalize">
                Username
              </label>
              <input
                type="text"
                placeholder="Username"
                name="username"
                id="username"
                className="form-control"
                required
                autoComplete="off"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <hr />
            <div>
              <label htmlFor="password" className="text-capitalize">
                password
              </label>
              <input
                type="password"
                placeholder="Password"
                name="password"
                id="password"
                className="form-control"
                required
                autoComplete="off"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <hr />
            <div>
              <input
                type="submit"
                name="submit"
                id="submit"
                className={validateFormFields()}
                value={submitValue}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
