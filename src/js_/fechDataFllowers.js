const content = document.querySelector('.item__main')

const display = (flow) => {
    const newFlow = flow.map((p) => {
        const { avatar_url, login, html_url } = p;
        return `
        <div class="col-3 item">
                <div class="content">
                    <div class="img">
                        <img src="${avatar_url}" alt="">
                    </div>
                    <p>${login}</p>
                    <div class="button">
                        <a href="${html_url}" >VIEW PROFILE</a>
                    </div>
                </div>
            </div>
        `
    }).join('');
    content.innerHTML = newFlow
}
export default display