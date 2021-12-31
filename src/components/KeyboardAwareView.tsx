import React from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet } from 'react-native';
import {
    KeyboardAwareScrollView as KeyboardAwareScrollViewIos, KeyboardAwareScrollViewProps
} from 'react-native-keyboard-aware-scroll-view';

const ScrollViewWithKeyboard = (
    props: KeyboardAwareScrollViewProps
) => {
    if (Platform.OS === 'ios') {
        return (
            <KeyboardAwareScrollViewIos
                refreshControl={props.refreshControl}
                style={[styles.fillWidth, props.style]}
                contentContainerStyle={props.contentContainerStyle}
                enableOnAndroid={true}
                enableResetScrollToCoords={false}
                extraHeight={200}
                keyboardShouldPersistTaps="handled"
                automaticallyAdjustContentInsets={false}
                scrollEnabled={props.scrollEnabled}
                onScroll={props.onScroll}
                showsVerticalScrollIndicator={false}
                extraScrollHeight={10}
            >
                {props.children}
            </KeyboardAwareScrollViewIos>
        );
    }
    return (
        <ScrollView>
            <KeyboardAvoidingView
                style={[styles.fillWidth, props.style]}
            >
                {props.children}
            </KeyboardAvoidingView>
        </ScrollView>
    );
};
export default ScrollViewWithKeyboard;
const styles = StyleSheet.create({
    fillWidth: {
        flex: 1
    }
});
