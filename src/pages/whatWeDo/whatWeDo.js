import React, { Component } from "react";

import Footer from "../../components/footer/Footer";

import TopButton from "../../components/topButton/TopButton";

import {
  greeting,
  projectsHeader,
  publicationsHeader,
  publications,
  projectDetails,
  services,
} from "../../portfolio.js";

import "./whatWeDo.css";
import { Fade } from "react-reveal";

class WhatWeDo extends Component {
  render() {
    const theme = this.props.theme;
    debugger;
    return (
      <div className="service-main">
        {/* <Header theme={theme} /> */}
        <div className="basic-service">
          <Fade bottom duration={2000} distance="40px">
            <div className="service-heading-div">
              <h1>What We’re Offering to Our Clients</h1>
            </div>
          </Fade>
        </div>
        <div className="repo-cards-div-main"></div>
        {/* <Button
      text={"More Projects"}
      className="project-button"
      href={greeting.githubProfile}
      newTab={true}
      theme={theme}
    /> */}
        {/* {services.map((item) => {
  return  */}
        {/* {
    id:5,
    title:"businessSolutions",
    name:"Business Solutions",
    description:""
  }, */}
        <div className="service-card-div">
          {services.map((item) => {
            return (
              <div className="card" key={item.id}>
                <img src="" alt={item.seoName} className="card-main-img" />
                <div className="card-body">
                  <h2 className="card-title">{item.name}</h2>
                  <p className="card-text">{item.description}</p>
                  {/* <a href="#" className="card-btn">Go somewhere</a>  {require(`../../assets/images/${item.imgPath}`)} */}
                </div>
              </div>
            );
          })}
        </div>
        {/* })} */}

        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default WhatWeDo;
