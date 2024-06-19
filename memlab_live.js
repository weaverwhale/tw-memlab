const appLink = 'https://app.triplewhale.com';
const shopLink = '.mantine-Paper-root:nth-of-type(10) button'
const dashboardLink = '.flex.flex-col.items-center.cursor-pointer.mb-2.no-underline:nth-of-type(2)'
const dashLink = 'div[class*="overflow-hidden overflow-y-auto"] > p:first-child'
const secondDashLink = 'div[class*="overflow-hidden overflow-y-auto"] > p:nth-child(2)'

function url() {
  console.log('url: starting')
  return `${appLink}/`;
}

// action where you suspect the memory leak might be happening
async function action(page) {
  console.log('action: loggin in')
  await page.type('input[type="email"]', 'michael@triplewhale.com');
  await page.type('input[type="password"]', 'TestPassword1');
  await page.click('.continue-button button');
  console.log('action: logged in')
  // await page.waitForSelector(shopLink)
  // await page.click(shopLink)
  // await page.waitForSelector(dashboardLink)
  // await page.click(dashboardLink)
  // await page.waitForSelector(dashLink)
  // await page.click(dashLink)
}

// how to go back to the state before action
async function back(page) {
  await page.waitForSelector(shopLink)
  await page.click(shopLink)
  await page.waitForSelector(secondDashLink)
  await page.click(secondDashLink)
}

module.exports = {action, back, url};