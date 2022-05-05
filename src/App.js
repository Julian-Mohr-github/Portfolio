
import React, {useState, useMemo } from 'react';
import BinaryCodeName from "./components/BinaryCodeName/BinaryCodeName";
import Lifetracker from "./components/Calculator/Lifetracker";
import Navbar from './components/Header/Navbar';
import { ThemeProvider, Container, Box,CssBaseline, useMediaQuery  } from '@mui/material';
import { createTheme } from "@mui/material/styles";
import getDesignTokens from './Styles/Styles';
import Footer from './components/Footer/Footer';
import ScrollToTop from './Helper/ScrollToTop';



//MainComponent
export default function App(props) {

  //DarkMode
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [mode, setMode] = useState(prefersDarkMode ? 'dark' : 'light')
  const colorMode= useMemo(()=>({
    toggleMode: ()=>{
      setMode(prevMode => prevMode === 'light' ? 'dark' : 'light');
  },}),[],);


 const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);


 //Components
  return (
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
          backgroundColor: (theme) =>
                theme.palette.mode === 'light'
                  ? '#F7F9FC'
                  : 'black',
            }}
        >
        <CssBaseline/>
              <div div style={{minWidth: '300px'}} id="back-to-top-anchor" >
                <Navbar colorMode={colorMode} mode={mode} />
                  <Container variant= 'NewComponent' maxWidth='lg' sx={{marginTop: 10}} >
                        <BinaryCodeName/>
                        <Lifetracker/>
                  </Container>
              </div>
            <ScrollToTop />
            <Footer/>
          </Box>
      </ThemeProvider>
  );
}