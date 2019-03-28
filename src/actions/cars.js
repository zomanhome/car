import CarsService from "../services/CarsService";

const cars = new CarsService();

export const getCarsAction = dispatch => {
  cars.getCars().then(cars => {
    dispatch({ type: "SET_CARS", cars });
  });
};
