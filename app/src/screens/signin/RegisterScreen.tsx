import React from 'react';
import {Button, TextInput, View} from 'react-native';
import type {AuthStackNavigationProp} from '~/navigators/types';
import auth from '@react-native-firebase/auth';
import Font from '~/components/ui/Font';
import tw from '~/lib/tailwind';
import Container from '~/components/ui/Container';
import {useRegisterUserMutation} from '~/generated/graphql';
import {useRootContext} from '~/context/RootContext';

const RegisterScreen: React.FC<AuthStackNavigationProp<'Register'>> = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const {setIsLoggedIn} = useRootContext();
  const currentUser = auth().currentUser;
  const [registerUser] = useRegisterUserMutation();

  React.useEffect(() => {
    setName(currentUser?.displayName || '');
    setEmail(currentUser?.email || '');
  }, [currentUser]);

  const onRegister = () => {
    registerUser({
      variables: {
        name,
        email,
      },
      onCompleted: () => {
        setIsLoggedIn(true);
      },
    });
  };

  return (
    <Container>
      <Font className="text-xl">RegisterScreen</Font>
      <View style={tw`mt-5`} />
      <View>
        <View>
          <Font>Name</Font>
          <TextInput
            style={tw`bg-gray-500 text-white p-2`}
            defaultValue={currentUser?.displayName || ''}
            onChangeText={setName}
          />
        </View>
        <View style={tw`mt-5`} />
        <View>
          <Font>Email</Font>
          <TextInput
            style={tw`bg-gray-500 text-white p-2`}
            defaultValue={currentUser?.email || ''}
            onChangeText={setEmail}
          />
        </View>
        <Button title="Register" onPress={onRegister} />
      </View>
    </Container>
  );
};

export default RegisterScreen;
