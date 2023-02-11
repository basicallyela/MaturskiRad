window.addEventListener('keydown', (event) => {
    if (player.preventMovement) return;
    switch(event.key){
        case ' ':
            for (let i = 0; i < doors.length; i++){
                const door = doors[i];
                if(
                    player.hitbox.position.x <= door.position.x + door.width / 2 &&
                    player.hitbox.position.x + player.hitbox.width >= door.position.x + door.width / 2 &&
                    player.hitbox.position.y + player.hitbox.height >= door.position.y &&
                    player.hitbox.position.y <= door.position.y + door.height
                    ){
                        player.velocity.x = 0;
                        player.velocity.x = 0;
                        player.preventMovement = true;
                        door.play();
                        player.switchSprite('enterDoor');
                        return;
                    }
            }
            
            

            if(player.velocity.y === 0){
            player.velocity.y = -15;
        }
        break;

        case 'ArrowLeft':
            keys.left.pressed = true;
        break;

        case 'ArrowRight':
            keys.right.pressed = true;
        break;

        case 'w':
            if(player.velocity.y === 0){
                player.velocity.y = -15;
            }
        break;

        case 'a':
            keys.left.pressed = true;
        break;

        case 'd':
            keys.right.pressed = true;
        break;

        case 'ArrowUp':
            if(player.velocity.y === 0){
                player.velocity.y = -15;
            }
        break;
    }

});


window.addEventListener('keyup', (event) => {
    
    switch(event.key){
        case 'ArrowLeft':
            keys.left.pressed = false;
        break;

        case 'ArrowRight':
            keys.right.pressed = false;
        break;

        case 'a':
            keys.left.pressed = false;
        break;

        case 'd':
            keys.right.pressed = false;
        break;
    }

});