import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom' 
import {useState,useEffect} from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import axios from 'axios';




function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://onestepcode.com/creating-a-material-ui-form/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };
  const [studName,setName]=useState("");
  const [studPass,setPass]=useState("");
  const [studList,setStudList]=useState([]);
  useEffect(()=>{
    axios.get("/display").then((response)=>{
      setStudList(response.data);
    })
  },[]);
  const addToList=()=>{
    axios.post("/newstud",{studName:studName, studPass:studPass,});
    console.log(studName,studPass);
  }
  const [verfied, setVerifed] = useState(false);

  //recaptcha function
  function onChange(value) {
    console.log("Captcha value:", value);
    setVerifed(true);
  }
  return (
    <center>
    <div className='PJM' style={{ padding: 30}}>
    <Card className='card' sx={{ maxWidth: 500, minHeight: 600 ,margin: 8, border: '2px outset aqua', borderRadius: 5, alignItems: "center", justifyContent: "center"}}>
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent:'center',
          }}
        >
          <Avatar sx={{ m: 0.5, bgcolor: 'secondary.main' }}>
          </Avatar>
          <Typography component="h1" variant="h4" fontFamily={'Algeria'}>
            Login
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              sx={{
                width: { sm: 200, md: 300 },
                "& .MuiInputBase-root": {
                    height: 50
                }
            }}
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(event)=>setName(event.target.value)}
            />
            <TextField
              margin="normal"
              required
              sx={{
                width: { sm: 200, md: 300 },
                "& .MuiInputBase-root": {
                    height: 50
                }
            }}
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(event)=>setPass(event.target.value)}
            />
             

             <ReCAPTCHA
          sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
          onChange={onChange}
        />

            
            <Button  href='/Nav' id='sign'
            onClick={addToList}
              type="submit"
              fullWidth
              variant="contained"
              disabled={!verfied}
              style = {{backgroundColor:'green'}}
              sx={{ mt: 3, mb: 2 }}
            >
              Log In
            </Button>
            <Button href='/' id='cancel'
              type="submit"
              fullWidth
              style = {{backgroundColor:'red'}}
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
             Cancel
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  <Link to="/ForgetPassword">Forgot password?</Link>
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                 <Link to="/SignUp">{"Don't have an account? Sign Up"}</Link> 
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
    </Card>
    </div>
    </center>
  );
}