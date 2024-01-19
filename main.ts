basic.showIcon(IconNames.No)
if (input.buttonIsPressed(Button.A)) {
    basic.showIcon(IconNames.Yes)
    for (let index = 0; index <= 30; index++) {
        basic.showNumber(0 - index)
    }
    music.playTone(262, music.beat(BeatFraction.Quarter))
    music.playTone(392, music.beat(BeatFraction.Whole))
    basic.showString("GO!")
    basic.showIcon(IconNames.No)
}
