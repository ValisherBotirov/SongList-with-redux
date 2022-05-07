import React from "react";
import reactRedux from "react-redux";
import { connect } from "react-redux";
import { SelectSongAction } from "../actions";

const SongList = (props) => {
  console.log(props);

  const renderList = () => {
    return props.songListReducer.map((val) => {
      return (
        <div class="ui cards">
          <div class="card">
            <div class="content">
              <img
                class="right floated mini ui image"
                src="https://play-lh.googleusercontent.com/QovZ-E3Uxm4EvjacN-Cv1LnjEv-x5SqFFB5BbhGIwXI_KorjFhEHahRZcXFC6P40Xg"
              />
              <div class="header">{val.name}</div>
              <div class="meta">{val.time}</div>
              <div class="description">{val.author}</div>
            </div>
            <div class="extra content">
              <div class="ui two buttons">
                <div
                  onClick={() => props.SelectSongAction(val)}
                  class="ui basic green button"
                >
                  Select song
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };
  return <div>{renderList()}</div>;
};

const getMyState = (state) => {
  return state;
};

export default connect(getMyState, { SelectSongAction })(SongList);
