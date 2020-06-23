import React from 'react';
import { removeFeature } from "../actions";

import { connect } from "react-redux";

const AddedFeature = props => {

  const removeHandler = () => {
    props.removeFeature(props.feature);
  }


  return (
    <li>
      <button className="button"
      onClick={removeHandler}>
      X</button>
      {props.feature.name}
    </li>
  );
};

const mapStateToProps = state => {
  
  return {
    additionalFeatures: state.additionalFeatures,
  };
};

const mapDispatchToProps = { removeFeature };

export default connect(mapStateToProps, mapDispatchToProps)(AddedFeature);
