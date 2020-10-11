import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from 'src/screens/home';

const Stack = createStackNavigator();

const MainStack=()=>{
return(
 <Stack.Navigator>
            <Stack.Screen name={"Home"}
                          component={Home}/>
</Stack.Navigator>
);
}

export default MainStack;

