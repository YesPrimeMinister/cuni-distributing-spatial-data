function main() {
	//defne map
	var map = L.map('map', {
		center: [50.05, 14.45],
		zoom: 11,
	});
	
	//define basemaps
	var basemap_light = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
		maxZoom: 18,
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(map)

	var basemap_dark = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png', {
		maxZoom: 18,
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'})

	//define district polygons and their behavior
	function onEachDistrict(feature, layer) {
		var text = feature.properties.name
		layer.bindPopup(text);
	};
	
	var style_district = function(feature) {
		return {
		fillColor: "#ff7800",
		color: "#000",
		opacity: 1,
		fillOpacity: 0.0
			};
		};
		
	var prague_city_districts = L.geoJSON(
		{onEachFeature: onEachDistrict,
		style: style_district}
	).addTo(map)

	// function read_entsog_values (json) {
		// var yesterday = new Date();
		// yesterday.setDate(yesterday.getDate() - 1);
		// var yesterday_str = yesterday.toISOString().substring(0,10);

		// for (let feature_id in json.features) {
			// //console.log(json.features[feature_id])
			// var ft = json.features[feature_id]
			// // load data about individual points using jQuery
			// url = 'https://transparency.entsog.eu/api/v1/operationalData'
			// query = '?indicator=Physical Flow&directionKey=entry' + '&pointKey=' + ft.properties.ENTSOG_pointKey + '&from=' + yesterday_str + '&to=' + yesterday_str
			// //console.log(url + query)

			// $.getJSON(url + query, function(response) {
				// var operationalData = response.operationalData[0]
				// //console.log(response.operationalData[0])
				// json.features[feature_id].properties.pointLabel = operationalData.pointLabel
				// //console.log(operationalData.pointLabel)
			// })
		// }
		// return json
	// }

	// //console.log(points_json)
	// entsog_points_json = read_entsog_values(points_json)
	// console.log(entsog_points_json)
	
	// console.log(entsog_points_json.features)
	// for (let feature in entsog_points_json.features) {
		// console.log(entsog_points_json.features[feature])
	// }

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

	// function get_fullness(container_id) {
		// console.log(container_id)
		// $.ajax({
			// headers: {"X-Access-Token": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImphY29iZHZvcmFrY3pAZ21haWwuY29tIiwiaWQiOjE0NDUsIm5hbWUiOm51bGwsInN1cm5hbWUiOm51bGwsImlhdCI6MTY2MzcwNzIwNSwiZXhwIjoxMTY2MzcwNzIwNSwiaXNzIjoiZ29sZW1pbyIsImp0aSI6IjA5NzcyNzc4LTkxMzgtNDIyYS04NzNlLTdkOGE3MDA3MmQ2MCJ9.M-nYVbnEDmtGPQrMCiS-4EYHuzXAEohIRgCShxuS5W4'},
			// dataType: "json",
			// url: 'https://private-anon-64adaef85d-golemioapi.apiary-proxy.com/v2/sortedwastestations/measurements/?containerId='+container_id,
			// success: function(data) {
				// console.log(data);
			// }
		// });
	// }
	
	function onEachFeature(feature, layer) {
		// does this feature have a property named ENTSOG_pointKey?
		//console.log(feature)
		var text = `<h4>Zaplněnost kontejnerů na adrese `+feature.properties.name+`:</h4>`
		for (let container in feature.properties.containers) {
			text = text + `<br>` + feature.properties.containers[container].trash_type.description
		}
		// $.ajax({
			// headers: {"X-Access-Token": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImphY29iZHZvcmFrY3pAZ21haWwuY29tIiwiaWQiOjE0NDUsIm5hbWUiOm51bGwsInN1cm5hbWUiOm51bGwsImlhdCI6MTY2MzcwNzIwNSwiZXhwIjoxMTY2MzcwNzIwNSwiaXNzIjoiZ29sZW1pbyIsImp0aSI6IjA5NzcyNzc4LTkxMzgtNDIyYS04NzNlLTdkOGE3MDA3MmQ2MCJ9.M-nYVbnEDmtGPQrMCiS-4EYHuzXAEohIRgCShxuS5W4'},
			// dataType: "json",
			// url: 'https://private-anon-64adaef85d-golemioapi.apiary-proxy.com/v2/sortedwastestations/'+query_str,
			// success: function(data) {
				// console.log(data);
			// }
		// });
		layer.bindPopup(text);
	};

	var layer_style = function(feature) {
		switch (feature.properties.district) {
			case 'praha-1':  return {fillColor: '#0ab86b'};
			case 'praha-2':  return {fillColor: '#6d5ecb'};
			case 'praha-3':  return {fillColor: '#ffa500'};
			case 'praha-4':  return {fillColor: '#ffa500'};
			case 'praha-5':  return {fillColor: '#ffa500'};
			case 'praha-6':  return {fillColor: '#ffa500'};
			case 'praha-7':  return {fillColor: '#ffa500'};
			case 'praha-8':  return {fillColor: '#ffa500'};
			case 'praha-9':  return {fillColor: '#ffa500'};
			case 'praha-10': return {fillColor: '#ffa500'};
			case 'praha-16': return {fillColor: '#ffa500'};
			case 'praha-18': return {fillColor: '#ffa500'};
			
		}
	};
	
	var geojsonMarkerOptions = {
		radius: 8,
		//fillColor: "#ff7800",
		color: "#000",
		weight: 1,
		opacity: 1,
		fillOpacity: 0.7
	};
	
	function get_containers() {
		$.ajax({
			headers: {"X-Access-Token": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImphY29iZHZvcmFrY3pAZ21haWwuY29tIiwiaWQiOjE0NDUsIm5hbWUiOm51bGwsInN1cm5hbWUiOm51bGwsImlhdCI6MTY2MzcwNzIwNSwiZXhwIjoxMTY2MzcwNzIwNSwiaXNzIjoiZ29sZW1pbyIsImp0aSI6IjA5NzcyNzc4LTkxMzgtNDIyYS04NzNlLTdkOGE3MDA3MmQ2MCJ9.M-nYVbnEDmtGPQrMCiS-4EYHuzXAEohIRgCShxuS5W4'},
			dataType: "json",
			url: 'https://private-anon-64adaef85d-golemioapi.apiary-proxy.com/v2/sortedwastestations/?onlyMonitored=true',
			success: function(data) {
				console.log(data);
				
				// $.ajax({
					// headers: {"X-Access-Token": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImphY29iZHZvcmFrY3pAZ21haWwuY29tIiwiaWQiOjE0NDUsIm5hbWUiOm51bGwsInN1cm5hbWUiOm51bGwsImlhdCI6MTY2MzcwNzIwNSwiZXhwIjoxMTY2MzcwNzIwNSwiaXNzIjoiZ29sZW1pbyIsImp0aSI6IjA5NzcyNzc4LTkxMzgtNDIyYS04NzNlLTdkOGE3MDA3MmQ2MCJ9.M-nYVbnEDmtGPQrMCiS-4EYHuzXAEohIRgCShxuS5W4'},
					// dataType: "json",
					// url: 'https://private-anon-64adaef85d-golemioapi.apiary-proxy.com/v2/sortedwastestations/?from',
					// success: function(data) {
						// console.log(data);
						// }
					// });
				
				
				return L.geoJSON(data, {
					onEachFeature:onEachFeature,
					pointToLayer: function (feature, latlng) {
						return L.circleMarker(latlng, geojsonMarkerOptions);
						},
					style: layer_style,
					}).addTo(map)
			}
		});
	}
	var containers = get_containers()
	
	// define groups of layers
	var baseMaps = {
		"Light basemap": basemap_light,
		"Dark basemap": basemap_dark
	};
	var overlayMaps = {
		"City districts": prague_city_districts,
		"Trash containers": containers,
	};
	L.control.layers(baseMaps, overlayMaps).addTo(map);

}
main()