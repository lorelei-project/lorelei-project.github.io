---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Lorelei"
  text: "Cross-Architecture Compatibility Layer For Binary Translators."
  tagline: Run x86_64 Applications on New Architectures.
  image:
    src: /logo.jpg
    alt: Lorelei
  actions:
    - theme: brand
      text: Get Started
      link: /intro/get-started
    # - theme: alt
    #   text: API Examples
    #   link: /api-examples

features:
  - title: Host Libraries Pass-Through
    details: Arming the binary translator with host libraries that are already available on the target architecture.
  - title: Automated Thunk Generation
    details: Liberate the workforce of implementing a huge amount of conversion stubs manually.
  - title: Multiple Emulator Support
    details: Working as a DBT extension that can be applied to general DBTs, such as QEMU user emulator, Blink and Box64.
---

