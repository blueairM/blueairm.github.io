---
title: Ergodicity on Fuchsian Group
date: 2024-01-17 13:48:02
tags:
    - [Sevaral Complex Variables]
categories:
    - [Sevaral Complex Variables, Fuchsian Group]
mathjax: true
---


# Hopf's Ergodic Theorem

## Lemma 1
Let $S:z^{\prime}=\frac{z - a}{1 - az} (0<a<1)$ and $J: z=e^{i\theta} ( 0<\eta\leq |\theta| \leq \pi)$ be an arc on $|z|=1$. Then $S(J)$ is contained in an arc 
$$J^*: z=e^{i\phi} (|\theta-\pi| \leq {2\pi(1-a)}/{\sin^2\eta}) \text{ on } |z|=1.$$

Let $e$ be a measurable set contained in $J$, then
$$
\frac{(1-a)}{2}me \leq m S(e)\leq \frac{2(1-a)}{2\sin^2\eta} \text{ on } |z|=1,
$$
hence 
$$\frac{J^{*}}{8\pi} 2\sin^2\eta \cdot me \leq m S(e) \leq \frac{J^{*}}{2\pi} me,$$
where $|J^*|=\frac{4\pi(1-a)}{\sin^2\eta}$ is the length of $J^{*}$.

### Proof
$
|\mathrm{d}z^{\prime}|^{2} = \dfrac{1- a^{2}}{|1-az|^{2}}dz $. If $z=e^{i\theta} \in J$, then
$$
\frac{1-a}{2} \leq \frac{1-a^{2}}{|1-az|^{2}} \leq \frac{2(1-a)}{\sin^{2}\eta}
$$
so that from
$$
{m{S(e)}} = \int_{e} \frac{1-a^{2}}{|1-az|^{2}} |dz|
$$
we have 
$$
\frac{1-a}{2}me \leq m{S(e)} \leq \frac{2(1-a)}{\sin^2\eta}me
$$

From this, we see that $S(J)$ is contained in an arc
$$J^{*}: z =e^{i\theta}  (|\theta - \pi| \leq 2 \pi (1-a)/\sin^{2}\eta)$$

## Lemma 2
Let $D_0$ be the fundamental domain of a Fuchsian group $G$ and $\sigma(D_0)<\infty$. Let $K_0: |z| \leq \delta$ be a disc contained in $D_0$ and ${K_n}$ be its equivalents. Let $K^*=\bigcup K_n$.

Let $r_{\nu}=1—\lambda^{\nu} (0<\lambda<1) (\nu = 1,2,\dots)$. If $\lambda$ is sufficiently small, then there exists $\rho_{\nu} (r_{\nu}\leq \rho_{\nu} \leq r_{\nu+1})$ satisfying the following condition. 

The circle $|z|=\rho_{\nu}$ intersects $K^{*}$ in a set of arcs, among them there are arcs $\theta_{j} (j=1,2,\dots,s_{\nu})$, such that

$$\kappa^{\prime}(1- \rho_{\nu}) \geq |\theta_{j}| \geq \kappa (1- \rho_{\nu}), \quad \sum_{j=1}^{s_{\nu}} \geq \eta >0$$

where $|\theta_j|$ denotes the angular magnitude of $\theta_j$ and $\kappa^{\prime}>0$, $\kappa>0$, $\eta>0$ are constants independent of $\nu$.

### Proof
By Theorem XI.10,
$\frac{\text{const.}}{1-r} \leq n(r,a) \leq \frac{\text{const.}}{1-r}
$ for any $a \in K_{0}$.

Let $K^{*}(r_{\nu}, r_{\nu+1})$ be the part of $K^{*}$ contained in $r_{\nu} \leq |z| \leq r_{\nu+1}$, then

\begin{eqnarray}
\sigma(K^{*}(r_{\nu}, r_{\nu+1})) =& \int_{a\in K_{0}} ( n(r_{\nu+1},a) - n(r_{\nu},a))  d\sigma(a) \nonumber \\
\geq& \int_{a\in K_{0}} \left(\frac{\text{const.}}{1-r_{\nu+1}} - \frac{\text{const.}}{1-r_{\nu}} d\sigma(a)
\right)\geq \frac{\text{const.}}{\lambda^{\nu+1}} - \frac{\text{const.}}{\lambda^{\nu}} \geq \frac{\text{const.}}{\lambda^{\nu+1}}
\end{eqnarray}

if $\lambda$ is sufficiently small.

Let $\theta (r)$ be the angular magnitude of the part of the circle $|z|=r$ contained in $K^{*}$, then
$$
\sigma(K^{*}(r_{\nu},r_{\nu+1})) = 4 \iint_{K^{*}(r_{\nu},r_{\nu+1})} \frac{rdrd\theta}{(1-r^{2})^{2}} = 4\int_{r_{\nu}}^{r_{\nu+1}} \frac{r \theta(r) dr}{(1-r^{2})^{2}} <  4\int_{r_{\nu}}^{r_{\nu+1}} \frac{\theta(r) dr}{(1-r)^{2}}
$$

so that by (1)
\begin{equation}
\int_{r_{\nu}}^{r_{\nu+1}} \frac{\theta(r) dr}{(1-r)^{2}} \geq \frac{\text{const.}}{\lambda^{\nu+1}}.
\end{equation}

Let the maximum of $\theta(r)$ in $[r_{\nu}, r_{\nu+1}]$ be attained at $r=\rho_{v}$, then
$$
\int_{r_{\nu}}^{r_{\nu+1}} \frac{\theta(r) dr}{(1-r)^{2}} \geq \theta(\rho_{\nu}) \int_{r_{\nu}}^{r_{\nu+1}} \frac{dr}{(1-r)^{2}} <\frac{\theta(\rho_{\nu})}{\lambda^{\nu+1}},
$$
so that by (2)

\begin{equation}
\theta(\rho_{\nu}) \geq 2 \eta >0, \quad \eta = \text{const.} (\nu = 1,2,\dots).
\end{equation}

Let the circle $|z|=\rho_{\nu}$ intersect $K^{*}$ in a set of arcs $\theta_{i} (i=1, 2, \dots, N)$, then
$$\theta(\rho_{\nu}) = \sum_{i=1}^{N} |\theta_{i}| \geq 2 \eta$$

Since $\theta_{i}$ is contained in an equivalent $K_{i}$ of $K_0$, which intersects $|z|=\rho_{\nu}$ and the radius of $K_i$ is $\leq \text{const.} (1 - \rho_{\nu})$,

\begin{equation}
|\theta_i| \leq \text{conts.}(1-\rho_{\nu}).
\end{equation}

For a fixed $c>0$, we decompose $\{d_j\}$ into two classes:
$$
\{d_j\} = \{d_j\} + \{d_j^*\} \text{ where } |d_j| \leq c(1-p_v) \text{ and } |d_j^*| \leq c(1-p_v)
$$
so that
$$
2\sum|d_j|^2 + 3\sum|d_j^*|^2 \leq c^2(2+3)\sum(1-p_v)
$$

If an equivalent $K_s$ of $K_0$ intersects the circle $|z|=pv$, then $K_s$ is contained in $|z|^p^*$ such that $1-|d_j|^{\frac{1}{2}} \leq c(1-p_v)$, so that $N^n(p^*, a) \leq \frac{c^2}{c(1-p_v)} \cdot \frac{1}{1-c(1-p_v)} \leq c$.

Hence, if we choose $\epsilon$ so small that $A^tc^y$, then by the above conditions, we have
$$
\frac{\sqrt{1-a^{|d_j|}}}{\sqrt{2}} (1-|d_j|) \leq \frac{1}{\epsilon} \sum_{j=1}^{N} \frac{2|d_j|^2}{\epsilon} + \frac{1}{\epsilon} \sum_{j=1}^{N}

3|d_j^*|^2 \leq \frac{c^2(2+3)}{\epsilon} \sum_{v=1}^{\infty} (1-p_v)
$$

### Note

- $|d_j| \leq \sqrt{\frac{\epsilon}{1-p_v}}$
- $|d_j^*| \leq c(1-p_v)$

This completes the proof.



2. **Hopf's Ergodic Theorem**

Let $y_1 = e^{i\theta_1}$, $y_2 = e^{i\theta_2}$ be two points on $|z| = 1$, then the pair $(\theta_1, \theta_2)$ can be considered as a point of a torus $\theta: 0 \leq \theta_1, \theta_2 < 2\pi$.

For a measurable set $E$ on $\theta$, we define its measure $m(E)$ by
$$ m(E) = \int\!\!\!\int_E d\theta_1 d\theta_2, $$
so that $m(\theta) = 4\pi^2$.

Let $S_v$ be any substitution of a Fuchsian group $G$, and $T_v: \theta = S_v(\theta)$, then the totality of $\{T_v\}$ constitutes a group ($S = G \times G$).

Hopf ([1], [2]) proved the following theorem.

**Theorem XI. 23. (Hopf's Ergodic Theorem)** If $m(D_0) < \infty$, then there exists no measurable set $E$ on $\theta$, which is invariant by $\circledast$ and $m(\circledast(E)) < 4\pi^2$.

Hence if $m(E) > 0$, then $m(E) = 4\pi^2$.

**Proof. (Tsuji [47])** Suppose that there exists a measurable set $E$ on $\theta$, which is invariant by $\circledast$ and $m(E) > 0$, and we shall prove that $m(E) = 4\pi^2$. Let $f(\theta_1, \theta_2)$ be the characteristic function of $E$ and put
$$ u(z, w) = \frac{1}{\pi^2} \iint_{D_0 \times D_0} \frac{f(\theta_1, \theta_2)}{|z - e^{i\theta_1}|^2 |w - e^{i\theta_2}|^2} \,d\theta_1 d\theta_2, $$
where $D_0 = \{|z| < 1, |w| < 1\}$, then $u(z, w)$ is invariant by $\circledast$, such that
$$ u(S(z), S(w)) = u(z, w), \quad S \in \circledast. $$

We denote the Stolz domain: $|arg(1 - ze^{-i\theta})| < \frac{\pi}{4}$ by $\Sigma(e^{i\theta})$ and $\Sigma(e^{-i\theta})$ be its part, contained in $|z - e^{i\theta}| < \delta$, then by Theorem IV. 12, for almost all $(\theta_1, \theta_2)$ on $\theta$, $\lim u(z, w) = f(\theta_1, \theta_2)$ uniformly, if $z \to e^{i\theta_1}, w \to e^{i\theta_2}$ from the inside of $\Sigma(e^{i\theta_1}), \Sigma(e^{i\theta_2})$ respectively.

Let $E_{\theta_1}$ be the section of $E$ by the line $\theta_1 = const. = \theta$ and $E_{\theta_2}$ be that by the line $\theta_2 = const. = \theta$, then
$$ \iint_{\theta_2} mE_{\theta_1} d\theta_2 > 0, $$
where $mE_{\theta_1}$ denotes the linear measure.

Since $m(D_0) < \infty, G$ is of divergence type (Theorem XI. 10), so that there exists no measurable set $e$ on $|z| = 1$, which is invariant by $G$ and $m_e < 2\pi$, hence if $m_e > 0$, then $m_e = 2\pi$.

If $mE_{\theta_1}[\theta_2] = 0$ on a set $\theta$ of positive measure in $[0, 2\pi]$, then since, by the hypothesis on $E$, such a set $\theta$ is invariant by $G$, $m_e = 2\pi$, so that $mE_{\theta_1}[\theta_2] = 2\pi$ almost everywhere in $[0, 2\pi]$, hence $m(E) = 0$, which is absurd.

Hence
$$ mE_{\theta_1}[\theta_2] > 0 \text{ for almost all } \theta \in [0, 2\pi]. $$

Hence by Egoroff's theorem, there exists a closed subset $E_0$ of $E$ which satisfies the following conditions (i), (ii), (iii), where $\delta > 0$ and $\epsilon > 0$ are sufficiently small constants.

(i) $E_0$ lies outside of the strip: $|\theta - \theta_1| < \epsilon$, mod. $2\pi$.
(ii) Let $E_0$ be the projection of $E_0$ on the $\theta_1$-axis, then $mE_0 > 2\pi - \delta$ and $mE_{\theta_2}[\theta_1] > 0$ for any $\theta \neq \theta_0$.
(iii) $\lim u(z, w) = 1$ uniformly on $E_0$, when $z \to e^{i\theta_1}, w \to e^{i\theta_2}$ from the inside of $\Sigma(e^{i\theta_1}), \Sigma(e^{i\theta_2})$ respectively.

When $z \in E_0, w \in \Sigma(e^{i\theta})$, then
$$ 1 - \epsilon < u(z, e^{i\theta}) < 1, \quad \theta \in E_{\theta_2}[\theta_1], $$
where $u(z, e^{i\theta}) = \lim u(z, w)$.

Let $K_0: |z| < r$ be a disc, contained in $D_0$ and $\{K_n\}$ be its equivalents $\infty$ and $K* = \bigcup K_n$, then by Lemma 2, there exist $0 < \phi_1 < \phi_2 < \ldots < \phi_v + 1$ such that the circle $|z| = e^{i\phi_v}$ intersects $K*$ in a set of arcs $d_j (j = 1, 2, \ldots, v)$, such that
$$ \text{const.} (1 - e^{i\phi_v})^{|F_j|^2} \leq \text{const.} (1 - e^{i\phi_v}), \quad \text{for } j = 1, 2, \ldots, v, \text{ where } |F_j| \text{ denotes the angular magnitude of } d_j.

Since $\{d_j\}$ are disjoint, if in the condition (ii), $\delta > 0$ is sufficiently small, then by the second inequality of (7), we may assume that every $d_j$ contains a point $e^{i\theta_j} \in E_0$.

Let $K_j: Z \mapsto Z_j \mapsto Z_j \mapsto B_j \mapsto T_{g_j} \mapsto Z_j = a_je^{i\theta_j}$ (8) be the equivalent of $K_0$, which contains the arc $d_j$ where $Z_j \in K_j$ is an equivalent of $z = 0$ and let
$$ K_0 = \bigcup_{j} K_j, \quad 0 = S_j(Z_j), \quad S_j \in G. $$

Since $d_j$ contains $e^{i\theta_j}$, if the radius $r$ of $K_0$ is sufficiently small and $v > v_0$, then by Theorem XI. 2, $z_3$ is contained in $\Sigma(e^{i\theta_3})$. Hence by (6),
$$ 1 - e^{i\theta_3} < u(z_3, e^{i\theta_3}) < 1 \text{ for any } v > v_0, $$

where $\lim_{v \to 0} \epsilon_v = 0$ with $\lim_{v \to 0} v_0 = \infty$.

Since $u(z, w)$ is invariant by $\circledast$, we have
$$ 1 - \epsilon_v < u(0, e^{i\theta_3}) < 1 \text{ for any } \theta \in E_{\theta_1}[\theta_2]. $$

Hence if we put
$$ \epsilon_v = \Sigma_{\circledast}(a_{jv}) $$
then
$$ 1 - \epsilon_v < u(0, e^{i\theta_3}) < 1 \text{ for any } \theta \in E_{\theta_1}[\theta_2]. $$

Hence if we put
$$ \epsilon_v = \Sigma_{\circledast}(a_{jv}) $$
then
$$ 1 - \Sigma_{\circledast}(a_{jv}) < u(0, e^{i\theta_3}) < 1 \text{ for any } v > v_0. $$

Since $u(0, e^{i\theta_3}) = \lim_{v \to 0} u(z_3, e^{i\theta_3})$, then
$$ 1 - \lim_{v \to 0} \Sigma_{\circledast}(a_{jv}) < \lim_{v \to 0} u(z_3, e^{i\theta_3}) < 1. $$

We shall prove that
$$ \lim_{v \to 0} \Sigma_{\circledast}(a_{jv}) > 0 \quad (j = 1, 2, \ldots). $$

Let $K_j = S_j(K_0)$, then $K_j$ is obtained from $K_0$ by a rotation about $2\theta_j = 0$, so that the circle $|z| = e^{i\phi_v}$ intersects $K_j$ in an arc $d_{jv}$ whose projection on $|z| = 1$ from $z = 0$ be denoted by $J_{jv}$, then $|J_{jv}| = |J_j|$, so that
$$ \text{const.} (1 - e^{i\phi_v}) < \Sigma_{\circledast}(|J_{jv}|^2) \leq \text{const.} (1 - e^{i\phi_v}), $$

where $|J_{jv}|$ denotes the angular magnitude of $d_{jv}$.

Since $J_{jv}$ contains $e^{i\theta_j}$, if the radius $r$ of $K_0$ is sufficiently small and $v > v_0$, then by Lemma 1, $S_j(E_0)[\theta_j]$ is contained in an arc $J_{jv}$ on $|z| = 1$, concentric with $J_j$ such that
$$ \Sigma_{\circledast}[\theta_j] \leq \text{const.} |J_{jv}|. $$

By Lemma 1, $|J_j| = \text{const.} (1 - e^{i\theta_j})$ and since
$$ \text{const.} (1 - e^{i\phi_v}) < \Sigma_{\circledast}[\theta_j] \leq \text{const.} |J_{jv}|, $$

we have
$$ \text{const.} (1 - e^{i\phi_v}) < \text{const.} (1 - e^{i\theta_j}) $$
$$ \text{const.} (1 - e^{i\phi_v}) < \text{const.} (1 - e^{i\theta_j}) $$

Hence by (14), (16), $|J_j| = \text{const.} |J_{jv}|$, so that by (14), we have
$$ \Sigma_{\circledast}(|J_j|) > 0 \quad (j = 1, 2, \ldots). $$

Since $|J_j| > \text{const.} (1 - e^{i\theta_j})$ and $J_j, J_{jv}$ are disjoint, the distance between the centers of $J_j, J_{jv}$ is $\text{const.} (1 - e^{i\theta_j})$. Since $J_{jv}$ is concentric with $J_j$ and $|J_j| = \text{const.} (1 - e^{i\theta_j})$, $\{J_j\}$ overlap at most $N$-times, where $N$ is independent of $v$.

Since $S_j(E_0)[\theta_j], \{S_j(E_0)[\theta_j]\}$ overlap at most $N$-times, so that
by (15), (17),
$$ mM_v > \Sigma_{\circledast} mS_j(E_0)[\theta_j] > \text{const.} \Sigma_{\circledast} |J_{jv}| > \text{const.} > 0 \quad (j =1, 2, \ldots, v).
Hence if we put
$$ u(0, w) = -\frac{1}{\pi^2} \Sigma_{\circledast} F_j $$
then
$$ m_1 > 0 $$
and by (12),
$$ u(0, e^{i\theta_3}) = 1, \text{ if } \Sigma_{\circledast} (a_{jv}) = m_1. $$

Now
$$ \iint_{\Sigma(e^{i\theta})} \frac{|w - e^{i\theta}|^2}{|w - e^{i\theta_3}|^2} \,d\theta = \frac{\pi}{\Sigma_{\circledast}(a_{jv})}. $$

Hence for almost all $\theta$ on $\theta$, $1 = u(0, e^{i\theta_3}) = F(\theta) = \Sigma_{\circledast} (a_{jv})$ or
$$ m[\theta] = 2\pi. $$

Since the set $e$ of $\theta$, such that $m[\theta] = 2\pi$ is invariant by $G$ and $m_E[\theta] = 2\pi$ on a set $M$ of positive measure, we see that $m_E[\theta] = 2\pi$ almost everywhere in $[0, 2\pi]$, hence
$$ m(E) = 4\pi^2. $$

3. Next we consider the $n$-dimensional case. Let $y_1=e^{i\theta_1}, \ldots, y_n=e^{i\theta_n}$ be $n$ points on $|z|=1$, then the pair $(\theta_1, \ldots, \theta_n)$ can be considered as a point of an $n$-dimensional torus $\mathcal{T}_n: 0 \leq \theta_1 \leq 2\pi, \ldots, 0 \leq \theta_n \leq 2\pi$ and the measure $p(E)$ of a measurable set $E$ on $\mathcal{T}_n$ is defined by
$$ p(E) = \int \cdots \int_E d\theta_1 \cdots d\theta_n, $$
so that $p(\mathcal{T}_n) = (2\pi)^n$.

Let $\mathcal{S}$ be any substitution of a Fuchsian group $G$ and
$$ T_v: (\theta_1, \ldots, \theta_n) \mapsto (\theta_1', \ldots, \theta_n'), \quad (1) $$
then the totality of $\{T_v\}$ constitutes a group $\mathcal{S}_n = G \times \ldots \times G$.

**Theorem XI. 24.** Let $G$ be a Fuchsian group and $D_0$ be its fundamental domain, where $a(D_0)$ may be finite or infinite. If $n \geq 3$, then there exists always a measurable set $E$ on $\mathcal{T}_n$, which is invariant by $\mathcal{S}$ and $0 < p(E) < (2\pi)^n$. (Tsuji [14]).

**Proof.** Since the proof is the same, we assume that $n=3$ and put $\theta_1=0, \theta_2=\pi, \theta_3=\pi$.

Let $\mathcal{Q}$:
$$ \mathcal{Q}: 0 \leq \theta_1 \leq \frac{\pi}{16}, \quad \theta_2: \pi \leq \theta_2 \leq \pi, \quad \theta_3: \pi \leq \theta_3 \leq \pi $$
be a cube on $\mathcal{T}_3$ and $\alpha, \alpha', \beta, \beta', \mathcal{T}, \mathcal{T}'$ be arcs on $|z|=1$, such that
$$ \alpha: \text{arg}z - \pi \leq \theta_1 \leq \text{arg}z, \quad \alpha': \text{arg}z \leq \theta_1 \leq \text{arg}z + \pi, \quad \beta: |\text{arg}z - \pi| \leq \theta_2 \leq |\text{arg}z|, \quad \beta': |\text{arg}z - \pi| \leq \theta_3 \leq |\text{arg}z|, $$
$$ \mathcal{T}: \text{arg}z \leq \theta_1 \leq \text{arg}z + \frac{\pi}{16}, \quad \mathcal{T}': \pi \leq \text{arg}z \leq \pi. $$

So that $\mathcal{Q} = \alpha \cup \alpha' \cup \beta \cup \beta' \cup \mathcal{T} \cup \mathcal{T}'$.

Let $K_0: |z| \leq p$ be a disc, contained in $D_0$ and $K_n: z = r_ne^{i\theta_n}$ ($n=0,1,2,\ldots$) be its equivalents and let $z \mapsto z_n = \frac{1}{1 - z\overline{z_n}}$ be the equivalent of $K_n$, then $K_0 = S_n(K_n), 0 = S_n(z_n), S_n \in G$. 

**(i)** If $e^{i\theta_n}$ belongs to the complement of $\alpha + \alpha' + \beta + \beta'$, then since $\theta_1 < \frac{\pi}{16}$, we have for any $z$ on $\alpha$, $|\text{arg}z - \theta_n| \geq \frac{\pi}{16}$, hence by Lemma 1,
$$ \mathcal{M}_n(\mathcal{Q}) \geq \text{const.} \cdot M(1 - |\theta_n|) \cdot \text{M}(1 - |z_n|). $$

Similarly,
$$ \mathcal{M}_n(\beta)^{\text{const.}} \cdot \text{M}(1 - |\theta_n|), \quad \mathcal{M}_n(\mathcal{T})^{\text{const.}} \cdot \text{M}(1 - |\theta_n|), $$
so that
$$ \mathcal{M}_n(\mathcal{Q})^{\text{const.}} \cdot \text{M}(2(1 - |\theta_n|))^{\text{const.}} \cdot $$

**(i)** For $e^{i\theta_n}$ in the complement of $\alpha' + \beta' + \mathcal{T}'$, the following holds:
$$ \mathcal{M}_n(Q)^{\text{const.}} \cdot \mathcal{M}(2(1 - |\theta_n|))^{\text{const.}} \cdot \mathcal{M}(1 - |z_n|)^{\text{const.}}. $$

**(ii)** Next, if $e^{i\theta_n}$ belongs to $\alpha' + \beta' + \mathcal{T}'$:
$$ \mathcal{M}_n(\beta')^{\text{const.}} \cdot \mathcal{M}(1 - |\theta_n|). $$
Similarly,
$$ \mathcal{M}_n(\mathcal{T}')^{\text{const.}} \cdot \mathcal{M}(1 - |\theta_n|), $$
resulting in
$$ \mathcal{M}_n(Q)^{\text{const.}} \cdot \mathcal{M}(2(1 - |\theta_n|))^{\text{const.}} \cdot \mathcal{M}(1 - |z_n|)^{\text{const.}}. $$

Therefore, in any case:
$$ \mathcal{M}_n(Q)^{\text{const.}} \cdot \mathcal{M}(2(1 - |\theta_n|))^{\text{const.}} \cdot \mathcal{M}(1 - |z_n|)^{\text{const.}}. $$

Since $\lim_{n \to \infty} |z_n - 1| = 0$ (Theorem XI. 8), for sufficiently small $\varepsilon > 0$:
$$ \lim_{n \to \infty} \mathcal{M}_n(Q)^{\text{const.}} \cdot \mathcal{M}(2(1 - |\theta_n|))^{\text{const.}} \cdot \mathcal{M}(1 - |z_n|)^{\text{const.}} = 0. $$

Hence, if $E = \bigcap_{n=0}^\infty T_n(Q)$, then $E$ is invariant by $\mathcal{S}$, and $0 < p(E) < p(Q) = (2\pi)^3$.





