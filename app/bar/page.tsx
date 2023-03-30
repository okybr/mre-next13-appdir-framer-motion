import Link from "next/link";

export default function Page() {
  return (
    <main
      style={{
        margin: "25vh 25vw",
        width: "50vw",
        height: "50vh",
        background: "gray",
      }}
    >
      <p>hello from bar.</p>
      <p>
        <Link href="/foo">link to foo</Link>.
      </p>
    </main>
  );
}
