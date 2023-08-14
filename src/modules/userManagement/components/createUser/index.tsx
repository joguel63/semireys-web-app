import { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import { Select } from "core/components";
import { Roles, RolesOptions } from "core/enums";
import { create } from "modules/userManagement/services/user.services";
import { styles } from "./styles";

type NewUser = {
  name: string;
  email: string;
  password: string;
  role_id: Roles;
};
export const CreateUserComponent: React.FC<{ handleClose: () => void }> = ({ handleClose }) => {
  const [data, setData] = useState<NewUser>(Object({ role_id: Roles.Admin }));

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    create(data).then(() => {
      handleClose();
    });
  };

  return (
    <Box component={"form"} onSubmit={handleSubmit} sx={styles.root}>
      <Typography fontSize="24px" fontWeight="bold" textAlign="center" gutterBottom>
        Crear Usuario
      </Typography>
      <TextField label="Nombre" name="name" onChange={handleChange} />
      <TextField label="Correo Electronico" name="email" onChange={handleChange} />
      <TextField label="Contraseña" name="password" onChange={handleChange} />
      <Select
        options={RolesOptions}
        label="Rol"
        name="role_id"
        defaultValue={Roles.Admin}
        onChange={handleChange}
      />
      <Button variant="contained" fullWidth type="submit">
        Crear Usuario
      </Button>
    </Box>
  );
};
