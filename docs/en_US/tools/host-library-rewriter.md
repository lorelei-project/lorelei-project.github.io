---
outline: deep
---

# Host Library Rewriter (HLR)

The **Host Library Rewriter (HLR)** injects check guards into host library source code. A host library should be patched when [`TLC`](./thunk-library-compiler.md) cannot handle potential callbacks.

## TLC Limitations of Handling Function Pointers

If host library APIs involve function pointers that cannot be determined at compile time, or if they return host function pointers, [`TLC`](./thunk-library-compiler.md) cannot handle them.

```c++
using PFN_compare = int (*)(const void *, const void *);

// failed case 1: pointer to function pointer
void func1(PFN_compare *cmp);

// failed case 2: union containing function pointer
union U {
    PFN_compare cmp;
    // ...
};
void func2(union U *u);

// failed case 3: array of function pointers
void func3(PFN_compare cmp[100]);

// failed case 4: returned host function pointer
struct S {
    PFN_compare cmp1;
    PFN_compare cmp2;
    // ...
};
struct S *func4();
```

## Conversion Code Interpolation

`HLR` detects expressions that invoke function pointers or decay functions into function pointers in host library source code, and inserts check guards before those operations.

```c++
typedef int (*PFN_compare)(const void *, const void *);

struct A {
    PFN_compare cmp;
};

static int my_compare(const void *a, const void *b) {
    // ...
}
```

For instance, the original code is:
```c++
void some_api_1(A *a) {
    z = a->cmp(x, y); // fp call
}

void some_api_2(A *a) {
    a->cmp = my_compare; // fp assignment
}
```

After patching, the code will be transformed into:
```c++
void some_api_1(A *a) {
    LORE_CCG_1(a->cmp)(x, y); // Lorelei call-check-guard 1
}

void some_api_2(A *a) {
    a->cmp = LORE_FDG_1_1(my_compare); // Lorelei function-decay-guard 1-1
}
```

It also inserts prologue and epilogue code at the beginning and end of the patched source file.
