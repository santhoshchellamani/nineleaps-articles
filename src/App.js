import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./Router/AppRouter";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    );
  }
}
export default App;
