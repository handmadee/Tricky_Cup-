import React from "react";
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { height } from "../../config/dimension.config";
import { colors } from "../../config/color.config";
import ColumnComponents from "../../components/Column.components";
import { fonts } from "../../config/fonts.config";
import { fontSizes } from "../../config/fontSizes.config";
import { images } from "../../config/tag.image";




function ResuftGame(props) {
    return (
        <View style={[style.result]} >
            <ColumnComponents style={[style.result_container]}>
                <Image source={props.win == true ? images.you_win : images.you_lose} style={[style.tag_resuft]} />
                {/* Button */}
                <TouchableOpacity style={[style.btn_restart]} onPress={props.onPress}>
                    <Text style={style.txt_restart}>
                        tap to restart
                    </Text>
                </TouchableOpacity>
            </ColumnComponents>
        </View>
    )

}


const style = StyleSheet.create({
    result: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        justifyContent: 'flex-end',
        backgroundColor: colors.primary

    },
    result_container: {
        height: Platform.OS === 'android' ? height * .5 : height * .52
    },
    btn_restart: {
        marginVertical: height * .15
    },
    txt_restart: {
        fontSize: fontSizes.text,
        fontFamily: fonts.primary_text,
        lineHeight: fontSizes.lineHeight.lineHeight_3,
        color: colors.text._white,
        textTransform: 'uppercase'
    }
});


export default ResuftGame;