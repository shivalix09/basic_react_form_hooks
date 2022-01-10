//save file in git
import {
  Button,
  Card,
  FormControl,
  FormLabel,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

const Login = () => {
  const [state, setState] = useState({ email: "", password: "" });
  const handleChange = (e) => {
    console.log(e.target.value);
    const { id, value } = e.target;
    setState({ ...state, [id]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
  };
  return (
    <div>
      <Paper
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          width: "100vw",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Card elevation={2} style={{ padding: "15px" }}>
          <Typography
            variant="h5"
            color="primary"
            textAlign="center"
            marginBottom="20px"
          >
            Login
          </Typography>
          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              width: "fit-content",
            }}
          >
            <FormControl>
              <FormLabel>Email</FormLabel>
              <TextField
                id="email"
                type="text"
                name="email"
                variant="standard"
                values={state.email}
                onChange={handleChange}
              ></TextField>
            </FormControl>

            <FormControl>
              <FormLabel>Password</FormLabel>
              <TextField
                id="password"
                type="password"
                name="password"
                variant="standard"
                values={state.password}
                onChange={handleChange}
              ></TextField>
            </FormControl>
            <Button
              type="submit"
              variant="contained"
              style={{ marginTop: "10px" }}
            >
              Login
            </Button>
          </form>
        </Card>
      </Paper>
    </div>
  );
};

export default Login;
