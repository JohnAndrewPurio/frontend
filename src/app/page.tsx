'use client'

import Frame from "@/stories/Frame";

const pages = {
  1: "Page 1",
  2: "Page 2",
  3: "Page 3",
  4: "Page 4",
}

export default function Home() {
  return (
    <main>
      <Frame pages={pages} />
    </main>
  );
}
