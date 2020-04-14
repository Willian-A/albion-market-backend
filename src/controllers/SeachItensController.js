const httpGet = require("./utils/httpRequest");
const filter = require("./SearchFilterController");

// Controller normalmente tem index, show, store, update, destroy

module.exports = {
  async index(request, response) {
    var { itemName, itemQuality } = request.body;

    itemName = await filter(itemName.trim(), itemQuality.trim());

    if (itemName == false) {
      return response.json({ search: false });
    } else {
      console.log(
        `Came As --> ${request.body.itemName.trim()} // Goes As --> ${itemName} With ${itemQuality} as Quality`
      );
      var search = await httpGet(itemName, itemQuality);
      return response.json({ search });
    }
  }
};
