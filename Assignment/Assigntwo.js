const name = "Chrome"
const browserVersion = 20

function getbrowserVersion() 
{
if (name === "Chrome") {
    var browserVersion = 31  //var keyword allows global scoping
    console.log(browserVersion) // it can be block scoped
}
console.log(browserVersion + "statement" + name) //it can be function scoped
}

getbrowserVersion()


/*
function getbrowserVers() 
{
if (name === "Chrome") {
    let browserVersion = 31    //let keyword does not get allowed to function scope
    console.log(browserVersion) //but it can be block scoped as we see the changed value here
}
console.log(browserVersion + " statement " + name) // constant global value occurs here
}

getbrowserVers()
*/