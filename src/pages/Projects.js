import React from "react";
import { Helmet } from "react-helmet";
import Config from "../Config.json";
import ReactPlayer from "react-player";

const TITLE = "Projects";
const DESC = "Create a React App from an HTML Website.";
const CANONICAL = Config.SITE_DOMAIN + "/";

class Projects extends React.Component {
  render() {
    return (
      <main>
        <Helmet>
          <title>{TITLE}</title>
          <link rel="canonical" href="{CANONICAL}" />
          <meta name="description" content={DESC} />
          <meta name="theme-color" content={Config.THEME_COLOR} />
        </Helmet>

        <div>
          <h4>Projects</h4>
        </div>

        <center>
        <div className="Video1">
          <ReactPlayer
            width="480px"
            height="250px"
            controls
            url="https://youtu.be/togG3kFCRBE"
          />
        </div>

        <div className="OES">
          <b>Online Enrollment System (Prototype)</b>
        </div>

        <div className="Video2">
          <ReactPlayer
            width="480px"
            height="250px"
            controls
            url="https://www.youtube.com/watch?v=TOJwMHZ7E9I"
          />
        </div>

        <div className="LSFD">
          <b>Login & Sign-up form w/ MySQL</b>
        </div>

        <div className="Video3">
          <ReactPlayer
            width="480px"
            height="250px"
            controls
            url="https://www.youtube.com/watch?v=0q9ZC6oHBBc"
          />
        </div>

        <div className="JA">
          <b>Java App</b>
        </div>
    

        <div className="Video4">
          <ReactPlayer
            width="480px"
            height="250px"
            controls
            url="https://youtu.be/QYUTzrwSCzU"
          />
        </div>

        <div className="W1">
          <b>Woocommerce (Sample 1)</b>
        </div>
        </center>
 
      </main>
    );
  }
}

export default Projects;
