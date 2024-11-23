import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Parcomp from "./pages/Dash";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Writetweetpage from "./pages/Writetweetpage";
import Singlepage from "./pages/Singlepage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/signup" element={<Signup></Signup>} />
          <Route path="/signin" element={<Signin></Signin>} />
          <Route path="/dash" element={<Parcomp></Parcomp>} />
          <Route path="/write" element={<Writetweetpage></Writetweetpage>} />
          <Route
            path="/dash/tweet/:modelId"
            element={<Singlepage modelType="Tweet"></Singlepage>}
          />
          <Route
            path="/dash/comment/:modelId"
            element={<Singlepage modelType="Comment"></Singlepage>}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
