import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TransitionPresets} from '@react-navigation/stack';
import LoginPage from '../Pages/InitialScreens/LoginPage/LoginPage';
import SignupPageStep1 from '../Pages/InitialScreens/SignupPage/SignupPageStep1';
import SignupPageStep2 from '../Pages/InitialScreens/SignupPage/SignupPageStep2';
import ForgotPasswordStep1 from '../Pages/InitialScreens/ForgotPassword/ForgotPasswordStep1';
import ForgotPasswordStep2 from '../Pages/InitialScreens/ForgotPassword/ForgotPasswordStep2';
import ForgotPasswordStep3 from '../Pages/InitialScreens/ForgotPassword/ForgotPasswordStep3';
import WelcomePage from '../Pages/InitialScreens/WelcomePage/WelcomePage';
import NetInfo from '@react-native-community/netinfo';
import NoInternetPage from '../Pages/NoInternetPage/NoInternetPage';
import HomePage from '../Pages/MainScreens/HomePage/HomePage';
import RecentPage from '../Pages/MainScreens/RecentPage/RecentPage';
import ServicePage from '../Pages/MainScreens/ServicePage/ServicePage';
import ProfilePage from '../Pages/MainScreens/ProfilePage/ProfilePage';
import {useLoginContext} from '../assets/contexts/LoginContext';
import Footer from '../layouts/Footer/Footer';
import {View, ScrollView, StyleSheet} from 'react-native';
import Menu from '../layouts/Menu/Menu';
import Notifications from '../layouts/Notifications/Notifications';
import AboutScreen from '../Pages/MainScreens/AboutScreen/AboutScreen';
import SupportScreen from '../Pages/MainScreens/SupportScreen/SupportScreen';
import CoinsScreen from '../Pages/MainScreens/CoinsScreen/CoinsScreen';
import SettingScreen from '../Pages/MainScreens/SettingScreen/SettingScreen';
import FavScreen from '../Pages/MainScreens/FavScreen/FavScreen';
import DetectScreen from '../Pages/MainScreens/DetectScreen/DetectScreen';
import SelectScreen from '../Pages/MainScreens/DetectScreen/SelectScreen';
const Stack = createNativeStackNavigator();

const Routes = () => {
  const [isConnected, setIsConnected] = useState(true);
  const {isLogin} = useLoginContext();

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
    });

    return () => {
      unsubscribe();
    };
  }, []);
  const mainscreens = [
    {
      name: 'WelcomeScreen',
      component: WelcomePage,
    },
    {
      name: 'HomeScreen',
      component: HomePage,
    },
    {
      name: 'DetectScreen',
      component: DetectScreen,
    },
    {
      name: 'SelectScreen',
      component: SelectScreen,
    },
    {
      name: 'RecentScreen',
      component: RecentPage,
    },
    {
      name: 'ServiceScreen',
      component: ServicePage,
    },
    {
      name: 'ProfileScreen',
      component: ProfilePage,
    },
    {
      name: 'AboutScreen',
      component: AboutScreen,
    },
    {
      name: 'SupportScreen',
      component: SupportScreen,
    },
    {
      name: 'CoinsScreen',
      component: CoinsScreen,
    },
    {
      name: 'SettingScreen',
      component: SettingScreen,
    },
    {
      name: 'FavScreen',
      component: FavScreen,
    },
  ];
  const initialscreens = [
    {
      name: 'LoginScreen',
      component: LoginPage,
    },
    {
      name: 'Signup1Screen',
      component: SignupPageStep1,
    },
    {
      name: 'Signup2Screen',
      component: SignupPageStep2,
    },
    {
      name: 'ForgotPassword1Screen',
      component: ForgotPasswordStep1,
    },
    {
      name: 'ForgotPassword2Screen',
      component: ForgotPasswordStep2,
    },
    {
      name: 'ForgotPassword3Screen',
      component: ForgotPasswordStep3,
    },
  ];
  return (
    <NavigationContainer>
      {isConnected ? (
        isLogin ? (
          <>
            <Stack.Navigator initialRouteName="WelcomeScreen">
              {mainscreens.map(index => (
                <Stack.Screen
                  key={index.name}
                  name={index.name}
                  component={index.component}
                  options={{
                    headerShown: false,
                  }}
                />
              ))}
            </Stack.Navigator>
            {/* <Footer /> */}
            <Menu />
            <Notifications />
          </>
        ) : (
          <Stack.Navigator initialRouteName="LoginScreen">
            {initialscreens.map(index => (
              <Stack.Screen
                key={index.name}
                name={index.name}
                component={index.component}
                options={{
                  headerShown: false,
                }}
              />
            ))}
          </Stack.Navigator>
        )
      ) : (
        <Stack.Navigator initialRouteName="NoInternetScreen">
          <Stack.Screen
            name="NoInternetScreen"
            component={NoInternetPage}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default Routes;
