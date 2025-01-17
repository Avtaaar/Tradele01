import Image from "next/image";

export default function Home() {
  return (
    <div style={{ width: "100vw", height: "100vh", position: "relative" }}>
      <Image
        src="/load.jpg"
        alt="Full-screen image"
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
}