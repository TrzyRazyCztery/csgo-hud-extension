import React from "react";
import { getAuthenticatedUser } from "../reducers/authReducer";
import { connect } from "react-redux";
import { logOut } from "../auth/authActions";
import "./UserBadge.scss";

const UserBadge = ({ user, logOut }) => (
  <div className="user-badge">
    <img src={user.avatar} alt="avatar" />
    <span>{user.personaname}</span>
    <button onClick={logOut} className="logout-button">
      Logout
    </button>
  </div>
);

const mapDispatchToProps = dispatch => ({
  logOut: () => dispatch(logOut)
});

const mapStateToProps = state => ({
  user: getAuthenticatedUser(state)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserBadge);
