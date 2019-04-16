import { getAuthenticatedUser } from "../reducers/authReducer";
import { connect } from "react-redux";

const Authenticated = ({ children, userLoaded }) =>
  userLoaded ? children : null;

const mapStateToProps = state => ({
  userLoaded: getAuthenticatedUser(state)
});

export default connect(mapStateToProps)(Authenticated);
