
import React from 'react';
import { View, StyleSheet} from 'react-native';


const MainLayout = ({ children, footer}) => {
    
    return (
        <View style={styles.container}>
        <View style={styles.container}>{children}</View>
        <View style={styles.footer}>{footer}</View>
      
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
});

export default MainLayout;