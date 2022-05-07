import React, { useState, useEffect } from "react";
import SongList from "./SongList";
import SongDetaill from "./SongDetaill";
import Header from "./Header";
import AddSong from "./AddSong";

const App = (props) => {
  // console.log(props);
  const [show, setShow] = useState(false);

  return (
    <div className="ui container">
      <Header />
      <button style={{ margin: "10px 0" }} onClick={() => setShow(!show)}>
        Add Song
      </button>
      <div className="ui container">{show ? <AddSong /> : ""}</div>
      <div className="ui grid " style={{ marginTop: "20px" }}>
        <div className="eight wide column">
          <SongList />
        </div>
        <div className="eight wide column">
          <SongDetaill />
        </div>
      </div>
    </div>
  );
};

export default App;
