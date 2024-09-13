import React, { useState, useEffect, useRef } from "react";
import { Animated, ImageBackground, StyleSheet, } from "react-native";
import { width, height } from "../../config/dimension.config";
import Row from "../../components/Row.components";
import ResuftGame from "./ResultGame";
import { images } from "../../config/tag.image";
import ItemCup from "./ItemCup";


// const ItemCup = ({ onPress, isSelected, animationValue, showBall }) => {
//     return (
//         <TouchableOpacity onPress={onPress} disabled={isSelected}>
//             <View>
//                 {showBall && (
//                     <View style={style.ball_container}>
//                         <Image source={images.item_ball} style={style.ball_image} />
//                     </View>
//                 )}
//                 <Animated.View
//                     style={[
//                         style.item_cup,
//                         {
//                             transform: [
//                                 {
//                                     translateY: animationValue.interpolate({
//                                         inputRange: [0, 1],
//                                         outputRange: [0, -140],
//                                     }),
//                                 },
//                             ],
//                         },
//                     ]}
//                 >
//                     <Image source={images.item_cup} />
//                 </Animated.View>
//             </View>
//         </TouchableOpacity>
//     );
// }

function GamePlay() {
    const [result, setResult] = useState(null);
    const [ballPosition, setBallPosition] = useState(null);
    const [selectedCup, setSelectedCup] = useState(null);
    const [cups, setCups] = useState([0, 1, 2]);

    const animationValues = cups.map(() => useRef(new Animated.Value(0)).current);

    useEffect(() => {
        resetBall();
    }, []);

    const resetBall = () => {
        const randomPos = Math.floor(Math.random() * 3);
        setBallPosition(randomPos);
        setResult(null);
        setSelectedCup(null);
        animationValues.forEach((animation) => {
            animation.setValue(0);
        });
    };

    const onCupSelect = (index) => {
        setSelectedCup(index);
        const isCorrect = index === ballPosition;
        setResult(isCorrect);
        Animated.timing(animationValues[index], {
            toValue: 1,
            duration: 200,
            useNativeDriver: true,
        }).start();
    };

    const onRestart = () => {
        resetBall();
    };

    return (
        <ImageBackground style={style.bgr_img} source={images.bgr_gameplay}>
            <Row styles={[style.row]} alignItems="center">
                {cups.map((cup, index) => (
                    <ItemCup
                        key={index}
                        onPress={() => onCupSelect(index)}
                        isSelected={selectedCup !== null}
                        animationValue={animationValues[index]}
                        showBall={selectedCup === index && ballPosition === index}
                    />
                ))}
            </Row>
            {result != null && <ResuftGame win={result} onPress={onRestart} />}
        </ImageBackground>
    );
}

const style = StyleSheet.create({
    bgr_img: {
        flex: 1,
        width: width,
        height: height,
    },
    row: {
        alignSelf: 'center',
        width: width * 0.9,
        position: 'absolute',
        top: height * 0.5,
    },
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

export default GamePlay;