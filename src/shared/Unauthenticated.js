import { getAuthenticatedUser } from "../reducers/authReducer";
import { connect } from "react-redux";

const Unauthenticated = ({ children, userLoaded }) =>
  userLoaded ? null : children;

const mapStateToProps = state => ({
  userLoaded: getAuthenticatedUser(state)
});

export default connect(mapStateToProps)(Unauthenticated);
