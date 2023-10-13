const paginate = ((p) => {
    
    const itemsPage = 10;
    const numberOfPage = Math.ceil(p.length / itemsPage);

    const newFllower = Array.from({ length: numberOfPage }, ((_, page) => {
        const start = page * itemsPage;
     
        return p.slice(start, start + itemsPage);
    }))

    return newFllower
})
export default paginate