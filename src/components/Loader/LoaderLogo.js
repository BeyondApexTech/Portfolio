import React from "react";
import "./LoaderLogo.css";

class LogoLoader extends React.Component {
  render() {
    return <img src={require(`../../assets/images/Logo.png`)} alt="" />;
  }
}

export default LogoLoader;
