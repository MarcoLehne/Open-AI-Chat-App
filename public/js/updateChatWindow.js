const chatWindowId = 'chat-window-ul';

export function updateChatWindow(text) {

    const chatWindow = document.getElementById(chatWindowId);
    const newListItem = document.createElement('li');
    newListItem.textContent = text;
    chatWindow.appendChild(newListItem);
}