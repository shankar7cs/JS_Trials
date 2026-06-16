function launchBrowser(browser)
{
if(browser==="Chrome")
    {
    console.log("Browser launched")
}
else{
    console.log("not launched")
}
}
launchBrowser("Chrome");
launchBrowser("Fire");

function runTests(testType){
    switch(testType){
        case "smoke":
        console.log("TestType : "+testType);
        break;
        case "sanity":
        console.log("TestType : "+testType);
        break;
        case "regression":
        console.log("TestType : "+testType);
        break;
        default:
        console.log("Default TestType would be functional");
        break;
    }
}
runTests("smoke");
//runTests("sanity");
//runTests("regression");
//runTests("volume")
