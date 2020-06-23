export const REMOVE_FEATURE = "REMOVE_FEATURE";
export const BUY_FEATURE = "BUY_FEATURE";


export const removeFeature = (undesiredFeature) => {
  return {
    type: REMOVE_FEATURE,
    payload: {
        id: undesiredFeature.id,
        name: undesiredFeature.name,
        price: undesiredFeature.price
    }
  };
};

// build action name & creator to add a feature


export const buyFeature = (desiredFeature) => {
    
  return {
    type: BUY_FEATURE,
    payload: {
      id: desiredFeature.id,
      name: desiredFeature.name,
      price: desiredFeature.price
    }
  };
};