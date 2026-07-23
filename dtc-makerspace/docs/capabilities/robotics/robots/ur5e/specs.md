---
tags:
    - Robot
    - UR5e
    - Specs
---

# UR5e — Specifications

## Overview

The UR5e is a 6-axis collaborative robot arm (cobot) from Universal Robots' e-Series designed for medium-duty tasks that require flexibility, ease of programming, and safe human-robot collaboration. It is commonly used for assembly, pick & place, machine tending, testing, and research applications.

## Key Specifications

- **Payload:** 5 kg
- **Reach (max):** 850 mm
- **Degrees of freedom:** 6 (6 joints)
- **Repeatability:** ±0.03 mm
- **Robot mass:** ~20.6 kg
- **Mounting:** Floor, ceiling, wall, or angled (standard flange)
- **Protection class:** IP54 (robot arm)

## Mechanical

- **Joints / Range of motion:** 6 rotary joints; full joint ranges configurable in Polyscope (see official datasheet for per-joint limits).
- **Flange:** Standard ISO mounting flange for tool mounting and external connectors.
- **Cable routing:** External and partially internal options (specific routing depends on mounting orientation and tooling).

## Performance

- **Typical cycle times:** Application dependent; UR5e optimized for quick point-to-point moves within its workspace.
- **Motion control:** Smooth, force-aware motion with built-in collision detection and joint-level safety limits.

## Electrical & Power

- **Power supply:** Controller cabinet supplies robot arm; requires standard 120VAC 10A circuit.
- **Peripheral Power Delivery** Power accessible at various voltage levels from controller.

## Communication & I/O

- **Standard interfaces:** Ethernet (TCP/IP), real-time Ethernet options, digital and analog I/O via controller.
- **Fieldbus support:** Via UR+ certified modules and I/O interfaces (EtherCAT, PROFINET, DeviceNet, etc.).

## Software & Programming

- **Programming environment:** Polyscope GUI (teach pendant) with drag-and-drop programming and scriptable URScript.
- **Ecosystem:** URCaps for third-party integrations; supports real-time control and ROS interoperability.

## Safety & Compliance

- **Safety features:** Built-in force/torque sensing for collision detection, configurable safety limits, and safe stop functions when used with the UR controller.
- **Additional Features:** A safety laser is installed and can be configured for proximity detection.

## Mounting & Installation

- **Mounting orientations:** Floor, ceiling, wall, or custom fixtures using the standard wrist/flange. DTC UR5e mounted on rolling cart for flexibility
- **Environmental considerations:** IP54 on arm; keep controller and electrical components in appropriate enclosures and follow temperature/humidity requirements from official documentation.

## Accessories & Options

- **End effectors:** Grippers, vacuum systems, sensors, custom tooling.
- **Controller options:** e-Series teach pendant and controller cabinet. Additional UR+ hardware modules available for extended functionality.

## Notes & References

For full, definitive specifications (joint ranges, detailed electrical specs, mounting dimensions, and environmental ratings) consult the official Universal Robots UR5e datasheet and user manual.

