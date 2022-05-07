import React, { useState } from "react";
import { connect } from "react-redux";
import { addSongAction } from "../actions";

const AddSong = (props) => {
  const [name, setName] = useState(null);
  const [time, setTime] = useState(null);
  const [author, setAuthor] = useState(null);

  const onSubmit = (e) => {
    e.preventDefault();

    return props.addSongAction({ name, time, author });
  };

  return (
    <form class="ui form" onSubmit={onSubmit}>
      <div class="field">
        <label>Song Name</label>
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          name="first-name"
          placeholder="Enter Song Name"
        />
      </div>
      <div class="field">
        <label>Last Name</label>
        <input
          onChange={(e) => setTime(e.target.value)}
          type="text"
          name="last-name"
          placeholder="Enter Song Time"
        />
      </div>
      <div class="field">
        <label>Last Name</label>
        <input
          onChange={(e) => setAuthor(e.target.value)}
          type="text"
          name="last-name"
          placeholder="Enter Song Author"
        />
      </div>
      <button class="ui button" type="submit">
        Submit
      </button>
    </form>
  );
};

const getMyState = (state) => {
  return state;
};

export default connect(getMyState, { addSongAction })(AddSong);
