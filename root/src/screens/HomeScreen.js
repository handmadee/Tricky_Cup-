import * as React from 'react';
import { ImageBackground, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { width, height } from '../config/dimension.config';
import ColumnComponents from '../components/Column.components';
import { images } from '../config/tag.image';

function HomeScreen({ navigation }) {
    const hanlerToPlayGame = () => {
        return navigation.navigate('GamePlay');
    };
    return (
        <ImageBackground style={style.bgr_img} source={images.bgr_start}>
            <ColumnComponents alignItems='center' justifyContent='center' style={style.container}>
                {/* Logo */}
                <Image style={style.btn_tap} source={images.logo} />
                {/* Play Button */}
                <TouchableOpacity onPress={hanlerToPlayGame}>
                    <Image style={style.btn_play} source={images.tap_play} />
                </TouchableOpacity>
            </ColumnComponents>
        </ImageBackground>
    );
};
const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bgr_img: {
        flex: 1,
        width: width,
        height: height,
    },
    btn_tap: {
        width: 304,
        height: 132,
        marginBottom: 20,
    },
    btn_play: {
        width: 240,
        height: 36,
    },
});

export default HomeScreen;