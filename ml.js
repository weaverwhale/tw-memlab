function url() {
  return 'http://localhost:3000/';
}

// action where you suspect the memory leak might be happening
async function action(page) {
  await page.goto(`${url()}/signin`);
}

// how to go back to the state before actionw
async function back(page) {
  await page.goto(`${url()}/signin`)
}

module.exports = {action, back, url};