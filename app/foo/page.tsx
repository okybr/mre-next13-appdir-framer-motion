import Link from "next/link";

export default function Page() {
  return (
    <main
      style={{
        margin: "25vh 25vw",
        width: "50vw",
        height: "50vh",
        background: "yellow",
      }}
    >
      <p>hello from foo.</p>
      <p>
        <Link href="/bar">link to bar</Link>.
      </p>
    </main>
  );
}
