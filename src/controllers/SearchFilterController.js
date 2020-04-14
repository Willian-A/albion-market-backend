const data = require("./list.json");

module.exports = function filter(itemName, itemQuality) {
    var tData = JSON.parse(JSON.stringify(data));
    var ok = false;

    for (var i = 0; i <= 6705; ++i in tData) {
        if (itemName == tData[i].LocalizedNames["PT-BR"]) {
            itemName = tData[i].UniqueName;
            ok = true;
        }
    }

    if (ok === false) {
        return false;
    }
    if (itemQuality >= 6 || itemQuality <= 0) {
        return false;
    }

    return itemName;
};