import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "MantgloSAS" },
    { name: "Mecanica maquinaria pesada", content: "taller de mecanica diesel y equipos de carga pesada" },
  ];
};

export default function Index() {
  return (
    <div>
      
    </div>
  );
}

