export const backendURL =
  process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:8082";
export const APIHeaders = () => {
  const token = localStorage.getItem("authToken");
  return {
    Authorization: "Bearer " + token,
    "Content-Type": "application/json",
  };
};

export const AdminHeaders = () => {
  const token = localStorage.getItem("adminToken");
  return {
    Authorization: "Bearer " + token,
    "Content-Type": "application/json",
  };
};
