import apiClient from "./services";

export default {
  getUser() {
    return apiClient.get("users");
  },
  addUser(user) {
    return apiClient.post("auth/register", user);
  },
  loginUser(user) {
    console.log(user);
    return apiClient.post("auth/login", user.value, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
        crossDomain: true,
        Authorization:
          "Basic " + btoa(user.value.email + ":" + user.value.password),
      },
    });
  },
  logoutUser() {
    return apiClient.post("auth/logout");
  },
};
