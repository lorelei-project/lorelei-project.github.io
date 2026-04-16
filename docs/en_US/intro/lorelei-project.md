---
outline: deep
---

# Lorelei Project

User-level dynamic binary translators (DBTs) cannot efficiently emulate libraries that rely on vector instructions and hardware drivers, such as OpenGL, Vulkan, and many high-performance computing libraries. As a result, they often face performance bottlenecks.

Lorelei is a heterogeneous execution compatibility layer for DBTs, focused on adding host library pass-through support to existing DBTs. Lorelei is not an emulator, but an extension or plugin for DBTs.

Lorelei enables traditional full-emulation DBTs, such as QEMU-User to directly invoke host shared libraries. It also provides native pass-through support for additional libraries in Box64.

Currently, Lorelei-patched QEMU-User can run x86_64 games on ARM64 and RISC-V64 Linux systems.

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

The following x86_64 games have been tested on Lorelei-patched `qemu-x86_64`.

- Hollow Knight
- SuperTux
- SuperTuxKart
- OpenArena
- Red Eclipse
- Xonotic
- World of Padman
- Uebergame
- Assault Cube

## KVM Forum 2025

Lorelei: Enable QEMU to Leverage Native Shared Libraries

<lite-youtube videoid="_jioQFm7wyU" params="start=0" />
