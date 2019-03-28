import React, { Component } from "react";
import { connect } from "react-redux";

import { getCarsAction } from "../../actions/cars";
import Spinner from "../spinner";
import List from "./list";
import "./style.scss";

class Cars extends Component {
  componentDidMount() {
    this.props.getCars();
  }

  render() {
    const ListView = ({ cars }) => {
      return (
        <ul className="carslist">
          <List cars={cars} onClick={listOnClick} />
        </ul>
      );
    };
    const listOnClick = info => {
      this.props.setInfo(info);
    };
    const cars = this.props.cars;
    const spinner = cars.length === 0 ? <Spinner /> : null;
    const content =
      cars.length !== 0 ? <ListView cars={this.props.cars} /> : null;
    return (
      <div id="content">
        {spinner}
        {content}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getCars: () => getCarsAction(dispatch),
    setInfo: info => dispatch({ type: "SET_INFO", info })
  };
};

const mapStateToProps = state => {
  return {
    cars: state.cars,
    info: state.info
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cars);
