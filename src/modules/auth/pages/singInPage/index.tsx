import { Box, Button, TextField, Typography } from "@mui/material";
import { Route } from "core/enums";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export const SingInPage = (): JSX.Element => {
  const [data, setData] = useState<{ email: String; password: string }>(Object({}));
  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(data);
    navigate(Route.Dashboard);
  };

  return (
    <Box display="flex" alignItems="center" flexDirection="column" paddingTop={10} gap={4}>
      <Box>
        <Typography fontSize="24px" fontWeight="bold" textAlign="center" gutterBottom>
          Inicio de Sesión
        </Typography>
        <Typography fontSize="20px" maxWidth={450} textAlign={"center"}>
          Por favor ingrese su correo electronico y contraseña para iniciar sesión
        </Typography>
      </Box>

      <Box
        minWidth={{ xs: 0, md: 380 }}
        display="flex"
        flexDirection="column"
        gap={3}
        component="form"
        onSubmit={handleSubmit}
      >
        <TextField label="Correo Electronico" variant="outlined" onChange={handleChange} />
        <TextField label="Contraseña" variant="outlined" type="password" onChange={handleChange} />
        <Button variant="contained" fullWidth type="submit">
          Iniciar Sesión
        </Button>
      </Box>
    </Box>
  );
};
