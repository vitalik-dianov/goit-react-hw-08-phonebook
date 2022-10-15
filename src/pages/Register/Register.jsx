import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { authRegister } from 'redux/auth/operations';
import { RegisterInput, RegisterSubmit, Title } from './Register.styled';
import { Box } from 'utils/Box';

import { Notify } from 'notiflix';
export const Register = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = data => {
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
            <RegisterInput
              type="text"
              {...register('name', { required: true })}
            />
            {errors.name && Notify.warning('Name required')}
          </Box>
          <Box>
            <Title>Email</Title>
            <RegisterInput
              type="email"
              {...register('email', { required: true })}
            />
            {errors.email && Notify.warning('Email required')}
          </Box>
          <Box>
            <Title>Password</Title>
            <RegisterInput
              type="password"
              {...register('password', {
                required: true,
                minLength: 7,
              })}
            />
            {errors.password &&
              Notify.warning('Must be at least 7 characters long')}
          </Box>
          <RegisterSubmit type="submit" value="REGISTER" />
        </Box>
      </form>
    </Box>
  );
};
