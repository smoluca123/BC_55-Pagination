const url = 'https://api.github.com/users/john-smilga/followers?per_page=100';
const fetchData = async() => {
    const res = await fetch(url)
    const data = await res.json()
    return data
}
export default fetchData