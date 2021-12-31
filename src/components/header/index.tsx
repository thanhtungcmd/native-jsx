import React, { useCallback, useMemo } from 'react';
import { Platform, StatusBar, StyleSheet, Text, View } from 'react-native';

import { Configs, PADDING_TOP, STATUSBAR_HEIGHT } from '@/commons/Configs';
import { COLORS, Styles } from '@/theme';
import { SCREEN_WIDTH } from '@/utils/DimensionUtils';
import { HeaderProps } from './types';
import IcBack from '@/assets/images/ic_back.svg';
import { Touchable } from '../elements/touchable';
import Navigator from '@/routers/Navigator';

const IMG_HEADER_HEIGHT = SCREEN_WIDTH / 375 * 85;

export const HeaderBar = ({
    onBackPressed,
    onGoBack,
    title,
    hasBack,
    noHeader,
    noStatusBar,
    exitApp }: HeaderProps) => {

    const _onBackPressed = useCallback(() => {
        if (!exitApp) {
            if (hasBack && onBackPressed) {
                onBackPressed();
            }
            else if (onGoBack) {
                onGoBack();
            } else {
                Navigator.goBack();
            }
            return true;
        }
        return false;
    }, [exitApp, hasBack, onBackPressed, onGoBack]);

    const renderBack = useMemo(() => (
        <Touchable style={styles.goback} onPress={_onBackPressed}
            size={40}>
            <IcBack
                width={30}
                height={20} />
        </Touchable>
    ), [_onBackPressed]);

    const renderTitle = useMemo(() => (
        <View style={styles.titleContainer}>
            <Text
                numberOfLines={1}
                style={styles.titleCenter}>
                {title?.toLocaleUpperCase()}
            </Text>
        </View>
    ), [title]);

    return (
        <View style={styles.container}>
            {(noStatusBar && Platform.OS === 'ios') ? null
                : <StatusBar
                    translucent
                    backgroundColor={'transparent'}
                    barStyle={'light-content'} />}
            {!noHeader && <View style={styles.headerContainer}>
                {(!exitApp || hasBack) && renderBack}
                {renderTitle}
            </View>}
        </View>
    );
};

export default HeaderBar;

const styles = StyleSheet.create({
    container: {
        height: IMG_HEADER_HEIGHT
    },
    imageBg: {
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        backgroundColor: COLORS.GREEN
    },
    headerContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: STATUSBAR_HEIGHT + PADDING_TOP
    },
    goback:{
        position: 'absolute',
        top: STATUSBAR_HEIGHT/2,
        zIndex: 9
    },
    titleContainer: {
        flex: 1
    },
    titleCenter: {
        ...Styles.typography.medium,
        fontSize: Configs.FontSize.size16,
        textAlign: 'center',
        color: COLORS.WHITE
    }
});
