---
layout: post
title: Riesz Representation Theorem
date: 2026-03-22 00:00:00
tag: 
	- [Measures and Topology]
categories:
    - [Notes]
mathjax: true
---

Let $(E,\mathscr{O})$ be a compact Hausdorff space and $\mathscr{B}$ its Borel $\sigma$-algebra. The set $C = C(E)$ consists of all continuous functions on $E$, and is equipped with a complete norm $\|f\| = \sup_{x\in E}|f(x)|$.

<a id="theorem-rmk"></a>

## Theorem 1

Every positive continuous linear functional $\ell$ on the Banach space $C$ can be represented as

$$
\ell(f) = \int_{E} f(x)\mu(dx), \tag{*}
$$

where $\mu$ is a Borel measure on $E$ with finite total variation.

<a id="lemma-pu"></a>

## Lemma 1

Suppose $\{E_1,E_2,\dots,E_n\}$ is an open covering of $E$. There exist continuous functions $h_1,h_2,\dots,h_n$ satisfying

1. $\forall 1\leq i \leq n, \operatorname{supp}(h_i) \subset E_i$;
2. $\forall 1\leq i \leq n, x\in E, 0\leq h_i(x) \leq 1$;
3. $\forall x \in E, \sum_{i=1}^n h_i(x) =1$.

### Proof of Lemma 1

Define $F_1 = E \backslash \cup_{j=2}^n E_j$ which is closed and $F_1 \subset E_1$. Since $E$ is compact Hausdorff, it is also Tychonoff, where open sets separate two disjoint closed sets. Thus, there exists an open set $V_1$ such that $F_1 \subset V_1 \subset \bar{V_1} \subset E_1$. By construction, $\{V_1, E_2, \dots, E_n\}$ is an open cover of $E$. Inductively, we can prove that there exists an open cover $\{V_1,\dots,V_n\}$ that is also a refinement of $\{E_1,E_2,\dots,E_n\}$ and $\bar{V_i} \subset E_i$ for each $1\leq i \leq n$. For each $i$, the sets $\bar{V_i}$ and $E_i^c$ are disjoint closed sets. By the Urysohn lemma, there exists a continuous function $g_i:E \to [0,1]$ such that $g_i(x)=1$ for $x\in \bar{V_i}$ and $g_i(x)=0$ for $x\in E_i^c$. Thus, $\operatorname{supp}(g_i) \subset E_i$. Define $G(x) = \sum_{i=1}^n g_i(x)$. Since $\{V_1,\dots,V_n\}$ covers $E$, for any $x\in E$, there is at least one index $j$ such that $x\in V_j \subset \bar{V_j}$, meaning $g_j(x)=1$. Therefore, $G(x) \geq 1$ for all $x\in E$. Define $h_i(x) = {g_i(x)}/{G(x)}$, which fulfills (1)-(3).

### Proof of Theorem 1

### Step 1

Define for any open set $O \in \mathscr{O}$, 

$$
\mu(O) = \sup \left\{\ell(f):f\in C, 0 \le f \le 1, \operatorname{supp}(f) \subset O\right\}.
$$

By the Urysohn lemma, this set on the RHS is non-empty. We need to show that 

**1.1.** $\mu(\cup_n O_n) = \lim_n \mu(\sum_{m=1}^nO_m)$ for $O_n \in \mathscr{O}$.

For any $f \in C$ with $0 \le f \le 1$ and $K = \operatorname{supp}(f) \subset O = \cup_{n=1}^\infty O_n$. Since $\{O_n\}$ is an open cover of $K$, there exists a finite subcover such that $K \subset \cup_{m=1}^{n_0} O_m$ for some integer ${n_0}$. Thus, $\ell(f) \le \mu(\cup_{m=1}^{n_0} O_m) \le \lim_{n\to\infty} \mu(\cup_{m=1}^n O_m)$. Taking the supremum over all such $f$ yields $\mu(O) \le \lim_{n\to\infty} \mu(\cup_{m=1}^n O_m)$. The reverse inequality holds trivially by the monotonicity of the supremum.

### Step 2

Define for any subset $A \in 2^E$, 

$$
\mu^*(A) = \inf \left\{\mu(O): O \in \mathscr{O}, A \subset O \right\}.
$$

We need to show that 

### Claim 2.1

 $\mu^*(\cup_n A_n) \le \sum_{n} \mu^*(A_n)$ for $A_n \in 2^E$.

If $\sum_{n=1}^\infty \mu^*(A_n) = \infty$, the inequality is trivial. Assume the sum is finite. For any $\varepsilon > 0$ and each $n$, there exists $O_n \in \mathscr{O}$ with $A_n \subset O_n$ such that $\mu(O_n) < \mu^*(A_n) + {\varepsilon}/{2^n}$. Denote $O = \cup_{n=1}^\infty O_n \in \mathscr{O}$. Then $A = \cup_{n=1}^\infty A_n \subset O$, and by Step 1.1 and finite subadditivity on open sets, $\mu^*(A) \le \mu(O) \le \sum_{n=1}^\infty \mu(O_n) < \sum_{n=1}^\infty \mu^*(A_n) + \varepsilon$. Since $\varepsilon$ is arbitrary, the countable subadditivity follows.

### Step 3

A subset $B \in 2^E$ is said to satisfy the Carathéodory condition if $\mu^*(A) = \mu^*(A\cap B) + \mu^*(A\cap B^c) \text{ for all } A \in 2^E$. We need to show

### Claim 3,1

All subsets satisfying Carathéodory condition are indeed a $\sigma$-algebra $\bar{\mathscr{B}}$ that contains $\mathscr{O}$.

### Claim 3.2

$\mu^*|_{\bar{\mathscr{B}}}$ is a measure.

To show $\mathscr{O} \subset \bar{\mathscr{B}}$, it suffices to show that any closed set $F \subset E$ is $\mu^*$-measurable. Since subadditivity already provides $\mu^*(A) \le \mu^*(A \cap F) + \mu^*(A \backslash F)$, we only need the reverse inequality. Fix $A \in 2^E$ and $\varepsilon > 0$. By the definition of $\mu^*$, there exists an open set $O \supset A$ such that $\mu(O) < \mu^*(A) + \varepsilon.$ Since $A \cap F \subset O \cap F$ and $A \backslash F \subset O \backslash F$, it is sufficient to show $\mu(O) \ge \mu^*(O \cap F) + \mu(O \backslash F)$. Since $O \backslash F$ is open, there exists $g_2 \in C$ with $0 \le g_2 \le 1$, $\operatorname{supp}(g_2) \subset O \backslash F$, and $\ell(g_2) > \mu(O \backslash F) - \varepsilon$. Let $U = O \backslash \operatorname{supp}(g_2)$. Then $U$ is an open set containing $O \cap F$. By the definition of $\mu(U)$, there exists $g_1 \in C$ with $0 \le g_1 \le 1$, $\operatorname{supp}(g_1) \subset U$, and $\ell(g_1) > \mu(U) - \varepsilon \ge \mu^*(O \cap F) - \varepsilon$. Since $\operatorname{supp}(g_1) \cap \operatorname{supp}(g_2) = \emptyset$, we have $0 \le g_1 + g_2 \le 1$ and $\operatorname{supp}(g_1 + g_2) \subset O$. By the linearity of $\ell$ and the definition of $\mu(O)$,

$$
\mu(O) \ge \ell(g_1 + g_2) = \ell(g_1) + \ell(g_2) > \mu^*(O \cap F) + \mu(O \backslash F) - 2\varepsilon.
$$

As $\varepsilon \to 0$, we obtain $\mu^*(A) \ge \mu^*(A \cap F) + \mu^*(A \backslash F)$. Thus $F \in \bar{\mathscr{B}}$, which implies $\mathscr{O} \subset \bar{\mathscr{B}}$. By Carathéodory's Extension Theorem, $\bar{\mathscr{B}}$ is a $\sigma$-algebra containing $\mathscr{B}$, and $\mu^*|_{\bar{\mathscr{B}}}$ is a complete measure.

### Step 4

By [Lemma 1](#lemma-pu), we will show (*) is valid.

Assume without loss of generality that $f \ge 0$ with its range in $[0, M]$. For any $\delta > 0$, partition $[0, M]$ with $0 = y_0 < y_1 < \dots < y_m = M$ such that $y_i - y_{i-1} < \delta$. Define $E_i = \{x \in E : y_{i-1} - \delta < f(x) < y_i + \delta\} \in \mathscr{O}$. By [Lemma 1](#lemma-pu), there exists a partition of unity $\{h_1, \dots, h_m\}$ subordinate to $\{E_i\}$. Since $f = \sum_{i=1}^m f h_i$ and $(y_{i-1} - \delta )h_i(x) \le f(x) h_i(x) \le (y_i + \delta)h_i(x)$, applying $\ell$ yields

$$
\sum_{i=1}^m (y_{i-1} - \delta)\ell(h_i) \le \ell(f) \le \sum_{i=1}^m (y_i + \delta)\ell(h_i).
$$

Integrating with respect to $\mu$ yields identical bounds

$$
\sum_{i=1}^m (y_{i-1} - \delta)\int_E h_i(x)\mu(dx) \le \int_E f(x)\mu(dx) \le \sum_{i=1}^m (y_i + \delta)\int_E h_i(x)\mu(dx).
$$

By the construction of $\mu$ on open sets, $\ell(h_i) = \int_E h_i(x)\mu(dx)$. Because $y_i - y_{i-1} < \delta$, the upper and lower bounds are within $2\delta \cdot \mu(E)$ of each other. Since $\delta > 0$ is arbitrary, we conclude that $\ell(f) = \int_E f(x)\mu(dx)$.

[Theorem 1](#theorem-rmk) can be extended to any continuous linear functional on $C$, possibly non-positive due to the Banach lattice property of $C$. Let $C^+ = \{f \in C: f\ge 0\}$, a positive cone satisfying $c_1f_1+c_2f_2 \in C^+$ for all $c_1,c_2 \ge 0$ and $f_1,f_2\in C^+$. It's easy to observe that $C = C^+ - C^+$.

<a id="theorem-rmk-2"></a>


## Theorem 2

Every continuous linear functional on $C$ has a representation (*), where $\mu$ is a signed Borel measure on $E$ with finite total variation.

### Proof

### Step 1

For each $f \in C^+$, define $\ell^+(f)=\sup{\ell(g):0\leq g\leq f}.$ Clearly, $\ell^+(f)\geq \ell(0)=0.$ Moreover, since $\ell$ is continuous, for every $g$ satisfying $0\leq g\leq f$, we have $|\ell(g)|\leq|\ell|,|g|\leq|\ell|,|f|.$ Thus, $\ell^+(f)$ is finite. We will prove that

### Claim 1,1

$\ell^+$ is additive and positively homogeneous on $C^+$.

### Claim 1.2

 $\ell^+$ extends uniquely to a positive linear functional on $C$.

To prove 1.1, let $f_1,f_2\in C^+$. For any $g_1,g_2\in C^+$ satisfying $0\leq g_1\leq f_1,0\leq g_2\leq f_2,$ we have $0\leq g_1+g_2\leq f_1+f_2.$ Therefore, $\ell(g_1)+\ell(g_2) = \ell(g_1+g_2)\leq\ell^+(f_1+f_2).$ Taking the supremum over all admissible $g_1$ and $g_2$ gives $\ell^+(f_1)+\ell^+(f_2)\leq\ell^+(f_1+f_2).$

Conversely, let $g\in C^+$ satisfy $0\leq g\leq f_1+f_2.$ Define $g_1=\min(g,f_1),g_2=g-g_1.$ Then $0\leq g_1\leq f_1.$ Moreover, $g_2 = g-\min(g,f_1) = \max(g-f_1,0),$ and since $g\leq f_1+f_2$, it follows that $0\leq g_2\leq f_2.$ Hence, $\ell(g)=\ell(g_1)+\ell(g_2)\leq\ell^+(f_1)+\ell^+(f_2).$ Taking the supremum over all $g$ satisfying $0\leq g\leq f_1+f_2$, we obtain $\ell^+(f_1+f_2)\leq\ell^+(f_1)+\ell^+(f_2).$ Therefore, $\ell^+(f_1+f_2)=\ell^+(f_1)+\ell^+(f_2).$

It remains to verify positive homogeneity. Let $c\geq 0$. If $c=0$, the assertion is immediate. If $c>0$, then every $g$ satisfying $0\leq g\leq cf$ can be written as $g=ch$ for some $h$ satisfying $0\leq h\leq f$. Hence, 

$$
\begin{aligned}
\ell^+(cf)
& =
\sup\{\ell(g):0\leq g\leq cf\}
=
\sup\{\ell(ch):0\leq h\leq f\}\\
& =
c\sup\{\ell(h):0\leq h\leq f\}
=
c\ell^+(f).
\end{aligned}
$$

Thus, $\ell^+$ is additive and positively homogeneous on $C^+$.

To prove 1.2, let $f\in C$. Since $f=f^+-f^-$ where $f^+=\max(f,0),f^-=\max(-f,0),$ define $\ell^+(f) = \ell^+(f^+)-\ell^+(f^-).$ More generally, suppose that $f$ has two decompositions $f=f_1-f_2=g_1-g_2,$ where $f_i,g_i\in C^+$ for $i=1,2$. Then $f_1+g_2=g_1+f_2.$ Since $\ell^+$ is additive on $C^+$, we have $\ell^+(f_1)+\ell^+(g_2)=\ell^+(g_1)+\ell^+(f_2).$ Therefore, $\ell^+(f_1)-\ell^+(f_2)= \ell^+(g_1)-\ell^+(g_2).$ Thus, the definition of $\ell^+(f)$ is independent of the chosen decomposition. Let $f,g\in C$. Choose decompositions $f=f_1-f_2, g=g_1-g_2,$ with $f_i,g_i\in C^+$. Then $f+g=(f_1+g_1)-(f_2+g_2),$ and hence

$$
\begin{aligned}
\ell^+(f+g)
& =
\ell^+(f_1+g_1)-\ell^+(f_2+g_2)\\
&=
\ell^+(f_1)+\ell^+(g_1)
-\ell^+(f_2)-\ell^+(g_2)\\
&=
\ell^+(f)+\ell^+(g).
\end{aligned}
$$

Similarly, if $c\geq 0$, then $cf=cf_1-cf_2,$ so $\ell^+(cf)=c\ell^+(f).$ If $c<0$, then $cf=(-c)f_2-(-c)f_1,$ and therefore $\ell^+(cf)=c\ell^+(f).$ Thus, $\ell^+$ extends uniquely to a linear functional on $C$. Since $\ell^+(f)\geq 0$ whenever $f\in C^+$, this extension is positive.

### Step 2

Define $\ell^-=\ell^+-\ell.$ For every $f\in C^+$, the function $g=f$ is admissible in the definition of $\ell^+(f)$. Hence, $\ell^+(f)\geq \ell(f).$ Therefore, $\ell^-(f)=\ell^+(f)-\ell(f)\geq 0.$ Thus, $\ell^-$ is also a positive linear functional, and $\ell=\ell^+-\ell^-.$ Moreover, every positive linear functional on $C$ is continuous. Indeed, if $f\in C$, then $-|f|\mathbf 1\leq f \leq|f|\mathbf 1.$ By positivity, $-|f|\ell^+(\mathbf 1)\leq\ell^+(f)\leq|f|\ell^+(\mathbf 1),$ and consequently, $|\ell^+(f)|\leq\ell^+(\mathbf 1)|f|.$ The same argument applies to $\ell^-$.

### Step 3

By [Theorem 1](#theorem-rmk), there exist finite positive Borel measures $\mu^+$ and $\mu^-$ on $E$ such that $\ell^+(f)=\int_E f(x),\mu^+(dx)$ and $\ell^-(f)=\int_E f(x),\mu^-(dx)$ for every $f\in C$. Define $\mu=\mu^+-\mu^-.$ Then $\mu$ is a signed Borel measure, and for every $f\in C$,

$$
\begin{aligned}
\ell(f)
=
\ell^+(f)-\ell^-(f)
=
\int_E f(x)\mu^+(dx)-
\int_E f(x)\mu^-(dx)=
\int_E f(x)\mu(dx).
\end{aligned}
$$

Furthermore, $|\mu|(E)\leq\mu^+(E)+\mu^-(E)<\infty.$ Hence, $\mu$ has finite total variation. $\square$

Also, for a locally compact, second-countable Hausdorff space $E′$, we know that it is paracompact, which means any open covering has a locally finite refinement that is also an open covering. In such a space, we have a similar proposition. Let’s denote all bounded continuous functions on $E′$ as $C′ = C_0(E′)$ where

$$
C_0(E') = \{\forall \varepsilon>0 \exists K \Subset E' \text{ such that } |f(x)|<\varepsilon \text{ for all }x \notin K.\}
$$

<a id="theorem-rmk-3"></a>

## Theorem 3

Every continuous linear functional on $C'$ has a representation (*), where $\mu$ is a locally finite signed Borel measure on $E$ with finite total variation.

<a id="lemma-pu-2"></a>

## Lemma 2

Suppose $\{E_\alpha\}_{\alpha\in I}$ is an open covering of some topological space $E$. $E$ is paracompact if and only if there exist continuous functions $\{h_{\alpha}\}_{\alpha\in I}$ satisfying

1. $\forall \alpha \in I, \operatorname{supp}(h_\alpha) \subset E_\alpha$;
2. $\forall \alpha \in I, x\in E, 0\leq h_\alpha (x) \leq 1$;
3. $\forall x \in E,$ there exists finite index set $I_0(x) = \{\alpha\in I: h_{\alpha}(x) \neq 0\}$ such that  $\sum_{\alpha \in I_0(x)} h_{\alpha}(x) =1$.

Based on [Lemma 2](#lemma-pu-2), [Theorem 3](#theorem-rmk-3) can be seen as a combination of [Theorem 1](#theorem-rmk) and [Theorem 2](#theorem-rmk-2), whose proof is the same in essence.
