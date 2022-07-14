import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header/index.js";
import { setTheme } from "./redux/themeSlice.js";
import RequireAuth from "./router/RequireAuth.js";
import RequireUnauth from "./router/RequireUnauth.js";
import Toasts from "./toast/Toasts.js";
import Dashboard from "./views/Dashboard.js";
import Login from "./views/Login.js";
import MainPage from "./views/MainPage.js";
import Register from "./views/Register.js";

function App() {
    const dispatch = useDispatch();
    const { theme } = useSelector(store => store.theme);

    useEffect(() => {
        console.log(localStorage.getItem("pickedTheme"));
        const themeName = localStorage.getItem("pickedTheme");
        if (themeName) {
            dispatch(setTheme(themeName));
        }
    }, [dispatch]);

    return (
        <>
            <ThemeProvider theme={theme}>
                <Toasts />
                <Router>
                    <Header />
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
        </>
    );
}

export default App;
