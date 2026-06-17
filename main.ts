//% weight=100 color=#FF6B6B icon="\u2699"
declare var motors: any;
declare var hub: any;
namespace MidLine {
    //% blockId="ml_motor_pos"
    //% block="motor A position"
    //% group="Motor"
    export function motorAPosition(): number {
        return motors.portA.position()
    }

    //% blockId="ml_motor_run"
    //% block="run motor A at $speed %"
    //% speed.min=-100 speed.max=100
    //% group="Motor"
    export function runMotorA(speed: number): void {
        motors.portA.run(speed)
    }

    //% blockId="ml_motor_stop"
    //% block="stop motor A"
    //% group="Motor"
    export function stopMotorA(): void {
        motors.portA.run(0)
    }

    //% blockId="ml_show_number"
    //% block="show number $n on LED"
    //% n.min=-999 n.max=999
    //% group="Display"
    export function showNumberOnLED(n: number): void {
        hub.display.number(n)
    }

    //% blockId="ml_show_text"
    //% block="show text $text on LED"
    //% group="Display"
    export function showTextOnLED(text: string): void {
        hub.display.show(text)
    }

    //% blockId="ml_show_motor"
    //% block="show motor A position on LED every $ms ms"
    //% ms.min=50 ms.max=5000 ms.defl=200
    //% group="Motor"
    export function showMotorAPositionOnLED(ms: number): void {
        forever(function () {
            let pos = motors.portA.position()
            hub.display.number(pos)
            pause(ms)
        })
    }
}
