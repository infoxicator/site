import Link from 'next/link';
import SmoothCollapse from "react-smooth-collapse";
import { useState, useEffect } from 'react';
import useLocalStorage from '../utils/hooks/useLocalStorage';
import ThemePicker from './themePicker';
import ChristmasAnimation from './christmasAnimation';

export const defaultTheme =
  typeof window !== "undefined" &&
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "theme-twitter"
    : "theme-midnightgreen";

export default function Header() {
  const [theme, setTheme] = useLocalStorage("theme", defaultTheme);
  const [themeExpanded, setThemeExpanded] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    let currentCss = document.getElementById("site-content").className;
    currentCss = currentCss.replace(/theme-\w*/g, "") + theme;
    document.getElementById("site-content").className = currentCss;
    if (typeof window !== "undefined") {
      window.theme = theme;
    }
    (theme === "theme-christmas") ? setShowAnimation(true) : setShowAnimation(false);
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
              setTheme={setTheme}
            />
          </div>
        </SmoothCollapse>
      </div>
      <ChristmasAnimation show={showAnimation} />
    <header className="bg-primary">
      <div className="flex flex-wrap items-center justify-between container px-4 py-3 mx-auto mx-auto ">
        <Link href="/">
          <a><img src="/infoxicator.png" alt="Infoxicator.com"/></a>
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
