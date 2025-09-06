"use client";

import { useBases } from "../../_hooks/useBases";
import BaseCard from "./BaseCard";
import LoadingIcon from "../LoadingIcon";

export default function BaseList() {
  const { bases, loading } = useBases();
  
  if (loading) {
    return (
      <div className="w-full h-full flex justify-center items-center z-1">
        <LoadingIcon />
      </div>
    );
  }

  return (
    <div>
      <h1>Home</h1>
      {bases.map((b) => (
        <BaseCard key={b.id} base={b} />
      ))}
    </div>
  );
}