---
title: "Fast polynomial arithmetic for post-quantum cryptography"
description: "Algorithms and their complexity for polynomial multiplication in the rings used by lattice-based cryptography."
node: istanbul
levels: [phd]
supervisors: [tulay]
area: [math, cs]
prerequisites: "Algebra; algorithms and complexity; cryptography basics"
status: open
---

Lattice-based post-quantum schemes spend most of their time multiplying polynomials in rings such as Z_q[x]/(x^n+1). Faster multiplication directly gives faster cryptography.

## Goal

Study and design multiplication algorithms for these rings, such as variants of the number-theoretic transform and Karatsuba-type methods, analyse their complexity, and implement them efficiently.
