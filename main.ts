controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(assets.image`ball`, mySprite, 50, 0)
    music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.UntilDone)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.fire, 5000)
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(mySprite, effects.rings, 1000)
    music.play(music.createSong(assets.song`GAME OVER`), music.PlaybackMode.UntilDone)
    game.gameOver(false)
})
let projectile3: Sprite = null
let projectile2: Sprite = null
let projectile: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(assets.image`grunt`, SpriteKind.Player)
scene.setBackgroundImage(assets.image`feild`)
controller.moveSprite(mySprite, 0, 100)
game.setGameOverMessage(false, "TakeDown!")
music.play(music.createSong(assets.song`Touchdown`), music.PlaybackMode.LoopingInBackground)
forever(function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`Normal guy run`,
    100,
    true
    )
    animation.runImageAnimation(
    projectile2,
    assets.animation`evil run`,
    100,
    true
    )
})
forever(function () {
    pause(10000)
    projectile3 = sprites.createProjectileFromSide(assets.image`big ball`, -50, 0)
    projectile3.y = randint(15, 155)
    projectile3.setKind(SpriteKind.Enemy)
})
forever(function () {
    pause(5000)
    projectile2 = sprites.createProjectileFromSide(assets.image`Evil guy`, -50, 0)
    projectile2.y = randint(15, 155)
    projectile2.setKind(SpriteKind.Enemy)
})
