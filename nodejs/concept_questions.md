# concept questions

## describe the difference between nodejs and javascript

### javascript

- programming language
- different interpretters from each browser

### nodejs

- interpretter and runtime environment for javascript
- can be used on any operating system
- uses only the v8 engine from chrome

## what are some of the advantages of using nodejs over other engines?

- single threaded, reduces complexity
- asynchronous
- event-driven

## describe what an EventEmitter is

- listeners
- .on('')

- any gotchas?

- memory leaks can be caused by not calling .off('') on objects

## what are Node streams?

- readable
- writable
- duplex
- transform
- advantages
  - can allow sending large files with limited amount of memory or heap space
  - can send the data to multiple outputs like a local dir and a cloud provider
