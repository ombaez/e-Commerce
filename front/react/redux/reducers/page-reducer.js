import { PAGINATOR, RESULTS, CURRENT_PAGE, VIEW } from "../constants";

const initialState = {
  paginated: [],
  length: "",
  currentPage: 1,
  view: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case PAGINATOR:
      return Object.assign({}, state, { paginated: action.array });
    case RESULTS:
      return Object.assign({}, state, { length: action.length });
    case CURRENT_PAGE:
      return Object.assign({}, state, { currentPage: action.page });
    case VIEW:
      return Object.assign({}, state, { view: action.view });
    default:
      return state;
  }
};
