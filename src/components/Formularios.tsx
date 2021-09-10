import { useForm } from "../hooks/useForm";

export const Formularios = () => {
  const { email, password, handleOnChange } = useForm({
    email: "correo@tet.com",
    password: "1234578",
  });

  return (
    <>
      <h3>Formularios</h3>
      <input
        type="text"
        className="form-control"
        placeholder="Email"
        value={email}
        onChange={({ target }) => handleOnChange(target.value, "email")}
      />
      <input
        type="text"
        className="form-control mt-2 mb-2"
        placeholder="Password"
        value={password}
        onChange={({ target }) => handleOnChange(target.value, "password")}
      />
    </>
  );
};
