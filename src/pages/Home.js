import React from "react";
import { Helmet } from "react-helmet";
import Config from "../Config.json";

const TITLE = "Home | " + Config.SITE_TITLE;
const DESC = "Create a React App from an HTML Website.";

class Home extends React.Component {
  render() {
    return (
      <main>
        <Helmet>
          <title>{TITLE}</title>
          <link rel="canonical" href="{CANONICAL}" />
          <meta name="description" content={DESC} />
          <meta name="theme-color" content={Config.THEME_COLOR} />
        </Helmet>

        <div id="background-wrap">
          <div className="x1">
            <div className="cloud"></div>
          </div>

          <div className="x2">
            <div className="cloud"></div>
          </div>

          <div className="x3">
            <div className="cloud"></div>
          </div>

          <div className="x4">
            <div className="cloud"></div>
          </div>

          <div className="x5">
            <div className="cloud"></div>
          </div>
        </div>

        <div className={"greetings"}>
          <h1>Hello, my name is Deared. </h1>
          <h2>I am a Web Developer.</h2>
          <h2>I am a graduating BSIT student. </h2>
          <h2>
            Currently, I'm working at
            <a className={"rocph"} href="https://roc.ph/">
              ROC.PH
            </a>
            as Web Developer.
          </h2>
        </div>

        <div className={"AGameDev"}>
          <h3>
            I am also working on a project in different game engine like unity,
            unreal, and rpg maker.
          </h3>
          <h3> Please try my sample game using ReactJS.</h3>
        </div>

        <div className={"wrapper-button"}>
          <a href="#TheGame">
          <div className={"btn"}>
            <div className={"side default_side"}>Play</div>
            <div className={"side hover-side"}>Now!</div>
          </div>
          </a>
        </div>

        <div className="greetings"><h2>Coming soon...</h2></div>

      </main>
    );
  }
}

export default Home;
