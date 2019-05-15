const long2tile = function(lon:number, zoom:number){
    return (Math.floor((lon+180)/360 * Math.pow(2,zoom)));
};

const lat2tile = function(lat:number, zoom:number){
    return (Math.floor((1-Math.log(Math.tan(lat*Math.PI/180) + 1/Math.cos(lat*Math.PI/180))/Math.PI)/2 *Math.pow(2,zoom)));
};

const tile2Long = function(x:number, z:number){
    return (x/Math.pow(2,z)*360-180);
};

const tile2lat = function(y:number, z:number){
    const n=Math.PI-2*Math.PI*y/Math.pow(2,z);
    return (180/Math.PI*Math.atan(0.5*(Math.exp(n)-Math.exp(-n))));
};

export {
    long2tile,
    lat2tile,
    tile2Long,
    tile2lat
}