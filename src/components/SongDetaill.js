import React from "react";
import { connect } from "react-redux";

class SongDetaill extends React.Component {
  renderDetails = () => {
    if (this.props.selectSongReducer.name) {
      return (
        <div class="ui card">
          <div class="image">
            <img src="https://www.schooldrillers.com/st-jairus-stainless-love/st-jairus/" />
          </div>
          <div class="content">
            <a class="header">Kristy</a>
            <div class="meta">
              <span class="date">Joined in 2013</span>
            </div>
            <div class="description">
              Kristy is an art director living in New York.
            </div>
          </div>
          <div class="extra content">
            <a>
              <i class="user icon"></i>
              22 Friends
            </a>
          </div>
        </div>
      );
    } else {
      return <h2>Loading...</h2>;
    }
  };

  render() {
    return <div>{this.renderDetails()}</div>;
  }
}

const myState = function (state) {
  return state;
};

export default connect(myState)(SongDetaill);
