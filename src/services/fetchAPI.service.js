export default async function fetchAPI({
  url,
  method = "GET",
  body,
  headers,
  signal
}) {
  const response = await fetch(url, {
    signal,
    method,
    body,
    headers
  });

  return response.json();
}
