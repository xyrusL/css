function fetchAllData() {
  const url = 'https://api.jsonsilo.com/f6137540-683a-4484-97c0-508dc8283b4a';
  const headers = {
    'X-SILO-KEY': 'nsNkMAsbMDc9RCsfVqA52bYkxJ9vp60qiMvMxJQYyz',
    'Content-Type': 'application/json'
  };

  axios.get(url, { headers: headers })
    .then(response => {
      const animeData = response.data;
      localStorage.setItem('animeData', encryptData(animeData));
      console.log('Data fetched and stored securely.');
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
}
fetchAllData();
