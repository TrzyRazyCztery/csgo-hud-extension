import {
  NOTIFIED_ERROR,
  NOTIFIED_SUCCESS,
  NOTIFIED_INFO,
  NOTIFIED_WARNING,
} from '../reducers/notificationReducer';

const NotifiedWarning = message => ({ type: NOTIFIED_WARNING, message });
const NotifiedError = message => ({ type: NOTIFIED_ERROR, message });
const NotifiedSuccess = message => ({ type: NOTIFIED_SUCCESS, message });
const NotifiedInfo = message => ({ type: NOTIFIED_INFO, message });

export const notifyWarning = message => dispatch => {
  dispatch(NotifiedWarning(message));
};
export const notifySuccess = message => dispatch => {
  dispatch(NotifiedSuccess(message));
};
export const notifyInfo = message => dispatch => {
  dispatch(NotifiedInfo(message));
};
export const notifyError = message => dispatch => {
  dispatch(NotifiedError(message));
};
