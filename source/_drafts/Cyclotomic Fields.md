---
title: Cyclotomic Fields
date: 2023-03-27 18:42:15
tags:
    - [Algebraic Number Theory]
categories:
    - [Algebraic Number Theory]
mathjax: true
---


- Fermat's Little Theorem

- Wilson's Theorem

- Fermat's theorem on sums of two squares


## Gaussian integers

Let the ring of gaussian integers be 

$$\mathbb{Z}[i]=\left\{a+bi|\  a,b \in \mathbb{Z}\right\}, i= \sqrt{-1}.$$

which is a [UFD](https://en.wikipedia.org/wiki/Unique_factorization_domain)


## Theorem 1
The prime elements $\pi$ of $\mathbb{Z}[i]$, up to associated elements,
are given as follows.
1. $\pi = 1 +i$,
2. $\pi=a+b i$ with $a^{2} + b^{2} = p, p \equiv 1 \pmod 4, a>|b| >0$
3. $\pi =p$, $p=3 \pmod 4$.
Here, $p$ denotes a prime number of $\mathbb{Z}$


## Proof

1. Numbers as in (1) or (2) are prime because a decomposition $\pi = \alpha \cdot \beta$ in $\mathbb{Z}[i]$ implies an equation
$$p = N(\pi) = N(\alpha) N(\beta)$$,
with some prime number $p$. Hence either $N(\alpha) = 1$ or $N(\beta) = 1$, so that either $\alpha$ or $\beta$ is a unit. 

2. Numbers $\pi = p$, where $p \equiv 3 \pmod 4$, are prime in $\mathbb{Z} [i]$, because a decomposition $p = \alpha \cdot \beta$ into non-units $\alpha$, $\beta$ would imply that $p^{2} = N(\alpha) N(\beta)$, so that $p = N(\alpha) = N(a + bi) = a^{2} + b^{2}$. By [Wilson's theorem](https://en.wikipedia.org/wiki/Wilson%27s_theorem), for all prime numbers $p \neq 2$. 
$$\begin{equation}
p=a^{2}+b^{2} \quad (a,b \in \mathbb{Z}) \Longleftrightarrow p \equiv 1 \pmod 4
\end{equation}$$
which according to the above Fermat's theorem on sums of two squares would yield $p = 1 \pmod 4$.

3. This being said, we have to check that an arbitrary prime element rr
of $\mathbb{Z}[i]$ is associated to one of those listed. First of all, the decomposition
$$N(\pi) = \pi \cdot \bar{\pi} = p_{1} \cdots p_{r}$$
with rational primes $p_{i}$, shows that $\pi | p$ for some $p = p_{i}$ This gives $N(\pi) | N(p) = p^{2}$, so that either $N(\pi) = p$ or $N\pi = p^{2}$. In the case $N(\pi) = p$ we get $\pi = a + bi$ with $a^{2} + b^{2} = p$, so $\pi$ is of type (2) or, if $p = 2$, it is associated to $1 + i$. On the other hand, if $N(\pi) = p^{2}$, then $\pi$ is associated to $p$ since $p/\pi$ is an integer with norm one and thus a unit. Moreover, $p = 3 \pmod 4$ has to hold in this case because otherwise we would have $p = 2$ or $p = 1 \pmod 4$ and because of (1) $p = a^{2} + b^{2} = (a + bi) (a - bi)$ could not be prime. This completes the proof. $\square$



