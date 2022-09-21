
async function getAPIs() {
    let response=await fetch('https://api.publicapis.org/entries')
    let data=await response.json()
    
    return data.entries;
}

function getAPIhtml(myAPI) {
    // console.log(myAPI)
    return `    
            <div class='my-api'>
                <h2 class='api-name'>
                    
                    <a class='api-link' href='${myAPI.Link}'> ${myAPI.API}(${myAPI.Category})</a>
                </h2>
                
                <p class='api-description'>${myAPI.Description}</p>
                <p class='api-auth'>Authentication: ${myAPI.Auth?myAPI.Auth:'none'}</p>
                <p class='api-https'>Supports Https: ${myAPI.HTTPS?'Yes':'No'}</p>
            </div>`
}

function displayAPIs(myAPIs) {
    document.body.innerHTML=`
    <h1>The list of all public API</h1>
    <div class="main-container">${myAPIs.map(api=>getAPIhtml(api)).join('')}</div>`
}

getAPIs()
    .then(apis=>displayAPIs(apis.slice(1,100)))
    .catch(e => console.log(`Error: ${e}`))