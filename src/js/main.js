import fetchData from './fetchData.js';
import { renderFollowers, renderPagination } from './renderUI.js';
import pagination from './pagination.js';

let index = 0;
let dataFollowers = [];
let arrPage = [];
function getData() {
  const promise = fetchData();
  promise
    .then((result) => {
      dataFollowers = result.data;
      arrPage = pagination(dataFollowers);
      console.log(arrPage);
      renderUI(arrPage);
    })
    .catch((err) => {
      console.log(err);
    });
}
function renderUI(arrPage) {
  renderFollowers(arrPage[index]);
  renderPagination(arrPage, index);
}
document.querySelector('.page').addEventListener('click', (e) => {
  if (e.target.classList.contains('page')) return;
  if (e.target.classList.contains('btn-page')) {
    index = parseInt(e.target.dataset.index);
  }
  if (e.target.classList.contains('btn-next')) {
    index++;
    if (index >= arrPage.length) {
      index = 0;
    }
  }
  if (e.target.classList.contains('btn-prev')) {
    index--;
    if (index < 0) {
      index = arrPage.length - 1;
    }
  }

  renderUI(arrPage);
});

getData();
