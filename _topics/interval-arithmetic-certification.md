---
title: "Interval arithmetic for certified computations"
description: "Build a small interval-arithmetic library and use it to certify roots found by numerical solvers."
node: istanbul
levels: [undergrad-thesis]
supervisors: [tulay]
area: [math, cs]
prerequisites: "Basic numerical analysis; programming"
status: open
---

Numerical solvers return approximate roots without guarantees. Interval arithmetic computes with enclosures instead of numbers, and tests such as the interval Newton and Krawczyk operators can prove that a box contains exactly one root.

## Goal

Implement interval arithmetic with correct rounding, implement the interval Newton or Krawczyk test, and use them to certify the roots returned by a standard numerical solver.
