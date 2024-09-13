import React from "react";
import { Animated, Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { images } from "../../config/tag.image";


const ItemCup = ({ onPress, isSelected, animationValue, showBall }) => {
    return (
        <TouchableOpacity onPress={onPress} disabled={isSelected}>
            <View>
                {showBall && (
                    <View style={style.ball_container}>
                        <Image source={images.item_ball} style={style.ball_image} />
                    </View>
                )}
                <Animated.View
                    style={[
                        style.item_cup,
                        {
                            transform: [
                                {
                                    translateY: animationValue.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [0, -140],
                                    }),
                                },
                            ],
                        },
                    ]}
                >
                    <Image source={images.item_cup} />
                </Animated.View>
            </View>
        </TouchableOpacity>
    );
}



const style = StyleSheet.create({
    item_cup: {
        width: 100,
        height: 150,
        margin: 10,
        backgroundColor: 'transparent',
    },
    ball_container: {
        position: 'absolute',
        top: 70,
        left: '25%',
        zIndex: -1,
    },
    ball_image: {
        width: 40,
        height: 40,
    },
});

export default ItemCup;