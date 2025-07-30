var wms_layers = [];


        var lyr_ESRIWorldTopo_0 = new ol.layer.Tile({
            'title': 'ESRI World Topo',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_studyarewa_1 = new ol.format.GeoJSON();
var features_studyarewa_1 = format_studyarewa_1.readFeatures(json_studyarewa_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_studyarewa_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_studyarewa_1.addFeatures(features_studyarewa_1);
var lyr_studyarewa_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_studyarewa_1, 
                style: style_studyarewa_1,
                popuplayertitle: 'study arewa',
                interactive: false,
                title: '<img src="styles/legend/studyarewa_1.png" /> study arewa'
            });
var format_Wilpattu_2 = new ol.format.GeoJSON();
var features_Wilpattu_2 = format_Wilpattu_2.readFeatures(json_Wilpattu_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Wilpattu_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Wilpattu_2.addFeatures(features_Wilpattu_2);
var lyr_Wilpattu_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Wilpattu_2, 
                style: style_Wilpattu_2,
                popuplayertitle: 'Wilpattu',
                interactive: false,
                title: '<img src="styles/legend/Wilpattu_2.png" /> Wilpattu'
            });
var format_Vankalai_3 = new ol.format.GeoJSON();
var features_Vankalai_3 = format_Vankalai_3.readFeatures(json_Vankalai_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vankalai_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vankalai_3.addFeatures(features_Vankalai_3);
var lyr_Vankalai_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Vankalai_3, 
                style: style_Vankalai_3,
                popuplayertitle: 'Vankalai',
                interactive: false,
                title: '<img src="styles/legend/Vankalai_3.png" /> Vankalai'
            });
var format_Thalaimannar_4 = new ol.format.GeoJSON();
var features_Thalaimannar_4 = format_Thalaimannar_4.readFeatures(json_Thalaimannar_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Thalaimannar_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Thalaimannar_4.addFeatures(features_Thalaimannar_4);
var lyr_Thalaimannar_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Thalaimannar_4, 
                style: style_Thalaimannar_4,
                popuplayertitle: 'Thalaimannar',
                interactive: false,
                title: '<img src="styles/legend/Thalaimannar_4.png" /> Thalaimannar'
            });
var format_Barreefsanctuary_5 = new ol.format.GeoJSON();
var features_Barreefsanctuary_5 = format_Barreefsanctuary_5.readFeatures(json_Barreefsanctuary_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Barreefsanctuary_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Barreefsanctuary_5.addFeatures(features_Barreefsanctuary_5);
var lyr_Barreefsanctuary_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Barreefsanctuary_5, 
                style: style_Barreefsanctuary_5,
                popuplayertitle: 'Bar reef sanctuary',
                interactive: false,
                title: '<img src="styles/legend/Barreefsanctuary_5.png" /> Bar reef sanctuary'
            });
var format_mangrovesstudyarea_6 = new ol.format.GeoJSON();
var features_mangrovesstudyarea_6 = format_mangrovesstudyarea_6.readFeatures(json_mangrovesstudyarea_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mangrovesstudyarea_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mangrovesstudyarea_6.addFeatures(features_mangrovesstudyarea_6);
var lyr_mangrovesstudyarea_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_mangrovesstudyarea_6, 
                style: style_mangrovesstudyarea_6,
                popuplayertitle: 'mangroves study area',
                interactive: false,
                title: '<img src="styles/legend/mangrovesstudyarea_6.png" /> mangroves study area'
            });
var format_Ecosensitiveareas_7 = new ol.format.GeoJSON();
var features_Ecosensitiveareas_7 = format_Ecosensitiveareas_7.readFeatures(json_Ecosensitiveareas_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ecosensitiveareas_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ecosensitiveareas_7.addFeatures(features_Ecosensitiveareas_7);
var lyr_Ecosensitiveareas_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ecosensitiveareas_7, 
                style: style_Ecosensitiveareas_7,
                popuplayertitle: 'Eco sensitive areas',
                interactive: true,
    title: 'Eco sensitive areas<br />\
    <img src="styles/legend/Ecosensitiveareas_7_0.png" /> Bar reef sanctuary<br />\
    <img src="styles/legend/Ecosensitiveareas_7_1.png" /> Bird sanctuary<br />\
    <img src="styles/legend/Ecosensitiveareas_7_2.png" /> Eco park<br />\
    <img src="styles/legend/Ecosensitiveareas_7_3.png" /> Mangroves<br />\
    <img src="styles/legend/Ecosensitiveareas_7_4.png" /> Thalaimannr coast<br />\
    <img src="styles/legend/Ecosensitiveareas_7_5.png" /> Wilpattu national park<br />' });
var format_Mangroves_8 = new ol.format.GeoJSON();
var features_Mangroves_8 = format_Mangroves_8.readFeatures(json_Mangroves_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mangroves_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mangroves_8.addFeatures(features_Mangroves_8);
cluster_Mangroves_8 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Mangroves_8
});
var lyr_Mangroves_8 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Mangroves_8, 
                style: style_Mangroves_8,
                popuplayertitle: 'Mangroves',
                interactive: false,
                title: '<img src="styles/legend/Mangroves_8.png" /> Mangroves'
            });

lyr_ESRIWorldTopo_0.setVisible(true);lyr_studyarewa_1.setVisible(true);lyr_Wilpattu_2.setVisible(true);lyr_Vankalai_3.setVisible(true);lyr_Thalaimannar_4.setVisible(true);lyr_Barreefsanctuary_5.setVisible(true);lyr_mangrovesstudyarea_6.setVisible(true);lyr_Ecosensitiveareas_7.setVisible(true);lyr_Mangroves_8.setVisible(true);
var layersList = [lyr_ESRIWorldTopo_0,lyr_studyarewa_1,lyr_Wilpattu_2,lyr_Vankalai_3,lyr_Thalaimannar_4,lyr_Barreefsanctuary_5,lyr_mangrovesstudyarea_6,lyr_Ecosensitiveareas_7,lyr_Mangroves_8];
lyr_studyarewa_1.set('fieldAliases', {'ADM2_EN': 'ADM2_EN', 'ADM2_SI': 'ADM2_SI', 'ADM2_TA': 'ADM2_TA', 'ADM2_PCODE': 'ADM2_PCODE', 'ADM1_EN': 'ADM1_EN', 'ADM1_SI': 'ADM1_SI', 'ADM1_TA': 'ADM1_TA', 'ADM1_PCODE': 'ADM1_PCODE', 'ADM0_EN': 'ADM0_EN', 'ADM0_SI': 'ADM0_SI', 'ADM0_TA': 'ADM0_TA', 'ADM0_PCODE': 'ADM0_PCODE', });
lyr_Wilpattu_2.set('fieldAliases', {'WDPAID': 'WDPAID', 'WDPA_PID': 'WDPA_PID', 'PA_DEF': 'PA_DEF', 'NAME': 'NAME', 'ORIG_NAME': 'ORIG_NAME', 'DESIG': 'DESIG', 'DESIG_ENG': 'DESIG_ENG', 'DESIG_TYPE': 'DESIG_TYPE', 'IUCN_CAT': 'IUCN_CAT', 'INT_CRIT': 'INT_CRIT', 'MARINE': 'MARINE', 'REP_M_AREA': 'REP_M_AREA', 'GIS_M_AREA': 'GIS_M_AREA', 'REP_AREA': 'REP_AREA', 'GIS_AREA': 'GIS_AREA', 'NO_TAKE': 'NO_TAKE', 'NO_TK_AREA': 'NO_TK_AREA', 'STATUS': 'STATUS', 'STATUS_YR': 'STATUS_YR', 'GOV_TYPE': 'GOV_TYPE', 'OWN_TYPE': 'OWN_TYPE', 'MANG_AUTH': 'MANG_AUTH', 'MANG_PLAN': 'MANG_PLAN', 'VERIF': 'VERIF', 'METADATAID': 'METADATAID', 'SUB_LOC': 'SUB_LOC', 'PARENT_ISO': 'PARENT_ISO', 'ISO3': 'ISO3', 'SUPP_INFO': 'SUPP_INFO', 'CONS_OBJ': 'CONS_OBJ', });
lyr_Vankalai_3.set('fieldAliases', {'WDPAID': 'WDPAID', 'WDPA_PID': 'WDPA_PID', 'PA_DEF': 'PA_DEF', 'NAME': 'NAME', 'ORIG_NAME': 'ORIG_NAME', 'DESIG': 'DESIG', 'DESIG_ENG': 'DESIG_ENG', 'DESIG_TYPE': 'DESIG_TYPE', 'IUCN_CAT': 'IUCN_CAT', 'INT_CRIT': 'INT_CRIT', 'MARINE': 'MARINE', 'REP_M_AREA': 'REP_M_AREA', 'GIS_M_AREA': 'GIS_M_AREA', 'REP_AREA': 'REP_AREA', 'GIS_AREA': 'GIS_AREA', 'NO_TAKE': 'NO_TAKE', 'NO_TK_AREA': 'NO_TK_AREA', 'STATUS': 'STATUS', 'STATUS_YR': 'STATUS_YR', 'GOV_TYPE': 'GOV_TYPE', 'OWN_TYPE': 'OWN_TYPE', 'MANG_AUTH': 'MANG_AUTH', 'MANG_PLAN': 'MANG_PLAN', 'VERIF': 'VERIF', 'METADATAID': 'METADATAID', 'SUB_LOC': 'SUB_LOC', 'PARENT_ISO': 'PARENT_ISO', 'ISO3': 'ISO3', 'SUPP_INFO': 'SUPP_INFO', 'CONS_OBJ': 'CONS_OBJ', });
lyr_Thalaimannar_4.set('fieldAliases', {'id': 'id', });
lyr_Barreefsanctuary_5.set('fieldAliases', {'id': 'id', });
lyr_mangrovesstudyarea_6.set('fieldAliases', {'PXLVAL': 'PXLVAL', });
lyr_Ecosensitiveareas_7.set('fieldAliases', {'id': 'id', 'Type': 'Type', 'Issues': 'Issues', 'Threaats': 'Threaats', });
lyr_Mangroves_8.set('fieldAliases', {'id': 'id', 'Type': 'Type', 'Issues': 'Issues', 'Threaats': 'Threaats', });
lyr_studyarewa_1.set('fieldImages', {'ADM2_EN': 'TextEdit', 'ADM2_SI': 'TextEdit', 'ADM2_TA': 'TextEdit', 'ADM2_PCODE': 'TextEdit', 'ADM1_EN': 'TextEdit', 'ADM1_SI': 'TextEdit', 'ADM1_TA': 'TextEdit', 'ADM1_PCODE': 'TextEdit', 'ADM0_EN': 'TextEdit', 'ADM0_SI': 'TextEdit', 'ADM0_TA': 'TextEdit', 'ADM0_PCODE': 'TextEdit', });
lyr_Wilpattu_2.set('fieldImages', {'WDPAID': 'TextEdit', 'WDPA_PID': 'TextEdit', 'PA_DEF': 'TextEdit', 'NAME': 'TextEdit', 'ORIG_NAME': 'TextEdit', 'DESIG': 'TextEdit', 'DESIG_ENG': 'TextEdit', 'DESIG_TYPE': 'TextEdit', 'IUCN_CAT': 'TextEdit', 'INT_CRIT': 'TextEdit', 'MARINE': 'TextEdit', 'REP_M_AREA': 'TextEdit', 'GIS_M_AREA': 'TextEdit', 'REP_AREA': 'TextEdit', 'GIS_AREA': 'TextEdit', 'NO_TAKE': 'TextEdit', 'NO_TK_AREA': 'TextEdit', 'STATUS': 'TextEdit', 'STATUS_YR': 'Range', 'GOV_TYPE': 'TextEdit', 'OWN_TYPE': 'TextEdit', 'MANG_AUTH': 'TextEdit', 'MANG_PLAN': 'TextEdit', 'VERIF': 'TextEdit', 'METADATAID': 'Range', 'SUB_LOC': 'TextEdit', 'PARENT_ISO': 'TextEdit', 'ISO3': 'TextEdit', 'SUPP_INFO': 'TextEdit', 'CONS_OBJ': 'TextEdit', });
lyr_Vankalai_3.set('fieldImages', {'WDPAID': '', 'WDPA_PID': '', 'PA_DEF': '', 'NAME': '', 'ORIG_NAME': '', 'DESIG': '', 'DESIG_ENG': '', 'DESIG_TYPE': '', 'IUCN_CAT': '', 'INT_CRIT': '', 'MARINE': '', 'REP_M_AREA': '', 'GIS_M_AREA': '', 'REP_AREA': '', 'GIS_AREA': '', 'NO_TAKE': '', 'NO_TK_AREA': '', 'STATUS': '', 'STATUS_YR': '', 'GOV_TYPE': '', 'OWN_TYPE': '', 'MANG_AUTH': '', 'MANG_PLAN': '', 'VERIF': '', 'METADATAID': '', 'SUB_LOC': '', 'PARENT_ISO': '', 'ISO3': '', 'SUPP_INFO': '', 'CONS_OBJ': '', });
lyr_Thalaimannar_4.set('fieldImages', {'id': 'TextEdit', });
lyr_Barreefsanctuary_5.set('fieldImages', {'id': 'TextEdit', });
lyr_mangrovesstudyarea_6.set('fieldImages', {'PXLVAL': 'Range', });
lyr_Ecosensitiveareas_7.set('fieldImages', {'id': 'TextEdit', 'Type': 'TextEdit', 'Issues': 'TextEdit', 'Threaats': 'TextEdit', });
lyr_Mangroves_8.set('fieldImages', {'id': 'TextEdit', 'Type': 'TextEdit', 'Issues': 'TextEdit', 'Threaats': 'TextEdit', });
lyr_studyarewa_1.set('fieldLabels', {'ADM2_EN': 'no label', 'ADM2_SI': 'no label', 'ADM2_TA': 'no label', 'ADM2_PCODE': 'no label', 'ADM1_EN': 'no label', 'ADM1_SI': 'no label', 'ADM1_TA': 'no label', 'ADM1_PCODE': 'no label', 'ADM0_EN': 'no label', 'ADM0_SI': 'no label', 'ADM0_TA': 'no label', 'ADM0_PCODE': 'no label', });
lyr_Wilpattu_2.set('fieldLabels', {'WDPAID': 'no label', 'WDPA_PID': 'no label', 'PA_DEF': 'no label', 'NAME': 'no label', 'ORIG_NAME': 'no label', 'DESIG': 'no label', 'DESIG_ENG': 'no label', 'DESIG_TYPE': 'no label', 'IUCN_CAT': 'no label', 'INT_CRIT': 'no label', 'MARINE': 'no label', 'REP_M_AREA': 'no label', 'GIS_M_AREA': 'no label', 'REP_AREA': 'no label', 'GIS_AREA': 'no label', 'NO_TAKE': 'no label', 'NO_TK_AREA': 'no label', 'STATUS': 'no label', 'STATUS_YR': 'no label', 'GOV_TYPE': 'no label', 'OWN_TYPE': 'no label', 'MANG_AUTH': 'no label', 'MANG_PLAN': 'no label', 'VERIF': 'no label', 'METADATAID': 'no label', 'SUB_LOC': 'no label', 'PARENT_ISO': 'no label', 'ISO3': 'no label', 'SUPP_INFO': 'no label', 'CONS_OBJ': 'no label', });
lyr_Vankalai_3.set('fieldLabels', {'WDPAID': 'hidden field', 'WDPA_PID': 'hidden field', 'PA_DEF': 'hidden field', 'NAME': 'hidden field', 'ORIG_NAME': 'no label', 'DESIG': 'no label', 'DESIG_ENG': 'no label', 'DESIG_TYPE': 'no label', 'IUCN_CAT': 'no label', 'INT_CRIT': 'no label', 'MARINE': 'no label', 'REP_M_AREA': 'no label', 'GIS_M_AREA': 'no label', 'REP_AREA': 'no label', 'GIS_AREA': 'no label', 'NO_TAKE': 'no label', 'NO_TK_AREA': 'no label', 'STATUS': 'no label', 'STATUS_YR': 'no label', 'GOV_TYPE': 'no label', 'OWN_TYPE': 'no label', 'MANG_AUTH': 'no label', 'MANG_PLAN': 'no label', 'VERIF': 'no label', 'METADATAID': 'no label', 'SUB_LOC': 'no label', 'PARENT_ISO': 'no label', 'ISO3': 'no label', 'SUPP_INFO': 'no label', 'CONS_OBJ': 'no label', });
lyr_Thalaimannar_4.set('fieldLabels', {'id': 'hidden field', });
lyr_Barreefsanctuary_5.set('fieldLabels', {'id': 'hidden field', });
lyr_mangrovesstudyarea_6.set('fieldLabels', {'PXLVAL': 'hidden field', });
lyr_Ecosensitiveareas_7.set('fieldLabels', {'id': 'hidden field', 'Type': 'inline label - always visible', 'Issues': 'inline label - always visible', 'Threaats': 'inline label - always visible', });
lyr_Mangroves_8.set('fieldLabels', {'id': 'no label', 'Type': 'no label', 'Issues': 'no label', 'Threaats': 'no label', });
lyr_Mangroves_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});