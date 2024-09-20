import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";


type CardProps={
    onPress?: () => void,
    text: string,
    count: number,
    animColor?: string,
}

const Cards: React.FC<CardProps>=({onPress, text, count, animColor="#ef3f49"})=>{
    return onPress ? <Pressable onPress={onPress}>
        <View style={styles.cardContainer}>
            <Text style={styles.count}>{count}</Text>
            <Text style={styles.text}>{text}</Text>
            <View style={{backgroundColor: animColor,...styles.absAnim}}></View>
        </View>
    </Pressable> : <View style={styles.cardContainer}>
        <Text>{text}</Text>
        <View style={{backgroundColor: animColor,...styles.absAnim}}></View>
    </View>
}

const styles = StyleSheet.create({
    cardContainer:{
        width: 180,
        height: 100,
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 15,
        elevation: 5,
        shadowColor: '#888',
        shadowOffset:{width: 0, height: 10},
        shadowOpacity: 0.3,
        shadowRadius: 5
    },
    absAnim:{
        position: 'absolute',
        width: 5,
        height: 40,
        borderRadius: 10,
        top: 5,
        left: -2,
    },
    count:{
        fontSize: 24,
        fontWeight: "400"
    },
    text:{
        fontSize: 12,
    }
})

export default Cards