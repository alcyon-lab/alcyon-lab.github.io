---
title: Lean and Computer Algebra
description: Bridge the gap between Lean/Mathlib's abstract algebra and executable computer algebra - polynomial arithmetic, Gröbner bases, and certified computation.
node: athens
levels: [msc]
supervisors: [zaf]
area: [math]
status: open
---


Mathlib defines polynomials, ideals, and Gröbner bases **abstractly**, as objects satisfying certain algebraic properties. A computer algebra system needs **executable** algorithms that actually compute a GCD, a normal form, or a Gröbner basis, and, ideally, a proof that the algorithm meets its abstract specification.

This gap between "Lean can state what a Gröbner basis is" and "Lean can compute one, and prove the computation correct" is exactly where formal verification meets computer algebra. As Davenport (2024) puts it, Lean's support for abstract polynomials is "not necessarily the same as support for computations with polynomials" — closing that gap is harder than it looks.

## Why it matters

- **Certified computer algebra.** A computation whose correctness is a Lean theorem, not just a test suite, is immune to an entire class of implementation bugs. This matters most for the primitives (GCD, factorization, Gröbner bases) that everything else in a CAS is built on.
- **Executable Mathlib.** Mathlib's Gröbner basis theory (Buchberger's criterion, existence/uniqueness of reduced Gröbner bases) is stated for arbitrarily many variables, which is elegant for proofs but not obviously executable — connecting the finite, computable case to the general theorem is itself a nontrivial formalization task.
- **A concrete target for `#eval`/`native_decide`.** Lean can already run some polynomial computations; the interesting question is how far this reaches (efficiency, generality) before it needs proof-carrying certificates instead of direct execution.

## Targets

**Polynomial GCD.** Implement a computable GCD for univariate polynomials over a field in Lean, and prove it agrees with Mathlib's abstract `gcd`.

**Buchberger's algorithm.** Implement Buchberger's algorithm for a small multivariate polynomial ring and connect it to Mathlib's existence theorem for reduced Gröbner bases (following Guo–Shen–Liu–Zhi, 2026).

**Reflection-style certification.** Investigate the "compute then verify" pattern used elsewhere in Lean/Coq: run an untrusted fast algorithm, then check its output against a slower, formally verified specification.

## Goal

Implement one executable computer algebra primitive (polynomial GCD or a small Gröbner basis computation) in Lean 4, connect it to the corresponding Mathlib abstraction, and prove the connection.

## Resources

- [Lean 4 documentation](https://leanprover.github.io/)
- [Mathlib4](https://leanprover-community.github.io/mathlib4_docs/)
- [Mathematics in Lean](https://leanprover-community.github.io/mathematics_in_lean/)

## References

1. J. H. Davenport. _First Steps Towards Computational Polynomials in Lean._
   SYNASC 2024, IEEE.
   [DOI 10.1109/synasc65383.2024.00019](https://doi.org/10.1109/synasc65383.2024.00019) ·
   [arXiv:2408.04564](https://arxiv.org/abs/2408.04564)

2. J. Guo, H. Shen, J. Liu, and L. Zhi. _Formalizing Gröbner Basis Theory in Lean._
   arXiv:2602.12772, 2026.
   [arxiv.org/abs/2602.12772](https://arxiv.org/abs/2602.12772)
