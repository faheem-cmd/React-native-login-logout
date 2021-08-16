 signOut = async () => {
        await AsyncStorage.clear();
        this.props.navigation.reset({
            index: 0,
            routes: [{ name: 'Login' }],
        })
    }
