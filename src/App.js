import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./userPost/Home";
import CreatePost from "./userPost/CreatePost";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/createPost" element={<CreatePost />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
