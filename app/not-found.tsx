export default function NotFound() {
  return (
    <main className="not-found section-pad">
      <p className="eyebrow">404 · PRIVATE MUSEUM</p>
      <h1>This work is not in the current collection.</h1>
      <p>The artwork may have moved, been archived or the address may have changed.</p>
      <a className="button button-dark" href="/collection">Return to collection</a>
    </main>
  );
}
