---
outline: deep
---

# Getting Started

## Integrate with QEMU 11.0+

Lorelei can integrate with QEMU 11.0 or later through QEMU's plugin interface.

- `libLoreQEMUThreadHook.so` intercepts host-side thread creation requested by host libraries, so new threads start from QEMU's thread entry and get a valid virtual `CPUState`.
- `libLoreQEMUPlugin.so` filters Lorelei magic syscalls and forwards host calls from GTL to host libraries.

### Usage

On ARM64 Linux system, you can use the following command to launch a program with Lorelei:

```bash
export LORELEI_ROOT=/path/to/lorelei
export LORELEI_GUEST_ROOT=/path/to/lorelei-x86_64

LD_PRELOAD=$LORELEI_ROOT/lib/libLoreQEMUThreadHook.so \
LD_LIBRARY_PATH=$LORELEI_ROOT/lib:$LORELEI_ROOT/lib/aarch64-LoreHTL \
    qemu-x86_64 -U LD_PRELOAD \
    -E LD_LIBRARY_PATH=$LORELEI_GUEST_ROOT/lib:$LORELEI_GUEST_ROOT/lib/x86_64-LoreGTL \
    -plugin $LORELEI_ROOT/lib/libLoreQEMUPlugin.so \
    <program> <args...>
```