import React from "react";
import ReactTooltip from "react-tooltip";

const myThemes = [
    {
        id: "midnightgreen",
        name: "Midnight Green",
        type: "light",
        unlocked: true,
    },
    {
        id: "spacegray",
        name: "Space Gray",
        type: "light",
        unlocked: true
    },
    {
        id: "twitter",
        name: "Twitter Dark",
        type: "dark",
        unlocked: true
    },
    {
        id: "reddead",
        name: "Red Dead Redemption",
        type: "dark",
        unlocked: true
    },
    {
        id: "fallguys",
        name: "Fall Guys",
        type: "unlockable",
        unlocked: true
    },
    {
        id: "amongus",
        name: "Among Us",
        type: "unlockable",
        unlocked: true
    },
]

const ThemePicker = ({ theme, setTheme, small }) => {
  return (
    <div className="flex m-auto md:m-0">
      <ReactTooltip />
      {myThemes.map((item, index) => {
        if (item.unlocked) {
          return (
            <div key={item.id} className={`theme-${item.id}`}>
              <button
                aria-label={`Theme ${item.name}`}
                className={`h-10 w-8 my-1 ${
                  index !== myThemes.length ? "mr-4" : ""
                } transition duration-500  ease-in-out transform  ${
                  theme === `theme-${item.id}` ? "" : "hover:scale-110"
                }`}
                onClick={() => setTheme(`theme-${item.id}`)}
              >
                <div
                  data-tip={`${item.name}`}
                  className={`h-8 w-8 bg-primary  rounded-full my-2 md:my-0 flex items-center justify-center  ${
                    theme === `theme-${item.id}`
                      ? " border-4 border-accent"
                      : ""
                  }`}
                >
                  {item.type === "light" && (
                      <div className="text-white text-primary opacity-75">
                        <ion-icon style={{display:'block'}} name="sunny-outline" />
                      </div>
                  )}
                  {item.type === "dark" && (
                    <div
                      className="text-white text-primary opacity-75">
                        <ion-icon style={{display:'block'}} name="moon-outline" />
                    </div>
                  )}
                  {item.type === "unlockable" && (
                    <div className="text-white text-primary opacity-75">
                        <ion-icon style={{display:'block'}} name="gift-outline"/>
                    </div>
                  )}
                </div>
              </button>
            </div>
          );
        } else {
          return (
            <div className={``}>
              <button
                disabled={true}
                aria-label={`Theme Locked`}
                className={`h-10 w-8 my-1 ${
                  index !== myThemes.length ? "mr-4" : ""
                } transition duration-500  ease-in-out transform opacity-75`}
              >
                <div
                  data-tip={`Find this theme by exploring the site.`}
                  className={`h-8 w-8 bg-grey rounded-full my-2 md:my-0 flex items-center justify-center`}
                >
                  <ion-icon name="lock-closed-outline" />
                </div>
              </button>
            </div>
          );
        }
      })}
    </div>
  );
};

export default ThemePicker;