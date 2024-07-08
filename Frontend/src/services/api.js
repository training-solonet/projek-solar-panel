const BaseURL = "http://connectis.my.id:5000/api/sensor";
const ApiKey =
  "H65e3sN0fwG15lKV733qj3Xejsb5YVDaArHWFe41jUYCWUr4qwMbvr6g1WLa6F59";

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