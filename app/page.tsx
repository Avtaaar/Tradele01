import Image from "next/image";

export default function Home() {
  return (
    <div className="w-screen h-screen relative">
      <Image
        src="/load.jpg"
        alt="Full-screen image"
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
}