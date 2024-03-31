import { Provider } from "react-redux";
import Routes from "./router/routes";
import store from "./store";
import myTheme from "./theme";
import { ThemeProvider } from "@mui/material/styles";

const App = () => {
  return (
    <>
      <ThemeProvider theme={myTheme}>
        <Provider store={store}>
          <Routes />
        </Provider>
      </ThemeProvider>
    </>
  );
};

export default App;
