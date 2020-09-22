import React from "react";
import "./App.scss";
import { LoginForm } from "./components/LoginForm";

function App() {
  return (
    <div className="app-container">
      <div className="formulario">
        <h1>Social Network</h1>
        <img
          className="login-image"
          src="https://render.fineartamerica.com/images/rendered/square-dynamic/small/images/artworkimages/mediumlarge/1/gandalf-tom-carlton.jpg"
          //src="https://avatarfiles.alphacoders.com/209/thumb-209735.jpg"
        />
        <LoginForm />
      </div>
    </div>
  );
}

export default App;
