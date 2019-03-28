import React from "react";
import Typography from "@material-ui/core/Typography";

import "./style.scss";
import "typeface-roboto";

const About = () => {
  return (
    <div className="about">
      <Typography variant="subheading" align="center">
        Разработан на React. Версия 0.0.1
      </Typography>
    </div>
  );
};

export default About;
