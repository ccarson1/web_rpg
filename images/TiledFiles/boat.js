(function(name,data){
 if(typeof onTileMapLoaded === 'undefined') {
  if(typeof TileMaps === 'undefined') TileMaps = {};
  TileMaps[name] = data;
 } else {
  onTileMapLoaded(name,data);
 }
 if(typeof module === 'object' && module && module.exports) {
  module.exports = data;
 }})("boat",
{ "compressionlevel":-1,
 "height":20,
 "infinite":false,
 "layers":[
        {
         "id":2,
         "image":"..\/PC Computer - RPG Maker MV - Blue Sky.png",
         "name":"Image Layer 1",
         "offsetx":-5.6843418860808e-14,
         "offsety":-0.33,
         "opacity":1,
         "type":"imagelayer",
         "visible":true,
         "x":0,
         "y":0
        }, 
        {
         "compression":"zlib",
         "data":"eJxjYBgFo2AU0AqIMg60C4gHSUC3JgNxChDnD5C7LQnYi+zGVCBOA+J0IM4A4kwgzgLibCDOAeJcIM6D+qWAQv+Qa28SEiZHPyHgBFTjPITS2CgYBSMJAACmJhT6",
         "encoding":"base64",
         "height":20,
         "id":4,
         "name":"middle layer",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":30,
         "x":0,
         "y":0
        }, 
        {
         "compression":"zlib",
         "data":"eJzl08dSwlAUxvHcpTspoi6QGfvK3ti5cBx7L2BbWLDrO1gegA6Whb2\/o\/87XCYMEyAhuiIzv7nnkpzvhGSiadaOVaFpAQSFiWsRQNDijFJZayWuXccGNrFlc67ZrDGMYwKTmLIx00rWNGYwiznM25hrJWsBi1jCMlZszDXKcsIFN2rgUasRH6rhMKlYdj1GUKfWWrXm1\/K8X61evgWf0LO8OfWgyOw9qr8JzWhBK9rQjm3sYBd7CGEfBzjEEY5xglOcoYFcv9D75D7bNyz0fbHs3HPyXrOGROG55ybuV+pAJ7rU2o0LXOb1Dwid\/w\/m9qAXfWrtxxWuy3zOcq5DlOaEC275\/uU7L1Cb\/U3WjSbIIyQyqtR\/kgrVoybqShNGBFHEEEcCSaSQxg1ucYd7g55yMh7wiCc84wWveMM7PvCJL3zjx6CnnIyw+B8RRBFDHAkkkUJaVN5z\/gW5prme",
         "encoding":"base64",
         "height":20,
         "id":1,
         "name":"Tile Layer 1",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":30,
         "x":0,
         "y":0
        }],
 "nextlayerid":6,
 "nextobjectid":1,
 "orientation":"orthogonal",
 "renderorder":"right-down",
 "tiledversion":"1.10.2",
 "tileheight":16,
 "tilesets":[
        {
         "columns":16,
         "firstgid":1,
         "image":"..\/PlayStation - Final Fantasy Origins Final Fantasy 2 - Ship.png",
         "imageheight":256,
         "imagewidth":256,
         "margin":0,
         "name":"PlayStation - Final Fantasy Origins Final Fantasy 2 - Ship",
         "spacing":0,
         "tilecount":256,
         "tileheight":16,
         "tilewidth":16
        }, 
        {
         "firstgid":257,
         "source":"PlayStation - Final Fantasy Origins Final Fantasy 2 - Ship.tsx"
        }],
 "tilewidth":16,
 "type":"map",
 "version":"1.10",
 "width":30
});