import { Home } from './pages/home'
import { Places } from './pages/places';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'

const Tab = createBottomTabNavigator();

export function Routes(){
    return(
        <Tab.Navigator>
            <Tab.Screen
            name='Home'
            component={Home}
            options={{
                tabBarIcon: ({focused, size, color}) =>{
                    if(focused){
                        return <Ionicons size={size} color={color} name='fast-food'/>
                    }
                    return <Ionicons size={size} color={color} name='fast-food-outline'/>

                }
            }}
            />

            <Tab.Screen
            name='Places'
            component={Places}
            options={{
                tabBarIcon: ({focused, color, size}) => {
                    if(focused){
                        return <Ionicons size={size} color={color} name='storefront'/>
                    }
                    return <Ionicons size={size} color={color} name='storefront-outline'/>
                }
                 
            }}
            />

            
        </Tab.Navigator>
    )
 
}