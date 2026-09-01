---
tags:
    - 3D Printing
    - Bambu
    - X1C
    - AMS
    - SOP
---

This SOP covers the Bambu Lab X1 Carbon (X1C) with the original 4-slot AMS (the Combo unit). Steps come from the official Bambu Lab wiki. If you have not used this printer before, contact [Ryan Kuederle](mailto:kuederler1@udayton.edu).

## Pre-Start Checklist

- [ ] If this is your first time on this machine, you have contacted [Ryan Kuederle](mailto:kuederler1@udayton.edu).
- [ ] Long hair, loose clothing, and jewelry are kept away from the printer.
- [ ] The magnetic build plate is seated on the heatbed, not crooked, and does not contact the excess chute, Z-slider stopper, or inner liner ([plate placement](https://wiki.bambulab.com/en/x1/troubleshooting/hmscode/0300_0D00_0001_0003)).
- [ ] Filament in the AMS (or on the external spool holder) matches the filament type and color in the slice. Official Bambu spools are identified by RFID; third-party spools must be set on the screen or in Bambu Studio.
- [ ] AMS slots you intend to use are loaded, and mapping will be confirmed before the job starts.
- [ ] Front glass door position matches the filament: keep the door closed for ABS so the chamber stays stable; for PLA, TPU, or PETG the wiki recommends a partially open door to reduce heat creep ([door sensor](https://wiki.bambulab.com/en/x1/manual/door-sensor)).
- [ ] You will not touch the hotend or heatbed. They get hot enough to burn; the clog wiki requires heat-insulation gloves if you must work near a heated nozzle.
- [ ] Ask Ryan before joining a shop network. Do not add the printer to a new Wi-Fi network without approval.

??? info "Bambu Studio prep"

    Download [Bambu Studio](https://bambulab.com/en/download/studio). Official system requirements include Windows 10 or higher, macOS 10.15 or higher, or Linux from [GitHub releases](https://github.com/bambulab/BambuStudio/releases).

    First-run wizard (from the [Studio quick start](https://wiki.bambulab.com/en/software/bambu-studio/studio-quick-start)):

    1. Select the login region that matches the Bambu account (a North America account will not work if the region is set to China).
    2. Select the **Bambu Lab X1 Carbon** printer preset and the nozzle size in use (the included nozzle is 0.4 mm hardened steel).
    3. Select the filament presets you will use.
    4. Install the **Bambu Network plug-in** if you will send jobs over WAN/LAN. Studio and the printer must be on the same LAN to send files over the local network.

    For each job:

    1. **New Project**, then add a model (`.3mf`, `.stl`, `.stp`, `.step`, `.amf`, `.obj`).
    2. Choose the X1C printer/nozzle preset, a filament preset that matches what is loaded, and a process (0.20 mm layer height is the typical default in the wiki).
    3. Click **Slice plate**.
    4. Click **Print** / **Send** only after the machine is connected (see network section below) and AMS mapping looks correct.

    Bambu Studio will auto-map project filaments to AMS slots by type and closest color. Confirm the mapping popup before sending. A slot showing **?** is a third-party spool whose type/color was not configured — only select it if the physical filament matches the slice ([multi-color printing](https://wiki.bambulab.com/en/x1/manual/multi-color-printing)).

    You cannot edit AMS filament information during a print.

??? info "AMS load / unload"

    This shop documents the **original 4-slot AMS** used with the X1C Combo, not AMS 2 Pro. Official load/unload steps: [AMS setup and filament loading](https://wiki.bambulab.com/en/x1/manual/ams-setup-and-filament-loading) and [Notes for AMS](https://wiki.bambulab.com/en/knowledge-sharing/notes-AMS).

    ![Original AMS on an X1C](https://wiki.bambulab.com/ams/ams-manual/1.ams_on_the_printer.png){ .center }

    **Load**

    1. Open the AMS cover and place the spool in a slot (slot 1 is typical for a first load).
    2. Gently push the grey feeder tab toward the back of the AMS and insert the filament about 2 cm. The AMS detects the filament and starts pre-loading.
    3. Official Bambu spools are identified by RFID; tap the slot on the printer screen to view type and color (RFID values cannot be edited).
    4. For unofficial / third-party spools, tap the slot and set type and color on the screen, or configure them in Bambu Studio.
    5. To feed into the extruder, select the slot on the screen and tap **Load**.

    **Unload**

    1. On the screen, tap **Unload** so the printer returns filament from the extruder to the AMS.
    2. Push the feeder tab forward and pull the filament out by hand.
    3. If rollers are stuck (often after a power failure), push the spool gently toward the front of the AMS and back so the yellow gear disengages from the black roller gear, then rewind the filament.

    **Do not put these in the AMS** (from Notes for AMS):

    - Flexible materials: TPU, TPE, or absorbent (wet) PVA — they can jam in the AMS feed path. The X1C printer itself lists TPU as supported; print those from the external spool holder instead ([switch AMS to spool holder](https://wiki.bambulab.com/en/x1/manual/switch-from-ams-to-spool-holder)).
    - Third-party carbon/glass-fiber filaments (they can wear PTFE tubes or break). Official Bambu PLA-CF, PETG-CF, and PAHT-CF are listed as AMS-compatible.
    - Spools outside **50–68 mm width** and **197–202 mm diameter**. Prefer plastic spools; cardboard spools need a spool adapter/ring.

    If the AMS is not already connected, stop and contact Ryan. Connecting PTFE and the 4-pin / 6-pin Bambu Bus cables is a one-time setup; inserting the 4-pin cable backward can damage the printer and AMS boards ([connect AMS](https://wiki.bambulab.com/en/x1/manual/connect-ams)).

??? info "Start a print (Studio, SD card, or touchscreen)"

    Before any start method: plate seated, filament matches the slice, AMS mapping confirmed, door set for the material.

    **From Bambu Studio** ([print from Studio](https://wiki.bambulab.com/en/x1/manual/print-from-bambu-studio), [Studio quick start](https://wiki.bambulab.com/en/software/bambu-studio/studio-quick-start)):

    1. Slice, then click **Print**.
    2. Select this X1C, review calibration options (bed leveling, flow / Micro Lidar, etc.), and confirm AMS mapping.
    3. Click **Send**. If Studio can see the printer on the local network **and** a microSD card is in the slot on the right of the touchscreen, the file can go to the printer directly; otherwise it may go through Bambu cloud unless LAN Only is on.
    4. Monitor from Studio’s Device tab.

    **LAN / Wi-Fi (official steps only).** Ask Ryan before joining a shop network.

    On the printer ([network guide](https://wiki.bambulab.com/en/x1/manual/x1-network-connection-guide)):

    1. Open **Settings → Wi-Fi**.
    2. Choose the approved network, enter the password, tap **Join**.
    3. Wait for the connected confirmation.

    Bind Studio or Bambu Handy using the same Bambu account, or use LAN Only:

    - **Bambu Handy:** Devices tab → **+ Bind Printer**, then sign into the same account in Studio ([Studio quick start](https://wiki.bambulab.com/en/software/bambu-studio/studio-quick-start)).
    - **LAN Only** (X series): Settings → **LAN Only**, turn it on, then in Studio’s Device list select the printer (lock icon) and enter the access code. For printers not on the same subnet, bind with **IP address + access code** ([LAN mode](https://wiki.bambulab.com/en/knowledge-sharing/enable-lan-mode)).
    - On X1, sending a job in LAN mode **requires a microSD card** in the slot on the right of the screen.

    PIN-code binding in Studio is documented for P and A series only, not X1C.

    **From microSD / touchscreen:**

    1. In Studio, use **Export plate sliced file** (or **Send** to the printer SD card while on the same LAN).
    2. Insert the card in the slot on the right of the display.
    3. Home → **Print Files** → **SD Card**, select the file ([Studio quick start](https://wiki.bambulab.com/en/software/bambu-studio/studio-quick-start)).
    4. For multi-color files, confirm or edit AMS slot mapping on screen. A slot whose AMS type does not match the slice cannot be selected.

    **Built-in example files:** folder icon on the home screen, pick a model, enable calibration options, tap **Print Now**. Multi-color built-in models need matching colors loaded in the AMS ([first print](https://wiki.bambulab.com/en/x1/manual/first-print-with-internal-file)).

    The top-left button wakes the screen; the second top button stops a print ([FAQ](https://wiki.bambulab.com/en/x1/manual/faq)).

??? info "After the print"

    1. Wait for the nozzle and heatbed to cool enough to handle. Do not touch them while hot.
    2. Remove the flexible steel build plate from the magnetic heatbed. Avoid handling the print surface with bare hands — oils reduce adhesion ([PEI cleaning](https://wiki.bambulab.com/en/filament-acc/acc/pei-plate-clean-guide)).
    3. Flex the plate to release the part ([build plates](https://wiki.bambulab.com/en/filament-acc/acc/plates)). A Bambu scraper is included in the accessory box; print the scraper grip from the built-in files if needed ([accessories](https://wiki.bambulab.com/en/x1/manual/acc-in-the-box)).
    4. If filament is still in the extruder, **Unload** on the screen so it returns to the AMS, then pull it from the feeder if you are swapping spools.
    5. If adhesion was poor, wash a textured PEI plate with warm water and dishwashing detergent (no oils/moisturizers). Do **not** use acetone on textured PEI.
    6. Confirm a container is under the rear purge chute so purged filament is not left on the bench ([unboxing combo](https://wiki.bambulab.com/en/x1/manual/unboxing-combo)).

??? info "AMS notes"

    - One original AMS has **four slots**. The filament buffer on the back of the printer supports a single AMS. An AMS Hub (not assumed here) is required to chain up to four AMS units / 16 spools ([intro to AMS](https://wiki.bambulab.com/en/x1/manual/intro-ams)).
    - Keep AMS ambient temperature **10–30 °C** and humidity **under 85%**.
    - The AMS is moisture-managed with a humidity sensor, desiccant, and seals. Check humidity on the printer’s Filament screen; contact Ryan if desiccant needs replacement.
    - PTFE tubes are consumables. Feeding failures or filament piled inside the AMS can mean worn tubes — do not replace them yourself; contact Ryan ([Notes for AMS](https://wiki.bambulab.com/en/knowledge-sharing/notes-AMS)).
    - **Auto refill** can continue from another slot with the same brand, type, color, and nozzle temperature when a spool runs out. Configure slot info accurately before relying on it.
    - This page does **not** cover AMS 2 Pro drying, the AMS 2 Pro switching adapter, or AMS 2 Pro tube lengths. If the hardware on the bench is AMS 2 Pro, stop and ask Ryan.

??? info "Troubleshooting"

    Only issues documented on the official wiki. For anything mechanical (hotend removal, AMS hub teardown, cable reseating), contact Ryan — do not disassemble the machine.

    - **Build plate warning (HMS 0300-0D00-0001-0003):** reseat the plate so it is fully on the magnets and not touching the excess chute, left Z stopper, or rear liner; clear debris from the chamber floor and Z sliders ([wiki](https://wiki.bambulab.com/en/x1/troubleshooting/hmscode/0300_0D00_0001_0003)).
    - **Wi-Fi will not join:** weak signal, 2.4 GHz interference, or a damaged antenna. Do not open the printer; contact Ryan ([network guide](https://wiki.bambulab.com/en/x1/manual/x1-network-connection-guide)).
    - **Printer on Wi-Fi but Studio/Handy will not bind:** printer isolated from the PC (common on guest networks), cloud unreachable, or a PC firewall/VPN blocking the connection. Ask Ryan before changing shop network settings.
    - **AMS will not pre-load / LED does not change:** see [AMS loading & unloading failure](https://wiki.bambulab.com/en/ams/troubleshooting/ams-loading-unloading-failure). Stuck rollers: rock the spool front-to-back as in the unload section.
    - **Nothing extrudes:** confirm a clog with a small extrude from the screen at print temperature. The wiki then distinguishes hotend vs extruder clogs and says to disconnect AMS first. Stop and contact Ryan rather than removing the hotend ([which part is clogged](https://wiki.bambulab.com/en/x1/troubleshooting/how-to-check-which-part-is-clogged)).
    - **Door sensor alerts:** Open Door Detection is off by default. If it is on, Notification warns without pausing; Pause Printing stops the job until you Resume, Stop, or open Check Assistant ([door sensor](https://wiki.bambulab.com/en/x1/manual/door-sensor)).
    - **First-layer or spaghetti pause:** Micro Lidar first-layer inspection and chamber-camera spaghetti detection can pause the job. Check the part, then Resume or Stop. LED light is required for vision features ([FAQ](https://wiki.bambulab.com/en/x1/manual/faq)).
    - **Filament type mismatch on SD/multi-color start:** the screen will not let you pick an AMS slot whose type does not match the slice. Load the correct material or re-slice.

    Full X1 troubleshooting index: [wiki.bambulab.com/en/x1](https://wiki.bambulab.com/en/x1).

!!! warning

    - The hotend (up to 300 °C) and heatbed (up to 110 °C at 220 V / 120 °C at 110 V) can burn. Do not touch them until cool. If you must work near a heated nozzle, the official clog procedure requires heat-insulation gloves ([clog check](https://wiki.bambulab.com/en/x1/troubleshooting/how-to-check-which-part-is-clogged)).
    - Keep long hair, loose clothing, and jewelry away from moving CoreXY belts, the toolhead, and AMS rollers.
    - The X1C is enclosed. Keep the door **closed** when printing ABS so chamber temperature stays stable. For PLA, TPU, or PETG, the door-sensor wiki says to leave the front door **partially open** to help avoid heat creep ([door sensor](https://wiki.bambulab.com/en/x1/manual/door-sensor)).
    - The X1C includes an activated carbon filter that scrubs enclosure air before it is exhausted. Official X1C wiki text describes that filter and a 1440-hour (60-day cumulative print) service life; it does **not** state that the filter replaces room ventilation. If you need ABS/ASA or other high-VOC prints, ask Ryan about shop ventilation before starting ([carbon filter](https://wiki.bambulab.com/en/x1/maintenance/replace-carbon-filter)).
    - The printer has thermal runaway protection ([FAQ](https://wiki.bambulab.com/en/x1/manual/faq)). If the machine reports a thermal or HMS fault you cannot clear from the wiki, power off if it is safe to do so and contact Ryan.

## Post-Shutdown Checklist

- [ ] Part removed; flexible plate flexed off the magnets (avoid bare-hand contact with the print surface).
- [ ] Plate returned to the heatbed, seated correctly, or set aside clean if Ryan has a designated storage spot.
- [ ] Filament returned to the AMS (use **Unload** if it was still in the extruder). Leave loaded spools in the AMS unless you were told to swap them; the AMS is meant to stay closed and dry.
- [ ] Purge bin / box under the rear chute emptied if it is full.
- [ ] Front door closed; printer left idle (it will follow its Auto-Sleep setting).
- [ ] If you used a shop network, you did not change Wi-Fi or LAN Only settings unless Ryan asked you to.
