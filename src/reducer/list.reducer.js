import { setListDisplay } from "../action/list.action";

const initialeState = { showList: false };

export default function listReducer(state = initialeState, action) {
  switch (action.type) {
    case setListDisplay:
      return { showList: action.payload };
    default:
      return state;
  }
}
