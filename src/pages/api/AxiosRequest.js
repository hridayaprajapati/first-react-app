import axios from "axios";
import BASE_URL from "../../globalVariables";
import AUTH_TOKEN from "../../globalVariables";

export const getData = async (params) => {
  const response = await axios.get(`${BASE_URL}/api/${params}`);
  if (response.data) {
    console.log("AxiosRequest.getData():", response.data.data);
    return response.data.data;
  }
};

export const postData = async (params, formData) => {
  let data = JSON.stringify({
    data: formData,
  });

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: `${BASE_URL}/api/${params}`,
    headers: {
      "Content-Type": "application/json",
      Authorization: `${AUTH_TOKEN}`,
    },
    data: data,
  };

  try {
    const response = await axios.request(config);
    if (response.status === 200) {
      // 200 == ok
      console.log("AxiosRequest.postData():", response.status);
      return true;
    }
  } catch (error) {
    console.error("AxiosRequest.postData():", error);
    return false;
  }
};

export const deleteData = async (params) => {
  let config = {
    method: "delete",
    maxBodyLength: Infinity,
    url: `${BASE_URL}/api/${params}`,
    headers: {
      Authorization: `${AUTH_TOKEN}`,
    },
  };

  const response = await axios.request(config);
  if (response.status === 200) {
    // 200 == ok
    console.log("AxiosRequest.deleteData():", params, response.status);
  }
};

export const updateData = async (params, formData) => {
  let data = JSON.stringify({
    data: {
      studentName: formData.studentName,
      studentRollNumber: formData.studentRollNumber,
      studentClass: formData.studentClass,
    },
  });

  let config = {
    method: "put",
    maxBodyLength: Infinity,
    url: `${BASE_URL}/api/${params}`,
    headers: {
      "Content-Type": "application/json",
      Authorization: `${AUTH_TOKEN}`,
    },
    data: data,
  };
  try {
    const response = await axios.request(config);
    if (response.status === 200) {
      // 200 == ok
      console.log("AxiosRequest.updateData():", response.status);
      return true;
    }
  } catch (error) {
    console.error("AxiosRequest.updateData():", error);
    return false;
  }
};
