const conversations = new Map();

export function getConversation(userId) {
  if (!conversations.has(userId)) {
    conversations.set(userId, []);
  }
  return conversations.get(userId);
}

export function addMessage(userId, role, content) {
  const history = getConversation(userId);

  history.push({ role, content });

  // Limitar a últimos 10 mensajes
  if (history.length > 10) {
    history.shift();
  }
}
