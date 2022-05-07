const songListReducer = (
  history = [{ name: "Uzbek", time: "3:12", avtor: "Ozodbek" }],
  data
) => {
  if (data.type === "ADD") {
    return (history = [...history, data.payload]);
  }
  return history;

  // return [
  //   { name: "Uzbek", time: "3:12", avtor: "Ozodbek" },
  //   { name: "Bolalik", time: "5:20", avtor: "Shoxruh" },
  //   { name: "USA", time: "6:35", avtor: "Alex" },
  //   { name: "Vatan", time: "4:45", avtor: "Muhriddin" },
  // ];
};

export default songListReducer;
