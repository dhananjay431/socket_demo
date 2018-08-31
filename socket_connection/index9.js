    var Dmap = function(id,data){
        this.map = new google.maps.Map(document.getElementById(data.id),data);
        return this.map
        };
   Dmap.prototype.Polyline =function(){
    var flightPath = new google.maps.Polyline({
        path: that.data.cord,
        geodesic: true,
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 2
      });
      flightPath.setMap(this.map);
      return flightPath;
   }

            play.prototype.speedInc = function (speed) {
                this.speed += speed;
            }
            play.prototype.speedDec = function (speed) {
                if(this.speed>50)
                    this.speed -= speed;
            }

            play.prototype.animateMarker=function (){
                this.target = 0;
                this._goToPoint = function () {
                    var lat = this.mark.position.lat();
                    var lng = this.mark.position.lng();
            var step = (this.speed * 1000 * this.delay) / 3600000; // in meters
            var dest = new google.maps.LatLng(this.coords[target].lat, this.coords[target].lng);
            var distance = google.maps.geometry.spherical.computeDistanceBetween(dest, this.mark.position); // in meters
            var numStep = distance / step;
            var i = 0;
            var deltaLat = (this.coords[target].lat - lat) / numStep;
            var deltaLng = (this.coords[target].lng - lng) / numStep;
            this._moveMarker = function () {
                lat += deltaLat;
                lng += deltaLng;
                i += step;
                if (i < distance) {
                    var head = google.maps.geometry.spherical.computeHeading(this.mark.getPosition(), new google.maps.LatLng(lat, lng))
                    this.icons.rotation=Math.floor(head/10)*10;
                    console.log(icons.car.rotation);
                    this.mark.setIcon(this.icons.car);
                    this.mark.setPosition(new google.maps.LatLng(lat, lng));
                    this.map.setCenter({ lat: lat, lng: lng });
                    this.start = setTimeout(this._moveMarker, this.delay);
                }
                else {
                    var head = google.maps.geometry.spherical.computeHeading(this.mark.getPosition(), new google.maps.LatLng(lat, lng));
                    this.icons.rotation=head;
                    this.mark.setIcon(this.icons);
                    this.mark.setPosition(dest);
                    this.map.setCenter({ lat: lat, lng: lng });
                    target++;
                    if (target == this.coords.length) {
                        this.flag = 'reset';
                        clearTimeout(this.start);
                    }
                    this.start = setTimeout(this._goToPoint, this.delay);
                }
            }
            this._moveMarker();
        }
        this._goToPoint();
    }
    p.then(function(){},function(){})

var f1 = function(data){
return new Promise(function(resolve, reject){

setTimeout(function(){
  resolve({a:data});
},1000);

})
}
var f2 = function(data){
return new Promise(function(resolve, reject){
data.b=20;
resolve(data);
//console.log(data);
})
}
var f3 = function(data){
return new Promise(function(resolve, reject){
data.c=30;
resolve(data);
//console.log(data);
})
}

f1(10).then(function(resp){
  f2(resp).then(function(resp){
    f3(resp).then(function(resp){
      console.log(resp);
    },function(resp){})
  },function(resp){});
},function(resp){});