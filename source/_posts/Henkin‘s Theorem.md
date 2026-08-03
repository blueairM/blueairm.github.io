---
title: Henkin's Theorem
date: 2024-11-13 13:13:30
tags:
    - [Types]
categories:
    - [Blogs]
mathjax: true
---



We will give a proof of Gödel's completeness theorem using Henkin's construction. Let $\mathcal L$ be a first-order language that consists of relation, function, and constant symbols. Fix logical symbols such as connectives $\neg,\land, \lor,\rightarrow,\leftrightarrow$, quantifiers $\forall, \exists$, the equality $=$, variables $x_1,x_2,\dots$, parentheses and punctuations. A term is either an atomic term of variables and constants or recursively defined by $f(t_1,\ldots,t_n)$ where $f$ is an $n$-ary function symbol and $t_1,\ldots,t_n$ are terms. A formula is defined by connection of and quantification of atomic formulas of this form

- $t_1 = t_2$, where $t_1$ and $t_2$ are terms, and

- $R(t_1, \dots , t_n)$, where $R$ is an $n$-ary relation and $t_1, \dots, t_n$ are terms.

We take $\neg,\vee,\exists,=$ as primitive logical symbols. The connectives $\wedge,\quad \rightarrow, \leftrightarrow$ and the universal quantifier $\forall$ are treated as abbreviations. The other logical symbols are abbreviations of $\varphi\wedge\psi:=\neg(\neg\varphi\vee\neg\psi),$ $\varphi\rightarrow\psi:=\neg\varphi\vee\psi,$ $\varphi\leftrightarrow\psi:=(\varphi\rightarrow\psi)\wedge(\psi\rightarrow\varphi),$ $\forall x \varphi:=\neg\exists x\neg\varphi.$

## Syntax of a proof system

A sequent calculus is the syntax allowed only using rules from the set $\mathfrak G$: 

| Left | Right |
|------|-------|
| **(Assm)** $\dfrac{}{\Gamma\vdash\varphi}$ if $\varphi\in\Gamma$ | **(Ant)** $\dfrac{\Gamma\vdash\varphi}{\Gamma'\vdash\varphi}$ if $\Gamma\subseteq\Gamma'$ |
| **(PC)** $\dfrac{\Gamma,\psi\vdash\varphi \quad \Gamma,\neg\psi\vdash\varphi}{\Gamma\vdash\varphi}$ | **(Ctr)** $\dfrac{\Gamma,\neg\varphi\vdash\psi \quad \Gamma,\neg\varphi\vdash\neg\psi}{\Gamma\vdash\varphi}$ |
| **($\lor A$)** $\dfrac{\Gamma,\varphi\vdash\chi \quad \Gamma,\psi\vdash\chi}{\Gamma,\varphi\vee\psi\vdash\chi}$ | **($\lor S$)** $\dfrac{\Gamma\vdash\varphi}{\Gamma\vdash\varphi\vee\psi}$, $\dfrac{\Gamma\vdash\psi}{\Gamma\vdash\varphi\vee\psi}$ |
| **($\exists A$)** $\dfrac{\Gamma,\varphi[y/x]\vdash\psi}{\Gamma,\exists x\,\varphi\vdash\psi}$ $y$ not free in $\Gamma,\exists x\,\varphi,\psi$ | **($\exists S$)** $\dfrac{\Gamma\vdash\varphi[t/x]}{\Gamma\vdash\exists x\,\varphi}$ |
| **($=$)** $\dfrac{}{\Gamma\vdash t=t}$ | **(Sub)** $\dfrac{\Gamma\vdash\varphi[t/x]}{\Gamma,t=t'\vdash\varphi[t'/x]}$ |

where $\varphi[t/x]$ is the substitution of the term $t$ in $\varphi$ by $x$.

**Lemma**. $\Gamma \vdash \varphi$ iff there exists a finite subset  $\Gamma_0$ of  $\Gamma$ such that $\Gamma_0 \vdash \varphi$.

## Semantics of first-order logic

A structure $\mathfrak A = (M, \sigma)$ consists of a non-empty domain $M$ and an interpretation $\sigma: f \to \sigma(f)$ that maps each constant, relation, or function symbol to an element or a subset $M^{n_f}$ where $n_f$ is the arity for the symbol $f$. A truth assignment for $\mathfrak A$ is a map $\chi:\{x_1,x_2,\dots\} \to M$. 

The semantics of first-order logic is the satisfaction relation $(\mathfrak A,\chi) \models \varphi$ which is defined by induction on these rules

- $(\mathfrak A,\chi) \models t_1 = t_2$ iff $(\mathfrak A,\chi)(t_1)=(\mathfrak A,\chi)(t_2)$.

- $(\mathfrak A,\chi) \models R t_1 \ldots t_n$ iff $R^{\mathfrak{A}} (\mathfrak A,\chi)(t_1) \ldots (\mathfrak A,\chi)(t_n)$.

- $(\mathfrak A,\chi) \vDash \neg \varphi$ iff not $(\mathfrak A,\chi) \models \varphi$.

- $(\mathfrak A,\chi) \models (\varphi \wedge \psi)$ iff $(\mathfrak A,\chi) \models \varphi$ and $(\mathfrak A,\chi) \models \psi$.

- $(\mathfrak A,\chi) \models (\varphi \vee \psi)$ iff $(\mathfrak A,\chi) \models \varphi$ or $(\mathfrak A,\chi) \models \psi$. 

- $(\mathfrak A,\chi) \vDash (\varphi \rightarrow \psi)$ iff if $(\mathfrak A,\chi) \models \varphi$, then $(\mathfrak A,\chi) \models \psi$.

- $(\mathfrak A,\chi) \models (\varphi \leftrightarrow \psi)$ iff $(\mathfrak A,\chi) \models \varphi$ iff $(\mathfrak A,\chi) \models \psi$.

- $(\mathfrak A,\chi) \models \forall x \varphi$ iff for all $a \in M$, $(\mathfrak A,\chi) [a/x] \models \varphi$.

- $(\mathfrak A,\chi) \models \exists x \varphi$ iff there is an $a \in M$ such that $(\mathfrak A,\chi) [a/x] \models \varphi$.

Then $\mathfrak A$ is called a model of $\varphi$, written as $\mathfrak A \models \varphi$ if $(\mathfrak A,\chi) \models \varphi$ for all $\chi$.

**Lemma (Coincidence)**.
Let $\mathfrak A$ be a structure, and let $\chi,\eta$ be
two assignments.

- If $t$ is a term and $\chi,\eta$ agree on all variables occurring
    in $t$, then $t^{\mathfrak A,\chi}=t^{\mathfrak A,\eta}.$

- If $\varphi$ is a formula and $\chi,\eta$ agree on all free
    variables of $\varphi$, then $(\mathfrak A,\chi) \models \varphi$ iff $(\mathfrak A,\eta)\models\varphi.$

In particular, if $\varphi$ is a formula without free variables, say a sentence, then the truth of $\varphi$
does not depend on the assignment. Hence it makes sense to write $\mathfrak A\models\varphi$ for a sentence $\varphi$ and $\mathfrak A\models \forall \bar x \varphi$ for a formula $\varphi$ with free variables $\bar x$.


**Lemma (Substitution).**
Let $\mathfrak A$ be a structure and let $\chi$ be an
assignment. Define $\chi[x\mapsto t^{\mathfrak A,\chi}]$ to be the assignment replacing $\chi(x)$ by $t^{\mathfrak A,\chi}$.

- If $s$ and $t$ are terms, then $s[t/x]^{\mathfrak A,\chi}    =    s^{\mathfrak A,\chi[x\mapsto t^{\mathfrak A,\chi}]}.$

- If $t$ is free for $x$ in $\varphi$, then $(\mathfrak A,\chi)\models \varphi[t/x]$ iff $(\mathfrak A,\chi[x\mapsto t^{\mathfrak A,\chi}])\models \varphi.$.

Similarly, the consequence relation $\Phi \models \varphi$ holds if $\mathfrak A \models \varphi$ whenever $\mathfrak A \models \Phi$. A set of formulas is satisfiable if it has a model. 

## Soundness Theorem

**Theorem (Soundness)**. For all $\varphi$ and $\Phi$, if $\Phi \vdash \varphi$, then $\Phi \models \varphi$.

A set of formulas $\Phi$ is consistent, written as **Con**($\Phi$), if no formula $\varphi$ such that $\Phi \vdash \varphi$ and $\Phi \vdash \neg \varphi$. It is inconsistent if there exists a formula $\varphi$ with the property, written as **Inc**($\Phi$).

**Corollary**. Every satisfiable set of formulas is consistent.

**Lemma**. **Inc**($\Phi$) iff $\Phi \vdash \varphi$ for all $\varphi$.

**Lemma**. For all $\varphi$ and $\Phi$ the following holds:

(1) **Inc**($\Phi\cup\{\varphi\}$) iff $\Phi \vdash \neg \varphi$.

(2) **Inc**($\Phi\cup\{\neg \varphi\}$) iff $\Phi \vdash \varphi$.

(3) If **Con**($\Phi$), then **Con**($\Phi \cup \{\varphi\}$) or **Con**($\Phi \cup \{\neg \varphi\}$).



## Gödel's Completeness Theorem

For all $\varphi$ and $\Phi$, if $\Phi \models \varphi$, then $\Phi \vdash \varphi$.

It suffices to prove that every consistent set of formulas is satisfiable. We give the proof for countable symbols and for general cardinality this remains a consequence of Zorn's lemma. 

### Definition (Negation completeness)
$\Phi$ is negation complete if for every sentence $\sigma$,
$\sigma\in \Phi$ or $\neg\sigma\in \Phi.$

### Definition (Witness property)
$\Phi$ contains witness if for every formula of the form $\exists x \varphi$ there is a erm $t$ such that $\Phi \vdash (\exists x \varphi \rightarrow \varphi[t/x])$.

### Lemma (Henkin's lemma) 

If $\Phi$ is a consistent set. Suppose that $T^*$ is negation complete and contains witnesses. Then $T^*$ is satisfiable.

**Proof**. For formulas with free variables, we use the assignment-level satisfaction relation. Thus a set of formulas $\Phi$ is satisfiable if there is an interpretation $\mathcal M=(\mathfrak A,\chi)$ such that $\mathcal M \models \Phi$. 

### 1. The Term Interpretation

Let $T^{\mathcal L}$ be the set of all $\mathcal L$-terms. Define a binary relation $\sim_\Phi$ on
$T^{\mathcal L}$ by $s\sim_\Phi t \text{ iff } \Phi\vdash s=t.$

### Lemma 1.1

The relation $\sim_\Phi$ is an equivalence relation. Moreover, it is compatible with the symbols of $\mathcal L$:

1. If $s_i\sim_\Phi t_i \ (i=1,\ldots,n),$ then for every $n$-ary function symbol $f$, 

$$f(s_1,\ldots,s_n)\sim_\Phi f(t_1,\ldots,t_n).$$

2. If $s_i\sim_\Phi t_i \ (i=1,\ldots,n),$ then for every $n$-ary relation symbol $R$, 

$$\Phi\vdash R(s_1,\ldots,s_n)\text{ iff }\Phi\vdash R(t_1,\ldots,t_n).$$

### Proof

Reflexivity follows from the equality rule $\vdash t=t.$ Symmetry and transitivity follow from the equality rules and substitution. For example, if $\Phi\vdash s=t,$ then by substituting equal terms into the formula $x=s$, we get $\Phi\vdash t=s.$ Compatibility with function and relation symbols follows similarly from repeated
applications of the substitution rule. $\square$

For a term $t$, write $[t]_\Phi$ for its equivalence class. Define $T_\Phi:=T^{\mathcal L}/\sim_\Phi.$

We now define an $\mathcal L$-structure $\mathfrak C_\Phi$ with domain
$T_\Phi$. 

- For each constant symbol $c$, set $c^{\mathfrak C_\Phi}:=[c]_\Phi.$ 

- For each $n$-ary function symbol $f$, define
$f^{\mathfrak C_\Phi}\bigl([t_1]_\Phi,\ldots,[t_n]_\Phi\bigr)=[f(t_1,\ldots,t_n)]_\Phi.$

- For each $n$-ary relation symbol $R$, define $R^{\mathfrak C_\Phi}\bigl([t_1]_\Phi,\ldots,[t_n]_\Phi\bigr)$ iff $R(t_1,\ldots,t_n).$

By Lemma 1.1, these definitions are independent of the chosen representatives.

Finally, define an assignment $\chi_\Phi(x):=[x]_\Phi$ for each variable $x$. We call $(\mathfrak C_\Phi,\chi_\Phi)$ the term interpretation associated with $\Phi$.

### 2. Basic Properties of the Term Interpretation

### Lemma 1.2

For every term $t$, $(\mathfrak C_\Phi,\chi_\Phi)(t)=[t]_\Phi.$

### Proof

By induction on terms. 

- If $t=x$ is a variable, then $(\mathfrak C_\Phi,\chi_\Phi)(x)=\chi_\Phi(x)=[x]_\Phi.$

- If $t=c$ is a constant, then $(\mathfrak C_\Phi,\chi_\Phi)(c)=c^{\mathfrak C_\Phi}=[c]_\Phi.$

- If $t=f(t_1,\ldots,t_n),$ then by induction, $(\mathfrak C_\Phi,\chi_\Phi)(t_i)=[t_i]_\Phi.$

Therefore

$$(\mathfrak C_\Phi,\chi_\Phi)(f(t_1,\ldots,t_n))=f^{\mathfrak C_\Phi}([t_1]_\Phi,\ldots,[t_n]_\Phi)=[f(t_1,\ldots,t_n)]_\Phi.$$ 

Thus $(\mathfrak C_\Phi,\chi_\Phi)(t)=[t]_\Phi.$ $\square$

### Lemma 1.3

For every atomic formula $\theta$, $(\mathfrak C_\Phi,\chi_\Phi)\models \theta$ iff $\Phi\vdash \theta.$

### Proof

There are two cases. If $\theta= s=t,$ then by Lemma 1.2, $(\mathfrak C_\Phi,\chi_\Phi)\models s=t$ iff $[s]_\Phi=[t]_\Phi,$ which holds iff $s\sim_\Phi t,$ that is, $\Phi\vdash s=t.$

If $\theta= R(t_1,\ldots,t_n),$ then by Lemma 1.2 and the definition of $R^{\mathfrak C_\Phi}$, $(\mathfrak C_\Phi,\chi_\Phi)\models R(t_1,\ldots,t_n)$ iff $R^{\mathfrak C_\Phi}([t_1]_\Phi,\ldots,[t_n]_\Phi)$ iff $\Phi\vdash R(t_1,\ldots,t_n).$ $\square$

### Lemma 1.4

Let $\varphi(x_1,\ldots,x_n)$ be a formula whose free variables are among $x_1,\ldots,x_n$.

1. $(\mathfrak C_\Phi,\chi_\Phi)\models \exists x_1\cdots \exists x_n\,\varphi$ iff there are terms $t_1,\ldots,t_n$ such that $(\mathfrak C_\Phi,\chi_\Phi)\models \varphi[t_1/x_1,\ldots,t_n/x_n].$

2. $(\mathfrak C_\Phi,\chi_\Phi)\models \forall x_1\cdots \forall x_n\,\varphi$ iff for all terms $t_1,\ldots,t_n$, $(\mathfrak C_\Phi,\chi_\Phi)\models \varphi[t_1/x_1,\ldots,t_n/x_n].$

### Proof

Every element of the domain $T_\Phi$ is of the form $[t]_\Phi$ for some term $t$. Thus quantification over the universe of the term structure is the same as quantification over equivalence classes of terms. The result
then follows from the Substitution Lemma. $\square$

### 3. Negation Completeness and Witnesses

### Definition 1.5

A set $\Phi$ of formulas is **negation complete** if for every formula $\varphi$, we have $\Phi\vdash \varphi$ or $\Phi\vdash \neg\varphi.$

### Definition 1.6

A set $\Phi$ of formulas **contains witnesses** if for every formula of the
form $\exists x\,\varphi,$ there is a term $t$ such that 

$$\Phi\vdash\exists x\,\varphi \rightarrow \varphi[t/x].$$

Equivalently, if $\Phi\vdash \exists x\,\varphi,$ then for some term $t$, $\Phi\vdash \varphi[t/x].$


### 4. Syntactic Parallelism Lemma

### Lemma 1.7

Suppose that $\Phi$ is consistent, negation complete, and contains witnesses. Then for all formulas $\varphi,\psi$:

1. $\Phi\vdash \neg\varphi \text{ iff  }\text{not } \Phi\vdash \varphi.$

2. $\Phi\vdash \varphi\vee\psi\text{ iff  }\Phi\vdash \varphi\text{ or }\Phi\vdash \psi.$

3. $\Phi\vdash \exists x\,\varphi\text{ iff  }\text{there is a term }t\text{ such that }\Phi\vdash \varphi[t/x].$

### Proof

1. Since $\Phi$ is negation complete, either $\Phi\vdash\varphi$ or $\Phi\vdash\neg\varphi.$ Since $\Phi$ is consistent, both cannot hold. Hence $\Phi\vdash \neg\varphi$ iff not $\Phi\vdash\varphi.$

2. If $\Phi\vdash\varphi,$ then by $(\lor S)$, $\Phi\vdash\varphi\vee\psi.$ Similarly, if $\Phi\vdash\psi,$ then $\Phi\vdash\varphi\vee\psi.$ Conversely, suppose $\Phi\vdash\varphi\vee\psi.$ If $\Phi\nvdash\varphi,$ then by part (1), $\Phi\vdash\neg\varphi.$ Using the propositional rules, from $\varphi\vee\psi\quad\text{and}\quad\neg\varphi$ one derives $\psi$. Hence $\Phi\vdash\psi.$ Therefore $\Phi\vdash\varphi\quad\text{or}\quad\Phi\vdash\psi.$

3. If $\Phi\vdash \varphi[t/x],$ then by $(\exists S)$, $\Phi\vdash \exists x\,\varphi.$ Conversely, suppose $\Phi\vdash \exists x\,\varphi.$ Since $\Phi$ contains witnesses, there is a term $t$ such that $ \Phi\vdash\exists x\,\varphi \rightarrow \varphi[t/x].$ By modus ponens, $\Phi\vdash \varphi[t/x].$ $\square$


### 5. Henkin's Theorem

### Theorem 1.8

Suppose that $\Phi$ is consistent, negation complete, and contains witnesses. Then for every formula $\varphi$,

$$(\mathfrak C_\Phi,\chi_\Phi)\models\varphi\text{ iff  }
\Phi\vdash\varphi.$$

### Proof

We prove this by induction on the complexity of $\varphi$. If $\varphi$ is atomic, this is Lemma 1.3. Suppose $\varphi= \neg\psi.$ Then $(\mathfrak C_\Phi,\chi_\Phi)\models\neg\psi$ iff $(\mathfrak C_\Phi,\chi_\Phi)\not\models\psi.$ By the induction hypothesis, this is equivalent to $\text{not } \Phi\vdash\psi.$ By Lemma 1.7(1), this is equivalent to $\Phi\vdash\neg\psi.$ Thus $(\mathfrak C_\Phi,\chi_\Phi)\models\neg\psi\text{ iff  }\Phi\vdash\neg\psi.$

Suppose $\varphi= \psi\vee\delta.$ Then $(\mathfrak C_\Phi,\chi_\Phi)\models\psi\vee\delta$ if and only if $(\mathfrak C_\Phi,\chi_\Phi)\models\psi$ or $(\mathfrak C_\Phi,\chi_\Phi)\models\delta.$ By the induction hypothesis, this is equivalent to $\Phi\vdash\psi$ or $\Phi\vdash\chi.$ By Lemma 1.7(2), this is equivalent to $\Phi\vdash\psi\vee\delta.$

Finally, suppose $\varphi= \exists x\,\psi.$ Then $\mathcal J_\Phi\models \exists x\,\psi$ iff  there is a term $t$ such that $\delta\models \psi[t/x],$ by Lemma 1.4. By the induction hypothesis, this is equivalent to the existence of a term $t$ such that $\Phi\vdash \psi[t/x].$ By Lemma 1.7(3), this is equivalent to $\Phi\vdash \exists x\,\psi.$

This completes the induction. $\square$

### Corollary 1.9

If $\Phi$ is consistent, negation complete, and contains witnesses, then $\Phi$ is satisfiable.

### Proof

By Theorem 1.8, for every $\varphi\in\Phi$, $(\mathfrak C_\Phi,\chi_\Phi)\models\varphi \text{ iff  }\Phi\vdash\varphi.$ Since $\varphi\in\Phi$, we have $\Phi\vdash\varphi.$ Hence $(\mathfrak C_\Phi,\chi_\Phi)\models\varphi.$ Therefore $(\mathfrak C_\Phi,\chi_\Phi)\models\Phi.$ So $\Phi$ is satisfiable. $\square$

### 6. Extending a Consistent Set: The Countable Case

Assume that the language $\mathcal L$ is at most countable. We first treat the case where only finitely many variables occur freely in
$\Phi$.

### Lemma 2.1

Let $\Phi$ be consistent and suppose that $\operatorname{free}(\Phi)$ is finite. Then there is a consistent set $\Psi$ such that $\Phi\subseteq\Psi$ and $\Psi$ contains witnesses.

### Proof

Since the language is countable, list all existential formulas as

$$\exists x_0\,\varphi_0,\quad\exists x_1\,\varphi_1,\quad\exists x_2\,\varphi_2,\quad \ldots$$

We define witness formulas inductively.

Suppose $\theta_0,\ldots,\theta_{n-1}$ have already been chosen. Since $\operatorname{free}(\Phi)$ is finite, and since only finitely many formulas have been added so far, only finitely many variables occur freely in

$$\Phi\cup\{\theta_0,\ldots,\theta_{n-1}\}\cup\{\exists x_n\,\varphi_n\}.$$

Choose a variable $y_n$ not occurring freely there. Put

$$\theta_n:=\exists x_n\,\varphi_n\rightarrow\varphi_n[y_n/x_n].$$

Let $\Psi:=\Phi\cup\{\theta_n:n<\omega\}.$ Then $\Psi$ clearly contains witnesses. It remains to show that $\Psi$ is consistent. Let

$$
\Phi_n:=\Phi\cup\{\theta_m:m<n\}.
$$

We prove by induction that each $\Phi_n$ is consistent. For $n=0$, this is the consistency of $\Phi$. 

Assume $\Phi_n$ is consistent. Suppose, for contradiction, that

$$
\Phi_{n+1}=\Phi_n\cup\{\theta_n\}
$$

is inconsistent. Then $\Phi_n\vdash \neg\theta_n.$ That is, $\Phi_n\vdash\exists x_n\,\varphi_n\wedge\neg\varphi_n[y_n/x_n].$ In particular, from $\Phi_n,\exists x_n\,\varphi_n$ one can derive $\neg\varphi_n[y_n/x_n].$ But from $\Phi_n,\varphi_n[y_n/x_n]$ one trivially derives $\varphi_n[y_n/x_n].$ Since $y_n$ is fresh, the rule $(\exists A)$ yields a contradiction already from $\Phi_n,\exists x_n\,\varphi_n.$ 

This contradicts the consistency of $\Phi_n$. Therefore $\Phi_{n+1}$ is
consistent. Hence every $\Phi_n$ is consistent, and since every finite subset of
$\Psi$ is contained in some $\Phi_n$, the set $\Psi$ is consistent.
$\square$

### Lemma 2.2

Let $\Psi$ be consistent. Then there is a consistent, negation complete set $\Omega$ such that $\Psi\subseteq\Omega.$

### Proof

Enumerate all formulas as $\gamma_0,\gamma_1,\gamma_2,\ldots .$ Define sets $\Omega_n$ inductively.

Let $\Omega_0=\Psi.$ Suppose $\Omega_n$ has been defined and is consistent. If $\Omega_n\cup\{\gamma_n\}$ is consistent, put $\Omega_{n+1}=\Omega_n\cup\{\gamma_n\}.$ Otherwise put $\Omega_{n+1}=\Omega_n\cup\{\neg\gamma_n\}.$ The consistency lemma guarantees that $\Omega_{n+1}$ is consistent. Now define $\Omega:=\bigcup_{n<\omega}\Omega_n.$ Every finite subset of $\Omega$ is contained in some $\Omega_n$, so
$\Omega$ is consistent. Moreover, for every formula $\gamma_n$, either $\gamma_n$ or
$\neg\gamma_n$ is added at stage $n$. Hence $\Omega$ is negation complete. $\square$

### Corollary 2.3

If $\Phi$ is consistent and $\operatorname{free}(\Phi)$ is finite, then
$\Phi$ is satisfiable.

### Proof

By Lemma 2.1, extend $\Phi$ to a consistent set $\Psi$ containing witnesses.
By Lemma 2.2, extend $\Psi$ to a consistent negation complete set $\Omega$.
Since $\Psi\subseteq\Omega$, the set $\Omega$ contains witnesses. Therefore
$\Omega$ is consistent, negation complete, and contains witnesses.
By Corollary 1.9, $\Omega$ is satisfiable. Since $\Phi\subseteq\Omega,$ $\Phi$ is satisfiable. $\square$



### 7. Removing the Finiteness Assumption on Free Variables

### Theorem 2.4

If $\mathcal L$ is at most countable and $\Phi$ is a consistent set of
$\mathcal L$-formulas, then $\Phi$ is satisfiable.

### Proof

Let $c_0,c_1,c_2,\ldots$ be new constant symbols not in $\mathcal L$, and let $\mathcal L'=\mathcal L\cup\{c_0,c_1,c_2,\ldots\}.$ For a formula $\varphi$, let $n(\varphi)$ be such that $\operatorname{free}(\varphi)\subseteq \{v_0,\ldots,v_{n(\varphi)-1}\}.$ Define 

$$\varphi':=
\varphi[c_0/v_0,\ldots,c_{n(\varphi)-1}/v_{n(\varphi)-1}].$$

Let $\Phi':=\{\varphi':\varphi\in\Phi\}.$ Then $\Phi'$ is a set of $\mathcal L'$-sentences. We claim that $\Phi'$ is consistent. 

It is enough to show that every finite subset of $\Phi'$ is satisfiable. Let $\Delta'=\{\varphi_1',\ldots,\varphi_m'\}\subseteq\Phi'.$ Then $\Delta=\{\varphi_1,\ldots,\varphi_m\}\subseteq\Phi$ is consistent. Since only finitely many variables occur freely in $\Delta$, Corollary 2.3 implies that $\Delta$ is satisfiable. Choose an $\mathcal L$-interpretation $(\mathfrak A,\chi)$ such that $(\mathfrak A,\chi)\models \Delta.$ Expand $\mathfrak A$ to an $\mathcal L'$-structure $\mathfrak A'$ by interpreting $c_i^{\mathfrak A'}:=\chi(v_i).$ By the Substitution Lemma,

$$
(\mathfrak A',\chi)\models \varphi_i'
\text{ iff  }
(\mathfrak A,\chi)\models \varphi_i.
$$

Hence $(\mathfrak A',\chi)\models \Delta'.$ Thus every finite subset of $\Phi'$ is satisfiable, hence consistent.
Therefore $\Phi'$ is consistent.

Since $\Phi'$ is a consistent set of sentences, Corollary 2.3 implies that
$\Phi'$ is satisfiable. Let $(\mathfrak A',\chi')$ satisfy $\Phi'$. Define an assignment $\chi$ for the original language by $\chi(v_i):=c_i^{\mathfrak A'}.$ Then, again by the Substitution Lemma,

$$
(\mathfrak A',\chi')\models \varphi'
\text{ iff  }
(\mathfrak A'|_{\mathcal L},\chi)\models \varphi.
$$

Thus $(\mathfrak A'|_{\mathcal L},\chi)\models \Phi.$ Therefore $\Phi$ is satisfiable. $\square$


[1] Ebbinghaus, Flum, Thomas. Mathematical logic. 2021. Universitext.