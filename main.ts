radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        music.stopAllSounds()
        basic.clearScreen()
    } else if (receivedNumber == 1) {
        basic.showIcon(IconNames.Angry)
        music.play(music.tonePlayable(523, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(349, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    }
})
radio.setGroup(1)
