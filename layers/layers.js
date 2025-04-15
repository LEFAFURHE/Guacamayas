ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:21818").setExtent([353928.654574, 968844.284379, 356234.286670, 969946.783529]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Fca_Las_Guacamayas_1 = new ol.format.GeoJSON();
var features_Fca_Las_Guacamayas_1 = format_Fca_Las_Guacamayas_1.readFeatures(json_Fca_Las_Guacamayas_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:21818'});
var jsonSource_Fca_Las_Guacamayas_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fca_Las_Guacamayas_1.addFeatures(features_Fca_Las_Guacamayas_1);
var lyr_Fca_Las_Guacamayas_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Fca_Las_Guacamayas_1, 
                style: style_Fca_Las_Guacamayas_1,
                popuplayertitle: 'Fca_Las_Guacamayas',
                interactive: false,
                title: '<img src="styles/legend/Fca_Las_Guacamayas_1.png" /> Fca_Las_Guacamayas'
            });
var format_Lineas_2 = new ol.format.GeoJSON();
var features_Lineas_2 = format_Lineas_2.readFeatures(json_Lineas_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:21818'});
var jsonSource_Lineas_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lineas_2.addFeatures(features_Lineas_2);
var lyr_Lineas_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lineas_2, 
                style: style_Lineas_2,
                popuplayertitle: 'Lineas',
                interactive: false,
                title: '<img src="styles/legend/Lineas_2.png" /> Lineas'
            });
var format_Curvas_Nivel_3 = new ol.format.GeoJSON();
var features_Curvas_Nivel_3 = format_Curvas_Nivel_3.readFeatures(json_Curvas_Nivel_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:21818'});
var jsonSource_Curvas_Nivel_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Curvas_Nivel_3.addFeatures(features_Curvas_Nivel_3);
var lyr_Curvas_Nivel_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Curvas_Nivel_3, 
                style: style_Curvas_Nivel_3,
                popuplayertitle: 'Curvas_Nivel',
                interactive: true,
    title: 'Curvas_Nivel<br />\
    <img src="styles/legend/Curvas_Nivel_3_0.png" /> 76,000000000000000<br />\
    <img src="styles/legend/Curvas_Nivel_3_1.png" /> 77,000000000000000<br />\
    <img src="styles/legend/Curvas_Nivel_3_2.png" /> 78,000000000000000<br />\
    <img src="styles/legend/Curvas_Nivel_3_3.png" /> 79,000000000000000<br />\
    <img src="styles/legend/Curvas_Nivel_3_4.png" /> 80,000000000000000<br />\
    <img src="styles/legend/Curvas_Nivel_3_5.png" /> 81,000000000000000<br />\
    <img src="styles/legend/Curvas_Nivel_3_6.png" /> 82,000000000000000<br />\
    <img src="styles/legend/Curvas_Nivel_3_7.png" /> 83,000000000000000<br />\
    <img src="styles/legend/Curvas_Nivel_3_8.png" /> 84,000000000000000<br />\
    <img src="styles/legend/Curvas_Nivel_3_9.png" /> 85,000000000000000<br />\
    <img src="styles/legend/Curvas_Nivel_3_10.png" /> 86,000000000000000<br />\
    <img src="styles/legend/Curvas_Nivel_3_11.png" /> 87,000000000000000<br />\
    <img src="styles/legend/Curvas_Nivel_3_12.png" /> 88,000000000000000<br />\
    <img src="styles/legend/Curvas_Nivel_3_13.png" /> 89,000000000000000<br />\
    <img src="styles/legend/Curvas_Nivel_3_14.png" /> 90,000000000000000<br />\
    <img src="styles/legend/Curvas_Nivel_3_15.png" /> 91,000000000000000<br />\
    <img src="styles/legend/Curvas_Nivel_3_16.png" /> 92,000000000000000<br />\
    <img src="styles/legend/Curvas_Nivel_3_17.png" /> 93,000000000000000<br />\
    <img src="styles/legend/Curvas_Nivel_3_18.png" /> 94,000000000000000<br />\
    <img src="styles/legend/Curvas_Nivel_3_19.png" /> 95,000000000000000<br />\
    <img src="styles/legend/Curvas_Nivel_3_20.png" /> 96,000000000000000<br />\
    <img src="styles/legend/Curvas_Nivel_3_21.png" /> 97,000000000000000<br />\
    <img src="styles/legend/Curvas_Nivel_3_22.png" /> 98,000000000000000<br />\
    <img src="styles/legend/Curvas_Nivel_3_23.png" /> 99,000000000000000<br />\
    <img src="styles/legend/Curvas_Nivel_3_24.png" /> 100,000000000000000<br />\
    <img src="styles/legend/Curvas_Nivel_3_25.png" /> 101,000000000000000<br />\
    <img src="styles/legend/Curvas_Nivel_3_26.png" /> 102,000000000000000<br />\
    <img src="styles/legend/Curvas_Nivel_3_27.png" /> 103,000000000000000<br />\
    <img src="styles/legend/Curvas_Nivel_3_28.png" /> 104,000000000000000<br />\
    <img src="styles/legend/Curvas_Nivel_3_29.png" /> 105,000000000000000<br />\
    <img src="styles/legend/Curvas_Nivel_3_30.png" /> 106,000000000000000<br />\
    <img src="styles/legend/Curvas_Nivel_3_31.png" /> 107,000000000000000<br />\
    <img src="styles/legend/Curvas_Nivel_3_32.png" /> 108,000000000000000<br />\
    <img src="styles/legend/Curvas_Nivel_3_33.png" /> 109,000000000000000<br />\
    <img src="styles/legend/Curvas_Nivel_3_34.png" /> 110,000000000000000<br />\
    <img src="styles/legend/Curvas_Nivel_3_35.png" /> 111,000000000000000<br />\
    <img src="styles/legend/Curvas_Nivel_3_36.png" /> 112,000000000000000<br />\
    <img src="styles/legend/Curvas_Nivel_3_37.png" /> 113,000000000000000<br />\
    <img src="styles/legend/Curvas_Nivel_3_38.png" /> 114,000000000000000<br />\
    <img src="styles/legend/Curvas_Nivel_3_39.png" /> 115,000000000000000<br />\
    <img src="styles/legend/Curvas_Nivel_3_40.png" /> 116,000000000000000<br />\
    <img src="styles/legend/Curvas_Nivel_3_41.png" /> 117,000000000000000<br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_Fca_Las_Guacamayas_1.setVisible(true);lyr_Lineas_2.setVisible(true);lyr_Curvas_Nivel_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Fca_Las_Guacamayas_1,lyr_Lineas_2,lyr_Curvas_Nivel_3];
lyr_Fca_Las_Guacamayas_1.set('fieldAliases', {'id': 'id', 'Área': 'Área', });
lyr_Lineas_2.set('fieldAliases', {'id': 'id', });
lyr_Curvas_Nivel_3.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'ELEV': 'ELEV', });
lyr_Fca_Las_Guacamayas_1.set('fieldImages', {'id': 'TextEdit', 'Área': 'TextEdit', });
lyr_Lineas_2.set('fieldImages', {'id': 'TextEdit', });
lyr_Curvas_Nivel_3.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'ELEV': 'TextEdit', });
lyr_Fca_Las_Guacamayas_1.set('fieldLabels', {'id': 'hidden field', 'Área': 'inline label - always visible', });
lyr_Lineas_2.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_Curvas_Nivel_3.set('fieldLabels', {'fid': 'hidden field', 'ID': 'hidden field', 'ELEV': 'inline label - always visible', });
lyr_Curvas_Nivel_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});