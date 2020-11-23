import useLocalStorage from '../utils/hooks/useLocalStorage';

const ThemeContext = React.createContext();

export const defaultTheme =
  typeof window !== "undefined" &&
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "theme-twitter"
    : "theme-midnightgreen";

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useLocalStorage("theme", defaultTheme);
    const switchTheme = (newTheme) => {
        setTheme(newTheme);
    }
    return (
        <ThemeContext.Provider value={{ theme, switchTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContext;
