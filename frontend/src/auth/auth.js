const token = localStorage.getItem("token");

fetch('/api/dashboard', {
  headers: {
    Authorization: `Bearer ${token}`
  }
});