export const formatDate = (value: string) => {
  const date = new Date(value);
  const year = date.getFullYear();
  const month = ("0" + (date.getMonth() + 1)).slice(-2); // Adding 1 to month because it's zero-based
  const day = ("0" + date.getDate()).slice(-2);
  const hours = ("0" + date.getHours()).slice(-2);
  const minutes = ("0" + date.getMinutes()).slice(-2);

  return `${year}-${month}-${day} ${hours}:${minutes}`;
};
