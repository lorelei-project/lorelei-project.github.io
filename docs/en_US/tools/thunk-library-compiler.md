---
outline: deep
---

# Thunk Library Compiler (TLC)

The **Thunk Library Compiler (TLC)** is a CLI tool that generates GTL/HTL source files.

## Thunk Manifest File

`TLC` reads a `.cpp` file called **Thunk Manifest File** and generates one GTL or HTL source file at a time.

`TLC` includes multiple generators that handle different function signature patterns. For a plain function like `memcpy`, the generated code only contains argument packing and unpacking. For a function like `printf`, however, the GTP must decode variadic arguments based on the format string, which is significantly more complex.

For some special functions, the manifest must provide extra descriptive code because `TLC` may not recognize them correctly.

## Procedure Description

For example, the `vprintf` generator in TLC recognizes the pattern by function name and GNU attribute declaration. `SDL_LogMessageV` in `libSDL2` follows the same calling style as `vprintf`, but does not include those features, so it needs an explicit hint in the manifest.

```c++
namespace lore::thunk {

    template <>
    struct ProcFnDesc<::SDL_LogMessageV> {
        using BUILDER_PASS = pass::vprintf<>;
    };

}
```

Use `ProcFnDesc` to declare a descriptor block for a function, or `ProcCbDesc` to declare one for a callback.

```c++
namespace lore::thunk {

    template <auto F>
    struct ProcFnDesc;

    template <class T>
    struct ProcCbDesc;

}
```

## Override Generated Procedure

For some special functions, if we want to override a GTP phase, we can implement it directly in the manifest. For example, for `SDL_LoadObject`, we may want it to call `dlopen` directly.

```c++
namespace lore::thunk {

    template <>
    struct ProcFn<::SDL_LoadObject, G2H, Entry> {
        static void *invoke(const char *path, int flags) {
            return dlopen(path, flags);
        }
    };

}
```
- If a phase is implemented in the manifest, then `TLC` will not generate code for it.

## TLC Pass

`TLC` generators are similar to passes: each generator scans a function to determine whether and how code should be generated. For that reason, they are called "Passes" in `TLC`.

Passes are classified into three kinds: **Builder Pass**, **Guard Pass**, and **Misc Pass**.

### Builder Pass

TODO
