---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Lorelei"
  text: "Cross-Architecture Compatibility Layer for Emulators."
  tagline: Run x86_64 Applications on New Architectures.
  image:
    src: /logo.jpg
    alt: Lorelei
  actions:
    - theme: brand
      text: Introduction
      link: /intro/lorelei-project
    # - theme: alt
    #   text: API Examples
    #   link: /api-examples

features:
  - title: Host Library Pass-Through
    details: Enable the binary translator to directly leverage host libraries already available on the target architecture.
  - title: Automated Thunk Generation
    details: Eliminate the need to manually implement large numbers of conversion stubs.
  - title: Multiple Emulator Support
    details: Works as a DBT extension that can be applied to general-purpose DBTs, such as QEMU-User, Blink, and Box64.
---
