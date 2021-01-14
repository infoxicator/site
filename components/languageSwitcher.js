import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { useRouter } from "next/router"
import { useCookies } from 'react-cookie';

const iconStyle = {
    color: "var(--color-text-primary)",
    fontSize: "1.5rem",
}

export default function LanguageSwitcher() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [ cookie, setCookie ] = useCookies(['NEXT_LOCALE']);
  const router = useRouter();
  const { locale } = router;

  const LanguageMenu = () => (
    <Menu
          id="language-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={(e) => switchLanguage(e, 'en')}>English</MenuItem>
          <MenuItem onClick={(e) => switchLanguage(e, 'es')}>Español</MenuItem>
        </Menu>
  )

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const switchLanguage = (e, locale) => {
    router.push('/','/', { locale });
    if(cookie.NEXT_LOCALE !== locale){
      setCookie("NEXT_LOCALE", locale, { path: "/" });
    }
    handleClose();
  }

  return (
    <>
    <div className="hidden md:block">
     <Button
        style={{ color: "var(--color-text-primary)" }}
        onClick={handleClick}
        startIcon={<ion-icon style={iconStyle} name="language-outline" />}
        endIcon={<ion-icon style={{ color: "var(--color-text-primary)" }} name="chevron-down-outline"></ion-icon>}
      >{locale}</Button>
      <LanguageMenu />
    </div>
    <div className="md:hidden">
     <IconButton
        style={{ color: "var(--color-text-primary)", minWidth: "auto" }}
        onClick={handleClick}
      ><ion-icon style={iconStyle} name="language-outline" /></IconButton>
      <LanguageMenu />
    </div>
    </>
  );
}