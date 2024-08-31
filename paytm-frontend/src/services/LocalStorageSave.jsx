function LocalStorageSave({ result }) {
  console.log(result);
  localStorage.setItem("token", result.data.token);
  localStorage.setItem("firstName", result.data.user.firstName);
  localStorage.setItem("lastName", result.data.user.lastName);
  localStorage.setItem("userId", result.data.user._id);
}

export { LocalStorageSave };
