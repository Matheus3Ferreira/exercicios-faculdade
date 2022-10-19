import React, { Component } from 'react'
import { createAppContainer, createStackerNavigator } from 'react-navigation';

import Login from './Login';

const MainNav = createStackerNavigator (
{
    Login: {
        screen: Login,
        navigationOptions: {
            header: null
        }
    }
}
)

export default createAppContainer(MainNav);