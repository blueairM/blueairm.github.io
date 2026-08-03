---
layout: post
title: Three Elegant Theorems in Abstract Algebra
date: 2026-08-02 23:58:21
tag:
    - [Rings and Algebras]
categories:
    - [Blogs]
mathjax: true
---

The real algebras $\mathbb R$, $\mathbb C$, $\mathbb H$, and $\mathbb O$ have dimensions $1,2,4,8$. They form the familiar chain

$$\mathbb R\subset\mathbb C\subset\mathbb H\subset\mathbb O,$$

and as we move from left to right, familiar algebraic properties gradually disappear.

| Algebra     | Commutative | Associative | Alternative | Multiplicative norm |
| ----------- | ----------- | ----------- | ----------- | ------------------- |
| $\mathbb R$ | Yes         | Yes         | Yes         | Yes                 |
| $\mathbb C$ | Yes         | Yes         | Yes         | Yes                 |
| $\mathbb H$ | No          | Yes         | Yes         | Yes                 |
| $\mathbb O$ | No          | No          | Yes         | Yes                 |

Three classical rigidity theorems explain much of this pattern.

> **Frobenius Theorem.** Every finite-dimensional associative division algebra over $\mathbb R$ is isomorphic to $\mathbb R$, $\mathbb C$, or $\mathbb H$.

> **Wedderburn's Little Theorem.** Every finite division ring is commutative, hence is a finite field.

> **Hurwitz Theorem.** Every finite-dimensional normed division algebra over $\mathbb R$ is isomorphic to $\mathbb R$, $\mathbb C$, $\mathbb H$, or $\mathbb O$.

Thus Frobenius and Wedderburn concern associative division algebras, while Hurwitz replaces associativity by the existence of a positive-definite multiplicative quadratic form. The generalized form of Hurwitz' theorem will later require only nondegeneracy.

## 1. Frobenius Theorem

Let $D$ be a finite-dimensional associative division algebra over $\mathbb R$. We wish to prove that $D$ is one of $\mathbb R$, $\mathbb C$, or $\mathbb H$.

### 1.1 Every element has degree at most two

Since $D$ is finite-dimensional over $\mathbb R$, every $x\in D$ is algebraic over $\mathbb R$. Indeed, the elements $1,x,x^2,\ldots$ must eventually become linearly dependent. Let $m_x(t)\in\mathbb R[t]$ be the minimum polynomial of $x$. We claim that $m_x(t)$ is irreducible over $\mathbb R$. Suppose $m_x(t)=f(t)g(t)$, where $f,g\in\mathbb R[t]$ both have positive degree. Since $\mathbb R$ lies in the center of $D$, evaluation at $x$ gives $0=m_x(x)=f(x)g(x)$. Since $D$ is a division algebra, it has no zero divisors, so either $f(x)=0$ or $g(x)=0$. This contradicts the minimality of $m_x$. Hence $m_x$ is irreducible.

The only irreducible polynomials over $\mathbb R$ have degree $1$ or $2$. Therefore every $x\in D$ has degree at most $2$ over $\mathbb R$. If $x\notin\mathbb R$, its minimum polynomial is an irreducible quadratic. After completing the square, we may write it as $(t-a)^2+b^2$ with $b\ne0$. Thus $(x-a)^2=-b^2$. Setting $i=(x-a)/b$, we obtain $i^2=-1$. Hence either $D=\mathbb R$, or $D$ contains a copy of $\mathbb C=\mathbb R+\mathbb Ri$.

From now on assume $D\ne\mathbb R$ and fix $i\in D$ with $i^2=-1$.

### 1.2 The centralizer of $i$

Consider the centralizer $C_D(i)=\{x\in D:xi=ix\}$. It is a division subalgebra of $D$, and $\mathbb C=\mathbb R+\mathbb Ri$ lies in its center. Thus $C_D(i)$ is a finite-dimensional division algebra over $\mathbb C$. But $\mathbb C$ is algebraically closed. If $x\in C_D(i)$, then the minimum polynomial of $x$ over $\mathbb C$ is irreducible. Hence it must be linear, so $x\in\mathbb C$. Therefore $C_D(i)=\mathbb C$.

### 1.3 Conjugation by $i$

Define an $\mathbb R$-linear transformation $\sigma:D\to D$ by $\sigma(x)=ixi^{-1}$. Since $i^{-1}=-i$, we have $\sigma^2=1$. Hence $D$ decomposes into the two eigenspaces

$$D=D_+\oplus D_-,$$

where $D_+=\{x:\sigma(x)=x\}$ and $D_-=\{x:\sigma(x)=-x\}$. Now $\sigma(x)=x$ is equivalent to $ix=xi$, so $D_+=C_D(i)=\mathbb C$. Similarly, $\sigma(x)=-x$ is equivalent to $ix=-xi$. Thus

$$D=\mathbb C\oplus D_-.$$

If $D_-=0$, then $D=\mathbb C$. It remains to consider the case $D_-\ne0$.

### 1.4 The quaternionic direction

Choose $0\ne j\in D_-$. Then $ij=-ji$. We claim that $D_-=\mathbb Cj$. Let $x\in D_-$. Since both $x$ and $j^{-1}$ anticommute with $i$, their product $xj^{-1}$ commutes with $i$. Hence $xj^{-1}\in C_D(i)=\mathbb C$, so $x\in\mathbb Cj$. Therefore $D_-=\mathbb Cj$ and $D=\mathbb C\oplus\mathbb Cj$. In particular, $\dim_{\mathbb R}D=4$. If $z=a+bi\in\mathbb C$, then $jz=j(a+bi)=aj+bji=(a-bi)j=\bar zj$. Thus the action of $j$ on $\mathbb C$ is complex conjugation: $jz=\bar zj$. This is precisely the relation appearing in the quaternion algebra.

### 1.5 Determining $j^2$

Since $ij=-ji$, we have $ij^2=j^2i$, so $j^2\in C_D(i)=\mathbb C$. On the other hand, $j^2$ commutes with $j$. Write $j^2=z\in\mathbb C$. Since $jz=\bar zj$ and also $jz=zj$, we obtain $\bar z=z$. Hence $z\in\mathbb R$. Thus $j^2\in\mathbb R$.

Certainly $j^2\ne0$. Moreover, $j^2$ cannot be positive. If $j^2=a>0$, then $(j-\sqrt a)(j+\sqrt a)=0$, contradicting the absence of zero divisors.

Hence $j^2<0$. After replacing $j$ by a nonzero real multiple of $j$, we may assume $j^2=-1$.

We now have $i^2=j^2=-1$ and $ij=-ji$. Setting $k=ij$, we obtain the usual quaternion relations $i^2=j^2=k^2=ijk=-1$. Therefore $D\simeq\mathbb H$.

We have proved

> **Frobenius Theorem.** Every finite-dimensional associative division algebra over $\mathbb R$ is isomorphic to exactly one of $\mathbb R$, $\mathbb C$, and $\mathbb H$.

## 2. Wedderburn's Little Theorem

Let $D$ be a finite division ring and let $F=Z(D)$ be its center. Since $F$ is a finite field, write $|F|=q$. Let $n=\dim_FD$. Then $|D|=q^n$ and $|D^\times|=q^n-1$. We wish to show that $n=1$. If $n=1$, then $D=F$ and there is nothing to prove. Suppose therefore that $n>1$.

### 2.1 Conjugacy classes

Let $D^\times$ act on itself by conjugation. The elements of $F^\times$ are precisely the central elements, hence each of them forms a conjugacy class containing one element. Choose representatives $a_1,\ldots,a_r$ for the noncentral conjugacy classes. For each $a_i$, let $C_i=C_D(a_i)$ be its centralizer. Since $a_i$ is not central, $C_i$ is a proper division subalgebra of $D$ containing $F$. Write $n_i=\dim_FC_i$. Then $1\le n_i<n$. Moreover, $D$ is a vector space over the division ring $C_i$. If $m_i=\dim_{C_i}D$, then $n=m_in_i$. Thus $n_i\mid n$. The centralizer of $a_i$ inside the multiplicative group $D^\times$ is $C_i^\times$, which has $q^{n_i}-1$ elements. Hence the conjugacy class of $a_i$ has size

$$\frac{|D^\times|}{|C_i^\times|}=\frac{q^n-1}{q^{n_i}-1}.$$

Consequently the class equation of $D^\times$ is

$$q^n-1=q-1+\sum_{i=1}^r\frac{q^n-1}{q^{n_i}-1}.$$

Everything now reduces to elementary arithmetic.

### 2.2 Cyclotomic polynomials

Let $\Phi_n(X)$ denote the $n$-th cyclotomic polynomial. Recall that $X^n-1=\prod_{d\mid n}\Phi_d(X).$ Since $n_i$ is a proper divisor of $n$, the polynomial $\Phi_n(X)$ occurs as a factor of $X^n-1$, but not of $X^{n_i}-1$. Therefore

$$\Phi_n(q)\mid\frac{q^n-1}{q^{n_i}-1}$$

for every $i$. Returning to the class equation, every summand in the sum is divisible by $\Phi_n(q)$. Since $\Phi_n(q)$ also divides $q^n-1$, it follows that

$$\Phi_n(q)\mid q-1.$$

We shall show that this is impossible when $n>1$.

### 2.3 The contradiction

Over $\mathbb C$, the cyclotomic polynomial factors as $\Phi_n(X)=\prod_\zeta(X-\zeta),$ where $\zeta$ runs through the primitive $n$-th roots of unity. Since $n>1$, no primitive $n$-th root of unity is equal to $1$. For every such $\zeta$, the distance from the real number $q$ to $\zeta$ is strictly larger than the distance from $q$ to $1$. Hence $|q-\zeta|>q-1.$ Therefore

$$|\Phi_n(q)|=\prod_\zeta|q-\zeta|>q-1.$$

But we already proved that $\Phi_n(q)$ divides $q-1$. A nonzero integer dividing $q-1$ cannot have absolute value greater than $q-1$. This contradiction shows that $n>1$ is impossible. Hence $n=1$ and therefore $D=F$. Thus $D$ is commutative and we have

> **Wedderburn's Little Theorem.** Every finite division ring is commutative.

Equivalently, if $D$ is a finite associative division algebra, then $D$ is a finite field.

## 3. Hurwitz Theorem

We now drop the assumption of associativity and study algebras that carry a multiplicative quadratic form.

### 3.1 Composition algebras

Let $F$ be a field with $\operatorname{char}F\neq2$. A *quadratic form* on a finite-dimensional $F$-vector space $V$ is a map $N:V\to F$ satisfying:

- $N(\lambda v)=\lambda^2N(v)$ for all $\lambda\in F$ and $v\in V$;
- the map $(v,w)\mapsto N(v+w)-N(v)-N(w)$ is $F$-bilinear.

Its polar form is

$$(v,w)=\frac12\bigl(N(v+w)-N(v)-N(w)\bigr).$$

Then $N(v)=(v,v)$. The quadratic form $N$ is *nondegenerate* if $(v,w)=0$ for every $w\in V$ implies $v=0$.

A *composition algebra* over $F$ is a finite-dimensional unital $F$-algebra $A$, not necessarily associative, together with a nondegenerate quadratic form $N:A\to F$ such that $N(xy)=N(x)N(y)$ for all $x,y\in A$. The map $N$ is called the *norm* of $A$. Setting $x=y=1$ gives $N(1)=N(1)^2$, and nondegeneracy forces $N(1)=1$.

Thus a composition algebra is an algebra in which the norm is multiplicative.

### 3.2 Polarization

Fix a composition algebra $A$ with norm $N$ and polar form $(\;,\;)$.

Replace $y$ by $y+z$ in the composition law $N(xy)=N(x)N(y)$. Using bilinearity of the polar form we obtain

$$(xy,xz)=N(x)(y,z). \tag{1}$$
The symmetric version is $(yx,zx)=N(x)(y,z)$.

Polarizing (1) again gives the four-linear identity

$$(xy,zw)+(xw,zy)=2(x,z)(y,w). \tag{2}$$

These identities are the algebraic engine of the whole theory. They allow the norm to control multiplication.

### 3.3 Trace and conjugation

Define the trace of $x$ by $t(x)=2(x,1)$ and its conjugate by $\bar x=t(x)1-x$.

Specializing the polarized identities gives

$$x+\bar x=t(x)1,\qquad x\bar x=\bar xx=N(x)1. \tag{3}$$

Hence every element satisfies the quadratic equation

$$x^2-t(x)x+N(x)1=0.$$

Consequently each element of a composition algebra generates a subalgebra of dimension at most two. Linearizing the quadratic equation gives

$$xy+yx=t(x)y+t(y)x-2(x,y)1. \tag{4}$$

In particular, if $t(x)=t(y)=0$ and $(x,y)=0$, then $xy=-yx$. Using the polarized identities one also checks that conjugation reverses multiplication: $\overline{xy}=\bar y\,\bar x$.

Finally, specializing (2) yields the adjoint identities

$$(xy,z)=(y,\bar xz)=(x,z\bar y), \tag{5}$$

which will be essential in the doubling argument.

### 3.4 The alternative laws

A composition algebra need not be associative, but the norm forces a weaker property.

#### Lemma 1

Every composition algebra satisfies the left and right alternative laws

$$x(xy)=x^2y,\qquad(yx)x=yx^2.$$

Equivalently, the associator $[x,y,z]=(xy)z-x(yz)$ is an alternating function of its three arguments.

#### Proof

From the quadratic equation, $x^2=t(x)x-N(x)1$. Using (5),

$$(x(xy),z)=(xy,\bar xz)=t(x)(xy,z)-(xy,xz).$$

By (1), $(xy,xz)=N(x)(y,z)$, and therefore

$$(x(xy),z)=t(x)(xy,z)-N(x)(y,z)=(x^2y,z).$$

Thus $(x(xy)-x^2y,z)=0$ for every $z$. Nondegeneracy yields the left alternative law. The right alternative law follows similarly.

Hence $[x,x,y]=[y,x,x]=0$. Linearizing these gives $[x,z,y]+[z,x,y]=0$ and $[y,x,z]+[y,z,x]=0$, so the associator changes sign when any two adjacent arguments are swapped. Because $\operatorname{char}F\neq2$, this means $[x,y,z]$ is alternating. $\square$

An immediate consequence is

> **Artin theorem.** Any subalgebra generated by two elements of an alternative algebra is associative.

### 3.5 Orthogonal doubling

The heart of the proof is that the classical Cayley–Dickson doubling construction appears naturally inside every composition algebra.

Let $B$ be a proper composition subalgebra of $A$ such that the restriction of $N$ to $B$ is nondegenerate. Orthogonally decompose $A=B\oplus B^\perp$. Because $B$ is proper, $B^\perp\neq0$. Since $N$ is nondegenerate on $A$, its restriction to $B^\perp$ cannot vanish identically. Pick $u\in B^\perp$ with $N(u)\neq0$.

As $1\in B$, we have $(u,1)=0$, so $t(u)=0$ and $\bar u=-u$. The quadratic equation gives $u^2=-N(u)1=\mu1$, where $\mu=-N(u)\in F^\times$.

For any $a\in B$, the linearized commutation formula (4) yields $ua+au=t(a)u$. Hence

$$ua=\bar au,\qquad au=u\bar a. \tag{6}$$

**The direct sum.** We first show that $Bu$ is orthogonal to $B$. For $a,b\in B$, the adjoint identity (5) gives

$$(au,b) = (u,\bar a b) = 0,$$
because $\bar a b\in B$ and $u\in B^\perp$. Thus $Bu\subseteq B^\perp$. Nondegeneracy on $B$ forces $B\cap Bu=0$.

If $au=0$, then by Artin’s theorem the subalgebra generated by $a$ and $u$ is associative, and

$$0 = (au)\bar u = a(u\bar u) = N(u)a,$$
so $a=0$. The map $a\mapsto au$ is therefore injective, and $\dim_FBu=\dim_FB$.

We therefore obtain the direct sum $D=B\oplus Bu$, with $\dim_FD=2\dim_FB$.

**The multiplication.** A direct computation using (6), alternativity, and (5) gives

$$
\begin{aligned}
a(du)&=(da)u,\\
(bu)c&=(b\bar c)u,\\
(bu)(du)&=\mu\,\bar d b,
\end{aligned}
$$

for all $a,b,c,d\in B$. Consequently,

$$(a+bu)(c+du)=(ac+\mu\bar d b)+(da+b\bar c)u. \tag{7}$$

Conjugation and norm on $D$ are $\overline{a+bu}=\bar a-bu$ and

$$N(a+bu)=N(a)-\mu N(b). \tag{8}$$

These formulas show that $D$ is closed under multiplication and that the norm is again multiplicative. Hence $D$ is a composition subalgebra of $A$. It is precisely the Cayley--Dickson double of $B$ with parameter $\mu$.

Thus any proper nondegenerate composition subalgebra forces the next Cayley–Dickson algebra to appear inside $A$.

### 3.6 Successive doubling and the possible dimensions

Start with $B_0=F1$. Its norm is nondegenerate. If $A=B_0$ we have a $1$-dimensional composition algebra.

**First doubling.** If $A\neq B_0$, pick $u_1\in B_0^\perp$ with $N(u_1)\neq 0$ and form

$$B_1=B_0\oplus B_0u_1.$$
Then $\dim_FB_1=2$. A two-dimensional composition algebra is commutative and associative; it is a quadratic étale algebra.

**Second doubling.** If $B_1=A$, we stop. Otherwise pick $u_2\in B_1^\perp$ with $N(u_2)\neq 0$ and form

$$B_2=B_1\oplus B_1u_2.$$
Then $\dim_FB_2=4$. This is a quaternion algebra; it is associative but generally not commutative.

**Third doubling.** If $B_2=A$, we stop. Otherwise pick $u_3\in B_2^\perp$ with $N(u_3)\neq 0$ and form

$$B_3=B_2\oplus B_2u_3.$$
Then $\dim_FB_3=8$. This is an octonion (Cayley) algebra. By Lemma 1 it is alternative. It is not associative: choose $a,b\in B_2$ with $ab\neq ba$. By (7), $a(bu_3)=(ba)u_3$. If $B_3$ were associative, then $(ab)u_3=a(bu_3)=(ba)u_3$. Since right multiplication by $u_3$ is injective, this would imply $ab=ba$, a contradiction. Hence $[a,b,u_3]\neq0$.

We have obtained the chain

$$F=B_0\subset B_1\subset B_2\subset B_3$$

of composition algebras of dimensions $1,2,4,8$.

### 3.7 Why the process stops at eight dimensions

It remains to prove that $B_3$ cannot be proper, i.e., that no composition algebra of dimension $16$ exists.

#### Lemma 2

If the Cayley--Dickson double $D=B\oplus Bu$ of a composition algebra $B$ is alternative, then $B$ is associative.

#### Proof

Write elements of $D$ as pairs $(a,b)$ with multiplication as in (7)

$$(a,b)(c,d) = (ac + \mu\,\bar d b,\; da + b\bar c).$$
Assume $D$ satisfies the left alternative law $x(xy)=x^2y$ for all $x,y\in D$.

Let $x=(a,b)$ and $y=(c,0)$. Compute $x^2$:

$$x^2 = (a^2 + \mu N(b)1,\; t(a)b).$$
Then the second component of $x^2y$ is $t(a)b\bar c$.

On the other hand, $xy=(ac,\;b\bar c)$, and

$$x(xy) = \bigl(a(ac) + \mu\overline{b\bar c}b,\; (b\bar c)a + b(\overline{ac})\bigr).$$
The second component is $(b\bar c)a+b(\bar c\bar a)$. Equating the second components of $x^2y$ and $x(xy)$ gives

$$t(a)b\bar c = (b\bar c)a + b(\bar c \bar a).$$
Since $t(a)1=a+\bar a$ and $t(a)$ is scalar, the left-hand side is $(b\bar c)a+(b\bar c)\bar a$. Comparing both sides gives

$$(b\bar c)\bar a = b(\bar c \bar a),$$
which is precisely $[b,\bar c,\bar a]=0$. Conjugation is a bijection, and $a,b,c$ are arbitrary; hence $[x,y,z]=0$ for all $x,y,z\in B$. Therefore $B$ is associative. $\square$

Now suppose $B_3\subsetneq A$. Orthogonal doubling would produce a composition subalgebra $B_4=B_3\oplus B_3u_4$ of dimension $16$. But every composition algebra is alternative, so $B_4$ would be alternative. Lemma 2 would then imply that $B_3$ is associative — a contradiction, because we have already shown that the eight-dimensional octonion algebra is not associative.

Hence $B_3$ cannot be a proper subalgebra. The doubling process terminates after at most three steps, and we have proved:

> **Generalized Hurwitz Theorem.** Every finite-dimensional composition algebra over a field $F$ with $\operatorname{char}F\neq2$ has dimension $1$, $2$, $4$, or $8$.

### 3.8 The real case

The original Hurwitz theorem concerns normed division algebras over $\mathbb R$. A normed division algebra is a finite-dimensional real algebra with a multiplicative norm $N$ that is positive definite. In particular, it is a composition algebra over $\mathbb R$ whose quadratic form is anisotropic, $N(x)=0\Rightarrow x=0$. The generalized theorem forces its dimension to be $1,2,4$, or $8$. At each doubling step $u^2=-N(u)1$ with $N(u)>0$, so after rescaling we may take $u^2=-1$. The four possibilities are therefore exactly

$$\mathbb R,\quad \mathbb C,\quad \mathbb H,\quad \mathbb O.$$

They correspond respectively to the real numbers, the complex numbers, the quaternions, and the octonions. Thus:

> **Hurwitz Theorem.** Every finite-dimensional normed division algebra over $\mathbb R$ is isomorphic to exactly one of $\mathbb R$, $\mathbb C$, $\mathbb H$, and $\mathbb O$.

This completes the table with which we began the post.

## References

1. Nathan Jacobson, *Basic Algebra I*, 2nd ed., W. H. Freeman, 1985, §§7.6--7.7.
