---
layout: topic
title: A software citation system
prerequisites: programming in JuliaLang
active: False
cs: True
undergrad: True
---
Design a system that parses code in Julia in order to create a list of
citations.
Functions in libraries will be decorated by something like:
@citation{KnuthTAOCP}
Then your system will compile a list of all citations used by an input program
(based on which functions are called).

You need basic understanding of compilation and programming in JuliaLang.
For the citations we will use the standard bibtex format.
