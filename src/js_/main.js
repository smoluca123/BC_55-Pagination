import fecthData from './fecthData.js'
import fetchDataFllower from './fechDataFllowers.js'
import paginate from './paginate.js'
import displayButton from './displayButton.js'

const page = document.querySelector('.page');

let index = 0;
let pages = []

const setUI = () => {
    fetchDataFllower(pages[index])
    displayButton(page, pages, index);
}

const init = async() => {
    const data = await fecthData()
    pages = paginate(data)
    setUI();
}
page.addEventListener('click', (p) => {
    if (p.target.classList.contains('page')) return
    if (p.target.classList.contains('btn-page')) {
        index = parseInt(p.target.dataset.index)
    }
    if (p.target.classList.contains('btn-next')) {
        index++;
        if (index > pages.length - 1) {
            index = 0
        }
    }
    if (p.target.classList.contains('btn-prev')) {
        index--;
        if (index < 0) {
            index = pages.length - 1
        }
    }
    setUI();
})

init();