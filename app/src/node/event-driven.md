# Node's Event-driven arc
event fired and callback acts as the event handler

## EventEmitter module
- facilitates communication b/n objects in Node.
- is at the core of node aync event-driven arch
- emitter objects emit named events that cause previously registered listeners to be called
- Features
    - emitting named events
    - registering and unregistering listener functions
- one benefit of using events instead of regular callbacks is that we can react to the same signal multiple times by defining multiple listeners.

- used external plugins to build functionality on top of the application's core. 
- they can be perceived as hook point to allow for customizing the story around a state change.

- prependListener (add listener before other listeners, so it can be invoked first)