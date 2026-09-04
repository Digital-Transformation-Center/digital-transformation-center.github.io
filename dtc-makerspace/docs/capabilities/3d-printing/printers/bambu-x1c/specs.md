---
tags:
    - 3D Printing
    - Bambu
    - X1C
    - AMS 2 Pro
    - Specs
---

# X1 Carbon — Specifications

Figures below are from Bambu Lab’s [X1-Carbon technical specifications PDF](https://public-cdn.bambulab.com/store/bambulab-X1-carbon-tech-specs.pdf) and the [X1 Series wiki](https://wiki.bambulab.com/en/x1). AMS 2 Pro figures are from the [AMS 2 Pro store specs](https://us.store.bambulab.com/products/ams-2-pro) and [AMS 2 Pro intro and connection guide](https://wiki.bambulab.com/en/ams-2-pro/manual/intro-and-connection-guide).

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

## AMS 2 Pro

This DTC machine uses **AMS 2 Pro**. Specs below are from the [Bambu Lab AMS 2 Pro store page](https://us.store.bambulab.com/products/ams-2-pro) unless noted.

| Item | Official value | Source |
| --- | --- | --- |
| Body dimensions | 372 × 280 × 226 mm³ | [Store specs](https://us.store.bambulab.com/products/ams-2-pro) |
| Net weight | 2.5 kg | [Store specs](https://us.store.bambulab.com/products/ams-2-pro) |
| Housing material | ABS/PC | [Store specs](https://us.store.bambulab.com/products/ams-2-pro) |
| Slots | 4, each with a feeder, motor, gears, and filament sensor; ceramic-reinforced anti-wear bushings at each feeder inlet | [Intro and connection guide](https://wiki.bambulab.com/en/ams-2-pro/manual/intro-and-connection-guide) |
| Filament diameter | 1.75 mm | [Store specs](https://us.store.bambulab.com/products/ams-2-pro) |
| Supported spool size | Width 50–68 mm, diameter 197–202 mm | [Store specs](https://us.store.bambulab.com/products/ams-2-pro) |
| Filament supported | PLA, PETG, ABS, ASA, PET, PA, PC, PVA (dried), BVOH (dried), PP, POM, HIPS, Bambu PLA-CF / PAHT-CF / PETG-CF / Support for PLA/PETG, and TPU for AMS | [Store specs](https://us.store.bambulab.com/products/ams-2-pro) |
| Filament not supported | TPE, generic TPU, PVA (damp), BVOH (damp), Bambu PET-CF / TPU 95A, and other filament that contains carbon fiber or glass fiber | [Store specs](https://us.store.bambulab.com/products/ams-2-pro) |
| RFID | Supported; official Bambu tags enable remaining-filament estimation and auto filament backup | [Store specs](https://us.store.bambulab.com/products/ams-2-pro), [intro and connection guide](https://wiki.bambulab.com/en/ams-2-pro/manual/intro-and-connection-guide) |
| Drying modules | Two modules (heaters, fans, temperature sensors); highest temperature **65 °C** | [Store specs](https://us.store.bambulab.com/products/ams-2-pro), [intro and connection guide](https://wiki.bambulab.com/en/ams-2-pro/manual/intro-and-connection-guide) |
| Active moisture discharge | Supported (actively controlled intake/exhaust vents) | [Store specs](https://us.store.bambulab.com/products/ams-2-pro) |
| Sealed storage | Supported | [Store specs](https://us.store.bambulab.com/products/ams-2-pro) |
| Temperature & humidity | Real-time display on the printer screen, Bambu Studio, and Bambu Handy | [Store specs](https://us.store.bambulab.com/products/ams-2-pro) |
| Power input (drying) | 24 V 4 A official Switching Adapter | [Store specs](https://us.store.bambulab.com/products/ams-2-pro) |
| X1C drying power | X1C cannot power AMS 2 Pro drying. Each AMS 2 Pro used for drying needs its own official Switching Adapter. Power icon on Drying and Humidity should be green. | [X1C drying from screen](https://wiki.bambulab.com/en/x1/manual/use-drying-feature-of-ams-2-pro-from-printer-screen), [store FAQ](https://us.store.bambulab.com/products/ams-2-pro) |
| X1C connection | Filament buffer + PTFE + 4-pin (printer to buffer) + 6-pin (AMS 2 Pro to buffer). Users should not rewire; contact Ryan if disconnected. | [Install AMS 2 Pro on X1C](https://wiki.bambulab.com/en/x1/manual/installing-ams-2-pro-to-x1c), [intro and connection guide](https://wiki.bambulab.com/en/ams-2-pro/manual/intro-and-connection-guide) |
| Multi-AMS on X1 | Filament buffer is replaced by an AMS Hub; X1/P1 can connect up to 4 AMS units (AMS, AMS 2 Pro, AMS HT) | [Store](https://us.store.bambulab.com/products/ams-2-pro), [install wiki](https://wiki.bambulab.com/en/x1/manual/installing-ams-2-pro-to-x1c) |
| Firmware | Drying on X1C requires firmware that supports AMS 2 Pro drying | [X1 firmware update](https://wiki.bambulab.com/en/x1/manual/X1-firmware-update-support-ams2pro-ams-ht) |

Filaments the store marks with * for drying (ABS, ASA, PET, PA, PC, PVA, BVOH, POM, HIPS, Bambu PLA-CF / PAHT-CF / PETG-CF, TPU for AMS) need a higher drying temperature than AMS 2 Pro can fully provide. Bambu recommends AMS HT for better drying of those materials. Maximum 65 °C is only achievable when ambient temperature is above 25 °C.

TPU is listed as supported **on the X1C printer**, but generic TPU is **not** supported in AMS 2 Pro. Use **TPU for AMS** in the unit, or the rear spool holder for generic TPU.

Whether the shop Switching Adapter is currently plugged in is not recorded here. Drying requires the official adapter; if the power icon is not green, ask Ryan.

## Notes & references

- [Bambu Lab X1-Carbon technical specifications (PDF)](https://public-cdn.bambulab.com/store/bambulab-X1-carbon-tech-specs.pdf)
- [X1 Series wiki](https://wiki.bambulab.com/en/x1)
- [Introduction to X1/X1C](https://wiki.bambulab.com/en/x1/manual/intro-x1)
- [Install AMS 2 Pro on X1C](https://wiki.bambulab.com/en/x1/manual/installing-ams-2-pro-to-x1c)
- [Use AMS 2 Pro drying from the X1C screen](https://wiki.bambulab.com/en/x1/manual/use-drying-feature-of-ams-2-pro-from-printer-screen)
- [AMS 2 Pro intro and connection guide](https://wiki.bambulab.com/en/ams-2-pro/manual/intro-and-connection-guide)
- [AMS 2 Pro drying function](https://wiki.bambulab.com/en/ams-2-pro/manual/drying-function)
- [AMS 2 Pro drying on X1/P1 series](https://wiki.bambulab.com/en/ams-2-pro/ams-2-pro-for-drying-in-x1-p1-series)
- [AMS 2 Pro basic maintenance](https://wiki.bambulab.com/en/ams-2-pro/maintenance/basic-maintenance)
- [AMS 2 Pro product specs](https://us.store.bambulab.com/products/ams-2-pro)
- [X1 firmware update for AMS 2 Pro / AMS HT](https://wiki.bambulab.com/en/x1/manual/X1-firmware-update-support-ams2pro-ams-ht)
- [Bambu Studio download](https://bambulab.com/en/download/studio)
