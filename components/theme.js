import React from 'react';
import PropTypes from 'prop-types';
import Terser from 'terser';

function setColorsByTheme(defaultDarkTheme, defaultLightTheme, themeStorageKey) {
    var mql = window.matchMedia('(prefers-color-scheme: dark)');
    var prefersDarkFromMQ = mql.matches;
    var persistedPreference = localStorage.getItem(themeStorageKey);
    var root = document.body;
    var colorMode = '';

    var hasUsedToggle = typeof persistedPreference === 'string';
  
    if (hasUsedToggle) {
      colorMode = JSON.parse(persistedPreference);
    } else {
      colorMode = prefersDarkFromMQ ? defaultDarkTheme : defaultLightTheme;
      localStorage.setItem(themeStorageKey, JSON.stringify(colorMode));
    }

    root.classList.add(colorMode);
  };

  const ThemeScriptTag = ({
      defaultDarkTheme,
      defaultLightTheme,
      themeStorageKey,
      minify,
    }) => {
      const themeScript = `(${setColorsByTheme})(
        '${defaultDarkTheme}',
        '${defaultLightTheme}',
        '${themeStorageKey}',
      )`;
    
      const minifiedThemeSrcript = minify
        ? Terser.minify(themeScript).code || ''
        : themeScript;
    
      // eslint-disable-next-line react/no-danger
      return <script dangerouslySetInnerHTML={{ __html: minifiedThemeSrcript }} />;
    }

    ThemeScriptTag.propTypes = {
      defaultDarkTheme: PropTypes.string,
      defaultLightTheme: PropTypes.string,
      themeStorageKey: PropTypes.string,
      minify: PropTypes.bool,
    };
    
    ThemeScriptTag.defaultProps = {
      defaultDarkTheme: 'theme-twitter',
      defaultLightTheme: 'theme-midnightgreen',
      themeStorageKey: 'theme',
      minify: true,
    };

export default ThemeScriptTag;