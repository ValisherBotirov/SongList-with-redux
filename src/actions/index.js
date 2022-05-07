export const SelectSongAction = (data) => {
  return {
    type: "SELECTED",
    payload: data,
  };
};

// export default SelectSongAction;

export const addSongAction = (data) => {
  return {
    type: "ADD",
    payload: data,
  };
};
