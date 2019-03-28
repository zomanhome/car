import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import "typeface-roboto";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

import "./style.scss";

class Info extends Component {
  render() {
    const info = this.props.info;
    if (!info) {
      return (
        <div className="info-no-car">
          <Link to="/">
            <Typography variant="subheading" align="center">
              Выберите автомобиль на главной странице справочника.
            </Typography>
          </Link>
        </div>
      );
    }

    const cars = this.props.cars;
    if (cars.length !== 0) {
      const car = cars[info - 1];
      return (
        <div className="info">
          <img alt="" src={car.img} />
          <div>
            <div>
              <Typography variant="h4">{car.name}</Typography>
            </div>
            <Divider />
            <div>
              <Typography variant="subheading">{car.notes}</Typography>
            </div>
            <Divider />
            <div>
              <Typography variant="body2">
                Объём двигателя: {car.power} куб.см.
              </Typography>
              <Typography variant="body2">
                Максимальная скорость: {car.speed} км/час
              </Typography>
              <Typography variant="body2">Цена: {car.price} EUR</Typography>
            </div>
          </div>
        </div>
      );
    }

    return null;
  }
}

const mapStateToProps = state => {
  return {
    info: state.info,
    cars: state.cars
  };
};

export default connect(mapStateToProps)(Info);
