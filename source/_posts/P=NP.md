---
title: "P = NP"
date: 2023-04-10 20:38:46
tags:
    - [Notes]
    - [Mathematical Logic]
categories:
    - [Notes]
    - [Mathematical Logic]
mathjax: true
---



We give the formal statement of "P=NP", which plays an important role  in computer science and complexity theory.



## Definition 1

A function $f:\mathbb{N}^{k}\rightarrow \mathbb{N}$ is ***computable*** if and only if there is an effective procedure that, given any $k$-tuple $\mathbf{x}$  of natural numbers, will produce the value $f(\mathbf{x})$


## Definition 2

Let $\Sigma$ be a finite alphabet (that is, a finite nonempty set) with at least two elements, and let $\Sigma^{*}$ be the set of finite strings over $\Sigma$. Then a ***language over $\Sigma$*** is a subset $L$ of $\Sigma^{*}$.


## Definition 3


A ***Turing machine $M$*** is a tuple $⟨\Sigma, \Gamma, Q, \delta⟩$, where $\Sigma, \Gamma, Q$ are finite nonempty sets with $\Sigma \subseteq \Gamma$ and $b \in \Gamma - \Sigma$. The state set $Q$ contains three special states $q_{0}, q_{accept}, q_{reject}$. The transition function $\delta$ satisfies 
$$\delta: (Q − \{q_{accept}, q_{reject}\}) \times \Gamma \to  Q \times \Gamma × \{-1, 1\}.$$
If $\delta(q, s) = (q^{\prime}, s^{\prime}, h)$, the interpretation is that, if $M$ is in state $q$ scanning the symbol $s$, then $q^{\prime}$ is the new state, $s^{\prime}$ is the symbol printed, and the tape head moves left or right one square depending on whether h is -1 or 1.


We assume that the sets $Q$ and $\Gamma$ are disjoint.


## Definition 4

A ***configuration*** of $M$ is a string $xqy$ with $x, y \in \Gamma^{*}$, $y$ not the empty string, and $q \in Q$. If $C$ and $C^{\prime}$ are configurations, then $C \overset{M}{\to} C^{\prime}$ if $C = xqsy$ and $\delta(q, s) = (q^{\prime}, s^{\prime}, h)$ and one of the following holds:

- $C^{\prime} = xs^{\prime}q^{\prime}y$ and $h = 1$ and $y$ is nonempty.

- $C^{\prime} = xs^{\prime}q^{\prime}b$ and $h = 1$ and $y$ is empty.

- $C^{\prime} = x^{\prime}q^{\prime}as^{\prime}y$ and $h = -1$ and $x = x^{\prime}a$ for some $a \in \Gamma$.

- $C^{\prime} = q^{\prime}bs^{\prime}y$ and $h = -1$ and $x$ is empty.

A configuration $xqy$ is ***halting*** if $q \in \{q_{accept}, q_{reject}\}$. Note that for each non-halting configuration $C$ there is a unique configuration $C^{\prime}$ such that $C \overset{M}{\to} C^{\prime}$. 

## Definition 5

The ***computation*** of $M$ on input $w \in \Sigma^{*}$ is the unique sequence $C_{0}, C_{1}, \cdots$ of configurations such that $C_{0} = q_{0}w$ (or $C_{0} = q_{0}b$ if $w$ is empty) and $C_{i} \overset{M}{\to} C_{i+1}^{\prime}$ for each $i$ with $C_{i+1}$ in the computation, and either the sequence is infinite or it ends in a halting configuration. If the computation is finite, then the number of steps is one less than the number of configurations; otherwise the number of steps is infinite. We say that $M$ ***accepts*** $w$ iff the computation is finite and the final configuration contains the state qaccept

## Theorem 1 [Turing 1936]
There is no TM $M$ such that for all TMs $N$, if $M$ is run
with a code of $N$ on its tape, then the following hold:

1. If $N$ eventually halts when run on the empty tape, then $M$ eventually halts with $1$ on the tape and the reading head on the square with the $1$.

2. If $N$ does not eventually halt when run on the empty tape, then $M$ eventually halts with the tape completely empty.


## Theorem 2
The set $HALT$ is not decidable, where
$$HALT = \left\{M : M \text{ is a Turing machine which halts on the empty tape }\right\}$$

## Definition

The halting function is a function $h$ of two arguments

$$h(m,n) = \begin{cases}0, & \text{ machine $m$, started
with input $n$, eventually halts }\\
1, & \text{  machine $m$, started
with input $n$, never halts }
\end{cases}$$


By definition of Turing computability, Halting problem is not decidable if and only if halting function $h$ is not Turing computable.

## Lemma 1

The halting function h is not Turing computable.

## Proof of Lemma 1

By way of background we need two special Turing machines.

1. A copying machine $C$. Given a tape containing a block of $n$ strokes, and otherwise blank, if the machine is started scanning the leftmost stroke on the tape, it will eventually halt with the tape containing two blocks of $n$ strokes separated by a blank, and otherwise blank, with the machine scanning the leftmost stroke on the tape.

2. A dithering machine $D$. Started on the leftmost of a block of $n$ strokes on an otherwise blank tape, $D$ eventually halts if $n > 1$, but never halts if $n = 1$.

Now suppose we had a machine $H$ that computed the function $h$. We could combine the machines $C$ and $H$ as follows: if the states of $C$ are numbered $1$ through $p$, and the states of $H$ are numbered $1$ through $q$, renumber the latter states $p + 1$ through $r = p + q$, and write these renumbered instructions after the instructions
for $C$. Originally, $C$ tells us to halt by telling us to go into state $p + 1$, but in the new combined instructions, going into state $p + 1$ means not halting, but beginning the operations of machine $H$. So the new combined instructions will have us first go through the operations of $C$, and then, when $C$ would have halted, go through
the operations of $H$. The result is thus a machine $G$ that computes the function $g(n) = h(n, n)$.

We now combine this machine $G$ with the dithering machine $D$, renumbering the states of the latter as $r + 1$ and $r + 2$, and writing its instructions after those for $G$. The result will be a machine $M$ that goes through the operations of $G$ and then the operations of $D$. Thus if machine number $n$ halts when started on its own number, that is, if $h(n, n) = g(n) = 1$, then the machine $M$ does not halt when started on that number $n$, whereas if machine number $n$ does not halt when started on its own number, that is, if $h(n, n) = g(n) = 2$, then machine $M$ does halt when started on $n$.
But of course there can be no such machine as $M$. For what would it do if started with input its own number $m$? It would halt if and only if machine number $m$, which is to say itself, does not halt when started with input the number $m$. This contradiction shows there can be no such machine as $H$.


## Lemma 2

There exist TMs $C$ and $D$ satisfying conditions in Lemma 1.

## Proof of Lemma 2

The instruction set of $$ consists of:

(1) The reading and writing head of the Turing machine moves to the right until it stops at the square where the second letter is $0$, and the letter in the square is changed to $1$. Thus, two strings composed of $1$ separated by one or some in the middle appear on the paper tape, which will continue to exist in the operation of the Turing machine after that. We call the left as input string and the right as carbon string. The corresponding instruction is

$$(q_{1},s_{1},R,q_{1}), (q_{1},s_{0},R,q_{2}), (q_{2},s_{0},1,q_{2}).$$

(2) Move Turing's read/write head left to the first square on the right of the input string:
$$(q_{2},s_{1},L,q_{3}), (q_{3},s_{0},L,q_{3}).$$

(3) Then determine whether the input string has more than one square. And

(i). If there is more than one square in the input string, the read/write head returns to the first square to the right of the input string, rewrites the letter as $0$, then continues to the right until the first square to the right of the carbon string, rewrites the letter as $1$, then return to step (2). The corresponding instruction is:

$$\begin{aligned}
(q_{3},s_{1},L,q_{4}), (q_{4},s_{1},R,q_{5}), (q_{5},s_{1},s_{0},q_{6}), (q_{5},s_{0},s_{0},q_{0}),\\
(q_{6},s_{0},R,q_{6}), (q_{6},s_{1},s_{1},q_{7}), (q_{7},s_{1},R,q_{7}), (q_{7},s_{0},s_{1},q_{2}).
\end{aligned}$$

(ii). If there is only one square in the input string, then the read/write head changes the letter in the $n-1$ square to the right as $1$, then returns to square $0$ and stops. The corresponding instruction is:

$$\begin{aligned}
(q_{4},s_{0},R,q_{8}), (q_{8},s_{1},R,q_{9}), (q_{9},s_{0},s_{1},q_{9}), (q_{9},s_{1},L,q_{10}),\\
(q_{10},s_{1},s_{0},q_{16}), (q_{10},s_{0},L,q_{11}), (q_{11},s_{1},L,q_{11}), (q_{11},s_{0},L,q_{0}).
\end{aligned}$$

It is easy to verify that a Turing machine composed of instructions (1), (2), and (3) is the replicating machine in question. As for Turing machine $D$, we simply set its instruction set to $(q_{1},s_{0},s_{0},q_{0}),(q_{1},s_{1},R,q_{1})$.$\square$

## Formal Statement P = NP

We say that $M$ accepts $w$ if this computation terminates in the accepting state. The language accepted by $M$, denoted $L(M)$, has associated alphabet $\Sigma$ and is defined by


$$ L(M) = \{w \in \Sigma^{*} | M \text{ accepts } w\}.$$

We denote by $t_{M}(w)$ the number of steps in the computation of $M$ on input $w$. If this computation never halts, then $t_{M}(w) = \infty$. For $n \in \mathbb{N}$ we denote by $T_{M}(n)$ the worst case run time of $M$; that is

$$T_{M}(n) = \max \{ t_{M}(w) | w \in \Sigma^{n} \},$$

where $\Sigma^{n}$ is the set of all strings over $\Sigma$ of length $n$. We say that $M$ runs in polynomial time if there exists $k$ such that for all $n$, $T_{M}(n) \leq n^{k} + k$. Now we define the class $\mathbf{P}$ of languages by

$$\mathbf{P} = \left\{L | L = L(M) \text{ for some Turing machine $M$ that runs
in polynomial time}\right\}$$

The notation $\mathbf{NP}$ stands for “nondeterministic polynomial time”.

## Definition 6

A ***checking relation*** is a binary relation $R \subseteq \Sigma^{*} \times \Sigma^{*}_{1}$ for some finite alphabets $\Sigma$ and $\Sigma_{1}$. We associate with each such relation $R$ a language $L_{R}$ over $\Sigma \cup \Sigma_{1} \cup \{ \# \}$ defined by
$$L_{R} = \left\{w \# y | R(w, y)\right\}$$
where the symbol $\#$ is not in $\Sigma$.

We say that $R$ is polynomial-time iff $L_{R} \in \mathbf{P}$. Now we define the class NP of languages by the condition that a language $L$ over $\Sigma$ is in $\mathbf{NP}$ iff there is $k \in \mathbb{N}$ and a polynomial-time checking relation $R$ such that for all $w \in \Sigma^{∗}$,
$$w \in L \Longleftrightarrow \exists y\left(|y| \leq |w|^{k} \land R(w, y)\right).$$
where $|w|$ and $|y|$ denote the lengths of $w$ and $y$, respectively.


<h2> Problem Statement: Dose P = NP? </h2>

Judgements are left to the reader...



# Reference 

[1] Turing, A. M. (1938). On Computable Numbers, with an Application to the Entscheidungsproblem. Proceedings of the London Mathematical Society. Wiley. s2-42 (1): 230–265.



