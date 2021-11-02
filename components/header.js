import Link from 'next/link';
import SmoothCollapse from "react-smooth-collapse";
import { useState, useContext, useEffect } from 'react';
import ThemePicker from './themePicker';
import ChristmasAnimation from './christmasAnimation';
import { ThemeContext} from 'use-theme-switcher';
import Image from 'next/image'
import LanguageSwitcher from './languageSwitcher';
import IconButton from '@material-ui/core/Button';

const iconStyle = {
  color: "var(--color-text-primary)",
  fontSize: "1.5rem",
}

export default function Header() {
  const { theme, switchTheme } = useContext(ThemeContext);
  const [themeExpanded, setThemeExpanded] = useState(false);
  // useEffect(() => {
  //   if(theme === 'theme-christmas'){
  //     switchTheme('theme-christmas');
  //   }
  // }, [theme]);
  
  return (
    <>
    <div className="bg-white">
        <SmoothCollapse expanded={themeExpanded} className="">
          <div className=" flex flex-wrap items-center justify-between container px-4 py-1 md:py-3 mx-auto mx-auto">
            <div className="flex flex-col items-center sm:items-start text-grey m-auto md:m-0">
            </div>
            <ThemePicker
              theme={theme}
              setTheme={switchTheme}
            />
          </div>
        </SmoothCollapse>
      </div>
      <ChristmasAnimation show={(theme === "theme-christmas")} />
    <header className="bg-primary">
      <div className="flex flex-wrap items-center justify-between container px-4 py-3 mx-auto mx-auto ">
        <Link href="/">
          <a><Image width={210} height={24} src="/infoxicator.png" alt="Infoxicator.com"/></a>
        </Link>
        <div className="flex items-center">
          <LanguageSwitcher />
          <IconButton
            size="large"
            aria-label="Theme Changer"
            className="text-primary font-bold text-2xl"
            onClick={() => {
              setThemeExpanded(!themeExpanded);
            }}
          >{ !themeExpanded ? <ion-icon style={iconStyle} name="brush-outline"/> : <ion-icon style={iconStyle} name="close-circle-outline"/> }</IconButton>
        </div>
      </div>
    </header>
  </>
  )
}
