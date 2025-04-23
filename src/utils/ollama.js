export async function getGptResponse({ model, instruction, input }) {
  const response = await fetch(
    "https://e5e9-2401-4900-1cc5-242f-9c62-e929-540c-8c12.ngrok-free.app/api/generate",
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
