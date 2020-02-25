var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

module.exports = function httpGet(itemName, itemEnchant) {
    var cityList = [
        "Bridgewatch",
        "Caerleon",
        "Fort Sterling",
        "Lymhurst",
        "Martlock",
        "Thetford"
    ];
    const Http = new XMLHttpRequest();

    Http.open(
        "GET",
        `https://www.albion-online-data.com/api/v2/stats/prices/${itemName}?locations=Caerleon%2CBridgewatch%2CThetford%2CLymhurst%2CMartlock%2CFort%20Sterling&qualities=${itemEnchant}`,
        false
    );

    Http.send();
    var response = JSON.parse(Http.responseText);
    for (var i = 0; i < 5; ++i in response) {
        if (response[i].city != cityList[i]) {
            response.push({
                city: cityList[i],
                sell_price_min: "nenhuma informação"
            });
            break;
        }
    }

    return response;
};