// Initialize the map and set its view to geographical limits of El Hierro
var map = L.map('map', {
  zoomControl: false,
  maxZoom: 18,
  minZoom: 0,
}).setView([40.459707, -3.427715], 13);

// Add a tile layer to the map (Mapbox Streets tile layer)
var osm = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
  attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
  '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
  'Imagery © <a href="http://mapbox.com">Mapbox</a>',
  id: 'mapbox.streets',
}).addTo(map);

var osm2 = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
  attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
  '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
  'Imagery © <a href="http://mapbox.com">Mapbox</a>',
  id: 'mapbox.streets',
  minZoom: 0,
  maxZoom: 9
});

//Markers-------------------------------------------------------------

var renfeIcon = L.icon({
  iconUrl: "img/renfe.png",
  iconSize: [17, 17],
})

var renfeAtochaPop = "<a href='https://www.redtransporte.com/madrid/cercanias-renfe/horarios.html'target='_blank'>Atocha</a>"
var renfeAtochaMarker = L.marker([40.406472, -3.689657], {icon: renfeIcon}).addTo(map).bindPopup(renfeAtochaPop)

var renfeTJPop = "<a href='https://www.redtransporte.com/madrid/cercanias-renfe/horarios.html'target='_blank'>Torrejón de Ardoz</a>"
var renfeTJMarker = L.marker([40.454773, -3.479721], {icon: renfeIcon}).addTo(map).bindPopup(renfeTJPop)

var renfeSotoPop = "<a href='https://www.redtransporte.com/madrid/cercanias-renfe/horarios.html'target='_blank'>Soto del Henares</a>"
var renfeSotoMarker = L.marker([40.463766, -3.441447], {icon: renfeIcon}).addTo(map).bindPopup(renfeSotoPop)

var renfeAHPop = "<a href='https://www.redtransporte.com/madrid/cercanias-renfe/horarios.html'target='_blank'>Alcalá de Henares</a>"
var renfeAHMarker = L.marker([40.485640, -3.362811], {icon: renfeIcon}).addTo(map).bindPopup(renfeAHPop)

//Layers-------------------------------------------------------------

var sotoLocalizaLayer = L.geoJSON(sotoLocaliza).addTo(map);

var styleRN = {
  'color': '#ffff99',
  'weigth': 1,
  'opacity': 0.8
};

var redNaturaLayer = L.geoJSON(redNatura, {style: styleRN}).addTo(map);


var baseLayers = {

  "PNOA Máx. Actualidad": Spain_PNOA_Ortoimagen,
  "Open Street Maps": osm,
};

var overlayers = {
  "Catastro": Spain_Catastro,
  "Unidades administrativas": Spain_UnidadAdministrativa,
  "IGN Base": Spain_IGNBase,
};

L.control.layers(baseLayers, overlayers,{collapsed:false}).addTo(map);

//Control del minimapa
var miniMap = new L.Control.MiniMap(osm2, {toggleDisplay: true, position: 'bottomright'}).addTo(map);

L.control.scale({maxWidth: 100, metric: true, imperial: false, position: 'bottomleft'}).addTo(map);

map.addControl(new L.Control.Fullscreen({
  position: "topleft"
}));

L.control.mousePosition({position: 'bottomright'}).addTo(map);
