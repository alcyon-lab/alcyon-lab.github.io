---
title: PO-derived Bounds for Knapsack Families
description: Study bounds on knapsack-type integer programs derived from Polyhedral Omega counting and compare to branch-and-bound.
node: athens
levels: [msc]
supervisors: [zaf]
area: [math]
status: archived
---


We study how Polyhedral Omega (PO) counting over parametric families can be used to derive tight bounds for knapsack-type ILPs, and benchmark these bounds against classical branch-and-bound solvers.

## Problem

The **0–1 knapsack problem** asks: given items with weights $$w_i$$ and values $$v_i$$, find a subset with total weight $$\leq c$$ and maximum total value. For a _parametric family_ (e.g., capacity $$c$$ varies), the generating function

$$F(z, x) = \sum_{c \geq 0} \left(\sum_{\substack{S \subseteq [n] \\ \sum_{i\in S}w_i \leq c}} \prod_{i\in S} v_i^{x_i}\right) z^c$$

encodes the complete solution landscape. PO computes this as a rational function in $$z$$ and $$x$$.

## Approach

1. **Exact bound extraction.** Once $$F$$ is computed, the optimal value for a specific capacity $$c$$ is the maximum-weight coefficient of $$[z^c]F$$. Extracting this avoids re-solving the ILP for each $$c$$.

2. **Sensitivity analysis.** The chamber decomposition of the parameter space shows which values of $$c$$ have the same combinatorial optimum structure, enabling rapid re-optimization when capacity changes slightly.

3. **Upper bounds via LP relaxation comparison.** Compare PO-derived tight bounds against the LP relaxation bound and branch-and-bound B&B at fixed capacities.

- Repo: [po-bounds-knapsack](https://github.com/alcyon/po-bounds-knapsack)

## References

1. A. I. Barvinok. _A Polynomial Time Algorithm for Counting Integral Points in Polyhedra When the Dimension is Fixed._
   **Mathematics of Operations Research**, 19(4):769–779, 1994.
   [DOI 10.1287/moor.19.4.769](https://doi.org/10.1287/moor.19.4.769)

2. F. Breuer and Z. Zafeirakopoulos. _Polyhedral Omega: a New Algorithm for Solving Linear Diophantine Systems._
   **Annals of Combinatorics**, 21(2):211–280, 2017.
   [DOI 10.1007/s00026-017-0349-x](https://doi.org/10.1007/s00026-017-0349-x)

3. S. Verdoolaege, R. Seghir, K. Beyls, V. Loechner, and M. Bruynooghe. _Counting Integer Points in Parametric Polytopes Using Barvinok's Rational Functions._
   **Algorithmica**, 48(1):37–66, 2007.
   [DOI 10.1007/s00453-006-1231-0](https://doi.org/10.1007/s00453-006-1231-0)

4. T. Ayyildiz, D. N. Demirel, I. Tapan, and Z. Zafeirakopoulos. _A Julia Package for Polyhedral Omega and Applications._
   **ACM Communications in Computer Algebra**, 58(2):39–42, 2024.
   [DOI 10.1145/3712023.3712029](https://doi.org/10.1145/3712023.3712029)
