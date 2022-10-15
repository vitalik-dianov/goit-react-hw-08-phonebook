import { Header } from 'components/Header/Header';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {Box} from 'utils/Box'
export const SharedLayout = () => {
  return (
    <>
      <Header/>
      <Suspense fallback={<div>Loading</div>}>
        <Box
         width='100%'
         minWidth='2xs'
         maxWidth='6xl'
        //  display="flex"
        //  justifyContent="space-between"
         alignItems="center"
         mr="auto"
         ml="auto"
         pr={5}
         pl={5}>
          
        <Outlet></Outlet>
        </Box>
      </Suspense>
    </>
  );
};
