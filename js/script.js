// Coordenadas para el maxbound del map principal
var corner1 = L.latLng(40.67417, -3.808321),
    corner2 = L.latLng(40.228960, -3.106673),
    bounds = L.latLngBounds(corner1, corner2);

// Initialize the map and set its view to geographical limits of El Hierro
var map = L.map('map', {
  zoomControl: true,
  maxZoom: 18,
  minZoom: 11,
  maxBounds: bounds,
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
  minZoom: 8,
  maxZoom: 8
});
//Localización en el mapa

////////map.locate({watch: true, setView: true, maxZoom: 16});
////////
////////var azulIcon = L.icon({
////////  iconUrl: "img/azul.png",
////////  iconSize: [20, 20],
////////})
////////
////////function onLocationFound(e) {
////////    var radius = e.accuracy;
////////
////////    L.marker(e.latlng, {icon:azulIcon}).addTo(map)
////////        .bindPopup("Te encuentras a " + radius + " metros de este punto");
////////    L.circle(e.latlng, radius).addTo(map);
////////}
////////
////////map.on('locationfound', onLocationFound);
////////
////////function onLocationError(e) {
////////    alert(e.message);
////////}
////////map.on('locationerror', onLocationError);

//Marcadores linea de RENFE

var renfeIcon = L.icon({
  iconUrl: "img/renfe.png",
  iconSize: [17, 17],
})

var renfeAtochaPop = "<a href='https://www.redtransporte.com/madrid/cercanias-renfe/horarios.html'target='_blank'>Atocha</a>"
var renfeAtochaMarker = L.marker([40.406472, -3.689657], {icon: renfeIcon}).bindPopup(renfeAtochaPop)

var renfeEntPop = "<a href='https://www.redtransporte.com/madrid/cercanias-renfe/horarios.html'target='_blank'>Asamblea de Madrid - Entrevias</a>"
var renfeEntMarker = L.marker([40.381697, -3.667984], {icon: renfeIcon}).bindPopup(renfeEntPop)

var renfePozoPop = "<a href='https://www.redtransporte.com/madrid/cercanias-renfe/horarios.html'target='_blank'>El Pozo</a>"
var renfePozoMarker = L.marker([40.376130, -3.656208], {icon: renfeIcon}).bindPopup(renfePozoPop)

var renfeVkPop = "<a href='https://www.redtransporte.com/madrid/cercanias-renfe/horarios.html'target='_blank'>Vallecas</a>"
var renfeVkMarker = L.marker([40.381937, -3.624597], {icon: renfeIcon}).bindPopup(renfeVkPop)

var renfeSantPop = "<a href='https://www.redtransporte.com/madrid/cercanias-renfe/horarios.html'target='_blank'>Santa Eugenia</a>"
var renfeSantMarker = L.marker([40.386891, -3.608930], {icon: renfeIcon}).bindPopup(renfeSantPop)

var renfeVicPop = "<a href='https://www.redtransporte.com/madrid/cercanias-renfe/horarios.html'target='_blank'>Vicálvaro</a>"
var renfeVicMarker = L.marker([40.401271, -3.595926], {icon: renfeIcon}).bindPopup(renfeVicPop)

var renfeCosPop = "<a href='https://www.redtransporte.com/madrid/cercanias-renfe/horarios.html'target='_blank'>Coslada (apd)</a>"
var renfeCosMarker = L.marker([40.423777, -3.561009], {icon: renfeIcon}).bindPopup(renfeCosPop)

var renfeSFPop = "<a href='https://www.redtransporte.com/madrid/cercanias-renfe/horarios.html'target='_blank'>San Fernando</a>"
var renfeSFMarker = L.marker([40.442673, -3.533997], {icon: renfeIcon}).bindPopup(renfeSFPop)

var renfeTJPop = "<a href='https://www.redtransporte.com/madrid/cercanias-renfe/horarios.html'target='_blank'>Torrejón de Ardoz</a>"
var renfeTJMarker = L.marker([40.454773, -3.479721], {icon: renfeIcon}).bindPopup(renfeTJPop)

var renfeSotoPop = "<a href='https://www.redtransporte.com/madrid/cercanias-renfe/horarios.html'target='_blank'>Soto del Henares</a>"
var renfeSotoMarker = L.marker([40.463766, -3.441447], {icon: renfeIcon}).bindPopup(renfeSotoPop)

var renfeGarPop = "<a href='https://www.redtransporte.com/madrid/cercanias-renfe/horarios.html'target='_blank'>La Garena</a>"
var renfeGarMarker = L.marker([40.480514, -3.393043], {icon: renfeIcon}).bindPopup(renfeGarPop)

var renfeAHPop = "<a href='https://www.redtransporte.com/madrid/cercanias-renfe/horarios.html'target='_blank'>Alcalá de Henares</a>"
var renfeAHMarker = L.marker([40.489025, -3.366277], {icon: renfeIcon}).bindPopup(renfeAHPop)

var renfeAHUPop = "<a href='https://www.redtransporte.com/madrid/cercanias-renfe/horarios.html'target='_blank'>Alcalá Universidad</a>"
var renfeAHUMarker = L.marker([40.505380, -3.335340], {icon: renfeIcon}).bindPopup(renfeAHUPop)

var renfeMecoPop = "<a href='https://www.redtransporte.com/madrid/cercanias-renfe/horarios.html'target='_blank'>Meco</a>"
var renfeMecoMarker = L.marker([40.534581, -3.298734], {icon: renfeIcon}).bindPopup(renfeMecoPop)

var renfeAzqPop = "<a href='https://www.redtransporte.com/madrid/cercanias-renfe/horarios.html'target='_blank'>Azuqueca</a>"
var renfeAzqMarker = L.marker([40.561031, -3.265453], {icon: renfeIcon}).bindPopup(renfeAzqPop)

var renfeGuadPop = "<a href='https://www.redtransporte.com/madrid/cercanias-renfe/horarios.html'target='_blank'>Guadalajada</a>"
var renfeGuadMarker = L.marker([40.644233, -3.182273], {icon: renfeIcon}).bindPopup(renfeGuadPop)

var renfeStations = L.layerGroup([renfeAtochaMarker, renfeEntMarker, renfePozoMarker, renfeVkMarker, renfeSantMarker,
                                  renfeVicMarker, renfeCosMarker, renfeSFMarker, renfeTJMarker, renfeSotoMarker,
                                  renfeGarMarker, renfeAHMarker, renfeAHUMarker, renfeMecoMarker, renfeAzqMarker, renfeGuadMarker]).addTo(map);
//marcador de las ruinas

L.MakiMarkers.accessToken="pk.eyJ1IjoiYWxiZXJ0b2JhcnJhIiwiYSI6ImNqc20xdXEzZDM0eG80NG1sMnFyejlhbzMifQ.pYqduV6nou2dhvI1Xvkc0A";

var ruinasPop = L.MakiMarkers.icon({icon:"marker", color:"#0066ff",size:"m"});
var ruinasMarker = L.marker([40.459922, -3.424866],{icon: ruinasPop}).bindPopup("<b><a href='http://www.patrimoniocomplutense.es/lp/32003.htm'target='_blank'>Complejo rural de Espinillos</a><br/><br/><img src='img/finca.jpg' width= '220px'height='140'/></b>");

var interes = L.layerGroup([ruinasMarker]);
//Layers styles------------------------------------------------------
var sotoLocalizaStyle = {
  color: 'red',
  opacity: 0.8,
  weight: 3,
};

var limAdmStyle = {
  color: 'black',
  fill: false,
  weight: 3,
};

var rnStyle = function(feature) {
    switch (feature.properties.LIC_NAME) {
      case 'Cuencas de los ríos Jarama y Henares': return {color: "#d7ad26", opacity: 1}
      case 'Vegas, cuestas y páramos del sureste de Madrid': return {color: "#6ee10d", opacity: 1}
    }
  }
  function popupRN(feature, layer) {
  if (feature.properties && feature.properties.LIC_NAME) {
    layer.bindPopup(feature.properties.LIC_NAME);
  }
};

var ecosistemasStyle = function(feature) {
    switch (feature.properties.DS_ECOSIST) {
      case 'Recintos urbanos': return {
        weight: 1,
        color:"#grey",
        opacity: 1}
      case 'Barbechos y secanos': return {
        weight: 1,
        color: "#e9a02d",
        opacity: 1}
      case 'Cuestas y cortados yesíferos': return {
        weight: 1,
        color: "#d8e0e9",
        opacity: 1}
      case 'Embalses': return {
        weight: 1,
        color: "#0e6ecc",
        opacity: 1}
      case 'Encinar sobre arenas': return {
        weight: 1,
        color: "#76b308",
        opacity: 1}
      case 'Hayedo': return {
        weight: 1,
        color: "#fe9b5b",
        opacity: 1}
      case 'Matorral de altura (Piornal)': return {
        weight: 1,
        color: "#d7ad26",
        opacity: 1}
      case 'Melojar': return {
        weight: 1,
        color: "#b36408",
        opacity: 1}
      case 'Otros pinares': return {
        weight: 1,
        color: "#92d726",
        opacity: 1}
      case 'Pinar de montaña': return {
        weight: 1,
        color: "#16ff00",
        opacity: 1}
      case 'Pinar de pino piñonero': return {
        weight: 1,
        color: "#0fb000",
        opacity: 1}
      case 'Sotos y riberas': return {
        weight: 1,
        color: "#78cc9f",
        opacity: 1}
      case 'Zonas palustres': return {
        weight: 1,
        color: "#ffb4c7",
        opacity: 1}
    }
  }
  function popup(feature, layer) {
  if (feature.properties && feature.properties.DS_ECOSIST) {
    layer.bindPopup(feature.properties.DS_ECOSIST);
  }
};

var RIOpolStyle = {
  color: '#3B90F7',
  opacity: 1,
  weight:3,
};

var RIOlineStyle = {
  color: '#3B90F7',
  opacity: 1,
  weight:1.5,
}
function popupRIO(feature, layer) {
if (feature.properties && feature.properties.ETIQUETA) {
  layer.bindPopup(feature.properties.ETIQUETA);
  }
};

var lagunasStyle = {
  color: '#3B90F7',
  opacity: 1,
  weight:3,
};
//Layers-------------------------------------------------------------
//++++++//

//var ruta1Layer = omnivore.kml('C:/Users/albertobarra/Documents/GitHub/AlbertoTFM/layers/ruta1.kml')
//    .on('ready', function() {
//        map.fitBounds(ruta1Layer.getBounds());
//    })
//    .addTo(map);

var sotoLocalizaVar = L.geoJson(sotoLocaliza, {style: sotoLocalizaStyle}).addTo(map);
var limAdmVar = L.geoJson(lim_adm, {style: limAdmStyle}).addTo(map);

//hidrografia
var RIOpolVAR = L.geoJson(RIOpol, {style: RIOpolStyle});
var RIOlineVAR = L.geoJson(RIOline, {style: RIOlineStyle, onEachFeature: popupRIO})
var lagunasVAR = L.geoJson(lagunas, {style: lagunasStyle})

var hidrografia = L.layerGroup([RIOpolVAR, RIOlineVAR, lagunasVAR]).addTo(map);

var redNaturaVar = L.geoJson(redNatura, {style: rnStyle, onEachFeature: popupRN});
var ecosistemasCAMVar = L.geoJson(ecosistemasCAM, {style: ecosistemasStyle, onEachFeature: popup});

//Control de capas---------------------------------------------------

var baseLayers = {
  "Fotografía aérea (PNOA)": Spain_PNOA_Ortoimagen,
  "Open Street Maps": osm,
};

var overlayers = {
  "Lugares de interés": interes,
  "Red Natura 2000": redNaturaVar,
  "Ecosistemas": ecosistemasCAMVar,
};

L.control.layers(baseLayers, overlayers,{
  position: 'topright',
  collapsed:true
}).addTo(map);

//Control de plugins-------------------------------------------------
var miniMap = new L.Control.MiniMap(osm2, {toggleDisplay: true, position: 'bottomright'}).addTo(map);

L.control.scale({maxWidth: 100, metric: true, imperial: false, position: 'bottomleft'}).addTo(map);

map.addControl(new L.Control.Fullscreen({
  position: "topleft"
}));

L.control.mousePosition({position: 'bottomright'}).addTo(map);
