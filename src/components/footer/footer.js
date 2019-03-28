import React from "react";
import { Link } from "react-router-dom";

import Typography from "@material-ui/core/Typography";

import "./style.scss";

const Footer = () => {
  return (
    <div className="footer">
      <Link to="/about">
        <Typography variant="subtitle2">О справочнике</Typography>
      </Link>
    </div>
  );
};

export default Footer;
