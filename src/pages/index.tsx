import Image from "next/image";
import { Inter } from "next/font/google";
import DNDContainer from "@/components/dnd-form/DND_Container";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <DNDContainer />
    </main>
  );
}
