interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export const sendMessageToShadow = async (message: string, history: ChatMessage[]): Promise<string> => {
  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message,
        history
      }),
    });

    if (!response.ok) {
      throw new Error(`Server responded with ${response.status}`);
    }

    const data = await response.json();
    return data.text || "... *The shadow remains silent* ...";
  } catch (error) {
    console.error("Shadow error:", error);
    return "The darkness is too thick... I cannot connect to the void.";
  }
};