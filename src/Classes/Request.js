class Request {
    constructor(requestID, requestData, requester) {
        this.requestID = requestID;
        this.requestData = requestData;
        this.requester = requester;
        this.status = "pending"
        this.result = null
    }

    // IMPL: cancelRequest method which helps to cancel the request
    cancelRequest() {
        this.status = "cancelled"
    }

    // IMPL: UpdateStatus method which helps to update the status
    updateStatus(status) {
        this.status = status
    }

    // IMPL: UpdateResult method which helps to update the result
    updateResult(result) {
        this.result = result
    }

    // IMPL: ShowStatus method which helps to show the status
    showStatus() {
        return this.status
    }

    // IMPL: ShowResult method which helps to show the result
    showResult() {
        return this.result
    }
}

module.exports = Request