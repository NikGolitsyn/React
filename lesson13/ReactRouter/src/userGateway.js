const baseUrl = `https://api.github.com/users`;

export const getUser = id => fetch(`${baseUrl}/${id}`).then(response => response.json());
