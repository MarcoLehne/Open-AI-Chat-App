const formId = 'requestForm';
const inputFieldId = 'prompt';
const APIEndpoint = '/makeAPIRequest';

const submitForm = async (formId, inputFieldId, APIEndpoint) => {
  const form = document.getElementById(formId);
  const inputField = document.getElementById(inputFieldId);

  form.addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent form from submitting

    const formData = Object.fromEntries(new FormData(event.target));

    const response = await fetch(APIEndpoint, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(formData),
    });
    
    const data = await response.json();

    // // Update Template B with the response
    // displayResponse(data);

    inputField.value = '';
  });
};

submitForm(formId, inputFieldId, APIEndpoint);