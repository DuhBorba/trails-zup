export async function Fetch(path) {
  return await (await fetch(`https://60e2ee6f9103bd0017b47673.mockapi.io/api/v1/${path}`)).json();
}