basic.forever(function () {
    basic.showIcon(IconNames.Ghost)
    music.playMelody("A E G B A C E G ", 249)
    basic.showIcon(IconNames.Skull)
    music.playMelody("F A F A F C F C5 ", 120)
    basic.showLeds(`
        # . # . #
        . # . # .
        # . # . #
        . # . # .
        # . # . #
        `)
    music.playMelody("E A E A B C F C5 ", 311)
    basic.showLeds(`
        . # # . .
        . # # . .
        # . . # #
        # # # # #
        . # # . .
        `)
    music.setVolume(209)
    music.playMelody("E B C D A E C5 E ", 254)
    basic.showIcon(IconNames.EigthNote)
    music.playMelody("B G E C G B C5 C ", 335)
    music.playMelody("C B G E C G B C5 ", 335)
    basic.showLeds(`
        . # . # .
        # # # # #
        # # # # #
        . # # # .
        . . # . .
        `)
    music.playMelody("C5 F D F A F C F ", 342)
})
