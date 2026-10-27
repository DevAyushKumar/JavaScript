/*What are interceptors ?
-> Interceptors allows us to modify the request or response before its sent to the server or received from the server */

axios.interceptors.request.use((config)=> {
    if(longUrls.include(url)){
        config.timeout = 1000;
    }
    return config;
})
axios.interceptors.response.user((response)=> {
    return response;
})