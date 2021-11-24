export const getData = () =>
  fetch('https://demo1030918.mockable.io/').then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Check your internet connection');
  });
