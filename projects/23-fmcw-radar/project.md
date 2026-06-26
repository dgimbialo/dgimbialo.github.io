# FMCW Radar

**Subtitle:** Analog part for a microwave FMCW radar
**Category:** Hardware/RF
**Tags:** R&D, FMCW Radar, RF, Microwave, Analog, Vivaldi Antenna, EAGLE, PCB
**Paired:** STM32H7 Fast Acquisition (#10)
**Path:** 
**Button:** 
**Platform:** RF/microwave hardware (custom PCB)

## Purpose

A personal, self-initiated R&D project built to explore analog FMCW radar design. It reached a working prototype and remains an ongoing side project developed in my own time.
Custom analog front-end for an FMCW (Frequency-Modulated Continuous-Wave) radar: a continuous-wave microwave sensor that determines the range and speed of a target by mixing the transmitted frequency-swept signal with its echo and reading the resulting beat frequency. The board implements the complete radio-frequency signal chain, from chirp generation through low-noise receive amplification and down-conversion, and delivers the raw beat-frequency signal to an external digitizer and signal-processing stage. It is built around a microwave IC chain: a voltage-controlled oscillator (VCO) swept by an external modulation source, a low-noise amplifier (LNA) on the receive path, and a down-conversion mixer. On the antenna side, two custom Vivaldi (tapered-slot) antennas were designed and mounted inside horns to narrow the radiation pattern, which raises directivity and extends the detection range.

## Key features

- FMCW principle: target range and velocity are encoded in the beat frequency between the transmitted chirp and the received echo
- Microwave signal chain: VCO transmit source, LNA receive amplifier and a down-conversion mixer
- Custom antennas: two Vivaldi (tapered-slot) antennas designed and mounted inside horns to narrow the radiation pattern, increasing directivity and range
- External FM modulation: the VCO is swept by an external generator to form the frequency chirp
- Beat-frequency output: a clean analog output ready for an external digitizer/DSP
- Custom PCB: schematic and controlled-impedance routing designed in EAGLE
- Analog-only front-end, with digital signal processing handled downstream

## Tech Stack

| Component | Technology |
|---|---|
| Type | Analog RF / microwave front-end |
| VCO | HMC431LP4ETR (externally modulated) |
| LNA | HMC717ALP3E |
| Mixer | HMC219AMS8E |
| Antennas | Two custom Vivaldi (tapered-slot) antennas in horns |
| EDA | EAGLE (schematic + PCB routing) |
| Modulation | External Chirp Generator |
| Output | Analog beat-frequency signal |

## Media

### Photos
- projects/23-fmcw-radar/foto/Foto_1.JPEG
- projects/23-fmcw-radar/foto/Foto_2.JPEG
- projects/23-fmcw-radar/foto/Foto_3.JPEG
- projects/23-fmcw-radar/foto/Foto_4.JPEG
- projects/23-fmcw-radar/foto/Foto_5.png
- projects/23-fmcw-radar/foto/Foto_6.png
- projects/23-fmcw-radar/foto/Foto_7.png
- projects/23-fmcw-radar/foto/Foto_8.png

### Videos

## Notes

- Status: prototype stage, functional but not yet finished. The planned next step is to add output high-pass and low-pass filtering on the beat-frequency signal to further reduce distortion and clean up the spectrum.
- FMCW radar (Frequency-Modulated Continuous-Wave): analog front-end only. The output beat frequency is proportional to target distance and speed.
