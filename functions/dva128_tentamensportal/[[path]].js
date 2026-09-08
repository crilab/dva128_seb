export async function onRequest({ request }) {
  const url = new URL(request.url);
  url.hostname = "crilab.github.io";
  const res = await fetch(url, request);
  const out = new Response(res.body, res);
  out.headers.set("Cross-Origin-Embedder-Policy", "require-corp");
  out.headers.set("Cross-Origin-Opener-Policy", "same-origin");
  return out;
}
