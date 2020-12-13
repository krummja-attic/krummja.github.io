---
layout: post
title: Particle Systems in Python
date: 2020-12-12
---

In this article, I will be exploring the design of particle systems in preparation for the implementation of one in my roguelike game, Simulacra.

## Design

### In the Abstract

{% nomnoml %}
#direction: right

[Effect] <:- [ParticleEffect]
[Particle] <-- [ParticleEmitter]

[ParticleEmitter] <-- [ParticleEffect]

[StarFirework] -:> [ParticleEffect]
[StarFirework] --> [StarExplosion]
[StarExplosion] -:> [ParticleEmitter]

[Screen] --> [Scene]
[Scene] --> [StarFirework]

{% endnomnoml %}

### Model

{% nomnoml %}

[Effect
|	- screen
	- start_frame
	- stop_frame
	- delete_count
	- scene
|   + update(frame_no)
	+ register_scene(scene)
	- _update(frame_no)
]

[Screen
| - _scenes
  - _scene_index
  - _frame
| + play(scenes, start_scene, repeat)
  + set_scenes(scenes, start_scene)
  + draw_next_frame(repeat)
]

[Scene 
|	- _effects
|   + add_effect(effect)
	+ remove_effect(effect)
]


[Effect] 1.. <-> 1 [Screen]
[Effect] -> 1[Scene]

{% endnomnoml %}

## Reverse Engineering ASCIIMatics

### The Screen Class

The real challenge for implementing the ASCIIMatics particle system into the game engine will be creating an appropriate analogue to the `Screen` class. The relevant details of said class are sketched out below:

```python
class Screen:

    def __init__(self, height, width, **kwargs):
        # ...
        self._scenes = []
        self._scene_index = 0
        self._frame = 0
	
    def play(self, scenes, start_scene=None, repeat=True):
        self.set_scenes(scenes, start_scene=start_scene)
        while True:
            self.draw_next_frame(repeat=repeat)
		
    def set_scenes(self, scenes, start_scene=None):
        self._scenes = scenes
        self._scene_index = 0
        if self._start_scene is not None:
            if scene.name == start_scene.name:
                self._scene_index = i
                break
		
        self._scenes[self._scene_index].reset(
            old_scene=start_scene, screen=self
            )
        self._frame = 0
        self._idle_frame_count = 0
        self.clear()
		
    def draw_next_frame(self, repeat=True):
        scene = self._scenes[self._scene_index]
        try:
            self._frame += 1
            self._idle_frame_count -= 1
            for effect in scene.effects:
                effect.update(self._frame)
            self.refresh()
        except: ...

```

The important method here is `Screen.draw_next_frame`. Once I have an effect loaded into the effect queue, I need to increment a `Screen._frame` counter and use that counter to advance the Effect frame.

This should be pretty easy, since I can just embed that into the drawing functions I already have, which means each screen update it will increment and therefore render the next effect frame.

### The Scene Class

Because rendering of effects depends on a notion of "scene", I'll have to figure out how to work the relevant components of that class into my existing "State" and "View" structure.

On the face of it, this seems pretty simple. The `Scene` class is really just an encapsulation of effects that get pulled into the `Screen` instance.

```python
class Scene:

    def __init__(self, effects, duration=0, clear=True, name=None):
        self._effects = []
        for effect in effects:
            self.add_effect(effect, reset=False)

    def add_effect(self, effect, reset=True):
        if reset:
            effect.reset()
        effect.register_scene(self)
        self._effects.append(effect)
	
    def remove_effect(self, effect):
        self._effects.remove(effect)
```

### The Effect Class

The actual `Effect` class is what the `ParticleEffect` class generalizes. So we'll start there.

```python
class Effect:

    def __init__(self, screen, start_frame=0, stop_frame=0, delete_count=None):
        self._screen = screen
        self._start_frame = start_frame
        self._end_frame = end_frame
        self._delete_count = delete_count
        self._scene = None

    def update(self, frame_no):
        if (frame_no >= self._start_frame and 
                (self._stop_frame == 0 or frame_no < self._stop_frame)):
            self._update(frame_no)
	
    def register_scene(self, scene):
        self._scene = scene
	
    @abstractmethod
    def _update(self, frame_no)
        pass
	
    # ...
```

### Finally, Particles!

Now, the particle system makes use of a few base classes: `Particle`, `ParticleEmitter`, and `ParticleEffect`. The latter two are generalized into concrete classes that are the actual emitters and effects used by the overall system.

