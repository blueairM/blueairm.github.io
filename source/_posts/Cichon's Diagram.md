---
title: Cichon's Diagram
date: 2023-07-31 09:14:51
tags:
    - [Set Theory]
categories:
    - [Set Theory]
mathjax: true
---

# Definitions

Let $I$ be an ideal of a given infinite set $X$, that is, a partially ordered collection of subsets such that 

1. $\emptyset \in I$,

2. $B \in I$ if $B \subseteq A$ for some $A \in I$, and 

3. $A \cup B \in I$ if $A, B \in I$.

Assume $I$ contains all finite subsets of $X$. We define the following cardinal coefficients of I:

- $\operatorname{add} (I) = \min \{|A|: A \subseteq I \land \bigcup A \notin I\}$.\
The "additivity" of $I$ is the smallest number of sets from $I$ whose union is not in $I$ any more. As any ideal is closed under finite unions, this number is always at least $\aleph_{0}$; if $I$ is a $\sigma$-ideal, then $\operatorname{add} (I) \geq \aleph_{1}$. 
- $\operatorname{cov} (I) = \min \{|A|: A \subseteq I \land \bigcup A = X\}$.\
The "covering number" of $I$ is the smallest number of sets from $I$ whose union is all of $X$. As $X$ itself is not in $I$, we must have $\operatorname{add} (I)  \leq  \operatorname{cov} (I) $.
- $\operatorname{non} (I) = \min \{|A|: A \subseteq X \land A \notin I\}$.\
The "uniformity number" of $I$ (sometimes also written $\operatorname{unif} (I)$) is the size of the smallest set not in $I$. By our assumption on $I$, $\operatorname{add} (I) \leq \operatorname{non} (I)$.
- $\operatorname{cof} (I) = \{|\mathsf{A}|: \mathsf{A} \subseteq I \land (\forall B \in I)(\exists A \in \mathsf{A})(B \subseteq A)\}$.\
The "cofinality" of $I$ is the cofinality of the partial order $(I, \subseteq)$. It is easy to see that we must have $\operatorname{non} (I) \leq \operatorname{cof} (I)$ and $\operatorname{cov} (I) \leq \operatorname{cof} (I)$.

Furthermore, the "bounding number" or "unboundedness number" $\mathsf{b}$ and the "dominating number" $\mathsf{d}$ are defined as follows:

- $\mathsf{b} = \min \{|F|: F \subseteq \mathbb{N}^{\mathbb{N}} \land (\forall g \in \mathbb{N}^{\mathbb{N}}) (\exists f \in F) (\exists^{\infty}n \in \mathbb{N})(g(n)<f(n)) \}$
- $\mathsf{d} = \min \{|F|: F \subseteq \mathbb{N}^{\mathbb{N}} \land (\forall g \in \mathbb{N}^{\mathbb{N}}) (\exists f \in F) (\forall^{\infty}n \in \mathbb{N})(g(n)<f(n)) \}$

where "$\exists^{\infty} n \in \mathbb{N}$" means: "there are infinitely many natural numbers $n$ such that ...", and "$\forall^{\infty} n \in \mathbb{N}$" means "for all except finitely many natural numbers $n$ we have ...".

# Diagram

Let $\mathsf{B}$ be the $\sigma$-ideal of those subsets of the real line that are meager (or "of the first category") in the euclidean topology, and let $\mathsf{L}$ be the $\sigma$-ideal of those subsets of the real line that are of Lebesgue measure zero. Then the following inequalities hold:

$$\require{AMScd} 
\begin{CD}
\, @.
\operatorname{cov}(\mathsf{L}) @>>> \operatorname{non}(\mathsf{B}) @>>> \operatorname{cof}(\mathsf{B}) @>>>
\operatorname{cof}(\mathsf{L}) @>>> 
2^{\aleph_{0}}\\
@. @. @AAA @AAA @. @. \\ 
@. \Bigg \uparrow @. \mathsf{b} @>>> \mathsf{d} @. \Bigg \uparrow @. \\
@. @. @AAA  @AAA @. @.\\
\aleph_{1} @>>>
\operatorname{add}(\mathsf{L}) @>>> \operatorname{add}(\mathsf{B}) @>>> \operatorname{cov}(\mathsf{B}) @>>>
\operatorname{non}(\mathsf{L}) @. \,
\end{CD}$$


Where an arrow from $x$ to $y$ is to mean that 
$x \leq y$. In addition, the following relations hold:

$$\begin{aligned} \operatorname{add}({\mathsf B}) = & \min\{\operatorname{cov}({\mathsf B}),{\mathsf b}\}, \text{ and }\\
\operatorname{cof}({\mathsf B}) = & \max\{\operatorname{non}({\mathsf B}),{\mathsf d}\}. 
\end{aligned}$$

It turns out that the inequalities described by the diagram, together with the relations mentioned above, are all the relations between these cardinals that are provable in ZFC, in the following limited sense. Let $A$ be any assignment of the cardinals $\aleph_{1}$ and $\aleph_{2}$ to the $10$ cardinals in Cichoń's diagram. Then if $A$ is consistent with the diagram's relations, and if $A$ also satisfies the two additional relations, then $A$ can be realized in some model of ZFC.

For larger continuum sizes, the situation is less clear. It is consistent with ZFC that all of the Cichon's diagram cardinals are simultaneously different apart from $\operatorname{add}(B)$ and $\operatorname{cof}(B)$ (which are equal to other entries), but it remains open whether all combinations of the cardinal orderings consistent with the diagram are consistent.




**Conjecture 1:** Suppose that $P$ is a closed subset of the real line such that $\lambda(P) = 0$ and $\lambda(P+P)>0$. Then there exists a set $A \subseteq P$ such that $A+P$ is a Lebersgue nonmeasurable set. 



