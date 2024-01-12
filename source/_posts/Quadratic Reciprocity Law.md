---
title: Quadratic Reciprocity Law
date: 2023-03-27 18:42:10
tags: 
    - [Algebraic Number Theory]
categories: 
    - [Algebraic Number Theory]
mathjax: true
---


## Quadratic Reciprocity Law

Let $p$ and $q$ be distinct odd prime numbers, and define the Legendre symbol as:

$$\left({\frac{q}{p}}\right)=
\begin{cases}1&{\text{if }}n^{2}\equiv q{\mod {p}}{\text{ for some integer }}n\\
-1&{\text{otherwise}}
\end{cases}$$
Then:

$$\left(\frac {p}{q}\right)\left(\frac{q}{p}\right)=(-1)^{\frac{p-1}{2} \frac{q-1}{2}}$$.


## Example

The law of decomposition of prime numbers $p$ in a quadratic number field $Q(\sqrt{a})$ is intimately related to Gauss's famous quadratic
reciprocity law. The latter concerns the problem of integer solutions of the equation
$$x^{2}+by=a, (a,b \in \mathbb{Z}),$$
the simplest among the nontrivial diophantine equations. The theory of this equation reduces immediately to the case where $b$ is an odd prime number $p$ and $(a, p) = 1$ (Exercise 1). Let us assume this for the sequel. We are then facing the question as to whether $a$ is a quadratic residue $\mod p$, i.e., whether the congruence

$$x^{2} \equiv a \mod p$$

does or does not have a solution. In other words, we want to know if the equation $\bar{x}^{2} = \bar{a}$, for a given element $\bar{a} = a \mod p \in \mathbb{F}^{*}_{p}$, admits a solution in the field $\mathbb{F}_{p}$ or not. For this one introduces the Legendre symbol $\left(\frac{a}{p}\right)$, which, for every rational number $a$ relatively prime to $p$, is defined $\left(\frac{a}{p}\right) = 1$ or $-1$, according as $x^{2} \equiv a \mod p$ has or does not have a solution. This symbol is multiplicative,

$$\left(\frac{ab}{p}\right) = \left(\frac{a}{p}\right) \left(\frac{b}{p}\right)  $$

This is because the group $\mathbb{F}^{*}_{p}$ is cyclic of order $p-1$ and the subgroup $\mathbb{F}^{*2}_{p}$ of squares has index $2$, i.e., $\mathbb{F}^{*}_{p}/\mathbb{F}^{*2}_{p} \cong \mathbb{Z}/2\mathbb{Z}$. 
. Since $\left(\frac{a}{p}\right) = 1 \Longleftrightarrow \bar{a} \in \mathbb{F}_{p}^{*2}$, one also has


$$\left(\frac{a}{p}\right)=a^{\frac{p-1}{2}} \mod p$$.

In the case of squarefree $a$, the Legendre symbol $\left(\frac{a}{p}\right)$ bears the following relation with prime factorization.  $\left(\frac{a}{p}\right) = 1$ $signifies that 

$$x^{2} -a \equiv (x - \alpha) (x + \alpha) \mod p $$

for some $\alpha \in \mathbb{Z}$. The conductor of $Z [\sqrt{a}]$ in the ring of integers of $Q (\sqrt{a})$ is $a$ divisor of $2$ (Exercise 2). We may therefore apply Exercise 3 and obtain the

## Proposition 1

For squarefree $a$ and $(p, 2a) = 1$, we have the equivalence

$$\left(\frac{a}{p}\right) = 1 \Longleftrightarrow p \text{ is totally split in } \mathbb{Q}(\sqrt{a})$$

For the Legendre symbol, one has the following remarkable law, which like none other has left its mark on the development of algebraic number theory.

## Theorem

or two distinct odd prime
numbers $p$ and $q$, the following identity holds:


$$\left(\frac {p}{q}\right)\left(\frac{q}{p}\right)=(-1)^{\frac{p-1}{2} \frac{q-1}{2}}$$.

One also has the two "supplementary theorems"

$$\left(\frac{-1}{p}\right) = (-1)^{\frac{p-1}{2}}, \quad \left(\frac{2}{p}\right) =  (-1)^{\frac{p^{2}-1}{8}}$$

## Proof

$\left(\frac{-1}{p}\right) = (-1)^{\frac{p-1}{2}} \mod p$ implies $\left(\frac{-1}{p}\right) = (-1)^{\frac{p-1}{2}}$ since $p \neq 2$

In order to determine $\left(\frac{2}{p}\right)$, we work in the ring $\mathbb{Z}[i]$ of Gaussian integers. Since $(1+i)^{2} = 2i$, we find

$$(1+i)^{p} = (1+ i) \left((1+i)^{2}\right)^{\frac{p-1}{2}} = (1+i) i^{\frac{p-1}{2}} 2^{\frac{p-1}{2}}$$

and since $(1 + i)^{p} = 1 + i^{p} \mod p$ and $\left(\frac{2}{p}\right) =  2^{\frac{p -1 }{2}} \mod p$, it follows that

$$\left(\frac{2}{p}\right) (1+i) i^{\frac{p-1}{2}} \equiv 1 + i(-1)^{\frac{p-1}{2}} \mod p$$

From this, an easy computation yields

$$\left(\frac{2}{p}\right) \equiv (-1)^{\frac{p-1}{4}} \mod p, \text{ resp. } \left(\frac{2}{p}\right) =  \equiv (-1)^{\frac{p+1}{4}} \mod p$$

if $p-1$ is even, resp. odd. Since $\frac{p^{2}- 1}{8} = \frac{p-1}{4} \frac{p+1}{2} = \frac{p+1}{4} \frac{p-1}{2}$, we deduce $\left(\frac{2}{p}\right) = (-1)^{\frac{p^{2}-1}{8}}$.


In order to prove the first formula, we work in the ring $\mathbb{Z}[\zeta]$, where $\zeta$ is a primitive $p$-th root of unity. We consider the Gauss sum

$$g = \sum_{a \in \mathbb{Z}/p\mathbb{Z}} \left(\frac{a}{p}\right)\zeta^{a}$$

and show that

$$g^{2} = \left(\frac{-1}{p}\right)p$$

For this, let $a$ and $b$ vary over the group $(\mathbb{Z}/p\mathbb{Z})^{*}$, put $c = ab^{-1}$ and deduce from the identity $\left(\frac{b}{p}\right) = \left(\frac{b^{-1}}{p}\right)$ that

$$\begin{aligned}
\left(\frac{-1}{p}\right) g^{2} = &\sum_{a,b} \left(\frac{-ab}{p}\right) \zeta^{a+b} = \sum_{a,b} \left(\frac{ab^{-1}}{p}\right) \zeta^{a-b} = \sum_{a,b} \left(\frac{c}{p}\right) \zeta^{bc -b}\\
= & \sum_{c\neq 1}\left(\frac{c}{p}\right) \sum_{b}\zeta^{b(c-1)} + \sum_{b} \left(\frac{1}{p}\right)  
\end{aligned}$$



Now $\sum_{c} \left(\frac{c}{p}\right) = 0$, as one sees by multiplying the sum with a symbol $ \left(\frac{x}{p}\right) = -1$, and putting
$\xi = \zeta^{c-1}$ gives $\sum_{b} \zeta ^{b(c-1)} = \xi + \xi^{2} + \cdots + \xi^{p-1} = -1$ from which we indeed find that

$$\left(\frac{-1}{p}\right) g^{2} = (-1)(-1) + p -1 = p$$

This, together with the congruence $\left(\frac{p}{q}\right) = p^{\frac{q-1}{2}} \mod q$ and the identity $\left(\frac{-1}{p}\right) = (-1)^{\frac{p-1}{2}}$, implies

$$g^{q} = g (g^{2})^{\frac{q-1}{2}} \equiv g (-1)^{\frac{p-1}{2}\frac{q-1}{2}} \left(\frac{p}{q}\right) \mod q$$

On the other hand one has

$$g^{q} = \sum_{a} \left(\frac{a}{p}\right) \zeta^{aq} = \left(\frac{p}{q}\right) \sum_{a^{\prime}} \left(\frac{aq}{p}\right)\zeta^{aq} \equiv \left(\frac{q}{p}\right)g \mod q$$

so that

$$g\left(\frac{q}{p}\right) \equiv g (-1)^{\frac{p-1}{2}\frac{q-1}{2}} \left(\frac{p}{q}\right) \mod q $$

Multiplying by $g$ and dividing by $\pm p$ yields the claim. $\square$




## Exercise 1
Given a positive integer $b > 1$, an integer $a$ relatively prime to $b$ is a quadratic residue $\mod b$ if and only if it is a quadratic residue modulo each prime divisor $p$ of $b$, and if $a - 1 \mod 4$ when $4|b$, $8{\small\not|} b$, resp. $a \equiv 1 \mod 8$ when $8|b$.


## Exercise 2

Let $D$ be a squarefree rational integer $\neq 0, 1$ and $d$ the discriminant of the quadratic number field $\mathbf{K} = \mathbb{Q}(\sqrt{D})$. Show that
$$
\begin{aligned}
d = D, \quad & \text{ if } D \equiv 1 \mod 4\\
d = 4D, \quad & \text{ if } D \equiv 2 \text{ or } 3 \mod 4\\
\end{aligned}
$$
and that an integral basis of $\mathbf{K}$ is given by $\{1,\sqrt{D}\}$ in the second case, by $\left\{l, \frac{1}{2}(1 +\sqrt{D})\right\}$ in the first case, and by $\left\{1,  \frac{1}{2}(d +\sqrt{d})\right\}$ in both cases.


## Exercise 3

Denote $\mathcal{o}$ an arbitrary
Dedekind domain and the integral closure $\mathcal{O}$ of $\mathcal{o}$ in a finite extension of its field of fractions.

Let $\mathsf{p}$ be a prime ideal of $\mathcal{o}$ which is relatively prime to the
conductor $\mathfrak{F}$ of $\mathcal{o}[\theta]$, and let
$$\bar{p}(X) = \bar{p}_{1}(X)^{e_{1}} \bar{p}_{2}(X)^{e_{2}} \cdots \bar{p}_{r}(X)^{e_{r}}$$
be the factorization of the polynomial $\bar{p} (X) = p (X) \mod p$ into irreducibles $\bar{p}_{i} (X) = p_{i}(X) \mod \mathsf{p}$ over the residue class field $\mathcal{o}/\mathsf{p}$, with all $p_{i} (X) \in \mathcal{o}[X]$ monic. Then
$$\mathfrak{P}_{i} = \mathsf{p} \mathcal{O} + p_{i}(\theta)\mathcal{O}, i=1,\cdots,r,$$

are the different prime ideals of $\mathcal{O}$ above $\mathsf{p}$. The inertia degree $f_{i}$ of $\mathfrak{P}_{i}$ is the degree of $\bar{p}_{i} (X)$, and one has
$$\mathsf{p} = \mathfrak{P}_{1}^{e_{1}} \cdots \mathfrak{P}_{r}^{e_{r}}$$


# Reference


[1] Artin, Emil. "Quadratische Körper im Gebiete der höheren Kongruenzen. I. Arithmetischer Teil." Mathematische Zeitschrift 19.1 (1924): 153-206.

[2] Gauss, Carl Friedrich (1986). Disquisitiones Arithemeticae. Translated by Clarke, Arthur A. (Second, corrected ed.). New York: Springer.

[3] Neukirch J. Algebraic number theory[M]. Springer Science & Business Media, 2013.

[4] Weyl H. Algebraic theory of numbers[M]. Princeton University Press, 1998.



