import { type BaseType } from "../_hooks/useBases";

export default function BaseCard({ base }: { base: BaseType }) {

  return (
    <div>
      <h2>{base.name}</h2>
      <p>Id: {base.id}</p>
    </div>
  );
}