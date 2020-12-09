import React, { useState } from "react";
import "./Login.css";
import { useDispatch } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import { useCookies } from "react-cookie";
var axios = require("axios");
var jwt = require("jsonwebtoken");

const Login = () => {
  const [userId, setUserId] = useState();
  const [password, setPassword] = useState();
  const [userData, setUserData] = useState();
  const dispatch = useDispatch();
  const [cookies, setCookie] = useCookies(["user_token"]);

  // dummy user sign up database
  console.log(userData);

  // var userData = [{ userId: "usman", password: "usman123" }];

  //handle login function
  const handleLogin = event => {
    event.preventDefault();
    // ====== api start ===========
    // use((withCredentials: true)) in api;
    // var data = JSON.stringify({ username: userId, password: password });
    // var config = {
    //   method: "post",
    //   url: "http://localhost:8080/api/login",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   withCredentials: true,
    //   data: data,
    // };
    // axios(config)
    //   .then(function (response) {
    //     console.log(JSON.stringify(response.data));
    //     if (response.data.status) {
    //       const token = response.data.token;
    //       jwt.verify(token, "secretkey", function (err, decoded) {
    //         if (err) {
    //           console.log(err);
    //         } else {
    //           setUserData(decoded);
    //         }
    //       });
    //     } else {
    //       alert(response.data.message);
    //     }
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });

    dispatch(addUserAction(userId, password));

    // ======= api end ==========
    console.log(userId);
    console.log(password);
    // userData.map((data) => {
    //   if (data.userId == userId && data.password == password) {
    //     setCookie("user_token", userId, { path: "/" });
    //   } else {
    //     alert("Account is not Valid");
    //   }
    // });
    setUserId("");
    setPassword("");
  };

  return (
    <div className="login">
      <div className="login__form">
        <div>
          <Paper elevation={5}>
            <h1 className="login__heading">Login</h1>
            <div className="login__form_input">
              <form onSubmit={handleLogin}>
                {/* ======== user id ========== */}
                <div className="login__user_input">
                  <TextField
                    required
                    id="standard-required"
                    onChange={e => setUserId(e.target.value)}
                    label="User"
                    value={userId}
                  />
                </div>

                {/* ===== password ====== */}
                <div className="login__password_input">
                  <TextField
                    id="standard-password-input"
                    label="Password"
                    type="password"
                    required
                    autoComplete="current-password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                  />
                </div>

                {/* ===== login button ===== */}
                <div className="login__btn">
                  <Button type="submit" variant="contained" color="primary">
                    Login
                  </Button>
                </div>
              </form>
            </div>
          </Paper>
        </div>
      </div>
    </div>
  );
};

export default Login;
