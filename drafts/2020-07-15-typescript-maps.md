---
layout: post
title: A Clever Use of Maps in TypeScript
date: 2020-07-15
external_url:
categories: Programming
publication: false
---
    
It's been a goodly while since I've had occasion to draft a post for this blog. To be perfectly blunt, the pandemic has made it very, very difficult to do much of anything useful these days, given that I live in Georgia where the situation in rapidly deteriorating. Even in the best of times, my neurodivergence makes it difficult to focus on work, and so you might say I am easily given over to despair. When I'm unable to work on things that I love, that effect compounds and rapidly sends me spiralling.

Well, here lately I've been working quite a bit on a hobby project, what you might call my second passion in life following linguistics research. I'm a novice programmer, and as a way to keep myself active and mentally stimulated while in quarantine, I have been working on building a RogueLike game using TypeScript. While working on this, I have experienced a slow slide into what I can only describe as authorial doldrums. In less flowerly language: everyone being sick means I can't write for shit.

Needless to say, I'm a bit rusty. This blog was, in spite of the spareness of its content, intended to be a way for me to practice writing into the void. Of course, with the abovementioned, I have not been motivated to contribute to my own blog, either, largely for lack of focus on what might make a good post. Well, in trying to figure out a bit of a tricky component of my game's engine, the words of a colleague of mine rushed back to me. To paraphrase, whenever I can't find information on something, I learn everything I can about it and then write the tutorial I wish I had when I was searching in the first place. With all that said, I have occasion to write just such a tutorial. To get us started, let's orient ourselves with some basics.

TypeScript, for those who may not know, is a superset of JavaScript which, as the name implies, fixes the fundamental design flaw of JS by providing a system of static types at compile time. TypeScript (henceforth TS) compiles down to JS, which can then be integrated into a webpage. What makes TS ideal for my purposes is that it (a) builds on my already developed knowledge of JS, and (b) it forces me to slow down and consider aspects of program design that I otherwise might blast right past. I would like to share one such aspect in this post.

JS, being a *dynamically typed* language, infers the types of the symbols and expressions rather than relying on *static type* definitions. JS comes prepackaged with 6 basic types: *Undefined*, *Null*, *Boolean*, *String*, *Number*, and *Object*.

```javascript

Number(true)  // evaluates to 1
Number('123') // evaluates to 123
String(true)  // evaluates to 'true'

```

The built-in function `Number` takes in an input of type *Boolean*, *Number*, *String* or *Object* and converts it to its best guess as to a numerical value. *Boolean* values are interpreted as 1 = `true` and 0 = `false`, as we might expect. A string like `'123'` when fed into `Number` returns the actual *Number* `123`. Finally, the function `String`, like its numerically inclined counterpart, returns the string literal interpretation of what's fed into it.

---


