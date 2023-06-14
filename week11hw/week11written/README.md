#WEEK11 WRITTEN HW
1. What is Express in Node.js and why is it used? 
    - Express is a framework for Node.js. Express is a flexible way to build web apps to to listen for and responds HTTP request.

2. How does Mongoose help in using MongoDB with Node.js?
    - Mongosose help node.js by handling data modeling, validation, and querying and much more.

3. Can you explain the role of Mongoose in managing relationships between data?
    - mongoose reference a document or embed ed it in another document as a sub document.

4. What is a software design pattern? Give an example.
    - software design pattern is a reusable solution to a commonly occuring problem. for  example 1tomany relationship between object and many to many relationship 
between object.

5. Can you explain the MVC architecture in detail?
    - mvc is a pattern used for designing software applications. it separates the application into 3 components model, view, and the controller.

6. What roles do Model, View, and Controller play in the MVC architecture?
    - model is responsible for managing data.
    - view presenting data from model to the user and receiving user input
    - controller is update/modifying/inputing the model based on the user action.

7. Define Latency and Throughput in the context of APIs.
    - latency in api refers through the times it take for a client to receive a response while throughput measure how many request an api can handle in a given time.

8. Why is it important to minimize latency and maximize throughput in APIs?
    - low latency ensures faster response times, while high throughput allow API to handle larger request.

9. What is Authentication in terms of web development?
    - authentication is the process of verifying users or clients to access a website or web apps.

10. How does the authorization process start?
    - It usually start when a user or client attempts to access a protected resource or perform a specific action, where the user or client is authenticated to get request.

11. What is express.static used for in Express?
    - is a middle ware function use to serve static file such ass html, css, javascript, and much more.

12. Can you give an example of serving static files using express.static?
    - app.use(express.static('public'));

13. What is Jest and why is it used?
    - it is a javascripting testing framework. it ensures code quality and catching bug.

14. How can Supertest be helpful when working with Jest?
    - simulate http request without actually making real request. does not require a full flesh server for it to work.

15. Can you describe how manual and automated tests are executed?
    - postman is a manual test you can request post and put in certain object in your data and receive it without connecting to any server. but it also can make an automatic testing to depends on how we write the code.

16. What is the difference between unit testing, integration testing, and end-to-end testing?
    - unit testing focus on testing on unit or components of software.
    - integration test verifies the interaction between multiple components or modules of the software
    - end to end test the entire software system simulation a real user experience from begining to end.

17. Can you provide examples of functional, regression, smoke, and performance tests?
    - function test testing alogin functionality by entering valid creditional or invalid and allowing access or displaying error message.
    - regression test make sure all the functionality of the code remains the same once we update or add a new feature.
    - smoke test check to see if main function still work after major changes.
    - performance test load artillery testing how much the sever can handle the request made and how fast.

18. What is meant by positive testing and negative testing in a functional testing context?
    - positive testing make sure correct behaviors with valid inputs while negative testing handle invalid input and unexpected condition.

19. How does load testing assess the behavior of software?
    - load testting simulate a real world workload and traffic condition and check on its performance scalability and stability.

20. What aspects does usability testing assess in a software application?
    - test the ease of use, efficiencyk, and user satisfaction with the application.

21. Why is security testing crucial in a software development life cycle?
    - ensure confidentialy, and security from vulnerabilities and weaking in a software in case of threats.

22. Can you explain what compatibility testing is?
    - testing that ensure compatibility and adaption between different enviorment  such as system, browsers, devices.

23. What is the aim of recovery testing and why is it important?
    - to check how well the software application recover from failures such as software bugs or system crashes. it is important because depending on what failure, it ensure how fast we recover from those failure without restarting the application.

24. What is User Acceptance Testing (UAT) and who typically performs it?
    - final stage of testing where users who are not involved with the software development test the application and give feedback on their evaluation to ensure the best usability test.

25. Can you describe a scenario in which you would use each of the different testing types mentioned in the notes?
    - unit testing: testing a function for a simple math equation
    - functional testing: when you order an order in amazon account with your user account adding items while the item have iventory or not.
    - integration testing: checking live stocks buying/selling stock while reflecting in your porfolio.
    - security testing: any login in process that allow access to an indivual account wether its bank or facebook ensure that it has a encryption.
    - performance testing: DDOS is a term gamer usually heard when a hacker simulation multiple request to shut down the server.
    - user acceptance testing: people that play video game before they are being launch or beta players.
    - regression testing: i dont know how to test this or any real world scenerios beside maybe commiting your work in github in a private repository?
    



<!-- What is Express in Node.js and why is it used?
How does Mongoose help in using MongoDB with Node.js?
3Can you explain the role of Mongoose in managing relationships between data?
4What is a software design pattern? Give an example.
5Can you explain the MVC architecture in detail?
6What roles do Model, View, and Controller play in the MVC architecture?
7Define Latency and Throughput in the context of APIs.
8Why is it important to minimize latency and maximize throughput in APIs?
9What is Authentication in terms of web development?
10How does the authorization process start?
11What is express.staticused for in Express?
12Can you give an example of serving static files using express.static?
13What is Jest and why is it used?
14How can Supertest be helpful when working with Jest?
15Can you describe how manual and automated tests are executed?
16What is the difference between unit testing, integration testing, and end-to-end testing?
17Can you provide examples of functional, regression, smoke, and performance tests?
18What is meant by positive testing and negative testing in a functional testing context?
19How does load testing assess the behavior of software?
20What aspects does usability testing assess in a software application?
21Why is security testing crucial in a software development life cycle?
22Can you explain what compatibility testing is?
23What is the aim of recovery testing and why is it important?
24What is User Acceptance Testing (UAT) and who typically performs it?
25Can you describe a scenario in which you would use each of the different testing types mentioned in the notes? -->