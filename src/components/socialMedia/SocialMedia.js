import React from "react";
import "./SocialMedia.css";
import { socialMediaLinks } from "../../portfolio";
import styled from "styled-components";

const IconWrapper = styled.span`
  i {
    background-color: ${(props) => props.backgroundColor};
  }
  &:hover i {
    background-color: ${({ theme }) => theme.text};
    transition: 0.3s ease-in;
  }
`;

export default function socialMedia(props) {
  return (
    <div className="social-media-div">
      {socialMediaLinks.map((media, i) => {
        return (
          <div style={{ display: "inline-block" }}>
            <a
              key={i}
              href={media.link}
              className={`icon-button p-3 m-2`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconWrapper {...media} {...props}>
                <i className={`fab ${media.fontAwesomeIcon}`}></i>
              </IconWrapper>
            </a>
            <h6 style={{ display: "block" }}>{media.name}</h6>
          </div>
        );
      })}
    </div>
  );
}
