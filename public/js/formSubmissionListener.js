import { updateChatWindow } from "./updateChatWindow.js";
import { disableUIBeforeCompletedAPIRequest } from "./disableUIBeforeCompletedAPIRequest.js";
import { enableUIAfterCompletedAPIRequest } from "./enableUIAfterCompletedAPIRequest.js";
import { fetchFromAPI } from "./fetchFromAPI.js";

const formId = 'requestForm';

const submitForm = async (formId) => {
  const form = document.getElementById(formId);
  
  form.addEventListener('submit', async (event) => {

    event.preventDefault();
    const formData = Object.fromEntries(new FormData(event.target));
    
    disableUIBeforeCompletedAPIRequest();

    updateChatWindow(formData["input-field"]);

    const response = await fetchFromAPI(formData);
    
    updateChatWindow(response.data);
    
    enableUIAfterCompletedAPIRequest();
  });
};

submitForm(formId);