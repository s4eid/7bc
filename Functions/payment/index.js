export const getRightInfo = (info) => {
  let _info = info;
  let list = [];
  for (let i = 0; i < info.length; i++) {
    _info[i] = {
      price: info[i]._price,
      priceEach: info[i].price,
      name: info[i].name,
      id: info[i].product_id,
      category1: "carpet",
      quantity: info[i].quantity,
      itemType: "PHYSICAL",
    };
    list = [...list, _info[i].id];
  }
  return { _info, list };
};
