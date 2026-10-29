/*What are the differnece between fetch and axios ?
-> fetch is inbuilt webapi meathod present in most of the modern browsers where as axios is a third party library is built on top of XMLHttpRequest object
-> axios performs automatic parsing of response data where as in fetch we need to manually parse the response data(edg: response.json())
-> axios supports interceptors by using which we can modify the request or response before they are sent/received from the server
-> axios prevents csrf(cross site request forgery)attacks */
fetch:
fetch(url).then(response => {
    if(!response.ok){
        throw new Error('Network response was not ok' + response)
    }
    return response.json();
})
.then(data => {
    console.log(data)
})
.catch(error => {
    console.error('There has been a problem with your axios ' + error)
})