export const TiposBasicos = () => {
  const nombre: string | number = "Fernando";
  const edad: number = 35;
  const estaAtivo: boolean = true;
  const poderes: string[] = ["Velocidad", "Volar", "Respierar en el agua"];

  return (
    <>
      <h3>Tipos Basicos</h3>
      {nombre}, {edad}, {estaAtivo ? "activo" : "no activo"}
      <br />
      {poderes.join(", ")}
    </>
  );
};
