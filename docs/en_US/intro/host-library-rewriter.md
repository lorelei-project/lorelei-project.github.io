---
outline: deep
---

# Host Library Rewriter (HLR)

The **Host Library Rewriter (HLR)** injects check guards into the host library source code. The host library should be patched if [`TLC`](./thunk-library-compiler.md) failed to handle potential callbacks.

## TLC Limitations of Handling Function Pointers

If the host library APIs involve potential function pointers that cannot be known at compile time, or returns host function pointers, [`TLC`](./thunk-library-compiler.md) cannot handle them.

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

The `HLR` detects expressions that invoke a function pointer or decay a function into a function pointer in the host library source code, and inserts a check guard before each call.

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
    LORETHUNK_FPCALL(a->cmp)(x, y);
}

void some_api_2(A *a) {
    a->cmp = LORETHUNK_FPASSIGN(my_compare);
}
```

There will also be several prolog and epilog codes inserted at the beginning and end of the patched source file.