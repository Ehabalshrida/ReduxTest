export const encreaseByValue = (v) => {
  return {
    type: "encreaseByValue",
    payload: v,
  };
};

/*we use it to pass it to the dispatch to return object 
contain the type snd the payload to trigger the reducer to modify the state  */