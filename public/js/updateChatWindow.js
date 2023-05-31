const chatWindowId = 'chat-window-ul';

export function updateChatWindow(text) {

    const chatWindow = document.getElementById(chatWindowId);
    if (chatWindow.childElementCount >= 20) {
        chatWindow.removeChild(chatWindow.firstElementChild);
        chatWindow.removeChild(chatWindow.firstElementChild);
      }
    const newListItem = document.createElement('li');
    newListItem.textContent = text;
    chatWindow.appendChild(newListItem);
}