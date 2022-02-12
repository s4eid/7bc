export const getCity = (data) => {
  let city = "";
  for (let i = 0; i < data.length; i++) {
    if (
      data[i].types[0] &&
      "administrative_area_level_2" === data[0].types[0]
    ) {
      city = data[0].long_name;
      return city;
    }
  }
};

export const getArea = (data) => {
  let area = "";
  for (let i = 0; i < data.length; i++) {
    if (data[i].types[0]) {
      for (let j = 0; j < data[i].types.length; j++) {
        if (
          "sublocality_level_1" === data[i].types[j] ||
          "locality" === data[i].types[j]
        ) {
          area = data[i].long_name;
          return area;
        }
      }
    }
  }
};

export const getState = (data) => {
  let state = "";
  for (let i = 0; i < data.length; i++) {
    for (let i = 0; i < data.length; i++) {
      if (
        data[i].types[0] &&
        "administrative_area_level_1" === data[i].types[0]
      ) {
        state = data[i].long_name;
        return state;
      }
    }
  }
};
