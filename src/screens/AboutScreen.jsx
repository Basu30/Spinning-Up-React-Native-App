import MainLayout from '../layouts/MainLayout';
import React from 'react';
import { Text, Button } from 'react-native';

const AboutScreen = ({navigation}) => {
    const getCurrentDate = () => {
        let date = new Date().getDate();
        let month = new Date().getMonth() + 1;
        let year = new Date().getFullYear();

        return date + '/' + month + '/' + year;
    }

    return (
        <MainLayout>
            <Text>Mobile App Assignment</Text>
            <Text>Batsuren Damdinsuren</Text>
            <Text>Today's date is {getCurrentDate()}</Text> 
            <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
        </MainLayout>  
    )
}

export default AboutScreen;