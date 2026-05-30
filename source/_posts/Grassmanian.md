---
title: The Volumn of Grassmanianns
date: 2026-01-07 17:50:28
tag: 
    - [Differential Geometry, Algebraic Geometry]
categories:
    - [Differential Geometry, Algebraic Geometry]
mathjax: true
---


## Introduction

The Grassmannian stands as one of the most important geometric objects in modern mathematics, serving as a meeting point for algebraic geometry, differential geometry, representation theory, and mathematical physics. At its core, the Grassmannian $G(k,n)$ parametrizes all $k$-dimensional linear subspaces of an $n$-dimensional vector space. This seemingly simple definition gives rise to remarkably rich structure: algebraically, it is a smooth projective variety defined by quadratic equations; differentially, it is a compact homogeneous space with a natural Riemannian structure. This article explores these dual perspectives in detail, revealing how they complement and enrich each other.

## 1. Algebraic Geometry: The Grassmannian as a Projective Variety

### 1.1 Definition and Basic Structure

For a field $K$ (typically $\mathbb{R}$ or $\mathbb{C}$) and integers $0 \leq k \leq n$, the Grassmannian $G(k,n)$ is defined as:

$$G(k,n) = \{V \subseteq K^n \mid V \text{ is a } k\text{-dimensional linear subspace}\}.$$

When $k = 1$, we recover projective space: $G(1,n) \cong \mathbb{P}^{n-1}$. For $k = n-1$, we obtain the dual projective space. Thus Grassmannians naturally generalize projective spaces.

There is an equivalent projective interpretation: via projectivization, $k$-dimensional subspaces of $K^n$ correspond to $(k-1)$-dimensional linear subspaces of $\mathbb{P}^{n-1}$. This correspondence is bijective and inclusion-preserving.

### 1.2 The Plücker Embedding

The fundamental construction that reveals the algebraic nature of Grassmannians is the **Plücker embedding**. For $V \in G(k,n)$, choose a basis $v_1, \dots, v_k$ and form the $k \times n$ matrix $M$ with these vectors as rows. For each $k$-element subset $I = \{i_1 < \cdots < i_k\} \subseteq \{1,\dots,n\}$, define the **Plücker coordinate**:

$$x_I(V) = \det(M_I),$$

where $M_I$ is the $k \times k$ submatrix consisting of columns indexed by $I$.


The Plücker map is then defined as:

$$P_{k,n}: G(k,n) \longrightarrow \mathbb{P}^{\binom{n}{k}-1}, \quad V \mapsto [x_I(V)]_{|I|=k}.$$


**Proposition 1.2.1** The Plücker map is well-defined and injective.

*Proof:* To show well-definedness, note that changing the basis of $V$ replaces $M$ by $AM$ for some $A \in GL(k)$. Then each minor transforms as $\det((AM)_I) = \det(A)\det(M_I)$. Since $\det(A) \neq 0$, this scales all Plücker coordinates by the same nonzero factor, leaving the projective point unchanged.

For injectivity, suppose $P_{k,n}(V) = P_{k,n}(W)$. Choose bases so that their matrix representations $M_V$ and $M_W$ have the same Plücker coordinates. After possibly rescaling, we may assume there exists $I_0$ with $x_{I_0}(V) = x_{I_0}(W) = 1$. Perform column operations (which correspond to changes of basis in $K^n$) to make both matrices have the identity in columns $I_0$. The remaining columns are then uniquely determined by the other Plücker coordinates through the relations:

$$x_{(I_0\setminus\{i\})\cup\{j\}} = \pm(\text{entry in row }i,\text{ column }j),$$

which follows from expanding the determinant along column $j$. Thus $M_V = M_W$, so $V = W$. ∎

### 1.3 Plücker Relations and the Defining Ideal

The image of $P_{k,n}$ is not all of $\mathbb{P}^{\binom{n}{k}-1}$; it satisfies quadratic relations known as **Plücker relations**.

**Theorem 1.3.1:** For any $I \subseteq \{1,\dots,n\}$ with $|I| = k-1$ and $J \subseteq \{1,\dots,n\}$ with $|J| = k+1$, define:

$$f_{I,J} = \sum_{j \in J} (-1)^{\sigma(I,j)} x_{I \cup \{j\}} x_{J \setminus \{j\}},$$

where $\sigma(I,j)$ is the sign of the permutation that orders $I \cup \{j\}$. Then:

$$P_{k,n}(G(k,n)) = V\left(\{f_{I,J}\}_{|I|=k-1, |J|=k+1}\right) \subseteq \mathbb{P}^{\binom{n}{k}-1}.$$

*Proof:* We prove both inclusions.

($\subseteq$) Let $V \in G(k,n)$ with matrix representation $M$. Fix $I,J$ as above. Consider the $(k+1) \times (k+1)$ matrix formed by taking rows of $M$ corresponding to some basis and columns $I \cup J$ (with appropriate repetitions). This matrix has rank at most $k$, so all $(k+1) \times (k+1)$ minors vanish. The Laplace expansion of such a minor along a row yields exactly the Plücker relation $f_{I,J}(P_{k,n}(V)) = 0$.

More concretely: Let $M'$ be the $(k+1) \times n$ matrix obtained by adding an extra row $w$ to $M$. For any $j \in J$, let $M'_{I \cup \{j\}}$ be the $(k+1) \times (k+1)$ submatrix with columns $I \cup \{j\}$. The determinant $\det(M'_{I \cup \{j\}})$ can be computed by expanding along the last row, giving a linear combination of $k \times k$ minors of $M$. Summing over $j$ with appropriate signs gives zero, which is exactly $f_{I,J}$.

($\supseteq$) Suppose $a = [a_I] \in \mathbb{P}^{\binom{n}{k}-1}$ satisfies all Plücker relations. Choose $I_0$ with $a_{I_0} \neq 0$ and rescale so $a_{I_0} = 1$. Construct a $k \times n$ matrix $M$ as follows: set columns $I_0$ to be the identity matrix. For $j \notin I_0$ and $i \in I_0$, define the $(i,j)$-entry as:

$$m_{ij} = (-1)^{\sigma(i,j)} a_{(I_0 \setminus \{i\}) \cup \{j\}},$$

where $\sigma(i,j)$ is determined by ordering considerations. Let $V$ be the row space of $M$. One verifies that $P_{k,n}(V) = a$ by showing that for any $I$, $\det(M_I) = a_I$. This follows by induction on $|I \setminus I_0|$, using the Plücker relations to express $a_I$ in terms of coordinates with smaller symmetric difference. ∎

**Example 1.3.2:** For $G(2,4)$, with coordinates $(x_{12}, x_{13}, x_{14}, x_{23}, x_{24}, x_{34})$, the only independent Plücker relation (up to sign) is:

$$x_{12}x_{34} - x_{13}x_{24} + x_{14}x_{23} = 0.$$

Thus $G(2,4)$ is a smooth quadric hypersurface in $\mathbb{P}^5$, known as the **Klein quadric**.

### 1.4 Irreducibility, Dimension, and Smoothness

**Proposition 1.4.1:** $G(k,n)$ is an irreducible algebraic variety of dimension $k(n-k)$.

*Proof:* For each $k$-element subset $I$, define the affine open:

$$U_I = \{ [x_J] \in G(k,n) \mid x_I \neq 0 \}.$$

On $U_I$, we can normalize $x_I = 1$. Any $V \in U_I$ has a unique matrix representation of the form:

$$M = \begin{pmatrix} I_k &|& A \end{pmatrix},$$

where $I_k$ is the $k \times k$ identity matrix (in columns $I$), and $A$ is a $k \times (n-k)$ matrix. The entries of $A$ provide coordinates on $U_I$, giving an isomorphism $U_I \cong \mathbb{A}^{k(n-k)}$.

Since the $U_I$ cover $G(k,n)$ and each is irreducible, $G(k,n)$ is irreducible. The dimension is $k(n-k)$ because each $U_I$ is an affine space of that dimension. ∎

The affine coordinates also show that $G(k,n)$ is smooth: transition functions between charts are given by rational functions (specifically, by solving linear equations), hence regular.

## 2. Differential Geometry: The Grassmannian as a Homogeneous Space

### 2.1 Smooth Manifold Structure

When $K = \mathbb{R}$ or $\mathbb{C}$, the Grassmannian naturally carries the structure of a smooth (resp. complex) manifold. The affine charts $U_I \cong \mathbb{A}^{k(n-k)}$ provide local coordinate charts. Transition functions between charts are given by matrix operations: if $V \in U_I \cap U_J$, then the matrix $A$ in the $I$-chart and the matrix $B$ in the $J$-chart are related by:

$$B = (M_I^{-1} M_J)_{\text{complement}},$$

where $M$ is a matrix representing $V$, and the subscript indicates taking the appropriate submatrix. These are rational functions with nonzero denominators, hence smooth (holomorphic in the complex case).

Thus $G(k,n;\mathbb{R})$ is a smooth manifold of dimension $k(n-k)$, and $G(k,n;\mathbb{C})$ is a complex manifold of complex dimension $k(n-k)$ (hence real dimension $2k(n-k)$).

### 2.2 Homogeneous Space Structure

A fundamental insight is that Grassmannians are **homogeneous spaces** of classical Lie groups.

**Theorem 2.2.1:** There are natural diffeomorphisms:

$$\begin{aligned}
G(k,n;\mathbb{R}) &\cong O(n)/(O(k) \times O(n-k)), \\
G(k,n;\mathbb{C}) &\cong U(n)/(U(k) \times U(n-k)).
\end{aligned}$$

*Proof:* Consider the real case. The orthogonal group $O(n)$ acts transitively on $G(k,n;\mathbb{R})$: given any $k$-dimensional subspace $V$, choose an orthonormal basis for $V$ and extend to an orthonormal basis for $\mathbb{R}^n$. The orthogonal matrix sending the standard basis to this basis maps the standard $k$-plane $\mathbb{R}^k \times \{0\}$ to $V$.

The stabilizer of the standard $k$-plane consists of orthogonal matrices that preserve this subspace, which are precisely block-diagonal matrices with blocks in $O(k)$ and $O(n-k)$. Thus by the orbit-stabilizer theorem, $G(k,n;\mathbb{R}) \cong O(n)/(O(k) \times O(n-k))$.

The complex case is analogous with $U(n)$ acting on $\mathbb{C}^n$. ∎

This description has several important consequences:
- $G(k,n)$ is compact (as a quotient of compact groups).
- $G(k,n)$ has a natural Riemannian metric induced from the bi-invariant metric on $O(n)$ or $U(n)$.
- The tangent space at a point $V$ can be identified with $\operatorname{Hom}(V, V^\perp)$.

### 2.3 Tangent Space and Dimension

Let $V \in G(k,n)$. A curve $V(t)$ in $G(k,n)$ with $V(0) = V$ can be described by a family of linear maps. Specifically, choose an orthonormal basis $e_1, \dots, e_k$ for $V$ and extend to an orthonormal basis for $\mathbb{R}^n$. For small $t$, we can write:

$$e_i(t) = e_i + t \sum_{j=k+1}^n a_{ij} e_j + O(t^2),$$

where $A = (a_{ij})$ is a $k \times (n-k)$ matrix. Differentiating at $t=0$ gives a linear map $V \to V^\perp$ represented by $A$. Thus:

**Proposition 2.3.1:** There is a natural isomorphism:

$$T_V G(k,n) \cong \operatorname{Hom}(V, V^\perp) \cong \mathbb{R}^{k(n-k)}.$$

This provides an intrinsic, coordinate-free description of the tangent space and confirms the dimension $k(n-k)$.

### 2.4 Volume Formulas

The homogeneous space structure allows computation of volumes with respect to natural invariant metrics. We derive these formulas through a sequence of fibrations.

**Lemma 2.4.1 (Sphere volumes):**  

$$\operatorname{vol}(S^{m-1}) = \frac{2\pi^{m/2}}{\Gamma(m/2)}.$$

*Proof:* This follows from integrating the volume form on the sphere or from the known formula for surface area. ∎

**Theorem 2.4.2 (Classical group volumes):**

$$\begin{aligned}
\operatorname{vol}(O(n)) &= \frac{2^n}{\prod_{j=1}^n \Gamma(j/2)} \pi^{\frac{n(n+1)}{4}}, \\
\operatorname{vol}(U(n)) &= \frac{2^n}{\prod_{j=1}^n \Gamma(j)} \pi^{\frac{n(n+1)}{2}}, \\
\operatorname{vol}(Sp(n)) &= \frac{2^n}{\prod_{j=1}^n \Gamma(2j)} \pi^{n(n+1)}.
\end{aligned}$$

*Proof for $O(n)$:* Consider the fibration:

$$O(n-1) \hookrightarrow O(n) \xrightarrow{\pi} S^{n-1},$$

where $\pi$ maps an orthogonal matrix to its first column. This is a Riemannian submersion with respect to the bi-invariant metric on $O(n)$ (induced from the Killing form $\langle X, Y \rangle = \operatorname{tr}(X^TY)$). The fibers are isometric to $O(n-1)$.

By the coarea formula (or the fact that in a Riemannian submersion, volumes multiply):

$$\operatorname{vol}(O(n)) = \operatorname{vol}(O(n-1)) \cdot \operatorname{vol}(S^{n-1}).$$

Applying this recursively:

$$\operatorname{vol}(O(n)) = \prod_{m=1}^n \operatorname{vol}(S^{m-1}) = \prod_{m=1}^n \frac{2\pi^{m/2}}{\Gamma(m/2)}.$$

Simplifying:

$$\prod_{m=1}^n 2\pi^{m/2} = 2^n \pi^{\sum_{m=1}^n m/2} = 2^n \pi^{\frac{n(n+1)}{4}},$$

and the denominator is $\prod_{j=1}^n \Gamma(j/2)$. ∎

The proofs for $U(n)$ and $Sp(n)$ are similar, using fibrations:

$$U(n-1) \hookrightarrow U(n) \twoheadrightarrow S^{2n-1}, \quad
Sp(n-1) \hookrightarrow Sp(n) \twoheadrightarrow S^{4n-1}.$$

**Corollary 2.4.3 (Grassmannian volumes):**

$$\begin{aligned}
\operatorname{vol}(G(k,n;\mathbb{R})) &= \frac{\operatorname{vol}(O(n))}{\operatorname{vol}(O(k)) \operatorname{vol}(O(n-k))} \\
&= \frac{\prod_{j=1}^n \Gamma(j/2)}{\prod_{j=1}^k \Gamma(j/2) \prod_{j=1}^{n-k} \Gamma(j/2)} \pi^{\frac{k(n-k)}{2}}, \\
\operatorname{vol}(G(k,n;\mathbb{C})) &= \frac{\operatorname{vol}(U(n))}{\operatorname{vol}(U(k)) \operatorname{vol}(U(n-k))} \\
&= \frac{\prod_{j=1}^n \Gamma(j)}{\prod_{j=1}^k \Gamma(j) \prod_{j=1}^{n-k} \Gamma(j)} \pi^{k(n-k)}.
\end{aligned}$$

*Proof:* This follows from the quotient representation $G(k,n) \cong O(n)/(O(k) \times O(n-k))$ and the fact that the natural projection $O(n) \to G(k,n)$ is a Riemannian submersion with fiber isometric to $O(k) \times O(n-k)$. Thus:

$$\operatorname{vol}(G(k,n)) = \frac{\operatorname{vol}(O(n))}{\operatorname{vol}(O(k) \times O(n-k))} = \frac{\operatorname{vol}(O(n))}{\operatorname{vol}(O(k)) \operatorname{vol}(O(n-k))}.$$

The simplification of the Gamma factors uses properties of the Gamma function and careful index manipulation. The exponent of $\pi$ comes from:

$$\frac{n(n+1)}{4} - \frac{k(k+1)}{4} - \frac{(n-k)(n-k+1)}{4} = \frac{k(n-k)}{2}.$$

The complex case is analogous. ∎

## 3. Interplay: Schubert Calculus and Enumerative Geometry

The unity of algebraic and differential geometry is beautifully illustrated by enumerative problems on Grassmannians. A classic example is:

**Problem:** Given four lines in $\mathbb{P}^3$ in general position, how many lines intersect all four?

**Solution using Grassmannians:** Lines in $\mathbb{P}^3$ correspond to points in $G(2,4)$. Given a fixed line $L \subset \mathbb{P}^3$, the set of lines meeting $L$ is:

$$X_L = \{ \ell \in G(2,4) \mid \ell \cap L \neq \emptyset \}.$$

Under the Plücker embedding $G(2,4) \hookrightarrow \mathbb{P}^5$, one can show that $X_L$ is cut out by a linear equation. Specifically, if $L$ has Plücker coordinates $(p_{ij})$ and $\ell$ has coordinates $(x_{ij})$, then:

$$\ell \cap L \neq \emptyset \iff \sum_{i<j} \varepsilon_{ij} p_{ij} x_{kl} = 0,$$

where $\varepsilon_{ij}$ are appropriate signs and $\{k,l\} = \{1,2,3,4\} \setminus \{i,j\}$. Thus $X_L = G(2,4) \cap H_L$ where $H_L$ is a hyperplane in $\mathbb{P}^5$.

For four general lines $L_1, L_2, L_3, L_4$, the set of lines meeting all four is:

$$X = G(2,4) \cap H_1 \cap H_2 \cap H_3 \cap H_4,$$

where $H_i = H_{L_i}$. Generically, the intersection of four hyperplanes in $\mathbb{P}^5$ is a line $\mathbb{P}^1$. Since $G(2,4)$ is a quadric hypersurface, a line typically intersects it in 2 points (by Bézout's theorem). Thus there are exactly 2 lines meeting all four given lines.

This reasoning combines:
- Algebraic geometry: The Plücker embedding realizes $G(2,4)$ as a concrete variety.
- Differential geometry: Transversality ensures the intersection is well-behaved for generic choices.
- Enumerative geometry: Bézout's theorem provides the count.

This is a simple example of **Schubert calculus**, the intersection theory on Grassmannians, which has deep connections to representation theory, combinatorics, and topology.


## Reference

[1] Phillip Griffiths and Joseph Harris, Principles of Algebraic Geometry, John Wiley \& Sons, New York, 1994.

[2] Robin Hartshorne, Algebraic Geometry, Graduate Texts in Mathematics, Vol. 52, Springer-Verlag, New York-Heidelberg, 1977.