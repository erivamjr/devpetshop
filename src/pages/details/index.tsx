import { useParams } from "react-router-dom";

export function Details() {
  const { id } = useParams<{ id: string }>();
  return (
    <div>
      <h1>Details {id}</h1>
    </div>
  );
}
