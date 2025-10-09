---
title: Nevanlinna Theory (I)
date: 2023-03-27 18:40:09
tags:
    - [Sevaral Complex Variables]
categories:
    - [Sevaral Complex Variables, Nevanlinna Theory]
mathjax: true
---

# Elnleitung.

Mittels der Poisson-Jensenschen und der spezielleren Jensenschen Formel
kann man nun den nachstehenden Satz beweisen, den wir wegen der grundlegenden Bedeutang desselben flit die ganze Theorie den ersten Hauptsatz nennen:

Zu jeder meromorphen Funktion $f(x)$ geh\"ort eine reelle Funktion $T(r)$ von folgenden Eigenschaften :


1. $T(r)$ ist eine wachsende Funktion von $r$ and eine konvexe Funktion von $\log r$.

2. Wenn $z$ eine beliebige van $x$ unabMingige, endliche oder unendliche komplexe Zahl bezeichnet, so ist
$$m(r;z) + N(r;z) = T(r) + O(1).$$
Die auf der linken Seite der Beziehung (I) stehenden zwei Glieder sind
nichtnegativ. Das erste Glied $m(r;z)$ ist der Mittelwert der Gr\"oße  $\log^{+} \left| \frac{1}{f-z}\right|$ auf dem Kreis $|x| = r$ und erh\"alt also wesentliche Boitr\"aige von denjenigen Bogen dieses Kreises, auf denen der Funktionenwert $f$ nahe an dem Wert $z$ liegt ; man k\"onnte daher sagen, daß $m(r;z)$ ein blaß f\"ur die St\"arke der mittleren Hfinvergenz der Funktion $f(x)$ gegen den Wert $z$ f\"ur $r \to \infty$ angibt. Das zweite Glied $N(r;z)$ bestimmt wiederum, wie dicht diejenigen Punkte liegen, in denen die Funktion den betreffenden Wert $z$ tats\"achlich annimmt.  Die Summe in $m(r;z) + N(r; z)$ k\"onnte man deshalb als die "z-Komponente" in der Variation der meromorpben Funktion f\"ur $|x| \to \infty$ on bezeichnen: sie charakterisiert sozusagen die St\"arke der Affinit\"at, welche die Fnnktion zn dem komplexen Wert $z$ besitzt. Der erste Haoptsatz dr\"uckt nnn ana, daß s\"amtliche z-Komponenten einer meromorphen Funktion gleich stark sind; je zwei von ihnen halten einander f\"ur $r \to \infty$ im Gleichgewicht, derart daß ihre Differenz f\"ur jedes $r$ beschr\"ankt ist. Diese schon an sich bemerkenswerte Symmetrieeigenschaft der meromorphen Funktionen iat f\"ur die ganze Theorie von fondamentaler Wichtigkeit.
 

使用 Poisson-Jensen 公式和更具体的 Jensen 公式
现在可以证明以下定理，我们称之为第一定律，因为它对整个理论具有根本重要性：

每个亚纯函数 $f(x)$ 都有一个具有以下属性的实函数 $T(r)$：

1. $T(r)$是$r$的增函数和$\log r$的凸函数。


2. 如果 $z$ 表示独立于 $x$ 的任何复数，有限或无限，则
$$m(r;z) + N(r;z) = T(r) + O(1).$$
关系 (I) 左边的两项是
非负的。 第一项 $m(r;z)$ 是圆 $|x| = r $ 上的数量 $\log^{+} \left| \frac{1}{f-z}\right|$ 的平均值，并且因此，从该圆的那些弧上接收到显着的 Boitraige，在这些弧上函数值 $f$ 接近值 $z$；因此可以说 $m(r;z)$ 苍白表示平均同向度的强度函数 $f(x)$ 对值 $z$ 的 $r \to \infty$。第二项 $N(r; z)$ 反过来决定了这些点与函数实际假定相关值的距离有多近$z$。 因此，$m(r;z) + N(r;z)$ 中的和可以称为 $|x| 的亚纯函数变体中的“z 分量” \to 表示 \infty$ on：可以说，它表征了函数对复值 $z$ 的亲和力强度。 第一个前提声明亚纯函数的所有 z 分量都同样强； 他们中的任何两个在 $r \to \infty$ 中保持彼此平衡，使得它们对每个 $r$ 的差异是有界的。亚纯函数的这种已经显着的对称性在 f\“只有整个理论根本的重要性。




Dieaer zweite Hauplsatz, wie wir ihn nennen, mann in folgender Weise ausgesprochen werden:
Es seien $f(x)$ eine beliebige meromoryhe Futiklion, $T(r)$ lie eu ihr geh\"orige Fundamentalgr\"oße und $a, b, c$ drei non eitiander zerschiedene, endliche oder unendliche komplexe Sahlen. Dann besteht die Angleichung
$$T (r) < N(r;a) + N(r; b) + N(r; c) - N_{1}(r) - S(r), \tag{II}$$
wo die Glieder $N_{1}$ und $S$ folgende Bedeiiftoiy haben :
1. $N_{1}(r)$ wird durch die multiplen Stellen der Funktion gebildet nach folgender Vorschrift:

ldan bilde die Anzahl $n_{1}(r)$ der mehrachen Stellen von $f(x)$ in dem Abreise $|x|<r$ in der Weise, daß eine m-fache Stelle nur ($m - 1$)-mal gez\"ahlt wird; dann ist
$$N_{1}(r) = \int_{0}^{r} \frac{n_{1}(t)}{t} dt.$$

2. Das Restglied $S(f)$ gen\"ugt der Ungleichung
$$S(r) < O\left(\log T(r)\right)$$
außer m\"oglicherweise, im Falle einer Funktion von unendliclier Ordnung, fur eine WerJmenge $r$ von endlichem Gesamtmaß.

我们所说的第二定律可以这样说：
设 $f(x)$ 为任意记忆函数，$T(r)$ 设属于它的基本量，$a、b、c$ 为三个非独立的有限或无限复数。 然后是对齐
$$T (r) < N(r;a) + N(r; b) + N(r; c) - N_{1}(r) - S(r), \tag{II}$$
其中元素 $N_{1}$ 和 $S$ 具有以下含义：
1. $N_{1}(r)$由函数的多位数字按照以下规则组成：

然后在出发点$|x| < r$中形成$f(x)$的多位数字$n_{1}(r)$，使得第m个数字只有$m - 1 $ ) 次被计算；然后
$$N_{1}(r) = \int_{0}^{r} \frac{n_{1}(t)}{t} dt.$$

2.余数$S(f)$满足不等式
$$S(r) < O\left(\log T(r)\right)$$
除非可能，在无限阶函数的情况下，对于有限总测度的值 $r$。


Es sei $f(x)$ eine in der endlichen Ebene
meromorphe Funktion.  Bezeichnen $z_{1}, z_{2}, \cdots, z_{q}$ untereinander verschiedene, endliche oder unendliehe Zahlen, so ist

$$(q-2) T(r) <  \sum_{\nu =1}^{q} N(r;z_{\nu})- N_{1}(r) + S(r)  \tag{III}$$

wo $N_{1}(r)$ in derselben Weise, wie in dent zweiten Hauptsatz (S.63), mittels der mehrfachen Stellen von $f(x)$ gebildet wird, und das Restglied $S(r)$ ebenfalls den in diesem Satze angegebenen Bedingungeu gen\"ugt.

设 $f(x)$ 是有限平面中的亚纯函数。如果 $z_{1}, z_{2}, \cdots, z_{q}$ 表示不同的有限或无限数，则

$$(q-2) T(r) <  \sum_{\nu =1}^{q} N(r;z_{\nu})- N_{1}(r) + S(r)  \tag{III}$$

其中 $N_{1}(r)$ 与第二定律 (p.63) 相同的方式通过 $f(x)$ 的多个位置形成，余数 $S(r)$ 也满足该定理中给出的条件


In der Ungleichung (III) ist die speziellere

$$(q-2) T(r) <  \sum_{\nu =1}^{q} \bar{N}(r;z_{\nu}) + S(r)  \tag{III$^{\prime}$}$$

enthalten, wo die  Bezeichnung N(t) die auf S.63 angegebene Bedeutung hat

不等式(III)中比较特殊的一个

$$(q-2) T(r) <  \sum_{\nu =1}^{q} \bar{N}(r;z_{\nu}) + S(r)  \tag{III$^{\prime}$}$$

包括在符号 $N(t)$ 具有第 63 页给出的含义的地方