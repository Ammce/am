import React from "react";
import { Image } from "react-bootstrap";

import SocialIcons from "../components/SocialIcons";

import "./index.css";

function index() {
  return (
    <div>
      <div className="container register">
        <div className="row">
          <div className="col-md-4 register-left">
            <Image src="https://i.ibb.co/7QwzySS/IMG-4273-jpg-2.jpg" alt="" />
            <h3>Amel Muminovic</h3>
            <ul>
              <li>Senior Full Stack Engineer</li>
              <li>Node.js | Go</li>
              <li>React.js | Next.js</li>
              <li>SQL | NoSQL | Graph DBs</li>
              <li>REST | GraphQL | gRPC</li>
              <li>AWS | Docker</li>
              <li>Kubernetes | Terraform</li>
              <li>System Design</li>
            </ul>
            <a
              href="https://drive.google.com/file/d/12QFqNM2AeuL0yCFF6pplfPnMb0mSUAF0/view?usp=sharing"
              type="submit"
              target="_blank"
              name=""
              value="Download CV"
            >
              {" "}
              Download CV{" "}
            </a>
            <br />
          </div>
          <div className="col-md-8 register-right">
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <h3 className="register-heading">Here's my story</h3>
                <div className="row register-form">
                  With over 6 years of commercial experience in diverse web
                  development technologies, I have primarily focused on
                  JavaScript as my coding language for both frontend and backend
                  development. My areas of expertise include Node.js, GraphQL,
                  React.js, and Golang. I am deeply enthusiastic about acquiring
                  new knowledge and staying abreast of the latest technological
                  advancements to ensure the delivery of top-notch code and
                  products. Recently, I have developed a strong passion for
                  Golang and I am eager to engage in projects where Go serves as
                  the primary language.
                </div>
                <div>
                  <h4 className="lets-connect-heading">Lets connect</h4>
                  <SocialIcons />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
