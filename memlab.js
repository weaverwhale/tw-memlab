function url() {
  return 'http://localhost:3001/login';
}

// action where you suspect the memory leak might be happening
async function action(page) {
  // localStorage.clear();
  await page.type('input[type="email"]', 'michael@triplewhale.com');
  await page.type('input[type="password"]', 'TestPassword1');
  await page.click('button[type="submit"]');
}

// how to go back to the state before action
async function back(page) {
  await page.load()
}

module.exports = {action, back, url};