const httpGet = require("./utils/httpRequest");
const filter = require("./SearchFilterController");

// Controller normalmente tem index, show, store, update, destroy

module.exports = {
  async index(request, response) {
    var { itemName, itemEnchant } = request.body;

    itemName = await filter(itemName.trim());

    if (itemName == false) {
      return response.json({ search: false });
    }
    console.log(
      `Came As --> ${request.body.itemName.trim()} // Goes As --> ${itemName}`
    );

    var search = await httpGet(itemName, itemEnchant);
    return response.json({ search });
  }
};
