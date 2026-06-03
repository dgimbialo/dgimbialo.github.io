# HPLC Syringe Pump

**-ƒ-û-¦-+-¦-¦-+-+-+-¦-+-¦:** HPLC pump desktop control via Modbus RTU  
**-¿-+-Å-à:** `D:\WORK_PROJECTS\hplcpump`  
**-ƒ-+-¦-é-ä-+-Ç-+-¦:** C++ + Qt6 + QML / Windows

## -ƒ-Ç-+-+-+-¦-ç-¦-+-+-Å

Desktop -â-+-Ç-¦-¦-+-û-+-+-Å HPLC -ê-+-Ç-+-å-¦-¦-+-+ -+-¦-ü-+-ü-+-+ -ç-¦-Ç-¦-+ Modbus RTU: -+-¦-Ç-¦-+-¦-é-Ç-+ -+-+-é-+-¦-â, -¦-¦-é-+-+-¦-é-+-+-+-¦-¦-+-û -+-¦-é-+-¦-+, -+-+-+-û-é-+-Ç-+-+-¦ -é-+-ü-¦-â -é-¦ -¦-+-é-Ç-¦-é-+.

## -Ü-+-Ä-ç-+-¦-û -ä-â-+-¦-å-û-ù

- PumpManager GÇö 30+ Q_PROPERTY: flowRate, syringeA/BVolume, pressures, sequencerStep, faultCode
- Modbus async priority queue GÇö readHolding/readInput/writeSingle/writeMultipleAsync; -ü-é-¦-é-+-ü-é-+-¦-¦
- Auto-reconnect -+ -+-¦-+-¦-ê-é-+-¦-â-¦-¦-+-+-+ -û-+-é-¦-Ç-¦-¦-+-+-+
- Flow Method Manager GÇö sequence steps: flowRate, composition, duration, volume
- Flowmeter calibration (FlowMeterCalibrationManager) GÇö guided -+-Ç-+-å-¦-¦-â-Ç-¦
- Setpoints R/W GÇö flowRateSetpoint, pmin/pmax, fillFlowRate, flushFlowRate
- 8 -¦-+-¦-+-¦-+-û-¦ (valve1GÇô8), 2 -Ç-¦-+-¦; homed/filling pump A/B
- Real-time charting (HPLCChart.qml) GÇö -é-+-ü-¦/-¦-+-é-Ç-¦-é-¦
- Qt Test + CTest unit tests

## Tech Stack

| Component | Technology |
|---|---|
| Language | C++17 |
| UI | Qt6 Quick/QML |
| Communication | QModbusClient (SerialBus RTU) |
| Testing | Qt Test + CTest |
| Build | CMake 3.16+, Ninja |
| Deployment | windeployqt, Inno Setup, signtool |

## -£-¦-¦-û-¦

### Photos
<!-- Place photos in foto/ folder -->
<!-- Then specify paths in media.foto in assets/js/data.js -->

### Videos
<!-- Place videos in video/ folder -->
<!-- Then specify paths in media.video in assets/js/data.js -->

## -¥-+-é-¦-é-¦-+

<!-- -ö-+-¦-¦-é-¦-+-¦-û -+-+-é-¦-é-¦-+, -+-+-ü-+-+-¦-+-+-Å, -ü-¦-Ç-û-+-ê-+-é-+, -¦-¦-Ç-ü-û-ù -->

