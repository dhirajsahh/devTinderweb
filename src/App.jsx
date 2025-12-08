import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";

import Body from "./Body";
import Login from "./Login";
import Profiles from "./Profiles";
import { Provider } from "react-redux";
import store from "./utilis/appStore";

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Body />}>
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profiles />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
