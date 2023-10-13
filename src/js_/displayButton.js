const displayBtn = (content, pages, activePage) => {
    const btns = pages.map((_, page) => {
        return `
        <button class="btn-page ${
            activePage === page ? 'btn-active' : 'null'
        }" data-index="${page}">
        ${page + 1}
        </button>
        `
    })
    btns.push('<button class="btn-next">Next</button>')
    btns.unshift('<button class="btn-prev">Prev</button>')
    content.innerHTML = btns.join('')
}

export default displayBtn