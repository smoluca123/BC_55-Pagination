const url = 'https://api.github.com/users/torvalds/followers?per_page=100';

const fetchData = () => {
  return axios({
    url,
    method: 'GET',
  });
};

export default fetchData;
