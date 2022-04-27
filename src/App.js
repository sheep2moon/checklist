import { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header/index.js";
import { horizon, comodo, beach, cream } from "./themes.js";
import Dashboard from "./views/Dashboard.js";
import Login from "./views/Login.js";
import MainPage from "./views/MainPage.js";

function App() {
  const themes = [
    { name: "horizon", src: horizon },
    { name: "comodo", src: comodo },
    { name: "beach", src: beach },
    { name: "cream", src: cream },
  ];

  const [activeTheme, setActiveTheme] = useState(themes[0].src);

  useEffect(() => {
    const themeName = JSON.parse(localStorage.getItem("pickedTheme"));
    if (themeName) {
      const defaultTheme = themes.find((theme) => theme.name === themeName);
      setActiveTheme(defaultTheme.src);
    }
  }, []);

  return (
    <>
      <ThemeProvider theme={activeTheme}>
        <Router>
          <Header setActiveTheme={setActiveTheme} themes={themes} />
          <Routes>
            <Route exact path="/" element={<MainPage />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
