input.onButtonEvent(Button.A, ButtonEvent.Click, function () {
    OLED12864_I2C.clear()
    if (Seite < 3) {
        Seite += 1
    } else {
        Seite = 1
    }
})
radio.onReceivedString(function (receivedString) {
    EmpfangenerText = receivedString
    if (EmpfangenerText.includes("UZ:")) {
        Uhrzeit = EmpfangenerText.substr(3, 10)
    }
    if (EmpfangenerText.includes("LZ:")) {
        Laufzeit = EmpfangenerText.substr(3, 10)
    }
    if (EmpfangenerText.includes("LA:")) {
        Laenge = EmpfangenerText.substr(3, 10)
    }
    if (EmpfangenerText.includes("BR:")) {
        Breite = EmpfangenerText.substr(3, 10)
    }
    if (EmpfangenerText.includes("HO:")) {
        Hoehe = EmpfangenerText.substr(3, 10)
    }
    if (EmpfangenerText.includes("TE:")) {
        Temperatur = EmpfangenerText.substr(3, 10)
    }
    if (EmpfangenerText.includes("LU:")) {
        Luftdruck = EmpfangenerText.substr(3, 10)
    }
    if (EmpfangenerText.includes("LF:")) {
        Luftfeuchte = EmpfangenerText.substr(3, 10)
    }
    if (EmpfangenerText.includes("LI:")) {
        Licht = EmpfangenerText.substr(3, 10)
    }
    if (EmpfangenerText.includes("UV:")) {
        UV = EmpfangenerText.substr(3, 10)
    }
    if (EmpfangenerText.includes("IR:")) {
        IR = EmpfangenerText.substr(3, 10)
    }
})
let IR = ""
let UV = ""
let Licht = ""
let Luftfeuchte = ""
let Luftdruck = ""
let Temperatur = ""
let Hoehe = ""
let Breite = ""
let Laenge = ""
let Laufzeit = ""
let Uhrzeit = ""
let EmpfangenerText = ""
let Seite = 0
Seite = 1
radio.setGroup(1)
OLED12864_I2C.init(60)
OLED12864_I2C.invert(false)
OLED12864_I2C.clear()
basic.forever(function () {
    OLED12864_I2C.showString(
    0,
    0,
    Uhrzeit.substr(0, 6),
    1
    )
    OLED12864_I2C.showString(
    7,
    0,
    Laufzeit,
    1
    )
    if (Seite == 1) {
        OLED12864_I2C.showString(
        0,
        1,
        "L",
        1
        )
        OLED12864_I2C.showString(
        0,
        2,
        "B",
        1
        )
        OLED12864_I2C.showString(
        0,
        3,
        "H",
        1
        )
        OLED12864_I2C.showString(
        2,
        1,
        Laenge,
        1
        )
        OLED12864_I2C.showString(
        2,
        2,
        Breite,
        1
        )
        OLED12864_I2C.showString(
        2,
        3,
        Hoehe,
        1
        )
        basic.pause(1000)
    }
    if (Seite == 2) {
        OLED12864_I2C.showString(
        0,
        1,
        "T",
        1
        )
        OLED12864_I2C.showString(
        0,
        2,
        "P",
        1
        )
        OLED12864_I2C.showString(
        0,
        3,
        "H",
        1
        )
        OLED12864_I2C.showString(
        2,
        1,
        Temperatur,
        1
        )
        OLED12864_I2C.showString(
        2,
        2,
        Luftdruck,
        1
        )
        OLED12864_I2C.showString(
        2,
        3,
        Luftfeuchte,
        1
        )
        basic.pause(1000)
    }
    if (Seite == 3) {
        OLED12864_I2C.showString(
        0,
        1,
        "L",
        1
        )
        OLED12864_I2C.showString(
        0,
        2,
        "U",
        1
        )
        OLED12864_I2C.showString(
        0,
        3,
        "I",
        1
        )
        OLED12864_I2C.showString(
        2,
        1,
        Licht,
        1
        )
        OLED12864_I2C.showString(
        2,
        2,
        UV,
        1
        )
        OLED12864_I2C.showString(
        2,
        3,
        IR,
        1
        )
        basic.pause(1000)
    }
})
