---
outline: deep
---

# Lorelei Project

User-level Dynamic binary translators (DBTs) cannot efficiently emulate libraries involving vector instructions and hardware drivers, such as OpenGL, Vulkan, and several high-performance computing libraries, thus facing performance challenges.

Lorelei is a heterogeneous execution compatibility layer for DBTs, focusing on adding host libraries pass-through support to existing DBTs. Lorelei is not a emulator but an extension or plugin for DBTs.

Lorelei can enable traditional full-emulation DBTs such as QEMU (User) and Blink to directly invoke host shared libraries, and also provide native-passthrough support of more libraries for Box64.

Currently, the Lorelei-patched QEMU and Blink are also capable of running x86_64 games on ARM64 and RISC-V64 Linux systems.

## Supported Libraries

- FFmpeg (avcodec, avformat, avutil, avfilter, avdevice, swscale, swresample)
- SDL (SDL1, SDL2)
- OpenGL (GL, EGL, GLX)
- Vulkan
- OpenSSL (crypto, ssl)
- Vorbis (vorbis, vorbisenc, vorbisfile)
- Zlib
- Zstd
- FFTW3
- Pixman

To be added...

## Compatible Games

The following x86_64 games are tested on Lorelei-patched `qemu-x86_64`.

- Hollow Knight
- SuperTux
- SuperTuxKart
- OpenArena
- Red Eclipse
- Xonotic
- World of Padman
- Uebergame
- Assault Cube