import { AsyncStorage } from "react-native"
import global from './Global'
import axios from 'axios'


 signIn = () => {
        const data = new FormData()
        data.append('phone', this.state.username)
        data.append('password', this.state.password)
        var config = {
            method: 'post',
            url: global.baseUrl + 'api/auth/login/',
            data: data,
        };
        console.log(config.url, config.data)
        axios(config)
            .then((response) => {
                if (response.data.status === 200) {
                    this.setAsync(response.data.auth.access)
                } else {
                    alert(response.data.message)
                }

                console.log(JSON.stringify(response.data));

            })
            .catch(function (error) {
                console.log(error)

            });
    }



////////////////////////////Asynstorage////////////


 setAsync = async (auth) => {
        console.log(auth, "okoko")
        await AsyncStorage.setItem("MyToken", auth).then(() =>
            this.props.navigation.reset({
                index: 0,
                routes: [{ name: 'HomePage' }],
            })

        )
    }