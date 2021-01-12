import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { useRouter } from "next/router"

const iconStyle = {
    color: "var(--color-text-primary)",
    fontSize: "1.5rem",
}

export default function LanguageSwitcher() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const router = useRouter();
  const { locale } = router;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const switchLanguage = (e, locale) => {
    router.push('/','/', { locale });
    handleClose();
  }

  return (
    <div>
     <Button
        style={{ color: "var(--color-text-primary)" }}
        onClick={handleClick}
        startIcon={<ion-icon style={iconStyle} name="language-outline" />}
        endIcon={<ion-icon style={{ color: "var(--color-text-primary)" }} name="chevron-down-outline"></ion-icon>}
      >{locale}</Button>
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
    </div>
  );
}