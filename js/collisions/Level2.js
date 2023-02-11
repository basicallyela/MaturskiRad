(function(name,data){
 if(typeof onTileMapLoaded === 'undefined') {
  if(typeof TileMaps === 'undefined') TileMaps = {};
  TileMaps[name] = data;
 } else {
  onTileMapLoaded(name,data);
 }
 if(typeof module === 'object' && module && module.exports) {
  module.exports = data;
 }})("Level2",
{ "compressionlevel":-1,
 "height":8,
 "infinite":false,
 "layers":[
        {
         "data":[309, 314, 314, 314, 314, 314, 314, 314, 314, 314, 314, 314, 314, 314, 310,
            260, 352, 352, 352, 352, 352, 414, 428, 415, 352, 352, 352, 352, 352, 260,
            260, 390, 358, 357, 390, 390, 418, 241, 417, 390, 379, 390, 390, 358, 260,
            260, 241, 389, 418, 313, 310, 374, 260, 374, 241, 374, 237, 239, 389, 260,
            260, 322, 239, 442, 424, 279, 374, 279, 374, 279, 374, 256, 262, 239, 260,
            260, 275, 319, 315, 436, 352, 361, 352, 361, 352, 437, 275, 276, 277, 260,
            260, 427, 428, 428, 434, 390, 390, 390, 390, 390, 433, 428, 428, 428, 260,
            328, 314, 314, 314, 314, 314, 314, 314, 314, 314, 314, 314, 314, 314, 329],
         "height":8,
         "id":1,
         "name":"Tile Layer 1",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":15,
         "x":0,
         "y":0
        }, 
        {
         "data":[466, 466, 466, 466, 466, 466, 466, 466, 466, 466, 466, 466, 466, 466, 466,
            466, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 466,
            466, 0, 0, 0, 0, 0, 0, 466, 0, 0, 0, 0, 0, 0, 466,
            466, 466, 0, 0, 466, 466, 0, 466, 0, 466, 0, 466, 466, 0, 466,
            466, 466, 466, 0, 0, 466, 0, 466, 0, 466, 0, 466, 466, 466, 466,
            466, 466, 466, 466, 0, 0, 0, 0, 0, 0, 0, 466, 466, 466, 466,
            466, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 466,
            466, 466, 466, 466, 466, 466, 466, 466, 466, 466, 466, 466, 466, 466, 466],
         "height":8,
         "id":3,
         "name":"collisions za sad",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":15,
         "x":0,
         "y":0
        }],
 "nextlayerid":4,
 "nextobjectid":1,
 "orientation":"orthogonal",
 "renderorder":"right-down",
 "tiledversion":"1.9.2",
 "tileheight":64,
 "tilesets":[
        {
         "firstgid":1,
         "source":"..\/..\/..\/ssst\/Untitled.tsx"
        }, 
        {
         "firstgid":217,
         "source":"..\/..\/..\/tiled-20230205T142121Z-001\/tiled\/tilesets\/Main.tsx"
        }, 
        {
         "firstgid":464,
         "source":"..\/..\/..\/tiled-20230205T142121Z-001\/tiled\/tilesets\/Misc.tsx"
        }],
 "tilewidth":64,
 "type":"map",
 "version":"1.9",
 "width":15
});