// How JavaScript Work ? 

// 1: Parsing Phase  
/*
a. Lexical analysis  
Lexical analyzer , also known as lexer , is the first step in the process of compiling a javaScript program. It break 
the program down into tokens, which are basic building blocks of the language. 

b. Syntax Analysis 
Takes the stream of tokens from lexical analysis and check them for correct syntax. If the syntax is correct, syntax analysis 
generates a tree like structure called a parse tree or abstract syntax tree (AST). The AST represents the hierarchical structure 
of the program. 

2: Compilation (JIT : Just-In-Time-Compilation): 
** After the AST is created , the JavaScript engine typically goes through a compilation phase. In modern engines, like v8 in Chrome, 
SpiderMonkey in Firefox, or JavaScriptCore in Safari, this compilation often involves a combinations of two approaches: 

** Parse and Compile: The engine parses the code and compiles it into a intermediate form , such as bytecode and machinecode. 

**JIT (Just-In-Time-Compilation): Some engines are JIT compilation, where the intermediate code is compiled just before  
execution. This allows the engine to optimize the code based on runtime information, improving performance. 

3: Execution: 
** Once the code is compiled , the javaScript engine executes it. During execution , the engine creates execution contexts, manages 
the scope chain, handles variable assignments, and calls functions.  

** The execution context consists of two phases: The creation phase(where function and variables are hoisted) and the execution 
phase (where the code is actually run.) 

** The JacaScript engine uses a call stack to keep track of the execution context. when a function is called , a new frame is 
added to the stack, and when the function completes, its frame is removed LIFO (last in first out). 

More On Inside Execution Phase :  

** Call Stack: 
In order to manage the execution context , the JavaScript engine uses a call stack.  
The call stack is a data structure that keep tracks of the currently executing functions in a program. It operates on the  
last in first out (LIFO) principle, meaning that the last function added to the stack is the first one to be executed and 
completed. 
 
** Heap Memory: 
The heap memory is where dynamically allocated memory resides. This is where objects, closures, and other dynamically allocated 
date are stored. While the call stack manages the flow of execution and function contexts , the heap memory holds the data 
that is referenced by these execution contexts.  

// here the basic overvie of call stack works: 

During the execution of a JavaScript program, 

The javaScript engine goes through the creation phase before executing any code. During this phase, it sets up the global 
execution context. The global execution context is the first one to be created and push onto the call stack. This happens 
when the javaScript engine starts executing the code. 

*/


