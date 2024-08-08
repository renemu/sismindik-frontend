import apiClient from "./ApiClientService";

export async function login(params) {
  return apiClient.post("/login", params).then((e) => {
    const data = e.data;
    const token = e.data.token;
    localStorage.setItem("user", JSON.stringify(data.user));
    localStorage.setItem("token", JSON.stringify(token));
  });
}

export async function logout(params) {
  return apiClient.post("/logout", params);
}

export async function register(params) {
  return apiClient.post("/register", params);
}

export async function code(data) {
  return apiClient.post("/code", data);
}
