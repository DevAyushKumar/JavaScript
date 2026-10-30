/*What are webworkers and give an example ?
-> Webworkers allows us to run the javascript code in background with out blocking the main thread of the web application
-> This is mainly useful for performing computationally intensive tasks which will make the webapplication unresponsive.
Eg: Larger attachment upload of 2 gb*/

//Create a web worker script:
self.onmessage = function(event) {
    let result = 0;
    for (let i = 0; i < event.data; i++){
        result += i;
    }
    self.postMessage(result);
};

//Create the main script:
if(window.worker) {
    const myWorker = new Worker('Worker.js');

    myWorker.postMessage(100000);

    myWorker.onmessage = function(event) {
        console.log('Result:',event.data);
    };

    myWorker.onerror = function(event) {
        console.log('Error:',event.message);
    };
} else {
    console.log('Web Workers are not supported in this browser');
}