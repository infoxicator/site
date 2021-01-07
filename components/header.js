import Link from 'next/link';
import SmoothCollapse from "react-smooth-collapse";
import { useState, useContext, useEffect } from 'react';
import ThemePicker from './themePicker';
import ChristmasAnimation from './christmasAnimation';
import { ThemeContext} from 'use-theme-switcher';
import Image from 'next/image'

export default function Header() {
  const { theme, switchTheme } = useContext(ThemeContext);
  const [themeExpanded, setThemeExpanded] = useState(false);
  useEffect(() => {
    if(theme === 'theme-christmas'){
      switchTheme('theme-amongus');
    }
  }, [theme]);
  
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
          <button
            aria-label="Theme Changer"
            className="ml-2"
            onClick={() => {
              setThemeExpanded(!themeExpanded);
            }}
          >
            <h1 className="text-2xl font-bold  mt-0 mb-0 text-primary">
              { !themeExpanded ? <ion-icon name="brush-outline"/> : <ion-icon name="close-circle-outline"/> }
            </h1>
          </button>
        </div>
      </div>
    </header>
  </>
  )
}
