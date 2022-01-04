export default async function getData() {
  const url = '../../assets/data.json';
  const response = await fetch(url);
  const data = await response.json();
  return data.data;
}
