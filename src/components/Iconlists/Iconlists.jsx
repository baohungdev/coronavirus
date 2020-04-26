import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
import "./iconlists.style.css";

const IconList = () => {
  return (
    <section className="footer">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-auto">
            <ul className="footer__social-lists">
              <li>
                <a href="https://www.facebook.com/dbhungUIT">
                  <FacebookIcon className="svg_icons" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/hunhjax/">
                  <InstagramIcon className="svg_icons" />
                </a>
              </li>
              <li>
                <a href="https://github.com/motcondicontrinh1">
                  <GitHubIcon className="svg_icons" />
                </a>
              </li>

            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IconList;
