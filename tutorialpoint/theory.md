**Read, Eval, Print, Loop - REPL terminal**
-
-   **Read**  − Reads user's input, parses the input into JavaScript data-structure, and stores in memory.
-   **Eval**  − Takes and evaluates the data structure.
-   **Print**  − Prints the result.
-   **Loop**  − Loops the above command until the user presses  **ctrl-c**  twice.

**Node Package Manager NPM**
-

Install a module

    npm install <module  name>

By default, NPM installs any dependency in the local mode.
Local mode refers to the package installation in node_modules directory where Node is.
Locally deployed packages are accessible via require() method.

To list down all the locally installed modules

    npm ls

**Package.json**

It is present in the root directory of any Node application/module and is used to define the properties of a package.

-   **name**  − name of the package
-   **version**  − version of the package
-   **description**  − description of the package
-   **homepage**  − homepage of the package
-   **author**  − author of the package
-   **contributors**  − name of the contributors to the package
-   **dependencies**  − list of dependencies. NPM automatically installs all the dependencies mentioned here in the node_module folder of the package.
-   **repository**  − repository type and URL of the package
-   **main**  − entry point of the package
-   **keywords**  − keywords

Uninstall a module

    npm uninstall express

Update a module

    npm update express

Create a module

    npm init

Publish a module, to be accessible and used like any other module

    npm publish

**Callback**
-

- Callback is an asynchronous equivalent for a function. 
- A callback function is called at the completion of a given task. 
- Node makes heavy use of callbacks. 
- All the APIs of Node are written in such a way that they support callbacks.

Real use case example
1. A function to read a file may start reading file and return the control to the execution environment immediately so that the next instruction can be executed. 
2. Once file I/O is complete, it will call the callback function while passing the callback function, the content of the file as a parameter. 
3. So there is no blocking or wait for File I/O. This makes Node.js highly scalable, as it can process a high number of requests without waiting for any function to return results.

**Blocking call**

This example shows that the program blocks until it reads the file and then only it proceeds to end the program.

    var fs = require("fs");
    var data = fs.readFileSync('input.txt');
    
    console.log(data.toString());
    console.log("Program Ended");

**Non Blocking call**

Thisexample shows that the program does not wait for file reading and proceeds to print "Program Ended" and at the same time, the program without blocking continues reading the file.

    var fs = require("fs");
    
    fs.readFile('input.txt', function (err, data) {
       if (err) return console.error(err);
       console.log(data.toString());
    });
    
    console.log("Program Ended");

**Event Loop**
-
- Node.js is a single-threaded application, but it can support concurrency via the concept of **event** and **callbacks**. 
- Every API of Node.js is asynchronous and being single-threaded, they use **async function calls** to maintain concurrency. 
- Node uses observer pattern. Node thread keeps an event loop and whenever a task gets completed, it fires the corresponding event which signals the event-listener function to execute.
- Although events look quite similar to callbacks, the difference lies in the fact that callback functions are called when an asynchronous function returns its result, whereas event handling works on the observer pattern. 
- The functions that listen to events act as **Observers**. Whenever an event gets fired, its listener function starts executing. Node.js has multiple in-built events available through events module and EventEmitter class which are used to bind events and event-listeners

**Event Emitter**
-
- Many objects in a Node emit events, for example, a net.Server emits an event each time a peer connects to it
- All objects which emit events are the instances of events.EventEmitter.
- When an EventEmitter instance faces any error, it emits an 'error' event. 
- When a new listener is added, 'newListener' event is fired
- When a listener is removed, 'removeListener' event is fired.
- EventEmitter provides multiple properties like *on* and *emit*. On property is used to bind a function with the event and emit is used to fire an event

**Buffers**
-
- Pure JavaScript is Unicode friendly, but it is not so for binary data. 
- While dealing with TCP streams or the file system, Then, it's necessary to handle octet streams. 
- Node provides Buffer class which provides instances to store raw data similar to an array of integers but corresponds to a raw memory allocation outside the V8 heap.

**Streams**
-
Streams are objects that let you read data from a source or write data to a destination in continuous fashion. In Node.js, there are four types of streams

- Readable − Stream which is used for read operation.
- Writable − Stream which is used for write operation.
- Duplex − Stream which can be used for both read and write operation.
- Transform − A type of duplex stream where the output is computed based on input.






