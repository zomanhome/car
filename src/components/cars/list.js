import React from "react";
import { Link } from "react-router-dom";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

const SimpleList = ({ cars, onClick }) => {
  return cars.map(car => (
    <Link to="/info" key={car.id}>
      <List component="nav">
        <ListItem button>
          <ListItemText primary={car.name} onClick={() => onClick(car.id)} />
        </ListItem>
      </List>
      <Divider />
    </Link>
  ));
};

export default SimpleList;
