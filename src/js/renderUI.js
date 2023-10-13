const renderFollowers = (followers) => {
  const itemEle = document.querySelector('.item__main');
  const content = followers
    .map((follower) => {
      const { avatar_url, login, html_url } = follower;
      return `
        <div class="col-3 item">
                <div class="content">
                    <div class="img">
                        <img src="${avatar_url}" alt="">
                    </div>
                    <p>${login}</p>
                    <div class="button">
                        <a href="${html_url}" target="_blank">VIEW PROFILE</a>
                    </div>
                </div>
            </div>
        `;
    })
    .join('');
  itemEle.innerHTML = content;
};

const renderPagination = (arr, activePage) => {
  const itemEle = document.querySelector('.page');
  const content = arr.map((item, page) => {
    return `
    <button class="btn-page ${
      activePage === page ? 'btn-active' : 'null'
    }" data-index="${page}">
    ${page + 1}
    </button>
    `;
  });
  content.push('<button class="btn-next">Next</button>');
  content.unshift('<button class="btn-prev">Prev</button>');
  itemEle.innerHTML = content.join('');
};

export { renderPagination, renderFollowers };
