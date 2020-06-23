let distance = 0
while (true) {
    pins.digitalWritePin(DigitalPin.P8, 0)
    control.waitMicros(2)
    pins.digitalWritePin(DigitalPin.P8, 1)
    control.waitMicros(10)
    pins.digitalWritePin(DigitalPin.P8, 0)
    distance = Math.idiv(pins.pulseIn(DigitalPin.P1, PulseValue.High), 58)
    basic.showNumber(distance)
    basic.pause(100)
}
basic.forever(function () {
	
})
