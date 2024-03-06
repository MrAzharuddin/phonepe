let requests = require('./Requests')

class Requester {
  // constructor which handles the requests
  constructor(requesterID, quota) {
    this.requesterID = requesterID;
    this.quota = quota;
  }

  // IMPL: makeRequest method which helps to send a random request
  makeRequest(requesterData) {
    const requestID = Math.random();
    return {
      requestID,
      requesterData,
    };
  }

  // IMPL: fetchProcessedRequests method which helps to fetch the processed requests
  fetchProcessedRequests() {
    const filteredTotalRequests = Object.values(requests).filter(
      (request) => request.requesterID === this.requesterID
    ).length;
    const filteredPendingRequests = Object.values(requests).filter(
      (request) =>
        request.requesterID === this.requesterID && request.status === "pending"
    ).length;
    const filterCancelledRequests = Object.values(requests).filter(
      (request) =>
        request.requesterID === this.requesterID &&
        request.status === "cancelled"
    ).length;

    return {
      filteredTotalRequests,
      filteredPendingRequests,
      filterCancelledRequests,
    };
  }
}


module.exports = Requester