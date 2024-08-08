import React, { Component } from "react";
import "./teamDetails.css";
import { Fade } from "react-reveal";
import { certifications } from "../../portfolio";
import { teamMembers } from "../../portfolio";
import CertificationCard from "../../components/certificationCard/CertificationCard";
import TeamDetailsCard from "../../components/teamDetailsCard/teamDetailsCard";

class TeamDetails extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="main" id="certs">
        <div className="certs-header-div">
          <Fade bottom duration={2000} distance="20px">
            <h1 className="certs-header" style={{ color: theme.text }}>
              TeamDetails
            </h1>
          </Fade>
        </div>
        <div className="certs-body-div">
          {/* {certifications.certifications.map((cert) => {
            return <CertificationCard certificate={cert} theme={theme} />;
          })} */}

          {teamMembers.map((item) => {
            // return <h1>{item.name}</h1>
            return <TeamDetailsCard details={item} theme={theme} />;
          })}
        </div>
      </div>
    );
  }
}

export default TeamDetails;
