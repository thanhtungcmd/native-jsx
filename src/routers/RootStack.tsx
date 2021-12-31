import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { observer } from 'mobx-react';
import React, { useCallback, useMemo } from 'react';

import { DisplayScreen } from '@/commons/constants';
import MyWebview from '@/containers/MyWebview';
import Splash from '@/containers/Splash';
import Tab1 from '@/containers/Tab1';
import Tab2 from '@/containers/Tab2';
import Tab3 from '@/containers/Tab3';
import ScreenNames from '@/commons/ScreenNames';

const screenOptions = { headerShown: false };

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


const RootStack = observer(() => {

    const getTabBarVisibility = useCallback((route: any) => {
        const routeName = getFocusedRouteNameFromRoute(route);
        return DisplayScreen.VISIBLE;
    }, []);

    const getOption = useCallback(
        ({ route }: any) => {
            return {
                tabBarStyle: {
                    display: getTabBarVisibility(route)
                }
            };
        },
        [getTabBarVisibility]
    );

    const AuthStack = useCallback(() => {
        return (
            <Stack.Navigator screenOptions={screenOptions}>
            </Stack.Navigator>
        );
    }, []);

    const Tabs = useCallback(
        () => (
            <Tab.Navigator
                screenOptions={screenOptions}
            >
                <Tab.Screen
                    name={'Tab1'}
                    component={Tab1}
                    options={getOption}
                />
                <Tab.Screen
                    name={'Tab2'}
                    component={Tab2}
                    options={getOption}
                />
                <Tab.Screen
                    name={'Tab3'}
                    component={Tab3}
                    options={getOption}
                />
            </Tab.Navigator>
        ),
        [getOption]
    );

    const AppStack = useCallback(() => {
        return (
            <Stack.Navigator screenOptions={screenOptions}>
                <Stack.Screen name={ScreenNames.splash} component={Splash} />
                <Stack.Screen name={ScreenNames.tabs} component={Tabs} />
                <Stack.Screen name={ScreenNames.auth} component={AuthStack} />
                <Stack.Screen name={ScreenNames.myWebview} component={MyWebview} />
            </Stack.Navigator>
        );
    }, [AuthStack, Tabs]);

    const renderRootStack = useMemo(() => {
        return <AppStack />;
    }, [AppStack]);
    return renderRootStack;
});

export default RootStack;
