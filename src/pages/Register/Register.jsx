import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { authRegister } from 'redux/auth/operations';
import { RegisterInput, RegisterSubmit, Title } from './Register.styled';
import { Box } from 'utils/Box';

export const Register = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,

    // formState: { errors },
  } = useForm();

  const onSubmit = data => {
    // console.log(data);
    dispatch(authRegister(data));
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
      <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          gridGap={5}
        >
          <Box>
            <Title>Name</Title>
            <RegisterInput type="text" {...register('name')} />
          </Box>
          <Box>
            <Title>Email</Title>
            <RegisterInput type="email" {...register('email')} />
          </Box>
          <Box>
            <Title>Password</Title>
            <RegisterInput type="password" {...register('password')} />
          </Box>
          <RegisterSubmit type="submit" value="REGISTER"/>
        </Box>
      </form>
    </Box>
  );
};
