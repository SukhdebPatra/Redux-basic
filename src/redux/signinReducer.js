const initialState = {
  name: "",
  email: "",
  password: "",
  address: "",
  phone: "",
  officeAddress: "",
};
export default (state = initialState, action) => {
  switch (action.type) {
    case "Name":
      return { ...state, name: action.payload };
    case "Email":
      return { ...state, email: action.payload };
    case "Password":
      return { ...state, password: action.payload };
    case "Address":
      return { ...state, address: action.payload };
    case "Phone":
      return { ...state, phone: action.payload };
    case "OfficeAddress":
      return { ...state, officeAddress: action.payload };
    default:
      return { ...state };
  }
};
