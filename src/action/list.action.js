export const SET_LISTE_DISPLAY = "SET_LIST_DISPLAY";

export const setListDisplay = (bool) => {
  return (dispatch) => {
    return dispatch({ type: SET_LISTE_DISPLAY, payload: bool });
  };
};
