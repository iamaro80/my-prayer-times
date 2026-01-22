export async function onRequest(context) {
  const API_URL = 'https://www.aliftaa.jo/PrayTimes.ashx';

  try {
    const response = await fetch(API_URL);
    
    if (!response.ok) {
      return new Response("Error fetching data", { status: response.status });
    }

    const data = await response.text();

    return new Response(JSON.stringify({ rawData: data }), {
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}