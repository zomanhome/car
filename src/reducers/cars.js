export default function(state = [], action) {
  switch (action.type) {
    case "SET_CARS": {
      return [...action.cars];
    }
    default:
      return state;
  }
}
