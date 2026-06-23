# Onyx Arranger

**Subtitle:** Intelligent MIDI arranger - harmonize, arrange, humanize
**Tags:** Commercial, C++, MFC, Win32, MIDI, BASS, SoundFont, VST, DLL plugins
**Path:** [http://www.jasminemusic.com/onyx.htm](http://www.jasminemusic.com/onyx.htm)
**Button:** Onyx Arranger Website
**Platform:** C/C++ + MFC/Win32 (MSVC)

## Purpose

Commercial Windows MIDI sequencer and auto-arranger. Starting from a single melody, it builds a complete song through three core stages - intelligent harmonization, style-based auto-arrangement and performance humanization. The whole product is built on a modular plugin architecture: every MIDI-processing tool is a DLL plugin on a shared engine, and the arrangement engine can also be exported as a VST soft-synth.

## What I Did

- Integrated the BASS audio library into Onyx as an audio output backend
- Added several BASS virtual output devices and SoundFont (SF2) playback, with a new SoundFont options page in the MIDI port settings
- Wired BASS playback into the SE3 sequencer/player engine
- Fixed debug- and release-mode build errors and symbol issues; migrated legacy Visual Studio projects (.vcproj to .vcxproj)
- Main-window sizing and dialog resources for the new settings pages


## Key features

- Intelligent Harmonizer - automatically recognizes the key and scale of a melody and calculates chord progressions in several manners
- Auto Arrangement - Orchestrator (OO) Styles reproduce full multi-instrument arrangements, preserving the original performance nuances of famous songs across genres
- Humanizing/Performance Modeling - PM Styles apply instrument- and manner-specific playing nuances to make sequences sound live
- Musical Object Morphing - morph and interpolate MIDI musical objects
- MIDI FX plugins - DLL plugins for editing and processing: harmonize, chord and drum generation, quantize, time-stretch, time-morph, score creation, filter, shaper
- VST export - run the arranger engine as a soft-synth via the bundled JMTOrchestrator VST and MIDIMatrix
- Plugin architecture - plugin host + SDK with several app editions sharing one core engine
- Expandable style libraries - additional OO Style and PM Style sets

## Tech Stack

| Component | Technology |
|---|---|
| Language | C/C++ (MSVC) |
| UI framework | MFC/Win32, custom GUI controls |
| Sequencer engine | SE3 core with MIDI mux/demux routing |
| Audio output | BASS audio library, SoundFont (SF2) playback |
| Plugin system | DLL plugin host + SDK |
| MIDI FX | Harmonizer, chord/drum generators, quantizer, time-stretch / morph, score creator |
| VST | VST 2.x export (JMTOrchestrator soft-synth) |
| Build | Visual Studio 2005 (legacy .sln) |
| Target OS | Windows |

## Media

### Photos
- projects/21-onyx/foto/Onyx_1.png
- projects/21-onyx/foto/Onyx_2.png
- projects/21-onyx/foto/Onyx_3.png
- projects/21-onyx/foto/Onyx_4.png


### Videos
- https://www.youtube.com/watch?v=VzvniW8JiUY

## Notes
