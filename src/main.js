// first page
const firstPage = {
  page: document.querySelector('.first-page'),
  pageSecond: document.querySelector('.second-page'),
  btn: document.querySelector('.first-page-btn'),
  opacityPage: () => {
    firstPage.page.classList.add('is-opacity');
    setTimeout(() => {
      firstPage.page.style.display = 'none';
    }, 400);
    setTimeout(() => {
      firstPage.pageSecond.classList.toggle('is-opacity');
    }, 500);
  },
};
firstPage.btn.addEventListener('click', firstPage.opacityPage);
// second page
const secondPage = {
  pageSecond: document.querySelector('.second-page'),
  pageThree: document.querySelector('.four-page'),
  btn: document.querySelector('.second-page-btn'),
  opacityPage: () => {
    secondPage.pageSecond.classList.add('is-opacity');
    setTimeout(() => {
      secondPage.pageSecond.style.display = 'none';
    }, 400);
    setTimeout(() => {
      secondPage.pageThree.classList.toggle('is-opacity');
    }, 500);
  },
};
secondPage.btn.addEventListener('click', secondPage.opacityPage);
