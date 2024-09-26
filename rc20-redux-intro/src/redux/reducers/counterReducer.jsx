//!Mutfak


// const counterReducer = (state = { sayac: 0, text1: "" }, action1) => {
const counterReducer = (
  state = { sayac: 0, text1: "" },
  { type, payload1 }
) => {
  switch (type) {
    case "ARTTIR":
      return { sayac: state.sayac + 1, text: payload1 };

    case "RESET":
      return { sayac: 0, text: payload1 };

    case "AZALT":
      return { sayac: state.sayac - 1, text: payload1};
    default:
      return state;
  }
};

export default counterReducer;
