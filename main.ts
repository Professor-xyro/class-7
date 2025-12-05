sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function on_on_overlap(sprite: Sprite, otherSprite: Sprite) {
    info.changeLifeBy(-1)
    scene.cameraShake(4, 500)
    sprites.destroy(otherSprite)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function on_on_overlap2(sprite2: Sprite, otherSprite2: Sprite) {
    sprites.destroy(otherSprite2)
    info.changeScoreBy(1)
    sprite2.startEffect(effects.hearts)
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
})
let projectile : Sprite = null
let choice = 0
scene.setBackgroundColor(13)
let mySprite = sprites.create(img`
        . . . . . . f f f f . . . . . .
        . . . . f f f 2 2 f f f . . . .
        . . . f f f 2 2 2 2 f f f . . .
        . . f f f e e e e e e f f f . .
        . . f f e 2 2 2 2 2 2 e e f . .
        . . f e 2 f f f f f f 2 e f . .
        . . f f f f e e e e f f f f . .
        . f f e f b f 4 4 f b f e f f .
        . f e e 4 1 f d d f 1 4 e e f .
        . . f e e d d d d d d e e f . .
        . . . f e e 4 4 4 4 e e f . . .
        . . e 4 f 2 2 2 2 2 2 f 4 e . .
        . . 4 d f 2 2 2 2 2 2 f d 4 . .
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . .
        . . . . . f f f f f f . . . . .
        . . . . . f f . . f f . . . . .
        `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
mySprite.setStayInScreen(true)
info.setLife(3)
game.onUpdateInterval(500, function on_update_interval() {
    
    choice = randint(1, 3)
    if (choice == 1) {
        projectile = sprites.createProjectileFromSide(img`
                . . . . . . b b b b . . . . . .
                . . . . . . b 4 4 4 b . . . . .
                . . . . . . b b 4 4 4 b . . . .
                . . . . . b 4 b b b 4 4 b . . .
                . . . . b d 5 5 5 4 b 4 4 b . .
                . . . . b 3 2 3 5 5 4 e 4 4 b .
                . . . b d 2 2 2 5 7 5 4 e 4 4 e
                . . . b 5 3 2 3 5 5 5 5 e e e e
                . . b d 7 5 5 5 3 2 3 5 5 e e e
                . . b 5 5 5 5 5 2 2 2 5 5 d e e
                . b 3 2 3 5 7 5 3 2 3 5 d d e 4
                . b 2 2 2 5 5 5 5 5 5 d d e 4 .
                b d 3 2 d 5 5 5 d d d 4 4 . . .
                b 5 5 5 5 d d 4 4 4 4 . . . . .
                4 d d d 4 4 4 . . . . . . . . .
                4 4 4 4 . . . . . . . . . . . .
                `, -60, 0)
    } else if (choice == 2) {
        projectile = sprites.createProjectileFromSide(img`
                . . . . . 3 3 b 3 3 d d 3 3 . .
                . . . . 3 1 1 d 3 d 1 1 1 1 3 .
                . . . 3 d 1 1 1 d 1 1 1 d 3 1 3
                . . 3 d d 1 1 1 d d 1 1 1 3 3 3
                . 3 1 1 d 1 1 1 1 d d 1 1 b . .
                . 3 1 1 1 d 1 1 1 1 1 d 1 1 3 .
                . b d 1 1 1 d 1 1 1 1 1 1 1 3 .
                . 4 b 1 1 1 1 d d 1 1 1 1 d 3 .
                . 4 4 d 1 1 1 1 1 1 d d d b b .
                . 4 d b d 1 1 1 1 1 1 1 1 3 . .
                4 d d 5 b d 1 1 1 1 1 1 1 3 . .
                4 5 d 5 5 b b d 1 1 1 1 d 3 . .
                4 5 5 d 5 5 d b b b d d 3 . . .
                4 5 5 5 d d d d 4 4 b 3 . . . .
                . 4 5 5 5 4 4 4 . . . . . . . .
                . . 4 4 4 . . . . . . . . . . .
                `, 60, 0)
    } else {
        projectile = sprites.createProjectileFromSide(img`
                . . . . . . . e c 7 . . . . . .
                . . . . e e e c 7 7 e e . . . .
                . . c e e e e c 7 e 2 2 e e . .
                . c e e e e e c 6 e e 2 2 2 e .
                . c e e e 2 e c c 2 4 5 4 2 e .
                c e e e 2 2 2 2 2 2 4 5 5 2 2 e
                c e e 2 2 2 2 2 2 2 2 4 4 2 2 e
                c e e 2 2 2 2 2 2 2 2 2 2 2 2 e
                c e e 2 2 2 2 2 2 2 2 2 2 2 2 e
                c e e 2 2 2 2 2 2 2 2 2 2 2 2 e
                c e e 2 2 2 2 2 2 2 2 2 2 4 2 e
                . e e e 2 2 2 2 2 2 2 2 2 4 e .
                . 2 e e 2 2 2 2 2 2 2 2 4 2 e .
                . . 2 e e 2 2 2 2 2 4 4 2 e . .
                . . . 2 2 e e 4 4 4 2 e e . . .
                . . . . . 2 2 e e e e . . . . .
                `, 55, 0)
        projectile.setKind(SpriteKind.Food)
    }
    
    projectile.y = randint(10, 110)
})
