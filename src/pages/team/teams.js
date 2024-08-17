import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";

// import EducationImg from "./EducationImg";
import { certifications } from "../../portfolio";
import "./teams.css";
import { Fade } from "react-reveal";
import TeamDetails from "../../containers/teamDetails/teamDetails";

class Team extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="education-main">
        {/* <Header theme={this.props.theme} /> */}
        <div className="basic-education">
          <Fade bottom duration={2000} distance="40px">
            <div className="">
              <div className="heading-text-div">
                <h1 className="heading-text" style={{ color: theme.text }}>
                  Our Team
                </h1>
                <h3 className="heading-sub-text" style={{ color: theme.text }}>
                  We are full stack developers
                </h3>
                {/* <CompetitiveSites logos={competitiveSites.competitiveSites} /> */}
              </div>
            </div>
          </Fade>
          {/* <Educations theme={this.props.theme} /> */}
          {certifications.certifications.length > 0 ? (
            // <Certifications theme={this.props.theme} />
            <TeamDetails theme={this.props.theme} />
          ) : null}
        </div>
        <Footer theme={this.props.theme} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Team;
