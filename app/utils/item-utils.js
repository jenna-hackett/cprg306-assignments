export const cleanItemName = (name) => {
  if (!name) return "";
  return name
    .split(",")[0] 
    .replace(/[^\w\s]|_/g, "") 
    .trim();
};