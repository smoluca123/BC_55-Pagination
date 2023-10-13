const pagination = (arr) => {
  const itemPage = 12;
  const numPage = Math.ceil(arr.length / itemPage);

  return Array.from({ length: numPage }, (item, page) => {
    const start = page * itemPage;
    return arr.slice(start, start + itemPage);
  });
};

export default pagination;
