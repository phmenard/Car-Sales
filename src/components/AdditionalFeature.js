import React from 'react';
import { connect } from "react-redux";
import { buyFeature } from "../actions";


const AdditionalFeature = props => {

  const handleBuyFeature = (feature) => {
    
    let hasFeature = false;
    if (props.car.features.length === 0) {
      props.buyFeature(feature);
      hasFeature = true;
    }
    props.car.features.map(f => {
      if (f.id === feature.id) {
        hasFeature = true;
      }
    });
    if (!hasFeature) {
      props.buyFeature(feature);
    }
  };


  return (
    <li>
      <button className="button"
      onClick={() => handleBuyFeature(props.feature)}>
      Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};
const mapStateToProps = state => {

  return {
    car: state.car,
  };
};

const mapDispatchToProps = { buyFeature };

export default connect(mapStateToProps, mapDispatchToProps)(AdditionalFeature);

