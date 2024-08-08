import apiClient from "./ApiClientService";

export async function index() {
  return apiClient.get("/person").then((e) => e.data);
}

export async function detail(id) {
  return apiClient.get(`/person/${id}`).then((e) => e.data);
}

export async function store(data) {
  return apiClient.post("/person", data).then((e) => e);
}
