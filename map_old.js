async function main() {
	var map = L.map('map', {
		center: [50, 15],
		zoom: 5,
	});

	var basemap_light = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
		maxZoom: 18,
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(map)

	var basemap_dark = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png', {
		maxZoom: 18,
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'})

	var polygon = L.polygon([
		[52, -1],
		[50, 0],
		[51, 1]
		])

	var geojson_test = L.geoJSON({
	  "type": "FeatureCollection",
	  "features": [
		{
		  "type": "Feature",
		  "properties": {},
		  "geometry": {
			"type": "Polygon",
			"coordinates": [
			  [
				[
				  4.19677734375,
				  48.42920055556841
				],
				[
				  17.38037109375,
				  48.42920055556841
				],
				[
				  17.38037109375,
				  52.2008737173322
				],
				[
				  4.19677734375,
				  52.2008737173322
				],
				[
				  4.19677734375,
				  48.42920055556841
				]
			  ]
			]
		  }
		}
	  ]
	})


	var points_json = {
		"type": "FeatureCollection",
	"name": "ENTSOG_point_locations",
	"crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
	"features": [
	{ "type": "Feature", "properties": { "ENTSOG_pointKey": "ITP-00020", "ENTSOG_pointKey_alternate": null, "ENTSOG_pointKey_alternate2": null, "ENTSOG_pointKey_alternate3": null }, "geometry": { "type": "Point", "coordinates": [ 8.078284851913994, 36.885558706258131 ] } },
	{ "type": "Feature", "properties": { "ENTSOG_pointKey": "ITP-00022", "ENTSOG_pointKey_alternate": null, "ENTSOG_pointKey_alternate2": null, "ENTSOG_pointKey_alternate3": null }, "geometry": { "type": "Point", "coordinates": [ -1.836487353595434, 57.577006677280195 ] } },
	{ "type": "Feature", "properties": { "ENTSOG_pointKey": "ITP-00024", "ENTSOG_pointKey_alternate": null, "ENTSOG_pointKey_alternate2": null, "ENTSOG_pointKey_alternate3": null }, "geometry": { "type": "Point", "coordinates": [ 28.798493424651266, 61.148632544720776 ] } },
	{ "type": "Feature", "properties": { "ENTSOG_pointKey": "ITP-00045", "ENTSOG_pointKey_alternate": null, "ENTSOG_pointKey_alternate2": null, "ENTSOG_pointKey_alternate3": null }, "geometry": { "type": "Point", "coordinates": [ 2.175958961943239, 51.021016483802391 ] } },
	{ "type": "Feature", "properties": { "ENTSOG_pointKey": "ITP-00046", "ENTSOG_pointKey_alternate": "ITP-00274", "ENTSOG_pointKey_alternate2": null, "ENTSOG_pointKey_alternate3": null }, "geometry": { "type": "Point", "coordinates": [ 26.319909905720298, 40.940641277621054 ] } },
	{ "type": "Feature", "properties": { "ENTSOG_pointKey": "ITP-00048", "ENTSOG_pointKey_alternate": null, "ENTSOG_pointKey_alternate2": null, "ENTSOG_pointKey_alternate3": null }, "geometry": { "type": "Point", "coordinates": [ -2.47577760189299, 36.831859902214468 ] } },
	{ "type": "Feature", "properties": { "ENTSOG_pointKey": "ITP-00074", "ENTSOG_pointKey_alternate": null, "ENTSOG_pointKey_alternate2": null, "ENTSOG_pointKey_alternate3": null }, "geometry": { "type": "Point", "coordinates": [ 14.269642166174227, 37.054789710313003 ] } },
	{ "type": "Feature", "properties": { "ENTSOG_pointKey": "ITP-00082", "ENTSOG_pointKey_alternate": null, "ENTSOG_pointKey_alternate2": null, "ENTSOG_pointKey_alternate3": null }, "geometry": { "type": "Point", "coordinates": [ -5.604960618896843, 36.010424245349903 ] } },
	{ "type": "Feature", "properties": { "ENTSOG_pointKey": "ITP-00084", "ENTSOG_pointKey_alternate": null, "ENTSOG_pointKey_alternate2": null, "ENTSOG_pointKey_alternate3": null }, "geometry": { "type": "Point", "coordinates": [ 23.098546745397787, 48.121078725878142 ] } },
	{ "type": "Feature", "properties": { "ENTSOG_pointKey": "ITP-00085", "ENTSOG_pointKey_alternate": null, "ENTSOG_pointKey_alternate2": null, "ENTSOG_pointKey_alternate3": null }, "geometry": { "type": "Point", "coordinates": [ 25.74716880775307, 54.718314941330199 ] } },
	{ "type": "Feature", "properties": { "ENTSOG_pointKey": "ITP-00087", "ENTSOG_pointKey_alternate": "ITP-00167", "ENTSOG_pointKey_alternate2": "ITP-00299", "ENTSOG_pointKey_alternate3": "ITP-00300" }, "geometry": { "type": "Point", "coordinates": [ 28.456293804104103, 45.287565619453517 ] } },
	{ "type": "Feature", "properties": { "ENTSOG_pointKey": "ITP-00089", "ENTSOG_pointKey_alternate": "ITP-10008", "ENTSOG_pointKey_alternate2": null, "ENTSOG_pointKey_alternate3": null }, "geometry": { "type": "Point", "coordinates": [ 22.819401387274212, 49.694337884455308 ] } },
	{ "type": "Feature", "properties": { "ENTSOG_pointKey": "ITP-00091", "ENTSOG_pointKey_alternate": null, "ENTSOG_pointKey_alternate2": null, "ENTSOG_pointKey_alternate3": null }, "geometry": { "type": "Point", "coordinates": [ 0.115836203387378, 53.657589867719182 ] } },
	{ "type": "Feature", "properties": { "ENTSOG_pointKey": "ITP-00092", "ENTSOG_pointKey_alternate": null, "ENTSOG_pointKey_alternate2": null, "ENTSOG_pointKey_alternate3": null }, "geometry": { "type": "Point", "coordinates": [ 23.252741324170746, 52.368105294735855 ] } },
	{ "type": "Feature", "properties": { "ENTSOG_pointKey": "ITP-00093", "ENTSOG_pointKey_alternate": null, "ENTSOG_pointKey_alternate2": null, "ENTSOG_pointKey_alternate3": null }, "geometry": { "type": "Point", "coordinates": [ 12.583138960910423, 37.650128607123115 ] } },
	{ "type": "Feature", "properties": { "ENTSOG_pointKey": "ITP-00094", "ENTSOG_pointKey_alternate": null, "ENTSOG_pointKey_alternate2": null, "ENTSOG_pointKey_alternate3": null }, "geometry": { "type": "Point", "coordinates": [ 23.798940029512895, 53.274285779667267 ] } },
	{ "type": "Feature", "properties": { "ENTSOG_pointKey": "ITP-00095", "ENTSOG_pointKey_alternate": "ITP-10006", "ENTSOG_pointKey_alternate2": null, "ENTSOG_pointKey_alternate3": null }, "geometry": { "type": "Point", "coordinates": [ 22.557171980576076, 48.198664182190178 ] } },
	{ "type": "Feature", "properties": { "ENTSOG_pointKey": "ITP-00104", "ENTSOG_pointKey_alternate": null, "ENTSOG_pointKey_alternate2": null, "ENTSOG_pointKey_alternate3": null }, "geometry": { "type": "Point", "coordinates": [ 23.926077661899395, 53.021823577109522 ] } },
	{ "type": "Feature", "properties": { "ENTSOG_pointKey": "ITP-00106", "ENTSOG_pointKey_alternate": null, "ENTSOG_pointKey_alternate2": null, "ENTSOG_pointKey_alternate3": null }, "geometry": { "type": "Point", "coordinates": [ 3.2210603158161, 51.315122623403802 ] } },
	{ "type": "Feature", "properties": { "ENTSOG_pointKey": "ITP-00117", "ENTSOG_pointKey_alternate": null, "ENTSOG_pointKey_alternate2": null, "ENTSOG_pointKey_alternate3": null }, "geometry": { "type": "Point", "coordinates": [ 22.160408232693243, 48.562461470517476 ] } },
	{ "type": "Feature", "properties": { "ENTSOG_pointKey": "ITP-00120", "ENTSOG_pointKey_alternate": null, "ENTSOG_pointKey_alternate2": null, "ENTSOG_pointKey_alternate3": null }, "geometry": { "type": "Point", "coordinates": [ 13.457612178611098, 54.097680156708087 ] } },
	{ "type": "Feature", "properties": { "ENTSOG_pointKey": "ITP-00173", "ENTSOG_pointKey_alternate": "ITP-00528", "ENTSOG_pointKey_alternate2": null, "ENTSOG_pointKey_alternate3": null }, "geometry": { "type": "Point", "coordinates": [ 27.015447089817247, 42.04562905051452 ] } },
	{ "type": "Feature", "properties": { "ENTSOG_pointKey": "ITP-00187", "ENTSOG_pointKey_alternate": null, "ENTSOG_pointKey_alternate2": null, "ENTSOG_pointKey_alternate3": null }, "geometry": { "type": "Point", "coordinates": [ 27.632439802265697, 57.957708898332918 ] } },
	{ "type": "Feature", "properties": { "ENTSOG_pointKey": "ITP-00208", "ENTSOG_pointKey_alternate": "ITP-00525", "ENTSOG_pointKey_alternate2": null, "ENTSOG_pointKey_alternate3": null }, "geometry": { "type": "Point", "coordinates": [ 7.487259513363004, 53.68174383592649 ] } },
	{ "type": "Feature", "properties": { "ENTSOG_pointKey": "ITP-00209", "ENTSOG_pointKey_alternate": "ITP-00210", "ENTSOG_pointKey_alternate2": null, "ENTSOG_pointKey_alternate3": null }, "geometry": { "type": "Point", "coordinates": [ 7.207138647267521, 53.342950781067053 ] } },
	{ "type": "Feature", "properties": { "ENTSOG_pointKey": "ITP-00226", "ENTSOG_pointKey_alternate": "ITP-00426", "ENTSOG_pointKey_alternate2": null, "ENTSOG_pointKey_alternate3": null }, "geometry": { "type": "Point", "coordinates": [ 28.622347236656662, 44.164405852693058 ] } },
	{ "type": "Feature", "properties": { "ENTSOG_pointKey": "ITP-00243", "ENTSOG_pointKey_alternate": null, "ENTSOG_pointKey_alternate2": null, "ENTSOG_pointKey_alternate3": null }, "geometry": { "type": "Point", "coordinates": [ 28.206073329335112, 59.367008821996009 ] } },
	{ "type": "Feature", "properties": { "ENTSOG_pointKey": "ITP-00438", "ENTSOG_pointKey_alternate": "ITP-00546", "ENTSOG_pointKey_alternate2": null, "ENTSOG_pointKey_alternate3": null }, "geometry": { "type": "Point", "coordinates": [ 26.061842487810416, 47.98783252896051 ] } },
	{ "type": "Feature", "properties": { "ENTSOG_pointKey": "ITP-00501", "ENTSOG_pointKey_alternate": null, "ENTSOG_pointKey_alternate2": null, "ENTSOG_pointKey_alternate3": null }, "geometry": { "type": "Point", "coordinates": [ 13.655610817277765, 54.148706710274944 ] } },
	{ "type": "Feature", "properties": { "ENTSOG_pointKey": "ITP-00527", "ENTSOG_pointKey_alternate": null, "ENTSOG_pointKey_alternate2": null, "ENTSOG_pointKey_alternate3": null }, "geometry": { "type": "Point", "coordinates": [ 20.658514551118625, 45.805635036054831 ] } },
	{ "type": "Feature", "properties": { "ENTSOG_pointKey": "ITP-00549", "ENTSOG_pointKey_alternate": null, "ENTSOG_pointKey_alternate2": null, "ENTSOG_pointKey_alternate3": null }, "geometry": { "type": "Point", "coordinates": [ 27.341022875451191, 42.060507845102052 ] } }
	]
	}

	//var points_json = {
	//	"type": "FeatureCollection",
	//"name": "ENTSOG_point_locations",
	//"crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
	//"features": [
	//{ "type": "Feature", "properties": { "ENTSOG_pointKey": "ITP-00117", "ENTSOG_pointKey_alternate": null, "ENTSOG_pointKey_alternate2": null, "ENTSOG_pointKey_alternate3": null }, "geometry": { "type": "Point", "coordinates": [ 22.160408232693243, 48.562461470517476 ] } },
	//]
	//}

	function read_entsog_values (json) {
		var yesterday = new Date();
		yesterday.setDate(yesterday.getDate() - 1);
		var yesterday_str = yesterday.toISOString().substring(0,10);

		for (let feature_id in json.features) {
			//console.log(json.features[feature_id])
			var ft = json.features[feature_id]
			// load data about individual points using jQuery
			url = 'https://transparency.entsog.eu/api/v1/operationalData'
			query = '?indicator=Physical Flow&directionKey=entry' + '&pointKey=' + ft.properties.ENTSOG_pointKey + '&from=' + yesterday_str + '&to=' + yesterday_str
			//console.log(url + query)

			$.getJSON(url + query, function(response) {
				var operationalData = response.operationalData[0]
				//console.log(response.operationalData[0])
				json.features[feature_id].properties.pointLabel = operationalData.pointLabel
				//console.log(operationalData.pointLabel)
			})
		}
		return json
	}
	
	// verison using connectionpoints instead on operationalData
	function read_entsog_values (json) {
		var yesterday = new Date();
		yesterday.setDate(yesterday.getDate() - 1);
		var yesterday_str = yesterday.toISOString().substring(0,10);

		for (let feature_id in json.features) {
			//console.log(json.features[feature_id])
			var ft = json.features[feature_id]
			// load data about individual points using jQuery
			url = 'https://transparency.entsog.eu/api/v1/connectionpoints'
			query = '?pointKey=' + ft.properties.ENTSOG_pointKey
			//console.log(url + query)

			$.getJSON(url + query, function(response) {
				var operationalData = response.connectionpoints[0]
				//console.log(response.connectionpoints[0])
				json.features[feature_id].properties.pointLabel = operationalData.pointLabel
				//console.log(operationalData.pointLabel)
			})
		}
		return json
	}


	//console.log(points_json)
	entsog_points_json = read_entsog_values(points_json)
	console.log(entsog_points_json)
	
	console.log(entsog_points_json.features)
	for (let feature in entsog_points_json.features) {
		console.log(entsog_points_json.features[feature])
	}

	// function onEachFeature(feature, layer) {
		// // what day was it yesterday?
		// var yesterday = new Date();
		// yesterday.setDate(yesterday.getDate() - 1);
		// var yesterday_str = yesterday.toISOString().substring(0,10);

		// // load data about individual points using jQuery
		// url = 'https://transparency.entsog.eu/api/v1/operationalData'
		// query = '?indicator=Physical Flow&directionKey=entry' + '&pointKey=' + feature.properties.ENTSOG_pointKey + '&from=' + yesterday_str + '&to=' + yesterday_str
		// console.log(url + query)

		// $.getJSON(url + query, function(response) {
			// var operationalData = response.operationalData[0]
		
			// // does this feature have a property named ENTSOG_pointKey?
			// if (feature.properties && feature.properties.ENTSOG_pointKey) {
				// layer.bindPopup(feature.properties.ENTSOG_pointKey + ' is named ' + feature.properties.pointLabel);
			// }
		// });
	// }

	function onEachFeature(feature, layer) {
		// does this feature have a property named ENTSOG_pointKey?
		console.log(feature)
		console.log(feature.properties)
		layer.bindPopup(feature.properties.ENTSOG_pointKey + ' is named ' + feature.properties.pointLabel);
	};

	//console.log(entsog_points_json)
	var entsog_points = await L.geoJSON(entsog_points_json, {
		onEachFeature:onEachFeature
	}).addTo(map);
	//console.log(entsog_points_json)

	// define groups of layers
	var baseMaps = {
		"Light basemap": basemap_light,
		"Dark basemap": basemap_dark
	};
	var overlayMaps = {
		"Cities": polygon,
		"geojson test": geojson_test,
		"ENTSOG  test": entsog_points,
	};
	L.control.layers(baseMaps, overlayMaps).addTo(map);

}
main()