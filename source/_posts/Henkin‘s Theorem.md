---
title: Henkin's Theorem
date: 2024-11-13 13:13:30
tags:
    - [Notes]
    - [Mathematical Logic]
categories:
    - [Notes]
    - [Mathematical Logic]
mathjax: true
---


# Henkin's Theorem

For a consistent theory $\Phi$ in first-order logic, there exists a model $\mathcal{M}$ such that $\mathcal{M}$ satisfies all the sentences in $\Phi$, i.e., $\mathcal{M} \models \Phi$. 

This is equivalent to saying that if $\Phi$ is consistent, then $\Phi$ has a model. The theorem asserts that **consistency** and **satisfiability** are equivalent for first-order theories.

## Key Concepts in the Proof:

1. **Negation-Complete Theory**: A theory $\Phi$ is **negation-complete** if for every formula $\psi$, either $\psi$ or $\neg \psi$ is a theorem of $\Phi$. This property ensures that the theory makes a definitive decision about the truth value of every formula.

2. **Witness Property**: A theory $\Phi$ has the **witness property** if for every existential formula $\exists x \, \psi(x)$, there is a constant $c$ such that $\Phi$ proves $\exists x \, \psi(x) \rightarrow \psi(c)$. This ensures that existential claims are satisfied by specific, named elements in the model.

These concepts are essential for the construction of a model that satisfies the theory. The proof of Henkin's theorem proceeds by extending the theory $\Phi$ to make it **Henkin-complete**: consistent, negation-complete, and with the witness property.

## Proof for the Countable Case

For a countable language $L$ (where both the set of symbols and the set of sentences are countable), we proceed by constructing a **Henkin-complete extension** of $\Phi$, and then we use this extension to build a **term model**.

### Step 1: Extend $\Phi$ to a Henkin-Complete Theory $\Phi'$

1. **Enumerate All Formulas**: Since $L$ is countable, the set of all possible sentences in $L$ is also countable. We list these sentences as $\psi_1, \psi_2, \psi_3, \ldots$.

2. **Add Witness Constants**: For each existential formula $\exists x \, \psi(x)$ in $L$, introduce a new constant symbol $c_{\exists x \psi(x)}$, which will act as a "witness" for $\exists x \, \psi(x)$ in our theory. Ensure these new constants do not already exist in $L$.

3. **Construct the Extension $\Phi'$**:
   - Begin with $\Phi_0 = \Phi$.
   - For each $\psi_n$ in our enumeration, construct $\Phi_{n+1}$ from $\Phi_n$ as follows:
     - If $\Phi_n \cup \{ \psi_n \}$ is consistent, set $\Phi_{n+1} = \Phi_n \cup \{ \psi_n \}$.
     - If $\Phi_n \cup \{ \neg \psi_n \}$ is consistent, set $\Phi_{n+1} = \Phi_n \cup \{ \neg \psi_n \}$.
   - This process yields an extended theory $\Phi' = \bigcup_{n=0}^\infty \Phi_n$.

   By construction, $\Phi'$ is consistent, negation-complete, and has the witness property for existential formulas. Thus, $\Phi'$ is **Henkin-complete**.

### Step 2: Construct the Term Model $\mathcal{M}_{\Phi'}$

1. **Define the Domain**: The domain of $\mathcal{M}_{\Phi'}$ consists of equivalence classes of terms in $\Phi'$, where two terms $t_1$ and $t_2$ are equivalent if $\Phi' \vdash t_1 = t_2$.

2. **Interpret Symbols**:
   - Each constant symbol $c$ is interpreted as its equivalence class in $\mathcal{M}_{\Phi'}$.
   - Each function symbol $f$ is interpreted as a function on these equivalence classes as defined by $\Phi'$.
   - Each relation symbol $R$ is interpreted according to the formulas in $\Phi'$ that specify its behavior.

3. **Satisfaction**: By Henkin's construction, $\mathcal{M}_{\Phi'} \models \Phi'$, ensuring that $\mathcal{M}_{\Phi'} \models \Phi$, as $\Phi \subset \Phi'$.

Thus, $\mathcal{M}_{\Phi'}$ is a model of $\Phi$, completing the proof for the countable case.

---

## Proof for the General Case (Arbitrary Cardinality)

For languages $L$ of arbitrary cardinality, we modify the previous approach to handle uncountably many formulas and witness requirements.

### Step 1: Construct a Henkin-Complete Extension $\Phi'$ Using Zorn's Lemma

1. **Partial Extensions and Consistency**: Consider the collection $\mathcal{T}$ of all consistent extensions of $\Phi$ that are closed under logical consequence. We partially order $\mathcal{T}$ by set inclusion.

2. **Apply Zorn's Lemma**: Since every chain of consistent extensions has an upper bound (the union of the chain), Zorn's Lemma ensures that $\mathcal{T}$ has a maximal element, denoted $\Phi'$, which is consistent and closed under logical consequence.

3. **Henkin-Completeness of $\Phi'$**:
   - Since $\Phi'$ is maximal, for each formula $\psi$ in $L$, either $\psi \in \Phi'$ or $\neg \psi \in \Phi'$, establishing **negation-completeness**.
   - For each existential formula $\exists x \, \psi(x)$, add a witness constant $c_{\exists x \psi(x)}$ and ensure that $\exists x \, \psi(x) \rightarrow \psi(c_{\exists x \psi(x)}) \in \Phi'$. This property holds because we can extend consistently with witnesses at each step.

Thus, $\Phi'$ is Henkin-complete.

### Step 2: Construct the Term Model $\mathcal{M}_{\Phi'}$

As in the countable case, we define a term model $\mathcal{M}_{\Phi'}$ based on $\Phi'$:

1. **Domain**: The domain consists of equivalence classes of terms under the relation $t_1 \sim t_2 \iff \Phi' \vdash t_1 = t_2$.

2. **Interpretation**:
   - Constants, functions, and relations are interpreted naturally according to $\Phi'$, making $\mathcal{M}_{\Phi'}$ a model of $\Phi'$.

3. **Satisfaction**: By construction, $\mathcal{M}_{\Phi'} \models \Phi'$, and since $\Phi \subset \Phi'$, $\mathcal{M}_{\Phi'} \models \Phi$.

Thus, $\mathcal{M}_{\Phi'}$ serves as a model for $\Phi$, concluding the proof for arbitrary cardinality.

