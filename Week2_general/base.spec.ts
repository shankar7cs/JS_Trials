/* Brower
Context
page */

import {test,chromium} from "@playwright/test"

test("Launch Browser",async({page})=>{
//chromium -Base architecture for chrome and edge, chrome or edge
//const browser=await chromium.launch({headless:false}) //channel:"msedge"  //this declarationtype applicble only fr chrome and edge
//const context=await browser.newContext()
//const page=await context.newPage() 

await page.goto("https://www.amazon.in/")
await page.waitForTimeout(2000)


})

//config is adjusted and commented other browser as we test only with chrome,
//we can uncomment config browser for lauunching using other browser, but they run with inbuilt browser feature from node env although u dont have that setup