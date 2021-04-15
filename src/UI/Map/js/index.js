var startpoint =  "http://filhodeenton.duckbox.com.br:3591/";

var map = L.map('map').setView([51.505, 4.509], 6);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: ''
}).addTo(map);
var update_map = async () => {

    var query_input = document.getElementById('query')
    var query = query_input.value == "" ? null : query_input.value
    const url = 'http://tc13.huygens.knaw.nl/glp-ckcc/places/graph/'+query
    fetch(url).then(response => response.json())
    .then(async data => {
        var final = [
        ];

        
/*
        await data.edges.forEach(async function(edge,index){
            var sub_final = []
            await data.places.forEach(async (place,index_p) => {
                if(await place.pid == await edge.source){
                    await sub_final.push([await place.latitude,await place.longitude])
                   // var pointA = new L.LatLng(await place.latitude,await place.longitude);
                }
                if(await place.pid == await edge.target){
                     await sub_final.push([await place.latitude,await place.longitude])
                     // pointB = new L.LatLng(await place.latitude,await place.longitude);

                }
            })
            //console.log(JSON.stringify(await sub_final))
           // var pointList = [await pointA,await pointB];
            
           // var firstpolyline = new L.Polyline(await pointList, {
             //   color: 'red',
             //   weight: 3,
             //   opacity: 0.8,
             //   smoothFactor: 1
           // });
           // firstpolyline.addTo(await map);
           // await final.push(await sub_final)
        });
*/
    var final = []
    var sub_final = []
    var pointA = null
    var pointB = null

    async function asyncFunction1 (edge, cb) {

        var sub_final = []
        var asyncFunction2 = async (place, cb2) => {
            if(await place.pid == await edge.source){
                await sub_final.push([parseFloat(await place.latitude),parseFloat(await place.longitude)])
            }
            if(await place.pid == await edge.target){
                 await sub_final.push([parseFloat(await place.latitude),parseFloat(await place.longitude)])
            }
            await cb2();
        }
        
        var requests2 = data.places.map((item) => {
            return new Promise((resolve) => {
              asyncFunction2(item, resolve);
            });
        })
        
        Promise.all(requests2).then(async () => {

            await final.push(await sub_final)
            
            await cb();

        });

    }

    var requests = data.edges.map((item) => {
        return new Promise((resolve) => {
          asyncFunction1(item, resolve);
        });
    })
    
    Promise.all(requests).then(async() => {
        
        console.log(final)
        await clearMap(map)
        await final.map(async (item)=>{
            var _0i = await item[0]
            var _1i = await item[1]

            ///L.marker(await _0i).addTo(map);
            //L.marker(await _1i).addTo(map);

            var _0itemA = L.latLng(await _0i[0],await _0i[1])
            var _0itemB = L.latLng(await _1i[0],await _1i[1])
            var pointList = [await _0itemA,await _0itemB];
            console.log([_0i,_1i])
            var firstpolyline = new L.Polyline(await pointList, {
                color: 'red',
                weight: 3,
                opacity: 0.8,
                smoothFactor: 1
            });
           firstpolyline.addTo(await map);
            

        })
        
    
    });






    })









}

function clearMap(m) {
    for(var i in m._layers) {
        if(m._layers[i]._path != undefined) {
            try {
                m.removeLayer(m._layers[i]);
            }
            catch(e) {
                console.log("problem with " + e + m._layers[i]);
            }
        }
    }
}