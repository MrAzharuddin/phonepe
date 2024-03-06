const Responder = require('./src/Classes/Responder')
const Requester = require('./src/Classes/Requester')

const responder = new Responder(3);

const user = new Requester('phonepe', 5);

let requests = [
    {
        requester: user,
        requestData:  'Phonepe'
    },
    {
        requester: user,
        requestData:  'Indus'
    },
    {
        requester: user,
        requestData:  'App store'
    }
]

requests.forEach(request => {
    let req = request.requester.makeRequest(request.requestData)
    console.log(responder.createRequest(request.requester, req.requestID, req.requesterData));
})

responder.createRequest(user, 20990, 'test1');

responder.createRequest(user, 20991, 'test2');

responder.createRequest(user, 20992, 'test3');

const request4 = user.makeRequest('hello world Tried')

console.log(responder.createRequest(user, request4.requestID, request4.requesterData));

const request5 = user.makeRequest('hello world Tried again')
console.log(responder.createRequest(user, request5.requestID, request5.requesterData));

