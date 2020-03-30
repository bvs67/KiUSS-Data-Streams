export const GET_MENU_POINT = 'GET_MENU_POINT';

export function getMenuPoint(id) {
    return dispatch => {
        dispatch({
            type: GET_MENU_POINT,
            payload: id,
        });
    };
}
