---
tags:
    - 3D Printing
    - Bambu
    - X1C
    - AMS
    - Specs
---

# X1 Carbon — Specifications

Figures below are from Bambu Lab’s [X1-Carbon technical specifications PDF](https://public-cdn.bambulab.com/store/bambulab-X1-carbon-tech-specs.pdf) and the [X1 Series wiki](https://wiki.bambulab.com/en/x1). AMS figures are only those stated on official AMS wiki pages for the original 4-slot unit.

## Printer (X1 Carbon)

| Item | Official value |
| --- | --- |
| Technology | Fused Deposition Modeling |
| Build volume (W×D×H) | 256 × 256 × 256 mm³ |
| Chassis | Steel |
| Shell | Aluminum & glass (enclosed) |
| Motion | CoreXY (X/Y steppers and belts); Z via three lead screws and one stepper |
| Hotend | All-metal |
| Extruder gears | Hardened steel |
| Nozzle (included) | Hardened steel, 0.4 mm |
| Nozzle (optional) | 0.2 mm, 0.6 mm, 0.8 mm |
| Max hotend temperature | 300 °C |
| Filament diameter | 1.75 mm |
| Filament cutter | Yes |
| Build plate | Flexible steel plate |
| Build plate surfaces (included) | Bambu Cool Plate, Bambu Engineering Plate (PDF). Combo accessory list also notes Textured PEI Plate / Cool Plate pre-installed at random. **Which plate is on this DTC machine is not recorded here — ask Ryan.** |
| Build plate surfaces (optional) | Bambu High Temperature Plate |
| Max build plate temperature | 110 °C @ 220 V, 120 °C @ 110 V |
| Max toolhead speed | 500 mm/s |
| Max toolhead acceleration | 20 m/s² |
| Max hotend flow (PDF example) | 32 mm³/s @ ABS (150 × 150 mm single wall; Bambu ABS; 280 °C) |
| Supported filament (printer) | PLA, PETG, TPU, ABS, ASA, PET: Yes. PA, PC: Ideal. Carbon/glass-fiber reinforced polymer: Ideal. |
| Cooling | Closed-loop part cooling, hotend, control-board, chamber temperature regulator, and auxiliary part cooling fans |
| Air filter | Activated carbon filter (filters enclosure air before exhaust; 1440 h / 60 days cumulative print life per filter wiki) |
| Bambu Micro Lidar | Yes (flow calibration and first-layer inspection) |
| Chamber camera | 1920 × 1080 included (monitoring, spaghetti detection, optional time-lapse to SD) |
| Door sensor | Yes |
| Filament runout sensor | Yes |
| Filament odometry | Optional with AMS |
| Power-loss recover | Yes |
| Physical dimensions | 389 × 389 × 457 mm³ |
| Net weight | 14.13 kg |
| Voltage | 100–240 VAC, 50–60 Hz |
| Max power | 1000 W @ 220 V, 350 W @ 110 V |
| Display | 5-inch 1280 × 720 touchscreen |
| Connectivity | Wi-Fi, Bambu-Bus |
| Storage | 4 GB eMMC and microSD card reader |
| Control | Touchscreen, Bambu Handy, PC application (Bambu Studio) |
| Motion controller | Dual-core Cortex-M4 |
| Application processor | Quad ARM A7 1.2 GHz |
| NPU | 2 TOPS |
| Slicer | Bambu Studio; third-party slicers that export standard G-code (SuperSlicer, PrusaSlicer, Cura) are listed, with the note that advanced features such as first-layer inspection and AMS may not work |

Chamber temperature on the X1C is **not** actively heated. It rises with the heatbed and is not precisely controlled ([FAQ](https://wiki.bambulab.com/en/x1/manual/faq)).

## AMS (original 4-slot unit)

This DTC page assumes the original AMS shipped with the X1C Combo — four slots feeding through the printer’s filament buffer. It is **not** AMS 2 Pro unless Ryan confirms otherwise.

| Item | Official value | Source |
| --- | --- | --- |
| Role | Automatic Material System: active feeding and mid-print filament switching | [Intro to AMS](https://wiki.bambulab.com/en/x1/manual/intro-ams), [Notes for AMS](https://wiki.bambulab.com/en/knowledge-sharing/notes-AMS) |
| Slots per unit | 4, each with its own motor and filament sensor | [Intro to AMS](https://wiki.bambulab.com/en/x1/manual/intro-ams) |
| Path | Four slots → filaments hub (second-stage drive) → filament buffer on the printer → toolhead extruder | [Intro to AMS](https://wiki.bambulab.com/en/x1/manual/intro-ams) |
| Single-AMS connection | Filament buffer on the back of the X1C (PTFE + 4-pin printer cable + 6-pin AMS cable) | [Connect AMS](https://wiki.bambulab.com/en/x1/manual/connect-ams) |
| Multi-AMS | Buffer is replaced by an AMS Hub for up to 4 AMS / 16 spools | [Intro to AMS](https://wiki.bambulab.com/en/x1/manual/intro-ams) |
| RFID | Reads official Bambu spool tags and syncs type/color to the printer and Bambu Studio | [Intro to AMS](https://wiki.bambulab.com/en/x1/manual/intro-ams) |
| Humidity | Humidity sensor, desiccant packets, and seals; keep AMS at 10–30 °C and < 85% RH | [Intro to AMS](https://wiki.bambulab.com/en/x1/manual/intro-ams) |
| Supported spool size | Width 50–68 mm, diameter 197–202 mm | [Notes for AMS](https://wiki.bambulab.com/en/knowledge-sharing/notes-AMS) |
| Do not use in AMS | TPU, TPE, absorbent PVA; third-party fiber-reinforced filaments | [Notes for AMS](https://wiki.bambulab.com/en/knowledge-sharing/notes-AMS) |
| Official fiber filaments called out as AMS-compatible | Bambu PLA-CF, PETG-CF, PAHT-CF | [Notes for AMS](https://wiki.bambulab.com/en/knowledge-sharing/notes-AMS) |
| Filament odometry | Listed on the X1C spec PDF as optional with AMS | [Spec PDF](https://public-cdn.bambulab.com/store/bambulab-X1-carbon-tech-specs.pdf) |

TPU is listed as supported **on the X1C printer**, but Notes for AMS say not to run flexible filament through the AMS. Use the rear spool holder for those materials.

## Notes & references

- [Bambu Lab X1-Carbon technical specifications (PDF)](https://public-cdn.bambulab.com/store/bambulab-X1-carbon-tech-specs.pdf)
- [X1 Series wiki](https://wiki.bambulab.com/en/x1)
- [Introduction to X1/X1C](https://wiki.bambulab.com/en/x1/manual/intro-x1)
- [AMS wiki](https://wiki.bambulab.com/en/ams)
- [Introduction to AMS](https://wiki.bambulab.com/en/x1/manual/intro-ams)
- [Notes for AMS](https://wiki.bambulab.com/en/knowledge-sharing/notes-AMS)
- [Bambu Studio download](https://bambulab.com/en/download/studio)
