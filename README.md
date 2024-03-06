## Phonepe Full stack | Request Response | Machine Coding Round 

One of the most common design pattern in software development. It is used to handle request/response between two or more components. The pattern is very simple, the component that is responsible for handling the request is called the Responder, and the component that sends the request is called the Requester.

### Let's implement a Responder with the following set of rules:

The responder should be able to handle requests from multiple Requesters.
The responder should be able to handle multiple requests from the same Requester.
Each Requester has a qouta of n requests per minute. If the Requester exceeds the qouta, the responder should reject the request. (1 minute rolling window)
The computation of each request is very expensive, so we want to limit the number of requests that can be handled at the same time. We would want to queue the requests that are not handled immediately.

The Requester should be able to query the status of the request.
The Requester should be able to cancel the request.
The Requester should be able to get the result of the request.

Bonus
The Requester is notified when the request is completed via a callback/promise.

Expected APIs

// **Base**: 
newRequest(userObject, requestObject, opts?);

**// User Specific:** 
GetAllRequests(userId);
GetUsageStats(userId);

**// Request Specific:**
GetRequestStatus(requestId);
CancelRequest(requestId);

### Points to note
- Your code should cover all the mandatory functionalities explained above.
- Your code should be executable and clean.
- All necessary validations must be present.
- In case of an exception, proper errorCode must be present.
- You can use any language of your choice.
- Store the data in-memory for Requests, Users and usage stats.
### Expectations
- Code should be working.
- Code readability and testability
- Language proficiency


**NOTE FOR DEVELOPERS/EVALUATORS**
- Due to time incosistency and the nature of the assignment, the in-memory data is not persisted. but it can be persisted if required using request.json which i have added in root folder.