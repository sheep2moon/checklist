import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header/index.js";
import { store } from "./redux/store.js";
import RequireAuth from "./router/RequireAuth.js";
import RequireUnauth from "./router/RequireUnauth.js";
import { themes } from "./themes.js";
import Toasts from "./toast/Toasts.js";
import Dashboard from "./views/Dashboard.js";
import Login from "./views/Login.js";
import MainPage from "./views/MainPage.js";
import Register from "./views/Register.js";

function App() {
    const [activeTheme, setActiveTheme] = useState(themes[0]);

    useEffect(() => {
        const themeName = JSON.parse(localStorage.getItem("pickedTheme"));
        if (themeName) {
            const defaultTheme = themes.find(theme => theme.name === themeName);
            setActiveTheme(defaultTheme);
        }
    }, []);

    return (
        <>
            <Provider store={store}>
                <ThemeProvider theme={activeTheme}>
                    <Toasts />
                    <Router>
                        <Header setActiveTheme={setActiveTheme} themes={themes} />
                        <Routes>
                            <Route exact path="/" element={<MainPage />} />
                            <Route element={<RequireAuth />}>
                                <Route exact path="/dashboard" element={<Dashboard />} />
                            </Route>
                            <Route element={<RequireUnauth />}>
                                <Route exact path="/login" element={<Login />} />
                                <Route exact path="/register" element={<Register />} />
                            </Route>
                        </Routes>
                    </Router>
                </ThemeProvider>
            </Provider>
        </>
    );
}

export default App;
