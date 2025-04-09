---
layout: pub
year: 2023
title: "PTOPO: Computing the geometry and the topology of parametric curves"
authors: Christina Katsamaki, Fabrice Rouillier, Elias P. Tsigaridas, Zafeirakis Zafeirakopoulos
venue: Journal of Symbolic Computation
vurl: https://www.sciencedirect.com/science/article/abs/pii/S0747717122000785?via%3Dihub
pub: https://www.sciencedirect.com/science/article/abs/pii/S0747717122000785?via%3Dihub
doi: https://doi.org/10.1016/j.jsc.2022.08.012
pdf: https://hal.science/hal-03090184
---
We consider the problem of computing the topology and describing the geometry of a parametric curve in R^n. We present an algorithm, PTOPO, that constructs an abstract graph that is isotopic to the curve in the embedding space. Our method exploits the benefits of the parametric representation and does not resort to implicitization. Most importantly, we perform all computations in the parameter space and not in the implicit space. When the parametrization involves polynomials of degree at most d and maximum bitsize of coefficients τ, then the worst case bit complexity of PTOPO is O_B (nd^6 + nd^5 τ + d^4 (n^2 + nτ) + d^3 (n^2 τ + n^3) + n^3 d^2 τ). This bound matches the current record bound O_B (d^6 + d^5 τ) for the problem of computing the topology of a plane algebraic curve given in implicit form. For plane and space curves, if N = max{d, τ}, the complexity of PTOPO becomes O_B (N^6), which improves the stateof-the-art result, due to Alcázar and Díaz-Toca [CAGD'10], by a factor of N^10. In the same time complexity, we obtain a graph whose straight-line embedding is isotopic to the curve. However, visualizing the curve on top of the abstract graph construction, increases the bound to O B (N^7). For curves of general dimension, we can also distinguish between ordinary and non-ordinary real singularities and determine their multiplicities in the same expected complexity of PTOPO by employing the algorithm of Blasco and Pérez-Díaz [CAGD'19]. We have implemented PTOPO in maple for the case of plane and space curves. Our experiments illustrate its practical nature.
