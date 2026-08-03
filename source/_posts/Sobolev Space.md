---
layout: post
title: Sobolev Space
date: 2026-07-26 22:22:14
tag: 
    - [Measures and Topology]
categories:
    - [Notes]
mathjax: true
---


Sobolev spaces are among the fundamental tools of modern analysis and partial differential equations. 
This post gives a streamlined introduction to locally convex spaces, test functions, distributions, Fourier analysis, and embedding theorems.

## 1 Test Functions and Distributions

### Notation

Let $\Omega$ be an open subset of $\mathbb R^n$, and let $K\Subset\Omega$ be a relatively compact subset of $\Omega$.

| Notation | Meaning |
|---|---|
| $C(\Omega)$ | the space of all continuous functions on $\Omega$ |
| $C^k(\Omega)$ | the space of all functions on $\Omega$ with continuous derivatives up to order $k$ |
| $C^\infty(\Omega)$ | the space of all infinitely differentiable functions on $\Omega$ |
| $C_c(\Omega)$, $C_c^k(\Omega)$, $C_c^\infty(\Omega)$ | the corresponding spaces of functions with compact support |
| $L_{\mathrm{loc}}^1(\Omega)$ | the space of all locally integrable functions |
| $W^{m,p}(\Omega)$ | the space of functions with distributional derivatives up to order $m$ in $L^p(\Omega)$ |
| $H^{m,p}(\Omega)$ | the closure of $C^\infty(\Omega)\cap W^{m,p}(\Omega)$ in $W^{m,p}(\Omega)$ |
| $\mathcal D(\Omega)$ | the space $C_c^\infty(\Omega)$ endowed with the inductive limit topology |

### Example 1.1 (The space $C(\Omega)$)

Choose a sequence of compact sets $K_0\neq\varnothing$, $K_n\uparrow\Omega$, and define

$$p_n(f)=\sup\{|f(x)|:x\in K_n\}.$$

This is a seminorm on $C(\Omega)$. A family $\mathcal P$ of seminorms on a vector space $X$ is said to be separating if, for each $x\neq0$, there is at least one $p\in\mathcal P$ such that $p(x)\neq0$.

Since $\mathcal P$ is a countable separating family of seminorms, the sets

$$V_n=\left\{f\in C(\Omega):p_n(f)<\frac1n\right\}$$

form a convex local base for $C(\Omega)$. This topology is compatible with the metric

$$d(f,g)=\max_{n\geq1}\frac{2^{-n}p_n(f-g)}{1+p_n(f-g)},$$

which is complete. Hence $C(\Omega)$ is a Fréchet space.

### Lemma 1.1

If $X$ is a topological vector space with a countable local base, then there is a metric $d$ on $X$ such that:

1. $d$ is compatible with the topology of $X$;
2. the open balls centered at $0$ are balanced;
3. $d$ is invariant: $d(x+z,y+z)=d(x,y)$ for $x,y,z\in X$.

If, in addition, $X$ is locally convex, then $d$ can be chosen so that all open balls are convex.

### Lemma 1.2

Suppose $\mathcal P$ is a separating family of seminorms on a vector space $X$. Associate to each $p\in\mathcal P$ and each positive integer $n$ the set

$$V(p,n)=\left\{x:p(x)<\frac1n\right\}.$$

Then these sets form a convex balanced local subbase for a topology $\tau$ on $X$, which turns $X$ into a locally convex space such that:

1. every $p\in\mathcal P$ is continuous;
2. a set $E\subseteq X$ is bounded if and only if every $p\in\mathcal P$ is bounded on $E$.

### Example 1.2 (The spaces $C^k(\Omega)$, $C^\infty(\Omega)$, and $C_K^\infty(\Omega)$)

Choose compact sets $K_0\neq\varnothing$, $K_N\uparrow\Omega$, and define seminorms $p_N$ on $C^\infty(\Omega)$, for $N=1,2,3,\ldots$, by

$$p_N(f)=\max\{|D^\alpha f(x)|:x\in K_N, |\alpha|<N\}.$$ 

For $C^k(\Omega)$, replace the derivative bound $N$ by $k$. These seminorms define a metrizable locally convex topology on $C^\infty(\Omega)$. For each $x\in\Omega$, the functional $f\mapsto f(x)$ is continuous in this topology. 

If $K$ is compact in $\Omega$, then $C_K^\infty(\Omega)$ denotes the space of all $f\in C^\infty(\Omega)$ whose support lies in $K$. Since $C_K^\infty(\Omega)$ is the intersection of the null spaces of the evaluation functionals as $x$ ranges over $\Omega\setminus K$, it follows that $C_K^\infty(\Omega)$ is closed in $C^\infty(\Omega)$.

### Theorem 1.1

$C^\infty(\Omega)$ is a Fréchet space.

#### Proof

Let $\{f_i\}$ be a Cauchy sequence in $C^\infty(\Omega)$, and fix $N$. Then $f_i-f_j\in V_N=\{f:p_N(f)<1/N\}$ whenever $i$ and $j$ are sufficiently large. Thus $|D^\alpha f_i-D^\alpha f_j|<1/N$ on $K_N$ whenever $|\alpha|<N$. It follows that each $D^\alpha f_i$ converges uniformly on compact subsets of $\Omega$ to a function $g_\alpha$. In particular, $f_i(x)\to g_0(x)$. It follows that $g_0\in C^\infty(\Omega)$, that $g_\alpha=D^\alpha g_0$, and that $f_i\to g_0$ in the topology of $C^\infty(\Omega)$.

### Theorem 1.2

$C^\infty(\Omega)$ is a Montel space, that is, a locally convex topological space with the Heine-Borel property.[^1]

#### Proof

Suppose that $E\subseteq C^\infty(\Omega)$ is closed and bounded. By Lemma 1.2, the boundedness of $E$ is equivalent to the existence of numbers $M_N<\infty$ such that $p_N(f)<M_N$ for $N=1,2,3,\ldots$ and all $f\in E$. The inequalities $|D^\alpha f|<M_N$, valid on $K_N$ when $|\alpha|<N$, imply the equicontinuity of $\{D^\beta f:f\in E\}$ on $K_{N-1}$ when $|\beta|<N-1$. By Ascoli's theorem and Cantor's diagonal process, every sequence in $E$ contains a subsequence $\{f_i\}$ for which $D^\beta f_i$ converges uniformly on compact subsets of $\Omega$ for every multi-index $\beta$. Hence $\{f_i\}$ converges in the topology of $C^\infty(\Omega)$. This proves that $E$ is compact.

### Corollary 1.1

$C^\infty(\Omega)$ is not normable.

To make differential calculus more flexible, we enlarge the class of differentiable functions. This program was developed by L. Schwartz. He used the letter $\mathcal D$ for $C_0^\infty(\Omega)$ and defined a generalized function to be a linear functional on $\mathcal D$.

### Example 1.3 (The test function space $\mathcal D(\Omega)$)

For $\varphi\in\mathcal D(\Omega)$ and $N=0,1,2,\ldots$, introduce the norms

$$\|\varphi\|_N=\max\{|D^\alpha\varphi(x)|:x\in\Omega,\ |\alpha|<N\}.$$

The restrictions of these norms to any fixed $\mathcal D_K(\mathbb R^d)\subseteq\mathcal D(\Omega)$ induce the same topology on $\mathcal D_K(\mathbb R^d)$ as the seminorms in Example 1.2. However, this topology is not complete. For example, let $d=1$, choose $\varphi\in\mathcal D(\mathbb R)$ with support in $[0,1]$ and $\varphi>0$ on $(0,1)$, and define

$$\psi_m(x)=\varphi(x-1)+\frac12\varphi(x-2)+\cdots+\frac1m\varphi(x-m).$$

Then $\{\psi_m\}$ is a Cauchy sequence in the suggested topology of $\mathcal D(\mathbb R)$, but $\lim\psi_m$ does not have compact support and therefore does not belong to $\mathcal D(\mathbb R)$.

We therefore introduce another topology on $\mathcal D(\Omega)$. Related results can be found in Köthe.[^2]

### Definition 1.1

Given a set $X$, a family of topological spaces $\{(Y_i,\tau_i)\}_{i\in I}$, and associated functions $f_i:Y_i\rightarrow X, i\in I,$ the inductive topology on $X$ induced by the family $\{f_i:i\in I\}$ is the finest topology $\tau$ on $X$ such that every map $f_i:(Y_i,\tau_i)\rightarrow(X,\tau)$ is continuous.

### Theorem 1.3 (Characteristic property of the final topology)

A function $g$ from $X$ to a topological space $Z$ is continuous if and only if $g\circ f_i$ is continuous for every $i\in I$.

$$\require{AMScd} 
\begin{CD}
Y_i @>{f_i}>> X\\
@V{g\circ f_i}VV @VV{g}V\\
Z @= Z
\end{CD}
$$

### Theorem 1.4

Let $E$ be a vector space and let $(E_n)_{n\geq0}$ be a sequence of linear subspaces such that $E_n\subseteq E_{n+1}$ for all $n=0,1,2,\dots$ and $E=\varinjlim E_n=\bigcup_{n=0}^\infty E_n.$ Suppose that each $E_n$ is equipped with a locally convex topology $\tau_n$ such that

1. for each $n$, the topology induced by $\tau_{n+1}$ on $E_n$ is $\tau_n$;
2. $E_n$ is closed in $E_{n+1}$ with respect to $\tau_{n+1}$.

Let $\tau$ be the finest locally convex topology on $E$ for which all canonical injections $f_n:E_n\hookrightarrow E$ are continuous. Then $E$ is complete if and only if all the spaces $E_n$ are complete.

### Definition 1.2 (The test-function space $\mathcal D(\Omega)$)

The space $C_c^\infty(\Omega)$ is endowed with the final topology of a sequence of Fréchet spaces $\bigl(C_{K_n}^\infty(\Omega),\tau_n\bigr)$ with canonical embeddings $i_n:C_{K_n}^\infty(\Omega)\rightarrow C_c^\infty(\Omega),$ where $\tau_n$ is defined in Example 1.2. Write $C_K^\infty(\Omega)=\mathcal D_K(\Omega)$ and define $\mathcal D(\Omega)=\varinjlim\mathcal D_{K_n}(\Omega).$
This definition is independent of the choice of the sequence $K_n$.

### Definition 1.3

A continuous linear functional on $\mathcal D(\Omega)$ is called a distribution.

### Definition 1.4

A locally integrable function $f$ is said to have the $\alpha$-th distributional derivative $g$ if $D^\alpha\Lambda_f=\Lambda_g$ for some locally integrable function $g$. This derivative is denoted by $D^\alpha f$.

### Theorem 1.5

$D\Lambda_f=\Lambda_{Df}$ if and only if $f$ is absolutely continuous.

### Theorem 1.6

Let $\Lambda$ be a linear functional on $\mathcal D(\Omega)$. Then $\Lambda$ is a distribution if and only if, for every compact set $K\subseteq\Omega$, there exist a nonnegative integer $N$ and a constant $C<\infty$ such that $|\Lambda\varphi|\leq C\|\varphi\|_N$ for every $\varphi\in\mathcal D_K(\Omega)$.

### Definition 1.5

Suppose $\Lambda\in\mathcal D'(\Omega)$. If $\omega$ is an open subset of $\Omega$ and $\Lambda(\varphi)=0$ for every $\varphi\in\mathcal D(\omega)$, we say that $\Lambda$ vanishes in $\omega$.

Let $W$ be the union of all open sets $\omega\subseteq\Omega$ in which $\Lambda$ vanishes. The complement of $W$ is called the support of $\Lambda$.

### Lemma 1.3

If $W$ is as above, then $\Lambda$ vanishes in $W$.

### Theorem 1.7 (Local property as continuous functions)

Suppose $\Lambda\in\mathcal D'(\Omega)$ and $K$ is a compact subset of $\Omega$. Then there exist a continuous function $f$ on $\Omega$ and a multi-index $\alpha$ such that

$$\Lambda\varphi=(-1)^{|\alpha|}\int_\Omega f(x)(D^\alpha\varphi)(x)dx$$

for every $\varphi\in\mathcal D_K(\Omega)$.

Let $\mathcal E'(\Omega)$ denote the topological dual of $C^\infty(\Omega)$ equipped with its natural topology.

### Theorem 1.8

Let $\Omega$ be an open set in $\mathbb R^n$. Then:

1. $\mathcal E'(\Omega)\subseteq\mathcal D'(\Omega)$, and the identity map is continuous with respect to the strong topologies;
2. the elements of $\mathcal E'(\Omega)$ are distributions with compact support in $\Omega$.

## 2 Fourier Transformations

### Definition 2.1

A function $\varphi\in C^\infty(\mathbb R^n)$ is said to be rapidly decreasing at infinity if

$$\lim_{|x|\to\infty}|x^\alpha\partial^p\varphi(x)|=0$$

for every $\alpha\in\mathbb N$ and every $p\in\mathbb N$.

The set of all functions in $C^\infty(\mathbb R^n)$ that are rapidly decreasing at infinity is a complex vector space denoted by $\mathcal S(\mathbb R^n)$.

Define seminorms on $\mathcal S(\mathbb R^n)$ by

$$r_{\alpha,p}(\varphi)=\sup_{x\in\mathbb R^n}|x^\alpha\partial^p\varphi(x)|,\quad\alpha,p\in\mathbb N.$$

The countable family of seminorms $(r_{\alpha,p})$ defines a Hausdorff locally convex topology on $\mathcal S(\mathbb R^n)$. This topology is metrizable and complete. Thus $\mathcal S(\mathbb R^n)$ is a Fréchet space. In fact, $\mathcal S(\mathbb R^n)$ is a Montel space.

### Theorem 2.1

$\mathcal S(\mathbb R^n)$ has the Heine–Borel property.

### Theorem 2.2

We have the continuous embeddings

$$C_c(\mathbb R^n)\subseteq\mathcal S(\mathbb R^n)\subseteq C^\infty(\mathbb R^n).$$

Moreover, $C_c(\mathbb R^n)$ is dense in $\mathcal S(\mathbb R^n)$, and $\mathcal S(\mathbb R^n)$ is dense in $C^\infty(\mathbb R^n)$.

### Definition 2.2

The elements $\varphi\in\mathcal S(\mathbb R^n)$ are called tempered distributions.

### Theorem 2.3

Every tempered distribution is the derivative of a continuous function that increases slowly at infinity.

### Lemma 2.1

If $\varphi$ is a tempered distribution, then there exists $k>0$ such that $$(1+|x|^2)^{-k/2}\varphi\in L^\infty.$$

### Theorem 2.4 (Plancherel)

There is a linear isometry $\Psi$ of $L^2(\mathbb R^n)$ onto $L^2(\mathbb R^n)$ uniquely determined by the requirement that

$$\Psi f=\widehat f$$

for every $f\in\mathcal S(\mathbb R^n)$.

## 3 Imbedding Theorem

**Theorem 3.1** (Meyers and Serrin) $H^{m,p}(\Omega)=W^{m,p}(\Omega).$

**Theorem 3.2** (Sobolev) If either $mp>n$ or $m=n$ and $p=1$, then $W^{j+m,p}(\Omega)\hookrightarrow C_B^j(\Omega).$

**Theorem 3.3** (Sobolev) If $mp<n$, then $W^{m,p}(\Omega)\hookrightarrow L^q(\Omega)$ for $p<q<p^*=\frac{np}{n-mp}.$

**Theorem 3.4** (Sobolev) If $mp\geq n$, then $W^{m,p}(\Omega)\hookrightarrow L^q(\Omega)$ for $p\leq q\leq\infty.$

**Theorem 3.5** (Morrey) If $mp>n>(m-1)p,$ then $W^{j+m,p}(\Omega)\hookrightarrow C_B^{j,\lambda}(\Omega)$ for $0<\lambda<m-\frac np.$

**Theorem 3.6** (Morrey) If $n=(m-1)p,$ then $W^{j+m,p}(\Omega)\hookrightarrow C_B^{j,\lambda}(\Omega)$ for $0<\lambda<1$. If $n=m-1$ and $p=1$, then the result also holds for $\lambda=1$.

## References

1. R. A. Adams and John J. F. Fournier. *Sobolev Spaces*. Elsevier, 2003.
2. J. Barros-Neto. *An Introduction to the Theory of Distributions*. Pure and Applied Mathematics 14. M. Dekker, New York, 1973. 中译本：《广义函数引论》，上海科技出版社，1981，欧阳光中、朱学炎译。
3. I. M. Gel'fand and G. E. Shilov. *Generalized Functions, Volume 2: Spaces of Fundamental and Generalized Functions*. American Mathematical Society, 2016. 中译本：《广义函数 2》，科学出版社，1984，夏道行译。
4. W. Rudin. *Functional Analysis*. International Series in Pure and Applied Mathematics. McGraw-Hill, 1991.
5. L. Schwartz. *Théorie des distributions*. Publications de l'Institut de Mathématique de l'Université de Strasbourg. Hermann, 1966. 中译本：《广义函数论》，高等教育出版社，2010，姚家燕译。

[^1]: For completeness and Montel spaces, see J. Horváth, *Topological Vector Spaces and Distributions*, Courier Corporation, 2012, pp. 162–165 and Section 3.9.
[^2]: G. Köthe, *Topological Vector Spaces I–II*, Springer, 1983.

