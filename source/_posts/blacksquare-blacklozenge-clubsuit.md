---
title: $\blacksquare$, $\blacklozenge$, $\clubsuit$
tags:
  - - Set Theory
  - - Mathematical Logic
categories:
  - - Set Theory
  - - Mathematical Logic
mathjax: true
date: 2024-02-18 08:50:47
---


In mathematics, particularly in mathematical logic and set theory, a club set is a subset of a limit ordinal that is closed under the order topology, and is unbounded (see below) relative to the limit ordinal. The name club is a contraction of "closed and unbounded". Formally, 

- if $\kappa$ is a limit ordinal, then a set $ C\subseteq \kappa$ is *closed* in $\kappa$ if and only if for every $\alpha <\kappa$, if $\sup(C\cap \alpha )=\alpha \neq 0$ then $\alpha \in C$. Thus, if the limit of some sequence from $C$ is less than $\kappa$, then the limit is also in $C$.


- If $\kappa$ is a limit ordinal and $C\subseteq \kappa$ then $C$ is *unbounded* in 
$\kappa$ if for any $\alpha <\kappa$, there is some $\beta \in C$ such that $\alpha <\beta$.

If a set is both closed and unbounded, then it is a *club*.



In mathematics, specifically set theory and model theory, a stationary set is a set that is not too small in the sense that it intersects all club sets and is analogous to a set of non-zero measure in measure theory. There are at least three closely related notions of stationary set, depending on whether one is looking at subsets of an ordinal, or subsets of something of given cardinality, or a powerset.



If $\kappa$ is a cardinal of uncountable cofinality, $S\subseteq \kappa$, and $S$ intersects every club set in $\kappa$ then 
$S$ is called a stationary set. If a set is not stationary.

If $S$ is a stationary set and $C$ is a club set, then their intersection $S\cap C$ is also stationary. This is because if $D$ is any club set, then $C\cap D$ is a club set, thus 
$(S\cap C)\cap D=S\cap (C\cap D)$ is nonempty. Therefore, $(S\cap C)$ must be stationary.

## Fodor lemma

If $\kappa$ is a regular, uncountable cardinal, $S$ is a stationary subset of $\kappa$, and $f:S\rightarrow \kappa$ is regressive (that is, $f(\alpha )<\alpha$ for any $\alpha \in S$, $\alpha \neq 0$) then there is some $\gamma$ and some stationary subset $S_{0}\subseteq S$ such that 
$f(\alpha )=\gamma$ for any $\alpha \in S_{0}$. 

## Proof

We can assume that $0\notin S$ (by removing 0, if necessary). If Fodor's lemma is false, for every $\alpha <\kappa$ there is some club set 
$C_{\alpha }$ such that $C_{\alpha }\cap f^{-1}(\alpha )=\emptyset$. Let $C=\Delta_{\alpha <\kappa }C_{\alpha }$. The club sets are closed under diagonal intersection, so $C$ is also club and therefore there is some 
$\alpha \in S\cap C$. Then $\alpha \in C_{\beta }$ for each $\beta <\alpha$, and so there can be no $\beta <\alpha$ such that $\alpha \in f^{-1}(\beta )$, so $f(\alpha )\geq \alpha$, a contradiction.




## $\blacksquare_{\kappa}$


If $\kappa$ is an uncountable cardinal, then $\square_{\kappa }$ asserts that there is a sequence $\{C_{\beta }\mid \beta {\text{ a limit point of }}\kappa ^{+}\}$ satisfying:

- $C_{\beta }$ is a club set of $\beta$. 

- If $\operatorname{cf}\beta <\kappa$, then $|C_{\beta }|<\kappa$

- If $\gamma$ is a limit point of $C_{\beta }$ then $C_{\gamma }=C_{\beta }\cap \gamma$

Jensen proved that this principle holds in the constructible universe for any uncountable cardinal $\kappa$.

## $\blacklozenge_{\kappa}$

There are three equivalent definitions about the diamond principle $\lozenge$:

1. There is a sequence $\{S_{\alpha}\mid \alpha < \omega_{1}\}$ such that $S_{\alpha} \subseteq \mathcal{P}(\alpha)$ and $|S_{\alpha}| \leq \omega$ for $\alpha < \omega_{1}$, and: If $X \subseteq \omega_{1}$, then the set $\{\alpha < \omega_{1} \mid X \cap \alpha \in S_{\alpha}\}$ is stationary in $\omega_{1}$.


2. There is a sequence $\{S_{\alpha}\mid \alpha < \omega_{1}\}$ such that $S_{\alpha} \subseteq \alpha$ for $\alpha < \omega_{1}$ and if $X \subseteq \omega_{1}$, then the set $\{\alpha < \omega_{1} \mid X \cap \alpha = S_{\alpha}\}$ is stationary in $\omega_{1}$.

3. There is a sequence $\{h_{\alpha}\mid \alpha < \omega_{1}\}$ of functions such that for every function $h: \omega_{1} \to \omega_{1}$, the set $\{\alpha < \omega_{1}\mid h\upharpoonright \alpha = h_{\alpha}\}$ is stationary.

We also introduce two stronger versions of $\lozenge$.

$\lozenge^{*}$: There is a sequence $\{S_{\alpha}\mid \alpha < \omega_{1}\}$ such that $S_{\alpha} \subseteq \mathcal{P}(\alpha)$ and $|S_{\alpha}| \leq \omega$ for $\alpha < \omega_{1}$, and: If $X \subseteq \omega_{1}$, then the set $\{\alpha < \omega_{1} \mid X \cap \alpha \in S_{\alpha}\}$ contains a closed unbounded set.

$\lozenge^{+}$: There is a sequence $\{S_{\alpha}\mid \alpha < \omega_{1}\}$ such that $S_{\alpha} \subseteq \mathcal{P}(\alpha)$ and $|S_{\alpha}| \leq \omega$ for $\alpha < \omega_{1}$, and: If $X \subseteq \omega_{1}$ there exists a closed unbounded $C \subseteq \omega_{1}$ such that if $\alpha \in C$, then $X \cap \alpha$, $C \cap \alpha \in S_{\alpha}$.

Clearly $\lozenge^{+} \to \lozenge^{*} \to \lozenge$. Jensen has proved that the arrows cannot be reversed. 

### Theorem

$\lozenge$ $\to$ CH.


### Theorem

Assume $V = L$. $\lozenge$ is valid.


### Theorem

Assume $\lozenge$. The there exists a Souslin tree.






## $\clubsuit_{\kappa}$

For a given cardinal number $\kappa$ and a stationary set $S\subseteq \kappa$, $\clubsuit _{S}$ is the statement that there is a sequence $\{ A_{\delta }:\delta \in S \}$ such that 

- every $A_{\delta}$ is a cofinal subset of $\delta$.

- for every unbounded subset $A\subseteq \kappa$, there is a $\delta$ so that $A_{\delta }\subseteq A$.

$\clubsuit _{\omega _{1}}$ is usually written as just $\clubsuit$.


It is clear that $\lozenge \to \clubsuit$, and it was shown in 1975 that $\clubsuit$ + CH $\to$ $\lozenge$; however, Saharon Shelah gave a proof in 1980 that there exists a model of $\clubsuit$ in which CH does not hold, so $\clubsuit$ and $\lozenge$ are not equivalent (since $\lozenge$ $\to$ CH).


Jensen, R. Bj\"orn (1972), "The fine structure of the constructible hierarchy", Annals of Mathematical Logic, 4 (3): 229–308.