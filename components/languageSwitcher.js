import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { useRouter } from "next/router"

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
    console.log('locale click', locale);
    router.push('/','/', { locale });
    handleClose();
  }

  return (
    <div>
     <Button
        className="text-primary"
        onClick={handleClick}
        startIcon={<ion-icon name="language-outline" />}
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