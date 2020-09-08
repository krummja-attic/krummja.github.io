---
layout: post
title: Binary Space Partitioning
date: 2020-08-27
external-url:
categories: [Roguelike Dev, Programming, Python]
publication: false
---

I am on the hunt for useful generative algorithms for roguelike environments. One of the more common methods I've run across is the idea of a *binary space partition algorithm*.

A binary space partition algorithm recursively divides some space or surface into two over some specified number of iterations. A binary tree is the obvious data structure for traversing different levels of the partition.

Let's start with modeling a basic implementation:

```python
class Tree:

    def __init__(self) -> None:
        self.lchild = None
        self.rchild = None
```

This is the simplest case, just an object with two attributes, one for each child node of the tree. To make things a bit easier to work with, we can add some methods for accessing and manipulating parts of the tree.

```python
class Tree:

    def __init__(self) -> None:
        self.lchild: Tree = None
        self.rchild: Tree = None
    
    def get_leafs(self):
        if (self.lchild is None and self.rchild is None):
            return [self.leaf]
        else:
            return [].append(self.lchild.get_leafs(), self.rchild.get_leafs())

    def get_level(self):
        pass
        
    def paint(self, c):
        pass
```
