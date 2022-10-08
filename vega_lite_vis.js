var vg_1 = "json/choropleth_map.vg.json";
vegaEmbed("#week10_map", vg_1, {"actions": false}).then(function(result) {
}).catch(console.error);

var vg_2 = "json/top_producers_bar.vg.json";
vegaEmbed("#week10_bar", vg_2, {"actions": false}).then(function(result) {
}).catch(console.error);