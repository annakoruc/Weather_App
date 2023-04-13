export const getData = async (location: string) => {
  const date = new Date();
  let currentDate = date.toJSON().slice(0, 10);
  let lastDay = new Date(date.setDate(date.getDate() + 7))
    .toJSON()
    .slice(0, 10);

  const res = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/${currentDate}/${lastDay}?key=${process.env.REACT_APP_WEATHER_API_KEY}`
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return await res.json();
};
