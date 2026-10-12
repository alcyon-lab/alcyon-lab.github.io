---
title: Machine Learning for Mathematics
description: Apply machine learning techniques to mathematical objects such as polynomials and polytopes.
node: athens
levels: [msc, phd]
supervisors: [zaf]
area: [math]
status: archived
---


We explore how machine learning methods can be applied to mathematical objects (polynomials, polytopes, integer programs) to improve algorithmic performance or guide the discovery of new mathematical structure.

## Directions

**Symbolic computation via transformers.** Lample & Charton (2020) showed that sequence-to-sequence models trained on large datasets of symbolic expressions can solve integration problems and first-order ODEs at competitive speed. This raises the question: which algebraic operations admit efficient neural approximations, and how do they compare to exact methods?

**Learning heuristics for combinatorial algorithms.** Branch-and-bound solvers, Gröbner basis computations, and root isolation all involve choices (branching, term ordering, subdivision strategy) that are NP-hard to optimize globally but may admit learned heuristics.

**Data-driven conjecture discovery.** Recent work in algebraic combinatorics uses ML to identify patterns in tabulated data (e.g., Ehrhart polynomials, generating function coefficients) that lead to new conjectures.

## Starting point

Replicate the Lample–Charton integration experiment on a small dataset of rational function integrals, then explore whether a similar approach works for polynomial GCD or root isolation sub-problems.

## References

1. G. Lample and F. Charton. _Deep Learning For Symbolic Mathematics._
   ICLR 2020, OpenReview.net.
   [openreview.net/forum?id=S1eZYeHFDS](https://openreview.net/forum?id=S1eZYeHFDS)

2. A. Davies, P. Veličković, L. Buesing, S. Blackwell, D. Zheng, N. Tomašev, R. Tanburn, et al. _Advancing mathematics by guiding human intuition with AI._
   **Nature**, 600:70–74, 2021.
   [DOI 10.1038/s41586-021-04086-x](https://doi.org/10.1038/s41586-021-04086-x)
