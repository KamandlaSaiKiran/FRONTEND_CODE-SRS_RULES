// src/api.js
const apiUrl = import.meta.env.VITE_API_URL;

export const getRules = async () => {
  const res = await fetch(`${apiUrl}/rule`);
  console.log("I am insid the api call");
  if (!res.ok) throw new Error("Failed to fetch rules");
  return res.json();
};
