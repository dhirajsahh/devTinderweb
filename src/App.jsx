import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";

import Body from "./Body";
import Login from "./Login";
import Profiles from "./Profiles";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profiles />} />
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <Navbar /> */}
    </>
  );
}

export default App;
