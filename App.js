/*
 Samba Siva Rao K
 */

import React, {Component} from 'react';
import {createStackNavigator, createAppContainer} from "react-navigation";
import Categories from "./Screens/Categories";
import List from "./Screens/List";

const AppNavigator = createStackNavigator({
        categories: Categories,
        list: List,
    },
    {
        initialRouteName: "categories"
    });

export default createAppContainer(AppNavigator);
