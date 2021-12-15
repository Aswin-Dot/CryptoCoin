import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    ImageBackground,
    ScrollView,
    Dimensions
} from 'react-native';
import { COLORS, SIZES } from "../constants";

import{ Header } from "../components/Home";

const Home = ({ navigation }) => {
    return (
        <ScrollView>
            <View style={{ flex: 1, paddingBottom: 100 }}>
                {/* Header component */}
                <Header/>
            </View>
        </ScrollView>
    )
}

export default Home;