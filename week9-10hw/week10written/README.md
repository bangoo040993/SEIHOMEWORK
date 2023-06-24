# week10written hw

1.REST API also known as RESTful API is an application programming interface is a style to design network application. It set up a set of rules and constraints that dictate how resources are identified and addressed, and how clients and server communicate with each other. To make an API RESTful they must requests managed throuigh HTTP. 

2.Node.js is a server side env that allows developers to run javascript code outside of a web browser. Due to it flexibility it is widely used for server-side application.

3.Express.js is known for its simplicity and minimalist design. It offer a flexible routing for developers to definite using different HTTP method and URLs. It also provides and support various template engines that helps render dynamic HTML pages.

4.Middleware allow developers to add additional functionality to the request respponse cycle. It can be used for tasks such as, authentication, logging, request parsing, error handling, and more.

5.Each different HTTP verbs are used to perform different actions on resources.
  - GET method is used to retrieve a collection of resources without modifying it.
  - POST method is used to submit data to be processed by the server to create a new resource.
  - PUT method is used to upate and existating resource or create it if it doesnt exist by using a specific URI.
  - PATCH method is used to partially update an existing resource. It modified a specific attributes or properties of a resources without replacing the entire represation.
  - DELETE method is used to deletes a specified resource.
    
6.URL parameters can be handled using route parameters. example : app.get('/books/:id', (req, res) => {
  const bookId = req.params.id;
  res.send(`${bookId});
});

7.you can use build in eroor status or use a try catch block also async and await error handling.

8.You can you the acronym INDUCES structor your routes. The end point should use the appropriate HTTP method verbs for the route or paths.

9.YOu can parse incoming request bodies iby using middleware.  Such as express.json() and express.urlencoded()

10.you can use supertest and jest and creating a test js file that test expected item or message.
testtesttest 

<!-- Written
Explain what a REST API is. What makes an API "RESTful"?
What is Node.js and why is it often used when building server-side applications?
Express.js is a popular framework used in conjunction with Node.js. What are some of the key features of Express.js that make it useful for building web servers?
In Express.js, what is middleware and how is it used?
In terms of HTTP verbs, what is the difference between GET, POST, PUT, PATCH, and DELETE? When would you use each in the context of a RESTful API?
How would you handle parameters in the URL with Express.js? Provide an example.
How can you handle error situations when building an Express.js API?
When building a RESTful API with Express.js, how would you structure your routes for a resource like items? What would the endpoints look like for performing CRUD (Create, Read, Update, Delete) operations?
How would you parse incoming request bodies in Express.js? Provide an example of how you might handle a JSON payload.
How can testing be implemented for a RESTful API built with Node and Express? Provide an example of a test case for one of your API endpoints.
For each question, provide a detailed response. Try to incorporate examples where possible to demonstrate your understanding. Once complete, submit your responses for review. -->