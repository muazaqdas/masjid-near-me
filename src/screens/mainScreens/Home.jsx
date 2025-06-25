import React, { useContext } from 'react';
import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native';
import AuthContext from '../../store/context/AuthContext';
import { COLOR } from '../../theme';

const {width, height} = Dimensions.get('screen');

const Home = ({navigation}) => {
    const { signOut } = useContext(AuthContext);
    return (
          <View style={{backgroundColor:COLOR.tertiary}}>
            <Pressable style={styles.signOutButton} onPress={signOut}>
                <Text style={styles.signOutButtonText}>
                    Sign Out
                </Text>
            </Pressable>
          </View>

    );
}

const styles = StyleSheet.create({
    signOutButton:{
        paddingHorizontal:22,
        paddingVertical:10,
        backgroundColor:"teal",
        borderRadius:22,
        alignSelf:'center',
    },
    signOutButtonText:{
        fontSize:18,
        color:'#fff',
        fontWeight:'700',
    }
})

export default Home;
