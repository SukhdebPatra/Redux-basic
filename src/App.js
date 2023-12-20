import logo from "./logo.svg";
import "./App.css";
import { Provider, useSelector } from "react-redux";
import store from "./store";
import Form from "./Form";

function App() {
  return (
    <Provider store={store}>
      <Form />
      
    </Provider>
  );
}

export default App;
