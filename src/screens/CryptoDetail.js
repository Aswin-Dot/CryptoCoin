import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    ScrollView
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import { BackHeader } from '../components/shared';

const CryptoDetail = ({ navigation }) => {
    return (
        <SafeAreaView>
            {/* Back Header */}
            <BackHeader favorite={true}/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    }
})

export default CryptoDetail;