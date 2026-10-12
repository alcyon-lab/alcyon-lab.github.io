---
title: Polynomial GCD Algorithms
description: Implement and benchmark Euclidean, subresultant, and modular GCD algorithms for univariate and multivariate polynomials.
node: athens
levels: [undergrad-research, msc]
supervisors: [zaf]
area: [math]
status: open
---


The **greatest common divisor** of two polynomials $$f, g \in \mathbb{Z}[x]$$ is the monic polynomial of largest degree that divides both. GCD computation is the central bottleneck in rational function arithmetic, partial fraction decomposition, and factoring.

## Three algorithms

**Euclidean algorithm.** Repeatedly replace $$(f, g)$$ by $$(g, \text{rem}(f,g))$$ until the remainder is zero. Simple but suffers from **coefficient explosion**: intermediate remainders can have exponentially large coefficients even when the inputs are small.

**Subresultant pseudo-remainder sequences (Collins 1967).** Replace the naïve remainder by a _pseudo-remainder_ scaled to keep coefficients polynomial in the input size. The subresultant chain also reveals the GCD's degree without full computation, and the coefficients stay bounded by the Hadamard bound on the input.

**Modular GCD.** Compute $$\gcd(f \bmod p, g \bmod p)$$ for several primes $$p$$, then reconstruct the integer GCD using the Chinese Remainder Theorem and Hensel lifting. Fastest in practice for dense inputs; parallelisable across primes.

## Multivariate case

For $$f, g \in \mathbb{Z}[x_1,\ldots,x_n]$$ the same ideas apply but the complexity grows rapidly with $$n$$. Evaluation-interpolation strategies (reduce to univariate via random specialization, compute GCD, then interpolate) are typically used.

## Goal

Implement all three algorithms for univariate polynomials over $$\mathbb{Z}$$, verify correctness on a suite of known GCDs, and benchmark running time and coefficient size as a function of degree and coefficient bitsize.

## References

1. G. E. Collins. _Subresultants and Reduced Polynomial Remainder Sequences._
   **Journal of the ACM**, 14(1):128–142, 1967.
   [DOI 10.1145/321371.321381](https://doi.org/10.1145/321371.321381)

2. W. S. Brown. _On Euclid's Algorithm and the Computation of Polynomial Greatest Common Divisors._
   **Journal of the ACM**, 18(4):478–504, 1971.
   [DOI 10.1145/321662.321664](https://doi.org/10.1145/321662.321664)
