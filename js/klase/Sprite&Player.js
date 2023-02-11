class Sprite{
    constructor({position, imageSrc, frameRate = 1, animations, frameBuffer = 2, loop = true, autoplay = true}){
        this.position = position;
        this.image = new Image();
        this.image.onload = () => {
            this.loaded = true;
            this.width = this.image.width / this.frameRate;
            this.height = this.image.height;
        };
        this.image.src = imageSrc;
        this.loaded = false;
        this.frameRate = frameRate;
        this.currentFrame = 0;
        this.elapsedFrames = 0;
        this.frameBuffer = frameBuffer;
        this.animations = animations;
        this.loop = loop;
        this.autoplay = autoplay;
        if(this.animations){
            for(let key in this.animations){
                const image = new Image();
                image.src = this.animations[key].imageSrc;
                this.animations[key].image = image;
            }
            
        }

    }
    draw(){
        if(!this.loaded) return;
        const crop = {
            position:{
                x: this.width * this.currentFrame,
                y: 0
            },
            width: this.width,
            height: this.height
        }
        c.drawImage(
            this.image, 
            crop.position.x, 
            crop.position.y, 
            crop.width,
            crop.height,
            this.position.x,
            this.position.y,
            this.width,
            this.height);
            this.frames();
    }

    play(){
        this.autoplay = true;
    }
    
    frames(){
        if (!this.autoplay) return
        this.elapsedFrames++;
        if( this.elapsedFrames % this.frameBuffer === 0){
        if(this.currentFrame < this.frameRate - 1){
            this.currentFrame++
        }
        else if (this.loop){
            this.currentFrame = 0;
        }}

    }
}



class Player extends Sprite{
    constructor({
        collisionBlocks = [], imageSrc, frameRate, animations, loop
    }){
        super({imageSrc, frameRate, animations, loop});
        this.position = {
            x: 200,
            y: 200
        }
        this.velocity = {
            x: 0,
            y: 0,
        }
        this.sides = {
            bottom: this.position.y + this.height
        }
        this.gravity = 1;
        this.collisionBlocks = collisionBlocks;
        
        
    }
    /*draw(){
        c.fillStyle = 'red';
        c.fillRect(this.position.x, this.position.y, this.width, this.height);
    }*/
    update() {
        this.position.x += this.velocity.x;

        this.makeHitbox();
        this.checkForHorCollisions();
        this.applyGravity();
        this.makeHitbox();
      

        /*c.fillRect(
            this.hitbox.position.x,
            this.hitbox.position.y,
            this.hitbox.width,
            this.hitbox.height
        );*/

        this.checkForVerCollisions();
    }
    switchSprite(nameOfSprite){
        if(this.image === this.animations[nameOfSprite].image) return;
        this.currentFrame = 0;
        this.image = this.animations[nameOfSprite].image;
        this.frameRate = this.animations[nameOfSprite].frameRate;
        this.frameBuffer = this.animations[nameOfSprite].frameBuffer;
        this.loop = this.animations[nameOfSprite].loop;
    }
    makeHitbox(){
        this.hitbox ={
            position:{
                x: this.position.x + 58,
                y: this.position.y + 34
            },
            width: 54,
            height: 52
        }
    }
    checkForHorCollisions(){
        for(let i = 0; i< this.collisionBlocks.length; i++){
            const collisionBlock = this.collisionBlocks[i];

            //if collision exists
            if(
                this.hitbox.position.x <= collisionBlock.position.x + collisionBlock.width  &&
                this.hitbox.position.x + this.hitbox.width >= collisionBlock.position.x &&
                this.hitbox.position.y + this.hitbox.height >= collisionBlock.position.y &&
                this.hitbox.position.y <= collisionBlock.position.y + collisionBlock.height
                ){
                    if( this.velocity.x < 0){
                        const offset = this.hitbox.position.x - this.position.x;
                        this.position.x = collisionBlock.position.x + collisionBlock.width - offset + 0.01;
                        break;
                    }
                    if(this.velocity.x > 0){
                        const offset = this.hitbox.position.x - this.position.x + this.hitbox.width;
                        this.position.x = collisionBlock.position.x - offset - 0.01;
                        break;
                    }
            }

        }
    }
    checkForVerCollisions(){
        for(let i = 0; i< this.collisionBlocks.length; i++){
            const collisionBlock = this.collisionBlocks[i];

            //if collision exists
            if(
                this.hitbox.position.x <= collisionBlock.position.x + collisionBlock.width  &&
                this.hitbox.position.x + this.hitbox.width >= collisionBlock.position.x &&
                this.hitbox.position.y + this.hitbox.height >= collisionBlock.position.y &&
                this.hitbox.position.y <= collisionBlock.position.y + collisionBlock.height
                ){
                    if( this.velocity.y < 0){
                        this.velocity.y = 0;
                        const offset = this.hitbox.position.y - this.position.y;
                        this.position.y = collisionBlock.position.y + collisionBlock.height - offset + 0.01;
                        break;
                    }
                    if(this.velocity.y > 0){
                        this.velocity.y = 0;
                        const offset = this.hitbox.position.y - this.position.y + this.hitbox.height;
                        this.position.y = collisionBlock.position.y - offset - 0.01;
                        break;
                    }
            }

        }
    }
    applyGravity(){
        this.velocity.y += this.gravity;
        this.position.y += this.velocity.y;
        this.sides.bottom = this.position.y + this.height;

    }

    playerMovements(keys){
        if(this.preventMovement) return;
        this.velocity.x = 0;
        if(keys.right.pressed){
            this.switchSprite('runRight');
            this.velocity.x = 4;
            this.lastDirection = 'right';
        }
        else if (keys.left.pressed){
            this.switchSprite('runLeft');
            this.velocity.x = -4
            this.lastDirection = 'left';
        }
   
        else{
            if(this.lastDirection === 'left') this.switchSprite('idleLeft');
        
            else this.switchSprite('idleRight');
        
        }
    }
}