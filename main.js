SCanvasVar = new fabric.Canvas("SCanvas");
player_x = 200;

 player_y = 200;

 block_image_width = 30; 

block_image_height = 30; 

var player_object= "";

 var block_image_object= "";
  
 function fatblockboy(){
     fabric.Image.fromURL("player.png", function(img){
         player_object=img;
         player_object.scaleToHeight(150);
         player_object.scaleToWidth(150);
         player_object.set({
             top:player_y,
             left:player_x
       });
     });
     canvas.add(player_object);
 }
 function fatblock(get_img){
    fabric.Image.fromURL(get_img, function(img){
        block_object=img;
        block_object.scaleToHeight(block_image_height);
        block_object.scaleToWidth(block_image_width);
        block_object.set({
            top:player_y,
            left:player_x
      });
    });
    canvas.add(block_object);
}
