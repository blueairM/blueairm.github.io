---
title: Nevanlinna Theory (I)
date: 2023-03-27 18:40:09
tags:
    - [Sevaral Complex Variables]
categories:
    - [Sevaral Complex Variables, Nevanlinna Theory]
mathjax: true
---

## First Main Theorem

For any function $w(z)$ meromorphic in the disk
$|z| < R < \infty$, a function $T(r, w)$ can be defined for $0 < r < R$ so that 

1. $T(r)$ is an increasing function of $r$ and a convex function of $\log r$.

2. If $a$ denotes any complex number that is independent of $z$, finite or infinite, then is
$$m(r, a) + N(r, a) = T (r) + O(1). \tag{I}$$
where the two terms on the left of relation (I) are
nonnegative.


## Lemma 1
If $\alpha$ is a nonnegative number, let $$\log^{+} \alpha = \begin{cases}\log \alpha, & \alpha > 1\\
0, & 0 < \alpha \leq 1\end{cases}$$ be the larger of the numbers $\log \alpha$ and $0$; it follows that
$$
\begin{aligned}
\log \alpha = \log^{+} \alpha - \log^{+} \frac{1}{\alpha}\\
 |\log \alpha| = \log^{+} \alpha + \log^{+} \frac{1}{\alpha}
\end{aligned}
$$


## Lemma 2
Notation as above lemma 1, and further, as is easily confirmed,
$$
\begin{equation}
\begin{aligned}
\log^{+} \alpha_{1}\cdot \alpha_{2}\cdots \alpha_{p} \leq \sum_{i=1}^{p} \log^{+} {\alpha_{i}}\\
\log^{+} \sum_{i=1}^{p} {\alpha_{i}} \leq \sum_{i=1}^{p} \log^{+} \alpha_{i} + \log p
\end{aligned}
\end{equation}
$$

## Proof of Theorem 1

In [Jensen's formula](https://en.wikipedia.org/wiki/Jensen%27s_formula), we now set $\log |w| = \log^{+} |w| - \log |\frac{1}{w}|$ and for short write


$$\begin{aligned}N(r,a,w) =& \int_{0}^{r} \frac{n(t,a) - n(0,a)}{t} dt + n(0,a) \log r\\
m(r, a, w) =& \frac{1}{2\pi} \int_{0}^{2\pi} \log^{+} \left|\frac{1}{w(re^{i\varphi}) -a }\right|d\varphi
\end{aligned}$$

$$\begin{aligned}N(r,\infty,w) =& \int_{0}^{r} \frac{n(t,\infty) - n(0,\infty)}{t} dt + n(0,\infty) \log r\\
m(r, \infty, w) =& \frac{1}{2\pi} \int_{0}^{2\pi} \log^{+} \left|w(re^{i\varphi})\right|d\varphi
\end{aligned}$$

where $n(r, a)$ is the number of roots of the equation $w- a =  0$ in the disk $|z|\leq r$ 

Jensen's formula then becomes

$$m(r, w) + N(r, w) = m (r, \frac{1}{w}) + N (r,\frac{1}{w}) +\log|c_{\lambda}|$$


where $c_{\lambda}$ is the first nonvanishing coefficient in the Laurent expansion of $w-a$ at the origin $z = 0$. 

The result is then

$$m(r, w - a) + N(r, w - a) = m (r, \frac{1}{w-a}) + N (r, \frac{1}{w-a}) + \text{const.}$$

But
$N(r, w - a) = N(r, w)$

and by Lemma 2

$$\left| m(r, w- a)- m(r, w) \right| < \log^{+} |a|+ \log 2$$

so we conclude from (2.3) that

$$m(r, a) + N(r, a) = m(r, \infty) + N(r,\infty) + \varphi(r, a),$$

In addition we set
$T(r, w) = T(r) = m(r, \infty) + N(r, \infty)$,
This is the desired results. $\square$

## Second Main Theorem

1. For $|z| < R < \infty$ let $w(z)$ be a nonconstant
meromorphic function. If $w_{1}, \cdots , w_{q} (q \geq 1)$ are mutually distinct finite or infinite complex numbers, then for $0 \leq r < R$

$$\sum m(r, \omega_{\nu}) < 2 T(r) - N_{1}(r) + S(r)$$

2. the remainder term satisfies
the following conditions:

If $R = \infty$, then
$$S(r) = O \left\{\log \left[rT(r)\right]\right\}$$
with at most the exception of a set of values $\{r\}$ of finite total measure

If $R = 1$, then

$$S(r) = O \left\{\frac{1}{1-r}T(r)\right\}$$

with at most the exception of a set of values $\{r\}$ for which the variation of $\frac{1}{1-r}$ is fintte


## Proof 

Suppose, therefore, that $w(z) = c_{0} + c_{k}z^{k} + \cdots (c_{0}\neq 0, c_{k} \neq 0)$ is a function that is meromorphic for $|z| < R \leq \infty$, and let $a_{1}, \cdots, a_{p}$ be a system of $p \geq 2$ different finite complex numbers.

We first compare the proximity functions $m(r, w)$ and $m(r, w^{\prime})$ with one another. By means of the elementary inequalities (Lemma 2 in (I)), one finds immediately that

$$\begin{equation}
m(r,w) = m (r,w^{\prime}\frac{w}{w^{\prime}}) \leq m (r,w^{\prime}) + m (r,\frac{w}{w^{\prime}})
\end{equation}$$

To estimate the mean value $m ( r, \frac{1}{w^{\prime}})$ , consider the sum

$$f(z) = \sum_{\nu=1}^{p} \frac{1}{w(z) - a_{\nu}}$$

We have


$$\begin{equation}
m(r,f) = m (r,fw^{\prime}\frac{1}{w^{\prime}}) \leq m (r,\frac{1}{w^{\prime}}) + m (r,\sum\frac{w^{\prime}}{w- a_{\nu}})
\end{equation}$$


On the other hand, for a given $\mu$ ($\mu = 1, \cdots , p$)

$$f = \frac{1}{w - a_{\mu}}\left(1 + \sum_{\nu\neq\mu} \frac{w - a_{\mu}}{w - a_{\nu}}\right)$$

If $\delta = \min (|a_{h} -
a_{k}|, 1) (h \neq k)$, then at every point $z$ where

$$\begin{equation}
\left|w(z) - a_{\mu}\right| < \frac{\delta}{2p} \left(\leq \frac{1}{2p}\right) 
\end{equation}$$

for $\nu \neq \mu$
$$\left|w - a_{\nu}\right| \geq \left|a_{\mu} - a_{\nu}\right| - \left|w - a_{\mu}\right| > \delta - \frac{\delta}{2p} \geq \frac{3\delta}{4}$$

and hence
$$\sum_{\nu\neq\mu} \left|\frac{w - a_{\mu}}{w - a_{\nu}}\right| < (p-1) \frac{2}{3p} < \frac{2}{3}$$

so that
$$\left|1 + \sum_{\nu\neq\mu} \frac{w - a_{\mu}}{w - a_{\nu}}\right| > \frac{1}{3}$$

From this it follows that
$$\log^{+}\left|f(z)\right| > \log^{+}\left|\frac{1}{w - a_{\mu}}\right| - \log 3$$

at every point z where condition (4) is satisfied.

The arcs determined on the circle by (4) are disjoint for different
values of $p$, and therefore one concludes that

$$\begin{aligned}
m(r,f) \geq & \frac{1}{2\pi} \sum_{\mu =1}^{p} \int_{|w - a_{\mu}| < \frac{\delta}{2p}} \log^{+} |f(re^{i\varphi})| d \varphi\\
< & \frac{1}{2\pi} \sum_{1}^{p} \int_{|w - a_{\mu}| < \frac{\delta}{2p}} \left(\log^{+} \left|\frac{1}{w(re^{i\varphi})- a_{\mu}}\right| - \log 3\right) d \varphi 
\end{aligned}$$

Further,
$$\begin{aligned}
\frac{1}{2\pi} \sum_{1}^{p} \int_{|w - a_{\mu}| < \frac{\delta}{2p}} \log^{+} \left|\frac{1}{w- a_{\mu}}\right| = & m(r,a_{\mu}) - \frac{1}{2\pi} \sum_{1}^{p} \int_{|w - a_{\mu}| \geq \frac{\delta}{2p}}\log^{+} \left|\frac{1}{w- a_{\mu}}\right|\\
\geq & m(r,a_{\mu}) - \log \frac{2p}{\delta}
\end{aligned}$$

and finally

$$m(r,f) > \sum_{1}^{p} m(r,a_{\mu}) - p \log\frac{2p}{\delta} - \log 3$$

or in conjunction with (2)

$$\begin{equation}
m (r,\frac{1}{w^{\prime}}) > \sum_{1}^{p} m(r,a_{\mu}) - m (r,\sum\frac{w^{\prime}}{w- a_{\nu}}) - p \log\frac{2p}{\delta} - \log 3
\end{equation}$$

If the quantities $N(r, w^{\prime})$ and $N(r, \frac{1}{w^{\prime}})$ are now added to both sides of inequalities (2) and (5), respectively, then using the first main
theorem

$$T(r, w^{\prime}) = T (r, \frac{1}{w^{\prime}}) + \log |kc_{k}|$$

one obtains the following result, which is to be stated as a special lemma 1 :

The characteristic $T(r, w^{\prime})$ for the derivative of the meromorphic function
w(z) lies between the bounds
$$m(r, w) + N(r, w^{\prime}) + m (r,\frac{w^{\prime}}{w})$$

and 

$$ \sum_{1}^{p} m(r,\frac{1}{w - a_{\mu}}) + N (r,\frac{1}{w^{\prime}})  - m (r,\sum\frac{w^{\prime}}{w- a_{\nu}}) - p \log\frac{2p}{\delta} - \log 3$$

If we leave out T(r, w') and introduce

$$N_{1}(r) = N(r,\frac{1}{w^{\prime}}) + \left(2 N(r,w) - N (r,w^{\prime})\right)$$

it becomes a version of this theorem. $\square$

The estimation is rather lengthy, readers can refer to Hayman, W.[1, Chapter III] and Nevanlinna, Rolf [3, Chapter IX].


**Remark:** The quantity $N_{1}(r)$ measures the number of multiple points of $w(z)$. It can be written in the form
$$N_{1}(r) = \int_{0}^{r} \frac{n_{1}(t) - n_{1}(0)}{t} dt + n_{1}(0) \log r,
$$
where $n_{1}(r)$ indicates the number of multiple points of $w(z)$ in the disk $|z| < r$, each $k$-fold point being counted $k -
1$ times.

**Vojta's conjecture:** Let $F$ be a number field, let $X/F$ be a non-singular algebraic variety, let $D$ be an effective divisor on $X$ with at worst normal crossings, let $H$ be an ample divisor on $X$, and let $K_{X}$ be a canonical divisor on $X$. Choose Weil height functions $h_{H}$ and $h_{K_{X}}$ and, for each absolute value $v$ on $F$, a local height function $\lambda_{D,v}$. Fix a finite set of absolute values $S$ of $F$, and let $\epsilon>0$. Then there is a constant $C$ and a non-empty Zariski open set $U\subseteq X$, depending on all of the above choices, such that
$$\sum_{v\in S}\lambda_{D,v}(P)+h_{K_{X}}(P)\leq \epsilon h_{H}(P)+C \quad {\hbox{for all }}P\in U(F).$$



## Reference 



[1] Hayman, W. (1964). Meromorphic functions. Oxford University press.

[2] Nevanlinna, Rolf (1925), "Zur Theorie der Meromorphen Funktionen", Acta Mathematica, 46 (1–2): 1–99, doi:10.1007/BF02543858, ISSN 0001-5962

[3] Nevanlinna, Rolf (1970), Analytic functions, Die Grundlehren der mathematischen Wissenschaften, vol. 162, Berlin, New York: Springer-Verlag, MR 0279280




