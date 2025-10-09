---
title: Nevanlinna Theory (II)
date: 2023-03-27 18:40:10
tags:
    - [Sevaral Complex Variables]
categories:
    - [Sevaral Complex Variables, Nevanlinna Theory]
mathjax: true
---


## Corollary 1 [Picard-Borel]

For a nonconstant meromorphic function there are at most two values of $a$ for which the counting function $N(r, a)$ [or $n(r, a)$] is of lower order (class, type) than the characteristic $T(r)$.

## Theorem [deficiency sum]

If the function $w(z)$ is meromorphic for $z \neq \infty$, then the deficiency $\delta(a)$ defined by 

$$\delta(a) = \varliminf\limits_{r = \infty} \frac{m(r,a)}{T(r)} = 1 - \varlimsup\limits_{r = \infty} \frac{N(r,a)}{T(r)} $$

vanishes for all but at most a countable set of values $a$. The sum of all deficiencies is at most equal to $2$:

$$\sum \delta(a_{i}) \leq 2$$



## Corollary 2 [Picard]
If the curve $f(x, y) = 0$ is of genus $p > 1$, then there is no pair of meromorphic functions $x(t), y(t)$ such that $f(x(t), y(t)) = 0$.




## Therorem [P\'olya]
Suppose that $f(z), g(z)$ are integral functions and that $\phi(р) = g\left(f(z)\right)$ has finite order. Then either $f(z)$ is a polynomial or $g(z)$ has zero order.



Suppose that f(z) and g(z) are transcendental, since otherwise there
is nothing to prove. In this case it follows from (2.13) that

$$T(r,\phi) \geq \frac{1}{3}T(r^{n+1},g)$$

for all sufficiently large $r$, when $N$ is a fixed positive integer. Since $\phi(z)$ has finite order $k$, say, we deduce that, for all sufficiently large $r$, we have by (2.13)

$$T(r^{n+1},g) < 3r^{k+1}$$

and setting $\rho = r^{N+1}$ we deduce for all sufficiently large $\rho$

$$T(\rho,g) < 3 \rho^{(k+1)/(N+1)}$$

Since $k$ is fixed and $N$ can be chosen as large as we please, $g(z)$ must have zero order. This proves Theorem 2.9. $\square$

# Reference


[1] Nevanlinna R. Le théorème de Picard-Borel et la théorie des fonctions méromorphes[M]. Chelsea Publishing Company, Incorporated, 1929.


