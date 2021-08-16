import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { AsyncStorage } from "react-native"



class Authcheck extends React.Component {




    componentDidMount() {
        this.authLogin();
    }


    authLogin = async () => {
        try {
            const GetId = await AsyncStorage.getItem("MyToken");
            // alert(GetId);
            console.log(GetId)
            {GetId ?  this.props.navigation.navigate('HomePage'):
            this.props.navigation.navigate('Login')

        }
        }
        catch (error) {
            alert(error);
        }
    };


    render() {

        


        return null;
    }
}





export default Authcheck