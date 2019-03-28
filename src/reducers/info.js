export default function(state = 0, action) {
  switch (action.type) {
    case "SET_INFO": {
      return action.info;
    }
    default:
      return state;
  }
}
