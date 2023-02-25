import { Text } from '@rneui/base';
import React from 'react';
import {View, StyleSheet} from 'react-native';

const Home = ({route}) => {
    console.log(route.params.user);
    return (
        <View style={styles.container}>
            <Text variant="h1">Home </Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        paddingTop: 50,
    }
})

export default Home;
