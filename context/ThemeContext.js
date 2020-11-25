import useLocalStorage from '../utils/hooks/useLocalStorage';

const ThemeContext = React.createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useLocalStorage("theme", null);
    const switchTheme = (newTheme) => {   
    let root = document.body;
    root.classList.remove(theme)
    root.classList.add(newTheme);
    setTheme(newTheme);
    }
    return (
        <ThemeContext.Provider value={{ theme, switchTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContext;
