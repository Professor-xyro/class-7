def on_on_overlap(sprite, otherSprite):
    info.change_life_by(-1)
    scene.camera_shake(4, 500)
    sprites.destroy(otherSprite)
sprites.on_overlap(SpriteKind.player, SpriteKind.projectile, on_on_overlap)

def on_on_overlap2(sprite2, otherSprite2):
    sprites.destroy(otherSprite2)
    info.change_score_by(1)
    sprite2.start_effect(effects.hearts)
    music.play(music.melody_playable(music.ba_ding),
        music.PlaybackMode.UNTIL_DONE)
sprites.on_overlap(SpriteKind.player, SpriteKind.food, on_on_overlap2)

projectile: Sprite = None
choice = 0
scene.set_background_color(13)
mySprite = sprites.create(img("""
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
        """),
    SpriteKind.player)
controller.move_sprite(mySprite, 100, 100)
mySprite.set_stay_in_screen(True)
info.set_life(3)

def on_update_interval():
    global choice, projectile
    choice = randint(1, 3)
    if choice == 1:
        projectile = sprites.create_projectile_from_side(img("""
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
                """),
            -60,
            0)
    elif choice == 2:
        projectile = sprites.create_projectile_from_side(img("""
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
                """),
            60,
            0)
    else:
        projectile = sprites.create_projectile_from_side(img("""
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
                """),
            55,
            0)
        projectile.set_kind(SpriteKind.food)
    projectile.y = randint(10, 110)
game.on_update_interval(500, on_update_interval)
