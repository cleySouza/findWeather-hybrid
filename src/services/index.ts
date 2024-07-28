interface IFetch {
  type: string;
  city: string;
}

export async function fetchApi({type, city}: IFetch) {
  const url = `${process.env.URL}/${type}.json?key=${process.env.KEY}&q=${city}&aqi=no&lang=pt`;
  const response = await fetch(url);

  return response.json();
}
