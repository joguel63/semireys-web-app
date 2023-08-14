import { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import { update } from "modules/userManagement/services/user.services";
import { styles } from "./styles";
import { User } from "modules/userManagement/types";

type EditUser = {
  name: string;
  email: string;
  password: string;
};
export const EditUserComponent: React.FC<{ handleClose: () => void; userInfo: User }> = ({
  handleClose,
  userInfo,
}) => {
  const [data, setData] = useState<EditUser>(
    Object({
      email: userInfo.email,
      name: userInfo.name,
    })
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    update(userInfo.id, data).then(() => {
      handleClose();
    });
  };

  return (
    <Box component={"form"} onSubmit={handleSubmit} sx={styles.root}>
      <Typography fontSize="24px" fontWeight="bold" textAlign="center" gutterBottom>
        Editar Usuario
      </Typography>
      <TextField label="Nombre" name="name" onChange={handleChange} defaultValue={userInfo.name} />
      <TextField
        label="Correo Electronico"
        name="email"
        onChange={handleChange}
        defaultValue={userInfo.email}
      />
      <TextField label="Contraseña" name="password" onChange={handleChange} />
      <Button variant="contained" fullWidth type="submit">
        Editar Usuario
      </Button>
    </Box>
  );
};
