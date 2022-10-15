import { Box } from 'utils/Box';
import { HeaderBar } from './Header.styled';
import { HeaderNavigate } from 'components/HeaderNavigate/HeaderNavigate';
import { AuthBlock } from 'components/AuthBlock/AuthBlock';
import { ProfileBlock } from 'components/ProfileBlock/ProfileBlock';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
export const Header = () => {

  const isLoggedIn = useSelector(selectIsLoggedIn);
  // console.log(isLoggedIn);
  return (
    <HeaderBar>
      <Box
        width='100%'
        minWidth='2xs'
        maxWidth='6xl'
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mr="auto"
        ml="auto"
        pr={5}
        pl={5}
        
        >
        <HeaderNavigate/>
        {isLoggedIn ? <ProfileBlock/> : <AuthBlock/>}
        
        
      </Box>
    </HeaderBar>
  );
};



