import React from 'react';
import { TextField, Button, Container, Box } from '@mui/material';

function App() {
  return (
    <Container maxWidth="sm">
      <Box
        component="form"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          mt: 4,
        }}
      >
        <TextField
          label="Nombre"
          variant="outlined"
          fullWidth
          required
        />
        <TextField
          label="Apellido"
          variant="outlined"
          fullWidth
          required
        />
        <TextField
          label="Email"
          type="email"
          variant="outlined"
          fullWidth
          required
        />
        <Button variant="contained" color="primary" type="submit">
          Enviar
        </Button>
      </Box>
    </Container>
  );
}

export default App;
