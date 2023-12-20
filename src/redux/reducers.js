const initialState = {
  email: "",
  password: "",
  type:""
};

export default (state = initialState, action) => {
  switch (action.type) { 
    case "Email":
        return {...state, email:action.payload}
    case "Password":
        return {...state, password:action.payload}
    case "SelectOption":
        return {...state, type:action.payload}
    case "updateForm":
        return {...state, ...action.payload}
    default:return {...state}
  }
};
