---
title: Hilbert's Nullstellensatz
date: 2023-03-23 07:51:28
link: 
author: Haoming Wang
tags: 
categories:
   - [Commutative Algebra, Algebraic Geometry]
mathjax: true
top: true
sticky: 100
toc: false
---



## Theorem 1 (Weak form)

Let $X$ be an affine algebraic variety in $k^{n}$, where $k$ is an algebraically closed field, and let $I(X)$ be the ideal of $X$ in the polynomial ring $k[t_{1}, \cdots, t_{n}]$. If $I(X) \neq (1)$ then $X$ is not empty. Every maximal ideal in the ring $k[t_{1}, \cdots, t_{n}]$ is of the form $(t_{1} - a_{1},\cdots,t_{n}- a_{n})$ where $a_{i}\in k$.



## Theorem 2 (Strong form)

Let $k$ be an algebraically closed field, let $A$ denote the polynomial ring $k[t_{1}, \cdots, t_{n}]$ and let $\mathsf{a}$ be an ideal in $A$. Let $V$ be the variety in $k^{n}$ defined by the ideal $\mathsf{a}$, so that $V$ is the set of all $x = (x_{1}, \cdots, x_{n}) \in k^{n}$ such that $f(x) = 0$ for all $f \in \mathsf{a}$. Let $I(V)$ be the ideal of $V$, i.e. the ideal of all polynomials $g \in A$ such that $g(x) = 0$ for all $x \in V$. Then $I(V) = r(\mathsf{a})$.

## Proof

It is clear that $r(a) \subseteq I(V)$. Conversely, let $f \notin r(\mathsf{a})$, then there is a prime ideal $\mathsf{p}$ containing $\mathsf{a}$ such that $f\notin \mathsf{p}$. Let $\bar{f}$ be the image of $f$ in $B = A/\mathsf{p}$, let $C = B_{f} = B[1/\bar{f}]$, and let $\mathsf{m}$ be a maximal ideal of $C$. Since $C$ is a finitely generated, $k$-algebra we have $C/\mathsf{m} \cong k$, by (7.9)[1]. The images $x_{i}$ in $C/\mathsf{m}$ of the generators $t_{i}$ of $A$ thus define a point $x = (x_{1} \cdots, x_{n}) \in k^{n}$, and the construction shows that $x \in V$ and $f(x) \neq 0$.



## Corollary 1
Let $k$ be a field and $B$ a finitely generated $k$-algebra. If $B$ is a
field then it is a finite algebraic extension of $k$.

## Corollary 2
Let $k$ be a field and let $B$ be a finitely generated $k$-algebra. Suppose that $B$ is a field. Then $B$ is a finite algebraic extension of k.

## Corollary 3
Let $k$ be afield, $A$ a finitely generated $k$-algebra. Let $\mathsf{m}$ be a maximal ideal of $A$. Then the field $A/\mathsf{m}$ is a finite algebraic extension of $k$. In particular, if $k$ is algebraically closed then $A/\mathsf{m} \cong k$.


# Reference 

[1] Michael Atiyah. Introduction to commutative algebra. CRC Press, 2018.


