import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import PostCreator from "./Components/PostCreator";
import SocialMediaFeed from "./Components/SocialMediaFeed";
import MobileCreatePost from "./Components/MobileCreatePost";
import CreatePost from "./Components/CreatePost";
import PostCreat from "./Components/PostCreat";
import NewPoster from "./Components/NewPoster";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<SocialMediaFeed />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/mobile-create" element={<MobileCreatePost />} />
          <Route path="/post-creat" element={<PostCreat />} />
          <Route path="/post-creator" element={<PostCreator />} />
          {/* <Route path="/newposter" element={<NewPoster />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
