import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

const InstructorBottomBar = ({ page, id }) => {
    const navigation = useNavigation();

    const isPageActive = (currentPage) => page === currentPage;

    const renderIcon = (iconName, pageName) => (
      <MaterialIcons
            name={iconName}
            size={24}
            style={isPageActive(pageName) ? styles.activeIcon : styles.icon1}
            onPress={() => navigation.navigate(pageName, { id: id })}
        />
    );
    return (
        <View style={styles.container}>
            {renderIcon('home', 'InsructerHome')}
            {renderIcon('chat', 'InsructerChat')}
            {renderIcon('supervised-user-circle', 'InsructerDetails')}
        </View>
    );
}

export default InstructorBottomBar;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        bottom: '1%',
        width: '100%',
        zIndex: 100,
        borderTopWidth: 1,
        paddingVertical: 10,
        alignItems: 'center',
        position: 'absolute',
    },
    icon1: {
        fontSize: 30,
        padding: 10,
        color: 'black'
    },
    activeIcon: {
        backgroundColor: 'black',
        borderRadius: 50,
        fontSize: 30,
        padding: 10,
        color: 'white'
    },
});
