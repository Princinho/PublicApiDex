/* 
    Bonus Challenge 

    Fetch the list of 642 open APIs from
        https://api.publicapis.org/entries
        
    Create a my-api component
        display the name and category of the API,
        the description, and also display the type 
        of Auth (if any) and whether or not the API 
        supports HTTPS
    
    Use CSS Grid to style my-api
        The title and category should be 
        listed as Title (Category) 
        and should link to the API docs
        
    The grid should have 4 rows
        3rem, 1rem, 4rem, 3rem respectively
        and 3 columns each 1/3rd of available width
        
    Finally, display all of the APIs
*/

async function getAPIs() {
    let response=await fetch('https://api.publicapis.org/entries')
    let data=await response.json()
    
    return data.entries;
}

function getAPIhtml(myAPI) {
    console.log(myAPI)
    return `<div class='my-api'>
                <h2 class='api-name'>
                    ${myAPI.API}
                    <a class='api-link' href='${myAPI.Link}'>(${myAPI.Category})</a>
                </h2>
                
                <p class='api-description'>${myAPI.Description}</p>
                <p class='api-auth'>Authentication: ${myAPI.Auth?myAPI.Auth:'none'}</p>
                <p class='api-https'>Supports Https: ${myAPI.HTTPS?'Yes':'No'}</p>
            </div>`
}

function displayAPIs(myAPIs) {
    document.body.innerHTML=myAPIs.map(api=>getAPIhtml(api)).join('')
}

getAPIs()
    .then(apis=>displayAPIs(apis.slice(1,100)))
    .catch(e => console.log(`Error: ${e}`))