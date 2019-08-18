const initialState = {
  contact: [],
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case "GET_CONTACTS":
      return {
        ...state,
        contact: action.payload,
        loading: false
      };
    default:
      return state;
  }
}
