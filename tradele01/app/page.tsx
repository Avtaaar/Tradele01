import Image from "next/image";

export default function Home() {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>My Image in Next.js (App Router)</h1>
      <Image src="/load.jpg" alt="My Image" width={500} height={300} />
    </div>
  );
}