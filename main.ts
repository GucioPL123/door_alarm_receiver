radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1 && ALARM == true) {
        basic.showIcon(IconNames.Angry)
        music.play(music.tonePlayable(523, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(349, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    } else if (receivedNumber == 1 && ALARM == false) {
        basic.showIcon(IconNames.Angry)
    } else {
        basic.clearScreen()
        music.stopAllSounds()
    }
})
input.onButtonPressed(Button.A, function () {
    ALARM = false
})
input.onButtonPressed(Button.B, function () {
    ALARM = true
})
let ALARM = false
radio.setGroup(1)
ALARM = false
