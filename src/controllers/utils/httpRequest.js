var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

module.exports = function httpGet(itemName, itemQuality) {
    const Http = new XMLHttpRequest();

    Http.open(
        "GET",
        `https://www.albion-online-data.com/api/v2/stats/prices/${itemName}?locations=Caerleon,Bridgewatch,Thetford,Lymhurst,Martlock,Fort Sterling&qualities=${itemQuality}`,
        //https://www.albion-online-data.com/api/v2/stats/prices/T4_BAG?locations=Caerleon,Bridgewatch&qualities=2
        false
    );

    Http.send();
    var response = JSON.parse(Http.responseText);
    /*var cityList = [
                      "Bridgewatch",
                      "Caerleon",
                      "Fort Sterling",
                      "Lymhurst",
                      "Martlock",
                      "Thetford"
                  ];*/

    for (var i = 0; i < response.length; ++i in response) {
        if (response[i].sell_price_min == 0) {
            response[i].sell_price_min = "Sem informações sobre o valor";
        } else {
            response[i].sell_price_min = response[i].sell_price_min + " Coins";
        }
        /* if (
                                      response[i].sell_price_min > 0 &&
                                      response[i].city == cityList[x] &&
                                      response[i].quality == itemQuality
                                  ) {
                                      ++x;
                                      values.push({
                                          city: response[i].city,
                                          sell_price_min: response[i].sell_price_min
                                      });
                                  } else if (
                                      response[i].sell_price_min == 0 &&
                                      response[i].city == cityList[x] &&
                                      response[i].quality == itemQuality
                                  ) {
                                      values.push({
                                          city: response[i].city,
                                          sell_price_min: "Nenhuma informação sobre"
                                      });
                                      }*/
    }

    return response;
};