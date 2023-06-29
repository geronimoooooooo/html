{ "type": "FeatureCollection",
    "features": [
      { "type": "Feature",
        "geometry": {"type": "Point", "coordinates": [13.039265, 47.82089]},
        "properties": {"prop0": "value0"}
        },
      { "type": "Feature",
        "geometry": {
          "type": "LineString",
          "coordinates": [
            [102.0, 0.0], [103.0, 1.0], [104.0, 0.0], [105.0, 1.0]
            ]
          },
        "properties": {
          "prop0": "value0",
          "prop1": 0.0
          }
        },
      { "type": "Feature",
         "geometry": {
           "type": "Polygon",
           "coordinates": [
             [[13.039265, 47.82189], [13.038047, 47.824045], [13.03875, 47.82464], [13.040181, 47.822191], [13.039265, 47.82189]]  
               
             ]
         },
         "properties": {
           "prop0": "value0",
           "prop1": {"this": "that"}
           }
         }
       ]
     }

var json_str = JSON.stringify(returnedData, null, 8);
returnedData.type => FeatureCollection
returnedData.features[0].geometry.coordinates => 13.039265,47.82089
returnedData.features[1].geometry.coordinates => 102,0,103,1,104,0,105,1
returnedData.features[1].geometry.coordinates[0] => 102,0


$.each(returnedData.features, function(index, element) {
        $('body').append($('<div>', {
            text: element.type
        }));
    });
=>Feature
Feature
Feature


$.each(returnedData.features, function(index, element) {
        $('body').append($('<div>', {
            text: element.geometry.type
        }));
    });
=> Point
LineString
Polygon
