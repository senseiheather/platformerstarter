//% color="#AA278D" weight=100
namespace physicsProperties {

    /**
     * @param jumpingSprite 
     * @param jumpHeight
     */
    //% jumpingSprite.shadow="variables_get" jumpingSprite.defl="mySprite"
    //% jumpHeight.defl=10

    //% block="set $jumpingSprite to jump with $jumpHeight"
    export function jump (jumpingSprite: Sprite, jumpHeight: number) {
      if (jumpingSprite.isHittingTile(CollisionDirection.Bottom)) {
          jumpingSprite.vy = jumpHeight * -1
        }  
    }

  /**
    * @param spriteForPhysics 
    * @param gravity
     */

    //% spriteForPhysics.shadow="variables_get" spriteForPhysics.delf="mySprite"
    //% gravity.delf=100
    //% block="set gravity for $spriteForPhysics with a strength of $gravity"
    export function applyGravity (spriteForPhysics: Sprite, gravity: number) {
    spriteForPhysics.ay = gravity
    }   


    /**
     * @param sprite
     */

    //% sprite.shadow="variables_get" 
    //%sprite.delf="playerSprite"

    //% block="set $sprite as player"
    export function setPlayerWithPhysics (sprite: Sprite) {
        scene.cameraFollowSprite(sprite)
        controller.moveSprite(sprite, 100, 0)
    }

  
}
