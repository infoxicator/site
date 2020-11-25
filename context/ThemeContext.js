import useLocalStorage from '../utils/hooks/useLocalStorage';
import { COLORS } from '../styles/colors';

const ThemeContext = React.createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useLocalStorage("theme", null);
    const switchTheme = (newTheme) => {
        let root = document.documentElement;
        Object.entries(COLORS).forEach(([name, colorByTheme]) => {
            const cssVarName = `--color-${name}`;
        
            root.style.setProperty(cssVarName, colorByTheme[newTheme]);
          });
        setTheme(newTheme);
    }
    return (
        <ThemeContext.Provider value={{ theme, switchTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContext;
