import React, { useState } from "react";
import Stepper from "react-native-stepper-ui";
import { View, Alert, Text } from "react-native";
import RegStepOne from "../components/Register/RegStepOne";
import RegStepTwo from "../components/Register/RegStepTwo";
import RegStepThree from "../components/Register/StepThree";
import useAuth from '../Hooks/UseAuth'
import { Heading, HStack, Spinner } from "native-base";



const Register = () => {
  const [active, setActive] = useState(0);
  //register information
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [item, setItem] = useState({ id: 'dkfdk', name: 'Pickup Area' });
  const [fullAddress, setFullAddress] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { createUserWithEmail, error, regSuccess } = useAuth();
  //registraiton process
  const handleSubmit = () => {
    createUserWithEmail(email, password, name, number, "marchent", item.name, fullAddress)
    if (regSuccess) {
      return ''
    }
    else {
      return (
        <HStack space={2} justifyContent="center">
          <Spinner accessibilityLabel="Loading posts" />
          <Heading color="primary.500" fontSize="md">
            Loading
          </Heading>
        </HStack>
      );
    }

  };
  console.log(error, regSuccess)
  const content = [
    <RegStepOne name={name} setName={setName} number={number} setNumber={setNumber} />,
    <RegStepTwo item={item} setItem={setItem} fullAddress={fullAddress} setFullAddress={setFullAddress} />,
    <RegStepThree email={email} setEmail={setEmail} password={password} setPassword={setPassword} />

  ];
  return (
    <View style={{ marginVertical: 20, marginHorizontal: 20 }}>
      <Stepper
        active={active}
        content={content}
        onNext={() => setActive((p) => p + 1)}
        onBack={() => setActive((p) => p - 1)}
        onFinish={handleSubmit}
      />
    </View>
  );
};

export default Register;