import axios from "axios";
import jwt from "jsonwebtoken";

// login user
export function addUserAction(userId, password) {
  return dispatch => {
    var data = JSON.stringify({ username: userId, password: password });
    var config = {
      method: "post",
      url: "http://localhost:8080/api/login",
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
      data: data,
    };
    axios(config)
      .then(function(response) {
        // console.log(JSON.stringify(response.data));
        if (response.data.status) {
          const token = response.data.token;
          jwt.verify(token, "secretkey", function(err, decoded) {
            if (err) {
              console.log(err);
            } else {
              const decoder = decoded;
            }
          });
        } else {
          alert(response.data.message);
        }
      })
      .catch(function(error) {
        console.log(error);
      });
    return dispatch({
      type: "ADD_USER",
      payload: {
        isLogin: true,
        userName: decoder.RETURN,
        userRole: decoder.RoleId,
        userId: decoder.userId,
      },
    });
  };
}
