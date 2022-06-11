import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Header = ({title}) => { 
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>
                {title}
            </Text>
        </View>
    )
 };

const styles = StyleSheet.create({
    header:{
        width: '100%',
        height: 90,
        alignItems: 'center',
        justifyContent: 'center', 
    },
    headerText:{
        color: 'black',
        fontSize: 30, 
    },
    
})
export default Header

