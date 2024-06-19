// const appLink = 'http://localhost:3000';
const appLink = 'http://localhost:3001';
const dashLink = 'div[class*="overflow-hidden overflow-y-auto"] > p:first-child'
const secondDashLink = 'div[class*="overflow-hidden overflow-y-auto"] > p:nth-child(2)'

function url() {
  console.log('url: starting')
  return `${appLink}/login`;
}

// action where you suspect the memory leak might be happening
async function action(page) {
  console.log('action: loggin in')
  await page.type('input[type="email"]', 'michael@triplewhale.com');
  await page.type('input[type="password"]', 'TestPassword1');
  await page.click('button[type="submit"]');
  console.log('action: logged in')
  await page.waitForSelector(dashLink)
  await page.click(dashLink)
  await page.waitForSelector(dashLink)
  await page.click(dashLink)
}

// how to go back to the state before action
async function back(page) {
  await page.waitForSelector(dashLink)
  await page.click(dashLink)
  await page.waitForSelector(dashLink)
  await page.click(dashLink)
  await page.waitForSelector(secondDashLink)
  await page.click(secondDashLink)
}

module.exports = {action, back, url};