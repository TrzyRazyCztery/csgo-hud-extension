import { createActionNamespace } from '../utils/actions';

const registerNotificationAction = createActionNamespace('notification');

export const NOTIFIED_ERROR = registerNotificationAction('NOTIFIED_ERROR');
export const NOTIFIED_INFO = registerNotificationAction('NOTIFIED_INFO');
export const NOTIFIED_SUCCESS = registerNotificationAction('NOTIFIED_SUCCESS');
export const NOTIFIED_WARNING = registerNotificationAction('NOTIFIED_WARNING');

export const getNotification = state => state.notifications.notification;

const initialState = {
  notification: {},
};

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case NOTIFIED_ERROR:
      return {
        ...state,
        notification: {
          type: 'error',
          message: action.message,
        },
      };
    case NOTIFIED_INFO:
      return {
        ...state,
        notification: {
          type: 'info',
          message: action.message,
        },
      };
    case NOTIFIED_SUCCESS:
      return {
        ...state,
        notification: {
          type: 'success',
          message: action.message,
        },
      };
    case NOTIFIED_WARNING:
      return {
        ...state,
        notification: {
          type: 'warning',
          message: action.message,
        },
      };
    default:
      return state;
  }
};

export default notificationReducer;
