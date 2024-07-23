export async function fetchApi() {
  const url = `${process.env.URL}current.json?key=${process.env.KEY}&q=Curitiba&aqi=yes`;
  try {
    const response = await fetch(url);
    console.log('API_URL:', process.env.URL);
    console.log('KEY:', process.env.KEY);
    console.log(JSON.stringify(response, null, 2));

    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }
    return response;
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
}
