import { combineReducers } from "redux";
import selectSongReducer from "./selectSongReducer";
import songListReducer from "./songLIstRecuser";

// const songList = [
//   { name: "Uzbek", time: "3:12", avtor: "Ozodbek" },
//   { name: "Bolalik", time: "3:12", avtor: "Shoxruh" },
//   { name: "USA", time: "3:12", avtor: "Alex" },
//   { name: "Vatan", time: "3:12", avtor: "Muhriddin" },
// ];

// const SongListReducer = (history = [], song) => {
//   return songList;
// };

// const SelectSongReducer = (history = [], selectedSong) => {
//   if (selectedSong.type === "SELECTED") {
//     return selectedSong.payload;
//   }
//   return history;
// };

const allReduser = combineReducers({
  songListReducer,
  selectSongReducer,
});

export default allReduser;
