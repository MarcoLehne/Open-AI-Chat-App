const APIEndpoint = '/makeAPIRequest';

export async function fetchFromAPI(formData) {
  
  const response = await fetch(APIEndpoint, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(formData),
  });
  const data = await response.json();

  return data;
}