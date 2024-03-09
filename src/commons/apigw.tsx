// import { History } from "../pages/chatpage";
// import { IModelParams } from "../pages/components";

//Change to your own API Gateway endpoint
const API_http = "https://6v4xmc5pia.execute-api.us-west-2.amazonaws.com";

export const giveFeedback = async(
  email: string, 
  timestamp: number,
  text: string,
  headers: Record<string, string>,
) => {
  const options = {
    method: "POST",
    headers: headers,
    body: JSON.stringify({
      email: email,
      timestamp: timestamp,
      text: text
    })
  }
  try {
    var resp = await fetch(API_http + "/feedback", options)
    if (!resp.ok) {
      const data = await resp.text();
      throw Error (`Error: ${resp.status}, ${data}`);
    } 
    var data = await resp.json();
    return data;
  } catch (err) {
    throw err;
  
  }
}

export const voteForAnswer = async (
  email: string,
  timestamp: number,
  vote: string, // vote types -> neutral, thumbs_up, thumbs_down
  headers: Record<string, string>,
) => {
  const options = {
    method: "POST",
    headers: headers,
    body: JSON.stringify({
      email: email,
      timestamp: timestamp,
      vote: vote,
    })
  }
  try {
    var resp  = await fetch(API_http + "/chat-vote", options);
    if (!resp.ok) {
      const data = await resp.text();
      throw Error(`Error: ${resp.status},${data}`);
    }
    var data = await resp.json();
    return data;
  } catch (err) {
    throw err;
  }
}

export const getAnswer = async (
  respid: string,
  // model_params: IModelParams,
  email: string,
  prompt: string,
  history: History,
  headers: Record<string, string>,
) => {
  const options = {
    method: "POST",
    // mode: 'no-cors',
    headers: headers,
    body: JSON.stringify({
      id: respid,
      prompt: prompt,
      // params: model_params,
      email: email,
      history: history,
    }),
  };
  try {
    var resp = await fetch(API_http + "/chat", options);
    if (!resp.ok) {
      const data = await resp.text();
      throw Error(`Error: ${resp.status},${data}`);
    }
    var data = await resp.json();
    return data;
  } catch (err) {
    throw err;
  }
};

export const loginAuth = async (email: string, password: string) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({ email: email, password: password }),
  };
  try {
    var resp = await fetch(API_http + "/login", options);
    if (!resp.ok) {
      console.log("resp.ok");
      const data = await resp.json();

      throw Error(`Error: ${resp.status},${data.msg}`);
    }
    var data = await resp.json();
    data["email"] = email;
    return data;
  } catch (err) {
    throw err;
  }
};

export const registerAuth = async (
  email: string,
  password: string,
  crop: string,
) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({
      email: email,
      password: password,
      crop: crop,
    }),
  };
  try {
    var resp = await fetch(API_http + "/register", options);
    console.log("Resp is ", resp);
    if (!resp.ok) {
      const data = await resp.json();
      throw Error(`Error: ${resp.status},${data.message}`);
    }
    var data = await resp.json();
    console.log("Register returns ", data);
    return data;
  } catch (err) {
    throw err;
  }
};
