import React from 'react';
import { ToastContainer } from 'react-toastr';
import { connect } from 'react-redux';
import { getNotification } from '../reducers/notificationReducer';

class Notifications extends React.Component {
  componentWillReceiveProps(props) {
    const notification = props.notification;
    switch (notification.type) {
      case 'error':
        this.container.error(notification.message);
        break;
      case 'warning':
        this.container.warning(notification.message);
        break;
      case 'info':
        this.container.info(notification.message);
        break;
      case 'success':
        this.container.success(notification.message);
        break;
      default:
        break;
    }
  }
  render() {
    return (
      <div>
        <ToastContainer
          ref={container => {
            this.container = container;
          }}
          className="toast-top-right"
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  notification: getNotification(state),
});

export default connect(mapStateToProps)(Notifications);
