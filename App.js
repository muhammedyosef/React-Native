import React from "react";
import { NativeBaseProvider, StatusBar} from "native-base";
import { UsersProvider } from "./app/context/context";
import AppRouter from './app/app-router';
export default () => {
  return (
    <UsersProvider>
      <NativeBaseProvider>
        <StatusBar hidden={true} />
        <AppRouter/>
      </NativeBaseProvider>
    </UsersProvider>
  );
};
