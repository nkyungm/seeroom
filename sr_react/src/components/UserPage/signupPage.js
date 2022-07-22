// import React, { Component } from "react";
import axios from "axios";
import { useCallback, useState } from "react";
import { Link } from "react-router-dom";
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.withCredentials = true;

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [errors, setErrors] = useState(false);

  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword1 = (e) => {
    setPassword1(e.target.value);
  };

  const onChangePassword2 = (e) => {
    setPassword2(e.target.value);
  };

  const register = () => {
    // let response = await fetch("http://127.0.0.1:8000/accounts/join/", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json;charset=utf-8",
    //   },
    //   body: {
    //     username: username,
    //     email: email,
    //     password1: password1,
    //     password2: password2,
    //   },
    // });
    const headers = {
      "X-CSRFToken": "some token",
      Cookie: "csrftoken=some token",
    };
    axios
      .post(
        "http://127.0.0.1:8000/accounts/join/",
        //  {
        //   // method: "post",
        //   // url: "http://127.0.0.1:8000/accounts/join/",
        {
          username: username,
          email: email,
          password1: password1,
          password2: password2,
        },
        {
          headers: headers,
        }
      )
      .then(function (result) {
        alert(result.status);
        console.log(result.status);
        // alert("회원가입 완료");
        // console.log(result.data);
      })
      .catch((err) => {
        console.log(err);
        if (password1 !== password2) {
          alert("비밀번호와 비밀번호 확인이 일치하지 않습니다");
          return false;
        }
        alert("다시 입력해주세요.");
      })
      .then(function () {
        <Link to="/sign-in"></Link>;
      });

    // axios
    //   .post(
    //     "http://127.0.0.1:8000/accounts/join/",
    //     {
    //       username: username,
    //       email: email,
    //       password1: password1,
    //       password2: password2,
    //     },
    //     {
    //       headers: {
    //         "Content-Type": "multipart/form-data",
    //         "Access-Control-Allow-Headers":
    //           "Original,Content-Type,Authorization,X-Auth-Token",
    //         //"Access-Control-Allow-Methods":
    //         //  "GET,POST,PUT,PATCH,DELETE,HEAD,OPTIONS",
    //         //"Access-Control-Allow-Origin": "*",
    //       },
    //     }
    //   )
    //   .then((result) => {
    //     //여기로 안들어감..
    //     alert(result.status);
    //     console.log(result.status);
    //     console.log(result);
    //     alert("회원가입 완료");
    //     console.log("User profile", result.data.user);
    //     console.log("User token", result.data.jwt);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     // console.clear();
    //     alert("아이디 혹은 비밀번호가 일치하지 않습니다.");
    //   });
    // };

    // const onSubmit = (e) => {
    //   e.preventDefault();

    //   const user = {
    //     username: username,
    //     email: email,
    //     password1: password1,
    //     password2: password2,
    //   };

    //   // 유효성 검사
    //   if (password1 !== password2) {
    //     alert("비밀번호와 비밀번호 확인이 일치하지 않습니다");
    //     return false;
    //   }

    //   axios
    //     .post("http://127.0.0.1:8000/accounts/join/", user)
    //     .then((res) => {
    //       if (res.data.key) {
    //         localStorage.clear();
    //         localStorage.setItem("token", res.data.key);
    //         // 사용하려면 App.js에서 /로 라우팅해야 한다
    //         window.location.replace("/");
    //       } else {
    //         setUsername("");
    //         setEmail("");
    //         setPassword1("");
    //         setPassword2("");
    //         localStorage.clear();
    //         setErrors(true);
    //       }
    //     })
    //     .catch(() => {
    //       console.clear();
    //       alert("아이디 혹은 비밀번호가 일치하지 않습니다");
    //     });
  };

  return (
    <form>
      <h3>Sign Up</h3>
      <br />
      {/* {errors === true && <h2>Cannot signup with provided credentials</h2>} */}
      <div className="mb-3">
        <label>Name</label>
        <input
          type="string"
          className="form-control"
          placeholder="UserName"
          required
          //readOnly="false" //readonly는 input태그를 사용자가 입력 및 수정 못하게 비활성화
          label="Username"
          minLength={1}
          maxLength={150}
          value={username}
          onChange={onChangeUsername}
        />
      </div>

      <div className="mb-3">
        <label>Email address</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          required
          //readOnly="false"
          label="Email"
          value={email}
          onChange={onChangeEmail}
        />
      </div>

      <div className="mb-3">
        <label>Password1</label>
        <input
          type="string"
          className="form-control"
          placeholder="Enter password"
          required
          //readOnly="false"
          label="Password1"
          value={password1}
          onChange={onChangePassword1}
        />
      </div>

      <div className="mb-3">
        <label>Password2</label>
        <input
          type="string"
          className="form-control"
          placeholder="Enter password"
          required
          //readOnly="false"
          label="Password2"
          value={password2}
          onChange={onChangePassword2}
        />
      </div>

      <div className="d-grid">
        <button
          type="submit"
          className="btn btn-primary"
          onClick={() => {
            register();
          }}
        >
          Sign Up
        </button>
      </div>
      <p className="forgot-password text-right">
        Already registered <a href="/sign-in">sign in?</a>
      </p>
    </form>
  );
};

export default SignUp;
