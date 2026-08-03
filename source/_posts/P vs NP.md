---
title: "P vs NP"
date: 2023-04-10 20:38:46
tags:
    - [Diophantine Functions]
categories:
    - [Blogs]
mathjax: true
---


We give the formal statement of $\mathbf{P}=\mathbf{NP}(?)$, which plays an important role in computer science and complexity theory.

## Languages and Polynomial Time

Let $\Sigma$ be a finite alphabet with at least two symbols, and let $\Sigma^*$ denote the set of all finite strings over $\Sigma$. A language over $\Sigma$ is a subset $L\subseteq\Sigma^*$.

A deterministic Turing machine $M$ decides $L$ if $M$ halts on every input $x\in\Sigma^*$ and accepts exactly those $x$ that belong to $L$.

For an input $x$, write $t_M(x)$ for the number of computation steps taken by $M$. Its worst-case running time on inputs of length $n$ is

$$
T_M(n)=\max\{t_M(x):x\in\Sigma^n\}.
$$

We say that $M$ runs in polynomial time if there is a polynomial $p$ such that $T_M(n)\le p(n)$ for every $n$.

## The Halting Problem

Before imposing time bounds, recall the basic obstruction from classical recursion theory. Fix an effective encoding of Turing machines and inputs by finite strings, and define

$$
{\rm HALT}=\{\langle M,x\rangle:M\text{ eventually halts on input }x\}.
$$

### Main Theorem 

There is no Turing machine that decides HALT.

### Proof

Assume, toward a contradiction, that there exists a Turing machine $H$ such that on every pair $\langle M,x\rangle$ it halts and correctly decides whether $M$ halts on input $x$.

Using $H$, construct a new Turing machine $D$ that, on input $\langle M\rangle$, behaves as follows:

1. run $H$ on $\langle M,\langle M\rangle\rangle$;
2. if $H$ says that $M$ halts on input $\langle M\rangle$, then $D$ enters an infinite loop;
3. if $H$ says that $M$ does not halt on input $\langle M\rangle$, then $D$ halts.

Now run $D$ on its own code $\langle D\rangle$.

If $H$ predicts that $D$ halts on $\langle D\rangle$, then by construction $D$ loops forever. If $H$ predicts that $D$ does not halt on $\langle D\rangle$, then by construction $D$ halts. Either case contradicts the correctness of $H$.

Therefore HALT is not decidable. $\square$

## The Class $\mathbf{P}$

### Definition 1

A language $L$ belongs to $\mathbf P$ if there exists a deterministic Turing machine $M$ and a polynomial $p$ such that $M$ decides $L$ and halts on every input $x$ within at most $p(|x|)$ steps. Equivalently,

$$
\mathbf P=\{L:L\text{ is decidable in deterministic polynomial time}\}.
$$

Thus $\mathbf{P}$ consists of decision problems for which a solution can be found efficiently.

## The Class $\mathbf{NP}$

The most convenient definition of $\mathbf {NP}$ uses polynomial-time verification.

### Definition 2

A language $L\subseteq\Sigma^*$ belongs to $\mathbf{NP}$ if there exist a polynomial $p$ and a deterministic polynomial-time Turing machine $V$ such that, for every $x\in\Sigma^*$,

$$
x\in L\iff \exists y\in\Sigma^*\bigl(|y|\le p(|x|)\text{ and }V(x,y)=1\bigr).
$$

The string $y$ is called a certificate** or witness, and $V$ is called a verifier.

Thus $\mathbf{NP}$ consists of decision problems for which a proposed solution can be verified efficiently, provided that the certificate has polynomial length.

Every language in $\mathbf{P}$ is automatically in $\mathbf{NP}$. Indeed, if $M$ decides $L$ in polynomial time, the verifier may simply ignore the certificate and run $M$. Hence

$$
\mathbf P\subseteq\mathbf{NP}.
$$

The difficulty is whether the reverse inclusion also holds.

## Polynomial-Time Reductions

To formulate $\mathbf{NP}$-hardness, we need a resource-bounded notion of reducibility.

### Definition 3

Let $A\subseteq\Sigma^*$ and $B\subseteq\Gamma^*$ be languages. We say that $A$ is polynomial-time many-one reducible to $B$, written $A\le_m^P B$, if there exists a polynomial-time computable function $f:\Sigma^*\to\Gamma^*$ such that

$$
x\in A\iff f(x)\in B
$$

for every $x\in\Sigma^*$.

Intuitively, an efficient algorithm for $B$ would then give an efficient algorithm for $A$ after the polynomial-time preprocessing $x\mapsto f(x)$.

## $\mathbf{NP}$-Hard and $\mathbf{NP}$-Complete Problems

### Definition 4

A language $H$ is $\mathbf{NP}$-hard if every language in $\mathbf{NP}$ reduces to $H$ in polynomial time:

$$
\forall L\in\mathbf{NP},\qquad L\le_m^P H.
$$

Notice that an $\mathbf{NP}$-hard language need not itself belong to $\mathbf{NP}$. In particular, the definition alone does not require $H$ to have polynomially verifiable certificates.

### Definition 5

A language $C$ is $\mathbf{NP}$-complete if

$$
C\in\mathbf{NP}
$$

and $C$ is $\mathbf{NP}$-hard. Equivalently,

$$
C\in\mathbf{NP}
\quad\text{and}\quad
\forall L\in\mathbf{NP},\ L\le_m^P C.
$$

Thus an $\mathbf{NP}$-complete language is, in the sense of polynomial-time reductions, at least as hard as every problem in $\mathbf{NP}$, while still lying inside $\mathbf{NP}$.

By the Cook-Levin theorem, $\mathbf{SAT}$ is $\mathbf{NP}$-complete. Hence the entire $\mathbf{P}$ versus $\mathbf{NP}$ problem may be concentrated into the question of whether $\mathbf{SAT}$ can be decided in polynomial time.

## The Precise Statement of $\mathbf{P} = \mathbf{NP}$

Since $\mathbf P\subseteq\mathbf{NP}$ is immediate, the statement ${\mathbf P=\mathbf{NP}}$ means precisely that every language with polynomially verifiable certificates is itself decidable by a deterministic polynomial-time Turing machine.

Equivalently,

$$
\forall L\subseteq\Sigma^*,\qquad
L\in\mathbf{NP}\Longrightarrow L\in\mathbf P.
$$

Written out using the verifier definition, $\mathbf{P}=\mathbf{NP}$ asserts

> For every language $L$ for which there exist a polynomial $p$ and a polynomial-time verifier $V$ satisfying $x\in L$ iff there exists a certificate $y$ with $|y|\le p(|x|)$ and $V(x,y)=1$, there also exists a deterministic polynomial-time Turing machine deciding whether $x\in L$.

Using $\mathbf{NP}$-completeness, the following are equivalent

1. $\mathbf P=\mathbf{NP}$;
2. some $\mathbf{NP}$-complete language belongs to $\mathbf P$;
3. every $\mathbf{NP}$-complete language belongs to $\mathbf P$;
4. $\mathbf{SAT}$ belongs to $\mathbf P$.

Indeed, if one $\mathbf{NP}$-complete language $C$ belongs to $\mathbf{P}$, then every $L\in \mathbf{NP}$ has a polynomial-time reduction $L\le_m^P C$, and composing this reduction with a polynomial-time decider for $C$ yields a polynomial-time decider for $L$. Thus $\mathbf{NP}\subseteq \mathbf{P}$, and hence $\mathbf{P}=\mathbf{NP}$.

Conversely, if $\mathbf{P}=\mathbf{NP}$, then every $\mathbf{NP}$-complete language, being an element of $\mathbf{NP}$, automatically belongs to $\mathbf{P}$.

Accordingly, the $\mathbf{P}$ versus $\mathbf{NP}$ problem asks whether

$$
\boxed{\mathbf P\stackrel{?}{=}\mathbf{NP}}.
$$

If $\mathbf{P}\neq\mathbf{NP}$, then there exists at least one language in $\mathbf{NP}$ that admits polynomially checkable certificates but no deterministic polynomial-time decision algorithm.


## References

1. A. M. Turing, "On Computable Numbers, with an Application to the Entscheidungsproblem," *Proceedings of the London Mathematical Society*, 42 (1936), 230-265.
2. S. A. Cook, "The Complexity of Theorem-Proving Procedures," *Proceedings of the Third Annual ACM Symposium on Theory of Computing*, 1971, 151-158.
3. L. A. Levin, "Universal Sequential Search Problems," *Problems of Information Transmission*, 9 (1973), 265-266.
