"use client";

import { useBases } from "../_hooks/useBases";
import BaseCard from "../_components/BaseCard";

export default function HomePage() {
  const { bases, loading } = useBases();

  return (
    <div>
      <h1>Home</h1>
      {bases.map((b) => (
        <BaseCard key={b.id} base={b} />
      ))}
    </div>
  );
}