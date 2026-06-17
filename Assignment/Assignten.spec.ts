import {test,expect} from "@playwright/test"

test('salesforce login', async ({page}) => {

await page.goto("https://login.salesforce.com/?locale=in")
await page.locator('#username').fill("dilipkumar.rajendran@testleaf.com")
//nth(0) or first() -> for first match //nth(1)-> second match //nth(n)-> last()-> for last match
await page.locator('[class="input r4 wide mb16 mt8 password"]').nth(0).fill('TestLeaf@2025')

await page.locator("[type='submit']").click()
//await page.waitForTimeout(4000)  //if we are not using expect we need to write timeouts to prevent the skip behavior

await expect(page).toHaveTitle('Home | Salesforce')  //if we are using expect we dont need the timeout

let p=await page.title()
console.log(p)

})