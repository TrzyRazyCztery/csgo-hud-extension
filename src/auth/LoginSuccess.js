import { Component } from "react";
import { connect } from "react-redux";
import React from "react";
import { fetchUserData } from "./authActions";

const extractParams = queryString =>
  !queryString
    ? {}
    : queryString
        .slice(1)
        .split("&")
        .reduce(
          (prev, curr) => ({
            ...prev,
            [curr.split("=")[0]]: curr.split("=")[1]
          }),
          {}
        );

class LoginSuccess extends Component {
  constructor(props) {
    super(props);
    this.state = {
      params: {}
    };
  }
  componentDidMount() {
    const params = extractParams(this.props.location.search);
    if (params.token) {
      this.props.fetchUserData(params.token);
    }
    this.props.history.push("/");
  }

  render() {
    return null;
  }
}

const mapDispatchToProps = dispatch => ({
  fetchUserData: token => dispatch(fetchUserData(token))
});

export default connect(
  null,
  mapDispatchToProps
)(LoginSuccess);
