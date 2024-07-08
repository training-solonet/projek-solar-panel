const BaseURL = process.env.BASE_URL;
const ApiKey = process.env.API_KEY;

export const getData = async () => {
  const response = await fetch(`${BaseURL}`, {
    method: "GET",
    headers: {
      "x-api-key": ApiKey,
    },
  });
  return await response.json();
}

export const getMax = async () => {
  const response = await fetch(`${BaseURL}/max`, {
    method: "GET",
    headers: {
      "x-api-key": ApiKey,
    },
  });
  return await response.json();
};

export const getMin = async () => {
  const response = await fetch(`${BaseURL}/min`, {
    method: "GET",
    headers: {
      "x-api-key": ApiKey,
    },
  });
  return await response.json();
}

export const getAvg = async () => {
  const response = await fetch(`${BaseURL}/average`, {
    method: "GET",
    headers: {
      "x-api-key": ApiKey,
    },
  });
  return await response.json();
}