const apiUrl = "https://test-frontend-developer.s3.amazonaws.com/data/locations.json";

export const fetchApi = async () => {
  const response = await fetch(apiUrl);
  const data = await response.json();
  return data.locations;
};