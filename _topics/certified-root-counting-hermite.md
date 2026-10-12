---
title: "Certified root counting with Hermite matrices"
description: "Count the real roots of a polynomial from the signature of its Hermite matrix, and compare with Sturm sequences."
node: istanbul
levels: [undergrad-thesis]
supervisors: [tulay]
area: [math, cs]
prerequisites: "Linear algebra; programming in Julia or Python"
status: open
---

The Hermite quadratic form of a univariate polynomial encodes its roots: its rank gives the number of distinct complex roots and its signature the number of distinct real roots. This gives a purely linear-algebraic way to count real roots.

## Goal

Implement the Hermite matrix of a univariate polynomial, compute its signature exactly, and compare the resulting real root counts, in correctness and speed, with Sturm sequences.
