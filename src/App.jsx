import { BrowserRouter, Routes, Route } from "react-router-dom";

import Body from "./components/Body";
import Login from "./components/Login";
import Profiles from "./components/Profiles";
import { Provider } from "react-redux";
import store from "./utilis/appStore";
import Feed from "./components/Feed";
import Connections from "./components/Connections";
import Request from "./components/Request";

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Body />}>
              <Route path="/" element={<Feed />} />
              <Route path="/login" element={<Login />} />
              <Route path="/connections" element={<Connections />} />
              <Route path="/request" element={<Request />} />
              <Route path="/profile" element={<Profiles />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
