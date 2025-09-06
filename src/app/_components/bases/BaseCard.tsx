import { type BaseType } from "../../_hooks/useBases";

export default function BaseCard({ base }: { base: BaseType }) {
  return (
    <div>
      <h3>{base.name}</h3>
      <p>Id: {base.id}</p>
    </div>
  );
}