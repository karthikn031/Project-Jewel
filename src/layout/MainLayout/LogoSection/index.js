import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import efit_logo from '../../../assets/images/efit_logo.png';

// material-ui
import { ButtonBase } from '@mui/material';

// project imports
import config from 'config';
import Logo from 'ui-component/Logo';
import { MENU_OPEN } from 'store/actions';

// ==============================|| MAIN LOGO ||============================== //

const LogoSection = () => {
  const defaultId = useSelector((state) => state.customization.defaultId);
  const dispatch = useDispatch();
  return (
    <ButtonBase disableRipple onClick={() => dispatch({ type: MENU_OPEN, id: defaultId })} component={Link} to={config.defaultPath}>
      {/* <Logo /> */}
      <img src={efit_logo} alt="efit_logo" style={{ width: '150px', height: '58px' }} />
    </ButtonBase>
  );
};

export default LogoSection;
