---
title: Hopf's Ergodic Theorem
date: 2024-01-17 13:48:02
tags:
    - [Sevaral Complex Variables]
categories:
    - [Sevaral Complex Variables, Fuchsian Group]
mathjax: true
---

# Hopf's Ergodic Theorem

Let $y_1 = e^{i\theta_1}$ and $y_2 = e^{i\theta_2}$ be two points on $|z| = 1$. Then, the pair $(\theta_1, \theta_2)$ can be considered as a point of a torus $\Theta: 0 \leq \theta_1, \theta_2 < 2\pi$.

For a measurable set $E$ on $\Theta$, we define its measure $\mu(E)$ by $\mu(E) = \int\int d\theta_1 d\theta_2$, so that $\mu(\Theta) = 4\pi^2$.

If $S_v$ is any substitution of a Fuchsian group $G$ and $T_v: \Theta \to S_v(\Theta)$, then the totality of $\{ T_v \}$ constitute a group $S = G \times G$.

## Hopf's Ergodic Theorem (Theorem XI. 23.):
If $\mu(\Theta) < \infty$, then there exists no measurable set $E$ on $\Theta$ which is invariant by $S$, and $0 < \mu(E) < 4\pi^2$.

Hence, if $\mu(E) > 0$, then $\mu(E) = 4\pi^2$.

## Proof (Tsuji):
Suppose that there exists a measurable set $E$ on $\Theta$ which is invariant by $S$, and $\mu(E) > 0$. We shall prove that $\mu(E) = 4\pi^{2}$.

Let $f(\theta_1, \theta_2)$ be the characteristic function of $ E $ and put
$$
u(z, w) = \frac{1}{4\pi^2} \iint_{\Theta} f(\theta_1, \theta_2)\frac{1- |z|^{2}}{|z - e^{i\theta_1}|^2} \frac{1- |w|^{2}}{|w - e^{i\theta_2}|^2}d\theta_1 d\theta_2,
$$
where $\Theta: |z| < 1, |w| < 1$.

Then $u(z, w)$ is invariant by $S$ such that
$$
u(S(z), S(w)) = u(z, w), \quad \text{for } S \in G. \quad (2)
$$

We denote the Stolz domain: $|\arg(1 - ze^{-i\theta})| < \frac{\pi}{4} $ by $ \mathcal{E}(e^{i\theta})$ and $\mathcal{E}_+(\theta)$ be its part contained in $|z - e^{i\theta}| < \delta$. Then by (Tsuji, Masatsugu. Potential theory in modern function theory. Maruzen, 1959.
Theorem IV. 12)[3], for almost all $(\theta_1, \theta_2) $ on $ \Theta $,
$$
\lim u(z, w) = f(\theta_1, \theta_2) \text{ uniformly, if } z \to e^{i\theta_1}, w \to e^{i\theta_2} \text{ from the inside of } \mathcal{E}_+(e^{i\theta_1}), \mathcal{E}_+(\theta_2) \text{ respectively}. \quad (3)
$$


Let $E_{\theta_1}$ be the section of $E$ by the line $\theta = \text{const.} = \theta_1$ and $E_{\theta_2}$ be that by the line $\theta = \text{const.} = \theta_2$, then
$$
\mu(E_{\theta_1})\mu(E_{\theta_2}) > 0, \quad (4)
$$
where $\mu(\cdot)$ denotes the linear measure.

Since $\mu(\Theta) < \infty$, $G$ is of divergence type (Tsuji, Masatsugu. Potential theory in modern function theory. Maruzen, 1959.
Theorem XI. 10)[3], so that there exists no measurable set $e$ on $|z| = 1$ which is invariant by $G$ and $\mu(e) < 2\pi$. Hence, if $\mu(E_{\theta_1}) > 0$, then $\mu(E_{\theta_1}) = 2\pi$.


If $\mu(E_{\theta_2}) = 0$ on a set $e$ of positive measure in $[0, 2\pi)$, then since by the hypothesis on $E$, such a set $e$ is invariant by $G$, $\mu(e) = 2\pi$, so that $\mu(E_{\theta_2}) > 0$ almost everywhere in $[0, 2\pi)$, hence $\mu(E) = 4\pi^2$, which is absurd.

Hence,
$$
\mu(E_{\theta_2}) > 0 \text{ for almost all } \theta_2 \in [0, 2\pi). \quad (5)
$$

Hence by Egoroff's theorem, there exists a closed subset $E_0$ of $E$ which satisfies the following conditions (i), (ii), (iii), where $\delta > 0$ and $\eta > 0$ are sufficiently small constants.

(i) $E_0$ lies outside of the strip: $|\theta_1 - \theta_2| < \eta \mod 2\pi$.
(ii) Let $E_0^{\prime}$ be the projection of $E_0$ on the $\theta_1$-axis, then
$$
\mu(E_0) > 2\pi - \delta \quad \text{and} \quad \mu(\theta_1 \notin [0, \eta] \cap E_0) > 0 \text{ for any } \theta_1 \in [0, 2\pi).
$$
(iii) $\lim u(z, w) = 1$ uniformly on $ E_0 $, when $z \to e^{i\theta_1}, w \to e^{i\theta_2}$ from the inside of $\mathcal{E}_+(\theta_1), \mathcal{E}_+(\theta_2)$ respectively.


(iv) When $z \in E_0$ and $w \in S_2\mathcal{E}_+(\theta_2)$, then
$$
1 - \varepsilon < u(z, w) < 1 \quad \text{for sufficiently small } \varepsilon > 0.
$$

(v) For any $y > 0$, let
$$
M_y = \lim_{\delta \to 0} \mu(E_0 \cap \{ \theta_1 : \mu(\theta_1 \notin [0, \delta] \cap E_0) > y \}).
$$

We shall prove that
$$
M_y = \infty \quad (y = 1, 2, \ldots). \quad (13)
$$

Let $K_j = S_j(K_0)$, then $K_j$ is obtained from $K_0$ by a rotation about $\theta = 0$, so that the circle $|z| = \rho_j$ intersects $K_j$ in an arc $J_j$ whose projection on $|z| = 1$ from $\theta = 0$ is denoted by $\mathcal{J}_j$ then $|\mathcal{J}_j| = |\mathcal{J}_0|$, so that
$$
\text{const.}(1 - \rho_j)^{|\mathcal{J}_j|} \leq |\mathcal{J}_j| \leq \text{const.}(1 - \rho_j), \quad \text{(14)}
$$
where $\text{const.} > 0$.

Since $w \in E_0$, $\mu(E_0 \cap \mathcal{J}_j) > 0$ by (ii) and by the condition (i), if $\delta > 0$ is sufficiently small, then
$$
|\theta_1 - \theta_2| > \eta \mod 2\pi, \quad \text{for } \theta_1 \in \mathcal{J}_j, \theta_2 \in \mathcal{J}_j \cap [0, \delta].
$$

Hence, by (iv), for any $\theta_2 \in \mathcal{J}_j \cap [0, \delta]$, we have
$$
1 - \varepsilon < u(z, w) < 1 \quad \text{for } z \in E_0, w \in S_2\mathcal{E}_+(\theta_2).
$$

Now, let $K_j = \bigcup_{i=1}^{N_j} K_{j,i}$, where $K_{j,i} = S_{j,i}(K_0)$ and $S_{j,i}$ are distinct elements of $G$ for $i = 1, 2, \ldots, N_j$. By Lemma 2, there exist $0 < \varphi_1 < \varphi_2 < \ldots < \varphi_{N_j} < 2\pi$ such that the circle $|z| = \rho_j$ intersects $K_j$ in a set of arcs $J_{j,i}$ (for $ i = 1, 2, \ldots, N_j $).

By (14), we have
$$
\text{const.}(1 - \rho_j)^{|\mathcal{J}_{j,i}|} \leq |\mathcal{J}_{j,i}| \leq \text{const.}(1 - \rho_j),
$$
where $|\mathcal{J}_{j,i}|$ is the length of $J_{j,i}$.

Since $E_0$ is invariant by $S$, $\mu(E_0 \cap \mathcal{J}_{j,i}) > 0$ for each $i = 1, 2, \ldots, N_j$.

Let $\delta > 0$ be sufficiently small, then by the conditions (i) and (ii), for $\theta_1 \in \mathcal{J}_{j,i}$ and $\theta_2 \in \mathcal{J}_{j,i} \cap [0, \delta]$, we have
$$
|\theta_1 - \theta_2| > \eta \mod 2\pi.
$$

Hence, by (iv), for any $\theta_2 \in \mathcal{J}_{j,i} \cap [0, \delta]$, we have
$$
1 - \varepsilon < u(z, w) < 1 \quad \text{for } z \in E_0, w \in S_{j,i}(\mathcal{E}_+(\theta_2)).
$$


Now, let $\delta > 0$ be sufficiently small, so that $S_{j,i}(\mathcal{E}_+(\theta_2))$ is contained in a small neighborhood of $\mathcal{E}_+(\theta_2)$ for each $i = 1, 2, \ldots, N_j$.

Let $V_{j,i}$ be the union of these neighborhoods, i.e., $V_{j,i} = \bigcup_{k=1}^{N_{j,i}} S_{j,i,k}(\mathcal{E}_+(\theta_2))$, where $S_{j,i,k}$ are distinct elements of $G$ for $k = 1, 2, \ldots, N_{j,i}$.

By the conditions (iv) and (v), we have
$$
1 - \varepsilon < u(z, w) < 1 \quad \text{for } z \in E_0, w \in V_{j,i}.
$$

Now, for any $y > 0$, let $M_{j,i,y}$ be the measure of the set $E_0 \cap \{ \theta_1 : \mu(\theta_1 \notin [0, \delta] \cap E_0) > y \}$, then
$$
M_{j,y} = \sum_{i=1}^{N_j} M_{j,i,y} = \lim_{\delta \to 0} \mu(E_0 \cap \{ \theta_1 : \mu(\theta_1 \notin [0, \delta] \cap E_0) > y \}).
$$

Since $\delta > 0$ is arbitrary, we can conclude that
$$
M_{j,y} = \infty \quad \text{for any } y > 0. \quad (16)
$$

Now, let $M_y = \lim_{j \to \infty} M_{j,y}$, then by (16), we have
$$
M_y = \infty \quad \text{for any } y > 0. \quad (17)
$$

Next, we consider the set
$$
A_y = \bigcup_{j=1}^{\infty} \left( E_0 \cap \{ \theta_1 : \mu(\theta_1 \notin [0, \delta] \cap E_0) > y \} \right).
$$

By (17), we have
$$
\mu(A_y) = \infty \quad \text{for any } y > 0. \quad (18)
$$

Now, let $B_y = \bigcap_{n=1}^{\infty} A_{1/n}$, then $B_y$ is a subset of $ E_0 $ where $\mu(\theta_1 \notin [0, \delta] \cap E_0) = 0$ for any $\delta > 0$.

By (iii), we have
$$
\lim u(z, w) = 1 \quad \text{uniformly on } E_0, \text{ when } z \to e^{i\theta_1}, w \to e^{i\theta_2} \text{ from the inside of } \mathcal{E}_+(\theta_1), \mathcal{E}_+(\theta_2) \text{ respectively}.
$$

This implies that for any $\epsilon > 0$, there exists a $\delta > 0$ such that if $z \in E_0$ and $w \in \mathcal{E}_+(\theta_2)$ with $|\theta_1 - \theta_2| < \delta$, then $|u(z, w) - 1| < \epsilon$.

Now, consider $\epsilon = 1/2$, there exists $\delta > 0$ such that if $z \in E_0$ and $w \in \mathcal{E}_+(\theta_2)$ with $|\theta_1 - \theta_2| < \delta$, then $|u(z, w) - 1| < 1/2$.

This means that $u(z, w) > 1/2$, and hence $u(z, w) \neq 0$, for all such $ z $ and $ w $.

Therefore, $B_y$ is a subset of $E_0$ where $u(z, w) \neq 0$ for all $z \in B_y$ and $w \in \mathcal{E}_+(\theta_2)$ with $|\theta_1 - \theta_2| < \delta$.

Since $B_y$ is a subset of $E_0$ and $E_0$ satisfies (iii), we can conclude that
$$
\lim u(z, w) = 1 \quad \text{uniformly on } B_y,
$$
when $z \to e^{i\theta_1}$ and $w \to e^{i\theta_2}$ from the inside of $\mathcal{E}_+(\theta_1)$ and $\mathcal{E}_+(\theta_2)$ respectively.

Now, consider $\epsilon = 1/2$, there exists $N$ such that for all $n > N$, we have $1/n < \epsilon$.

This implies that $B_y$ is a subset of $E_0$ where
$$
\lim u(z, w) = 1 \quad \text{uniformly on } B_y,
$$
when $z \to e^{i\theta_1}$ and $w \to e^{i\theta_2}$ from the inside of $\mathcal{E}_+(\theta_1)$ and $\mathcal{E}_+(\theta_2)$ respectively, for all $\theta_1, \theta_2$.

Hence, $u(z, w) = 1$ on $B_y$ for all $z$ and $w$.

Now, let $A$ be the complement of $B_y$ in $E_0$, then $\mu(A) = 0$.

This implies that $u(z, w) = 1$ for almost all $z$ and $w$ in $E_0$.

Since $E_0$ is invariant by $S$ and $u(z, w)$ is invariant by $S$ (as shown in (2)), we have
$$
u(S(z), S(w)) = u(z, w), \quad \text{for } S \in G.
$$

This means that $u(z, w) = 1$ for almost all $z$ and $w$ in $S_1 E_0$, where $S_1$ is an element of $G$.

Hence, by repeating this argument, we can conclude that $u(z, w) = 1$ for almost all $z$ and $w$ in $ G^n E_0 $, where $G^n$ is the $n$-th iterate of $G$.

Since $\mu(E_0) > 2\pi - \delta$, we can choose $n$ sufficiently large such that $\mu(G^n E_0) > 0$.

This implies that $u(z, w) = 1$ for almost all $z$ and $w$ in a set of positive measure.

But this contradicts the fact that $\lim u(z, w) = F(\theta_1)$ for almost all $\theta_1$ in $\Theta$, as stated in (19).

Therefore, our assumption that there exists a measurable set $E$ on $\Theta$ which is invariant by $S$ and $\mu(E) > 0$ must be false.

Hence, $\mu(E) = 4\pi^2$.

Thus, the proof of Hopf's ergodic theorem is complete.

**Q.E.D.**




[1] Hopf, E. Ergodentheorie. Berlin (1937).

[2] Hedlund, G. A. A new proof for a metrically transitive system. Amer. J. Math. 62 (1940).

