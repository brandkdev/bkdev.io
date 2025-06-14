var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://tile.osm.org/{z}/{x}/{y}.png'
            })
        });
var format_QTHs_1 = new ol.format.GeoJSON();
var features_QTHs_1 = format_QTHs_1.readFeatures(json_QTHs_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QTHs_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QTHs_1.addFeatures(features_QTHs_1);
var lyr_QTHs_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QTHs_1, 
                style: style_QTHs_1,
                popuplayertitle: 'QTHs',
                interactive: true,
                title: '<img src="styles/legend/QTHs_1.png" /> QTHs'
            });
var format_Repeaters_2 = new ol.format.GeoJSON();
var features_Repeaters_2 = format_Repeaters_2.readFeatures(json_Repeaters_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Repeaters_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Repeaters_2.addFeatures(features_Repeaters_2);
var lyr_Repeaters_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Repeaters_2, 
                style: style_Repeaters_2,
                popuplayertitle: 'Repeaters',
                interactive: true,
                title: '<img src="styles/legend/Repeaters_2.png" /> Repeaters'
            });
var format_CRGRepeaters_3 = new ol.format.GeoJSON();
var features_CRGRepeaters_3 = format_CRGRepeaters_3.readFeatures(json_CRGRepeaters_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CRGRepeaters_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CRGRepeaters_3.addFeatures(features_CRGRepeaters_3);
var lyr_CRGRepeaters_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CRGRepeaters_3, 
                style: style_CRGRepeaters_3,
                popuplayertitle: 'CRGRepeaters',
                interactive: true,
                title: '<img src="styles/legend/CRGRepeaters_3.png" /> CRGRepeaters'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_QTHs_1.setVisible(true);lyr_Repeaters_2.setVisible(true);lyr_CRGRepeaters_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_QTHs_1,lyr_Repeaters_2,lyr_CRGRepeaters_3];
lyr_QTHs_1.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'Callsign': 'Callsign', 'Notes': 'Notes', });
lyr_Repeaters_2.set('fieldAliases', {'Output Freq': 'Output Freq', 'Input Freq': 'Input Freq', 'Offset': 'Offset', 'Uplink Tone': 'Uplink Tone', 'Downlink Tone': 'Downlink Tone', 'Location': 'Location', 'County': 'County', 'Lat': 'Lat', 'Long': 'Long', 'Call': 'Call', 'Use': 'Use', 'Op Status': 'Op Status', 'Mode': 'Mode', 'Digital Access': 'Digital Access', 'EchoLink': 'EchoLink', 'IRLP': 'IRLP', 'AllStar': 'AllStar', 'Coverage': 'Coverage', 'Status': 'Status', 'Last Update': 'Last Update', });
lyr_CRGRepeaters_3.set('fieldAliases', {'id': 'id', 'Call': 'Call', 'OutputFreq': 'OutputFreq', 'InputFreq': 'InputFreq', 'Offset': 'Offset', 'UplinkTone': 'UplinkTone', 'DlinkTone': 'DlinkTone', 'Name': 'Name', });
lyr_QTHs_1.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'Callsign': 'TextEdit', 'Notes': 'TextEdit', });
lyr_Repeaters_2.set('fieldImages', {'Output Freq': 'TextEdit', 'Input Freq': 'TextEdit', 'Offset': 'TextEdit', 'Uplink Tone': 'TextEdit', 'Downlink Tone': 'TextEdit', 'Location': 'TextEdit', 'County': 'TextEdit', 'Lat': 'TextEdit', 'Long': 'TextEdit', 'Call': 'TextEdit', 'Use': 'TextEdit', 'Op Status': 'TextEdit', 'Mode': 'TextEdit', 'Digital Access': 'Range', 'EchoLink': 'Range', 'IRLP': 'Range', 'AllStar': 'Range', 'Coverage': 'TextEdit', 'Status': 'TextEdit', 'Last Update': 'TextEdit', });
lyr_CRGRepeaters_3.set('fieldImages', {'id': 'TextEdit', 'Call': 'TextEdit', 'OutputFreq': 'TextEdit', 'InputFreq': 'TextEdit', 'Offset': 'TextEdit', 'UplinkTone': 'TextEdit', 'DlinkTone': 'TextEdit', 'Name': 'TextEdit', });
lyr_QTHs_1.set('fieldLabels', {'id': 'no label', 'Name': 'inline label - always visible', 'Callsign': 'no label', 'Notes': 'no label', });
lyr_Repeaters_2.set('fieldLabels', {'Output Freq': 'no label', 'Input Freq': 'no label', 'Offset': 'no label', 'Uplink Tone': 'no label', 'Downlink Tone': 'no label', 'Location': 'no label', 'County': 'no label', 'Lat': 'no label', 'Long': 'no label', 'Call': 'inline label - always visible', 'Use': 'no label', 'Op Status': 'no label', 'Mode': 'no label', 'Digital Access': 'no label', 'EchoLink': 'no label', 'IRLP': 'no label', 'AllStar': 'no label', 'Coverage': 'no label', 'Status': 'no label', 'Last Update': 'no label', });
lyr_CRGRepeaters_3.set('fieldLabels', {'id': 'no label', 'Call': 'no label', 'OutputFreq': 'no label', 'InputFreq': 'no label', 'Offset': 'no label', 'UplinkTone': 'no label', 'DlinkTone': 'no label', 'Name': 'inline label - always visible', });
lyr_CRGRepeaters_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});