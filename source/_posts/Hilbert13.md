---
title: Hilbert's 13th Problem
date: 2023-03-23 10:35:56
tags:
    - [Notes]
    - [Hilbert's 23 Problems]
categories:
    - [Notes]
    - [History of Mathematics, Hilbert's 23 Problems]
mathjax: true
---

## Theorem 1
For any integer $n\geq 2$ there are continuous real functions $\psi^{p,q}(x)$ on the closed unit interval $E^{1} = [0,1]$ such that each continuous real function $f(x_{1},\cdots,x_{n})$ on the $n$-dimensional unit cube $E^{n}$ is representable as 

$$f(x_{1},\cdots,x_{n}) = \sum_{q=1}^{2n+1} \chi^{q} \left[\sum_{p=1}^{n} \psi^{p,q}(x_{p})\right]$$

where $\chi^{q}(y)$ are continuous real function.


<br>

**Step 1**: *Construction of the functions $\psi^{pq}$*.


Consider the closed intervals

$$\begin{aligned}
& A_{k,i}^{q} = \left[\frac{1}{(9n)^{k}}\left(i - 1 - \frac{q}{3n}\right), \frac{1}{(9n)^{k}}\left(i - \frac{1}{3n} - \frac{q}{3n}\right)\right],\\
&\qquad \qquad \qquad \qquad 1\leq i \leq (9n)^{k} +1, 1\leq q \leq 2n +1, k= 1,2,\cdots
\end{aligned}$$

with lengths $\frac{1}{9n}^{k} ( 1 - \frac{1}{3n})$ and 
Accordingly, for fixed $k$ and $q$ by passing $i$ to $i+1$ using a shift to the right over a distance $1/(9n)^{k}$. Accordingly, for fixed $k$ and $q$ the cubes

$$S_{k,i_{1},\cdots,i_{n}}^{q} = \prod_{p=1}^{n} A_{k,i_{p}}^{q}$$ 

with edges of lengths $\frac{1}{(9n)^{k}}$ cover the unit cube $E^{n}$ to within the separating slits of widths $\frac{1}{3n(9n)^{k}}$. It's easy to verify the following

## Lemma 1
The system of all cubes $S_{k,i_{1},\cdots,i_{n}}^{q}$ with constant $k$ and variable $q$ and $i_{1},\cdots,i_{n}$ covers the unit cube $E^{n}$ so that each point belonging to $E^{n}$ is covered by at least $n+1$ times. $\label{lem 1}$

<br>

Using induction on $k$ we can prove the following 

## Lemma 2
There exist constants $\lambda^{pq}_{k,i}$ and $\epsilon_{k}$ such that 

1. $\lambda^{pq}_{k,i} \leq \lambda^{pq}_{k,i+1} \leq \lambda^{pq}_{k,i} + 1/2^{k}$;

2. $\lambda^{pq}_{k,i} \leq \lambda^{pq}_{k+1,i^{\prime}} \leq \lambda^{pq}_{k,i} + \epsilon_{k+1} - \epsilon_{k}$ if the closed intevals $A_{k,i}^{q}$ and $A_{k+1,i^{\prime}}^{q}$ do not intersect;

3. the closed interval $\Delta^{q}_{k,i_{1}, \cdots, i_{n}} = \left[\sum_{p}\lambda^{pq}_{k,i_{p}}, \sum_{p}\lambda^{pq}_{k,i_{p}} + n \epsilon_{k}\right]$ are pairwise disjoint for fixed $k$ and $q$.

It's easy to note that 1. and 3. imply

4. $\epsilon \leq 1/2^{k}$.


## Lemma 3

For fixed $p$ and $q$ the condition

5. $\lambda^{pq}_{k,i} \leq \psi^{pq}(x) \leq \lambda^{pq}_{k,i} + \epsilon_{k}$ uniquely determine a continuous function $\psi^{pq}$ on $E^{1}$.

From 5. and 3. it follows that 

6. $\sum_{p} \psi^{pq} (x_{p}) \in \Delta^{q}_{k,i_{1}, \cdots, i_{n}}$ for $(x_{1}, \cdots, x_{n}) \in S_{k,i_{1},\cdots,i_{n}}^{q}$.

<br> 

**Step 2**: *Construction of the functions $\chi^{q}$*.

Let $\chi_{0}^{q} \equiv 0$, while for $r >0$, $\chi_{r}^{q}$ will be defined by induction on $r$ simultaneously with the natural number $k_{r}$.

Denote as below

$$\begin{aligned}f_{r}(x_{1},\cdots,x_{n}) = & \sum_{q=1}^{2n+1} \chi_{r}^{q}\left[\sum_{p} \psi^{pq}(x_{p})\right]\\
M_{r}= & \sup_{E^{n}} \left|f -f_{r}\right|\end{aligned}$$

**Inductive step:** Assuming $\chi_{r-1}^{q}$ and $k_{r-1}$ have already been determined. 

**Passing to step $r$:**

Since the diameter of the cubes $S_{k,i_{1},\cdots,i_{n}}^{q}$ tend to zero as $k \to \infty$, we can choose $k_{r}$ so large that the oscillation of the difference $f - f_{r-1}$ does not exceed $M_{r}/(2n+2)$ on any $S_{k_{r},i_{1},\cdots,i_{n}}^{q}$. 


Let $\xi_{k,i}^{q}$ be arbitrary points belonging to the corresponding closed intervals $A_{k,i}^{q}$. For the closed interval $\Delta^{q}_{k,i_{1}, \cdots, i_{n}}$ we put 

$$\begin{aligned}\chi_{r}^{q}(y) = & \chi_{r-1}^{q}(y) + \frac{1}{n+1} \left[f(\xi_{k,i_{1}}^{q}, \cdots, \xi_{k,i_{n}}^{q}) - f_{r}(\xi_{k,i_{1}}^{q}, \cdots, \xi_{k,i_{n}}^{q})\right]\\
& \left|\chi_{r}^{q} (y) - \chi_{r-1}(y)\right| \leq \frac{1}{n+1} M_{r-1}\end{aligned}$$

Outside the closed intervals $\Delta^{q}_{k,i_{1}, \cdots, i_{n}}$ the function $\chi_{r}^{q}$ is defined arbitrarily, with the preservation of the inequality above and continuity. 


$$\begin{aligned}f(x_{1},\cdots,x_{n}) - f_{r}(x_{1},\cdots,x_{n}) = f(x_{1},\cdots,x_{n}) - f_{r-1}(x_{1},\cdots,x_{n})\\ 
- \sum_{q=1}^{2n+1} \left\{\chi_{r}^{q}\left[\sum_{p}\psi^{pq}(x_{p})\right] - \chi_{r-1}^{q}\left[\sum_{p}\psi^{pq}(x_{p})\right]\right\}\end{aligned}$$

We represent the sum in above equation in the form $\sum^{\prime} + \sum^{\prime\prime}$, where the sum $\sum^{\prime}$ extends over certain $n+1$ values of $q$ for which the point $(x_{1},\cdots,x_{n})$ is contained in one of the cubes $S_{k_{r},i_{1},\cdots,i_{n}}^{q}$ (by Lemma 1$\ref{lem 1}$, such cubes exist) and the sum $\sum^{\prime\prime}$ extends over the remaining $n$ values of $q$. Hence, for each term in $\sum^{\prime}$ we have

$$\begin{aligned}
&\chi_{r}^{q}\left[\sum_{p}\psi^{pq}(x_{p})\right] - \chi_{r-1}^{q}\left[\sum_{p}\psi^{pq}(x_{p})\right] \\
= \frac{1}{n+1} &\left[f(\xi_{k,i_{1}}^{q}, \cdots, \xi_{k,i_{n}}^{q}) - f_{r-1}(\xi_{k,i_{1}}^{q}, \cdots, \xi_{k,i_{n}}^{q})\right] \\
= \frac{1}{n+1} & \left[f(x_{1},\cdots,x_{n}) - f_{r-1}(x_{1},\cdots,x_{n})\right] + \frac{\omega^{q}}{n+1}
\end{aligned}$$

where 

$$|\omega^{q}| \leq \frac{1}{2n+2}M_{r}$$

which implies

$$\begin{aligned}|f - f_{r}| = \left|\frac{1}{n+1} \sum^{\prime}\omega^{q} + \sum^{\prime \prime} (\chi_{r}^{q} - \chi_{r-1}^{q})\right| \leq \\
\frac{1}{2n+2} M_{r-1} + \frac{n}{n+1} M_{r-1} = \frac{2n +1}{2n +2} M_{r-1} \end{aligned}$$

Since inequality holds at any point $(x_{1},\cdots,x_{n}) \in E^{n}$, it follows that the absolute values of the differences $\chi^{q} - \chi_{r}^{q}$ do not exceed the corresponding terms of the absolutely convergent series 

$$\sum_{r} \frac{1}{n+1} M_{r-1}$$

Therefore the functions $\chi_{r}^{q}$ converges uniformly to continuous limit functions $\chi^{q}$ for $r\to \infty$.

<br>

# Reference:


[1] Kolmogorov, A. N. (1957). On the representation of continuous functions of several variables by superposition of continuous functions of one variable and addition. (in Russian) In Doklady Akademii Nauk (Vol. 114, No. 5, pp. 953-956). Russian Academy of Sciences.

[2] Arnold, V. I. (1957). On functions of three variables. (in Russian) Collected Works: Representations of Functions, Celestial Mechanics and KAM Theory, 1957–1965, 5-8.


