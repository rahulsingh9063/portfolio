import React from "react";
import { Button } from "reactstrap";
import { socialLinks } from "../portfolio";

const SocialLinks = () => {
  return (
    <div className="btn-wrapper text-lg">
      {socialLinks.email && (
        <Button
          className="btn-icon-only rounded-circle ml-1"
          color="white"
          aria-label="Email"
          href={socialLinks.email}
          onClick={() => {
            // fallback to ensure mail client opens
            try {
              window.location.href = socialLinks.email;
            } catch (e) {
              /* no-op on SSR or if blocked */
            }
          }}
        >
          <span className="btn-inner--icon">
            <i className="fa fa-envelope" />
          </span>
        </Button>
      )}
      {socialLinks.linkedin && (
        <Button
          className="btn-icon-only rounded-circle ml-1"
          color="twitter"
          rel="noopener"
          aria-label="Linkedin"
          href={socialLinks.linkedin}
          target="_blank"
        >
          <span className="btn-inner--icon">
            <i className="fa fa-linkedin" />
          </span>
        </Button>
      )}
      {socialLinks.github && (
        <Button
          className="btn-icon-only rounded-circle ml-1"
          color="github"
          href={socialLinks.github}
          rel="noopener"
          aria-label="Github"
          target="_blank"
        >
          <span className="btn-inner--icon">
            <i className="fa fa-github" />
          </span>
        </Button>
      )}
      {socialLinks.instagram && (
        <Button
          className="btn-icon-only rounded-circle ml-1"
          color="instagram"
          href={socialLinks.instagram}
          target="_blank"
          rel="noopener"
          aria-label="Instagram"
        >
          <span className="btn-inner--icon">
            <i className="fa fa-instagram" />
          </span>
        </Button>
      )}
      {socialLinks.facebook && (
        <Button
          className="btn-icon-only rounded-circle ml-1"
          color="facebook"
          href={socialLinks.facebook}
          target="_blank"
          rel="noopener"
          aria-label="Facebook"
        >
          <span className="btn-inner--icon">
            <i className="fa fa-facebook-square" />
          </span>
        </Button>
      )}
      {socialLinks.twitter && (
        <Button
          className="btn-icon-only rounded-circle"
          color="twitter"
          href={socialLinks.twitter}
          target="_blank"
          rel="noopener"
          aria-label="Twitter"
        >
          <span className="btn-inner--icon">
            <i className="fa fa-twitter" />
          </span>
        </Button>
      )}
    </div>
  );
};

export default SocialLinks;
