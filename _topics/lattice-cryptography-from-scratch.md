---
title: "Lattice-based cryptography from scratch"
description: "Implement Learning With Errors (LWE) encryption and study how polynomial multiplication affects its speed."
node: istanbul
levels: [undergrad-thesis]
supervisors: [tulay]
area: [math, cs]
prerequisites: "Linear algebra; modular arithmetic; programming"
status: open
---

Post-quantum schemes such as Kyber are built on the Learning With Errors problem over polynomial rings. Their efficiency rests on fast polynomial multiplication, typically via the number-theoretic transform.

## Goal

Implement a basic LWE and ring-LWE encryption scheme, compare schoolbook, Karatsuba and NTT-based polynomial multiplication inside it, and measure the effect on performance.
