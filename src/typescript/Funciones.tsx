export const Funciones = () => {
  const sumar = (a: number, b: number): number => {
    return a + b;
  };

  return (
    <>
      <h3>Funciones</h3>
      <span>El resultado es: {sumar(3, 4)}</span>
    </>
  );
};
