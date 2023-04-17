export const getCities = async () => {
  const res = await fetch(`https://countriesnow.space/api/v0.1/countries`);

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch cities");
  }

  return await res.json();
};
