import React, { Component } from "react";
import "./teamDetailsCard.css";
import { Fade } from "react-reveal";

class ServiceCard extends Component {
  render() {
    const details = this.props.details;
    const theme = this.props.theme;
    return (
      <Fade bottom duration={2000} distance="20px">
        <div className="cert-card">
          <div className="content">
            <a
              href={details.certificate_link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="content-overlay"></div>
              <div
                className="cert-header"
                // style={{ backgroundColor: details.color_code }}
              >
                {/* <img
                  className="logo_img"
                  src={require(`../../assets/images/${details.logo_path}`)}
                  alt={details.alt_name}
                /> */}
              </div>
              <div className="content-details fadeIn-top">
                <h3 className="content-title" style={{ color: theme.body }}>
                  {/* {details.name}
                  <ul>Work Experience : {details.exp}</ul> */}
                </h3>
              </div>
            </a>
          </div>
          <div className="cert-body">
            <h2 className="cert-body-title" style={{ color: theme.text }}>
              {/* {details.name} */}
            </h2>
            <h2 className="cert-body-title" style={{ color: theme.text }}>
              {details.title}
            </h2>
            <h3
              className="cert-body-subtitle"
              style={{ color: theme.secondaryText }}
            >
              {/* {details.subtitle} */}
            </h3>
          </div>
        </div>
      </Fade>
    );
  }
}

export default ServiceCard;
