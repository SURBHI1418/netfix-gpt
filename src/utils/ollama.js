export async function getGptResponse({ model, instruction, input }) {
  const response = await fetch(
    "https://ef31-2401-4900-1f29-47e1-ccc5-5234-542e-5bd7.ngrok-free.app/api/generate",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: model, // or whatever model you're using locally
        prompt: `${instruction} ${input}`,
        stream: false, // if true, you'll get streaming chunks
      }),
    }
  );

  const result = await response.json();
  return result.response;
}
