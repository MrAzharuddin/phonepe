const Request = require("./Request");
let requests = require("./Requests");

// Let's implement a Responder with the following set of rules:

// The responder should be able to handle requests from multiple Requesters.
// The responder should be able to handle multiple requests from the same Requester.
// Each Requester has a qouta of n requests per minute. If the Requester exceeds the qouta, the responder should reject the request. (1 minute rolling window)
class Responder {
  constructor(maxConcurrentRequests) {
    this.maxConcurrentRequests = maxConcurrentRequests;
    this.queue = [];
    this.currentRequests = new Set();
  }

  // IMPL: CreateRequest method which helps to create a new request

  createRequest(requester, requestID, requesterData) {
    if (requester.quota <= 0) {
      return "quota exceeded";
    }
    requests[requestID] = new Request(requestID, requesterData, requester);

    // check if the request is queued
    if (
      this.currentRequests.size >= this.maxConcurrentRequests ||
      this.queue.length > 0
    ) {
      this.queue.push({ requester, requestID });
      return "queued";
    }
    this.processRequest(requester, requestID);
    return "processed";
  }

  // IMPL: processRequest method which helps to process the request
  processRequest(requester, requestID) {
    if (!this.currentRequests.has(requestID)) {
      this.currentRequests.add(requestID);
      requester.quota -= 1;
    }

    // create a timeout to delay the process for 2 seconds
    setTimeout(() => {
      let result = `result successful: ${requestID}`;
      this.completeRequest(requestID, result);
      this.executeQueue();
    }, 2000);
  }

  // IMPL: completeRequest method which helps to complete the request
  completeRequest(requestID, result) {
    this.currentRequests.delete(requestID);
    const request = requests[requestID];
    if (request && request.requester.quota < request.requester.maxQuota) {
      console.log(
        `executed request with id ${requestID} and data ${request.requestData}`
      );
      request.updateStatus("completed");
      request.updateResult(result);
    }
  }

  // IMPL: executeQueue method which helps to execute the queue
  executeQueue() {
    while (
      this.queue.length > 0 &&
      this.currentRequests.size < this.maxConcurrentRequests
    ) {
      const { requester, requestID } = this.queue.shift();
      this.processRequest(requester, requestID);
    }
  }

  // IMPL: getRequestStatus method which helps to get the status of the request
  getRequestStatus(requestID) {
    const request = requests[requestID];
    if (request) {
      return request.showStatus();
    }
    return "not found";
  }

  // IMPL: cancelRequest method which helps to cancel the request
  cancelRequest(requestID) {
    const request = requests[requestID];
    if (request) {
      request.cancelRequest();
      return "cancelled";
    }
    return "not found";
  }

  // IMPL: getRequests method which helps to get the requests
  getRequests() {
    return Object.values(requests);
  }
}

module.exports = Responder;
