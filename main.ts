input.onButtonPressed(Button.A, function () {
    radio.sendString("arvicola bananera")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
radio.setGroup(255)
