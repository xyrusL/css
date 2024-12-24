const encryptedKey = 'bnNOa01Bc2JNREM5UkNzZlZxQTUyYllreEo5dnA2MHFpTXZNeEpRWXl6'; 
const encryptedUrl = 'aHR0cHM6Ly9hcGkuanNvbnNpbG8uY29tL2Y2MTM3NTQwLTY4M2EtNDQ4NC05N2MwLTUwOGRjODI4M2I0YQ=='; // Encrypted API URL

function decryptKey(encryptedKey) {
  return atob(encryptedKey);
}

function fetchAllData() {
  const url = decryptKey(encryptedUrl);
  const headers = {
    'X-SILO-KEY': decryptKey(encryptedKey),
    'Content-Type': 'application/json'
  };

  axios.get(url, { headers: headers })
    .then(response => {
      const cacheIgnite = response.data;
      localStorage.setItem(storageKey, encryptData(cacheIgnite));
      console.log('Data fetched and stored securely.');
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
}

fetchAllData();
