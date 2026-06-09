var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_MapaV_1 = new ol.format.GeoJSON();
var features_MapaV_1 = format_MapaV_1.readFeatures(json_MapaV_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MapaV_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MapaV_1.addFeatures(features_MapaV_1);
var lyr_MapaV_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MapaV_1, 
                style: style_MapaV_1,
                popuplayertitle: 'Mapa V',
                interactive: true,
    title: 'Mapa V<br />\
    <img src="styles/legend/MapaV_1_0.png" /> 0.002 - 0.046<br />\
    <img src="styles/legend/MapaV_1_1.png" /> 0.046 - 0.104<br />\
    <img src="styles/legend/MapaV_1_2.png" /> 0.104 - 0.217<br />\
    <img src="styles/legend/MapaV_1_3.png" /> 0.217 - 0.398<br />\
    <img src="styles/legend/MapaV_1_4.png" /> 0.398 - 0.631<br />\
    <img src="styles/legend/MapaV_1_5.png" /> 0.631 - 2.824<br />\
    <img src="styles/legend/MapaV_1_6.png" /> 2.824 - 13.296<br />\
    <img src="styles/legend/MapaV_1_7.png" /> 13.296 - 163.053<br />' });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_MapaV_1.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_MapaV_1];
lyr_MapaV_1.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'ESPECIE': 'ESPECIE', 'DN_cm': 'DN_cm', 'DB_cm': 'DB_cm', 'H': 'H', 'SF': 'SF', 'DN_m': 'DN_m', 'AB': 'AB', 'V': 'V', 'ESPECIE ': 'ESPECIE ', 'layer': 'layer', 'path': 'path', });
lyr_MapaV_1.set('fieldImages', {'fid': '', 'ID': '', 'ESPECIE': '', 'DN_cm': '', 'DB_cm': '', 'H': '', 'SF': '', 'DN_m': '', 'AB': '', 'V': '', 'ESPECIE ': '', 'layer': '', 'path': '', });
lyr_MapaV_1.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'ESPECIE': 'no label', 'DN_cm': 'no label', 'DB_cm': 'no label', 'H': 'no label', 'SF': 'no label', 'DN_m': 'no label', 'AB': 'no label', 'V': 'no label', 'ESPECIE ': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_MapaV_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});