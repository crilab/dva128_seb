export async function onRequest(context) {
  const url = new URL(context.request.url);
  url.hostname = "crilab.github.io";
  return fetch(url.toString(), context.request);
}
