import React from "react";
import { BsTwitter, BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
      <a href="https://www.linkedin.com/in/a-srinibash-achary-2a947a238/">
        <BsLinkedin />
        </a>
      </div>
      <div>
      <a href="https://github.com/asrinibash">
        <BsGithub />
        </a>
      </div>
      <div>
      <a href="https://twitter.com/asrinibash_001">
        <BsTwitter/>
        </a>
      </div>
      <div>
      <a href="https://www.instagram.com/a_srinibash/">
        <BsInstagram/>
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
