---
title: Implicit Function Theorem on Function Spaces
date: 2023-04-14 09:23:05
tags:
mathjax: true
---


Let $(X, \|\cdot\|_{1})$, $(Y, \|\cdot\|_{2})$ be normed linear spaces and $f: X \to Y$ be a continuous function[^1] between them. $f$ is said to  Fr\'echet differentiable at $x \in X$ if there exists a (bounded) linear mapping $A: X \to Y$ such that

$$\frac{\|f(x + h ) - f(x) - A(h)\|}{\|h\|} \to 0 \text{ as } h \to 0$$

Denote the derivative of $f$ at point $x$ as $f_{x}$


[^1]: in the sense that for any $x_{n} \to x$, $f(x_{n}) \to f(x)$.


## Theorem 1 (Inverse function theorem)

If $f_{x} \neq 0$, there exist a open neighbourhood $U$ of $x$ and a continuous function $g: f(U) \to U$ such that $g \circ f = 1$ and 

$$g_{f(x)} = f_{x}^{-1}$$


## Theorem 2 (Implicit function theorem)

Let $U, V$ be two open subsets of $X,Y$ respectively and $f: U \times V \to \mathbb{C}$ a continuous function on the product subset $U \times V$. If for each $x \in U$, $f_{y}(x,\cdot) \neq 0$ holds at the solution set of equation

$$f(x,y) = 0$$ 

there exist a (unique) function $g:U \to V$ such that 

$$f(x,g(x)) = 0$$

and $g_{x} = -{f_{y}}^{-1} f_{x}$.



# Application to complex analysis



# Application to Partial Differential Equation






