# MidLine SPIKE

MakeCode extension for LEGO SPIKE Prime to read motor position and display on the hub's LED matrix.

## Usage

Paste the URL in `Extensions`:

```
https://github.com/proferober/midline-spike
```

## Blocks

### Motor
- `motor A position` — returns the motor position in degrees
- `run motor A at [speed] %` — runs motor A at a given speed (-100 to 100)
- `stop motor A` — stops motor A

### Display
- `show number [n] on LED` — shows a number on the hub's LED matrix
- `show text [text] on LED` — scrolls text on the hub's LED matrix
- `show motor A position on LED every [ms] ms` — continuously shows motor position on the LED matrix

## License

MIT
