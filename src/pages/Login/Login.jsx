import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { authLogin } from 'redux/auth/operations';
import { Box } from 'utils/Box';
import { LoginInput, LoginSubmit, Title } from './Login.styled';

export const Login = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,

    // formState: { errors },
  } = useForm();

  const onSubmit = data => {
    // console.log(data);
    dispatch(authLogin(data));
  };

  return (
    <Box
      justifyContent="space-between"
      border="1px"
      borderColor="blueLight"
      borderRadius="xl"
      backgroundColor="blue.50"
      p={5}
      mt={14}
      mr="auto"
      ml="auto"
      width="50%"
      minWidth="2xs"
      maxWidth="6xl"
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          gridGap={5}
        >
          <Box>
            <Title>Email :</Title>
            <LoginInput type="email" {...register('email')} />
          </Box>
          <Box>
            <Title>Password :</Title>
            <LoginInput type="password" {...register('password')} />
          </Box>
          <LoginSubmit type="submit" value="LOG IN" />
        </Box>
      </form>
    </Box>
  );
};
