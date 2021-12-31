import React from 'react';
import {
    StyleSheet, Text, View
} from 'react-native';
import Dash from 'react-native-dash';

import { COLORS, Styles } from '@/theme';
import { Configs } from '@/commons/Configs';

const KeyValue = ({ label, value, noIndicator }: { label: string, value?: string, noIndicator?: boolean }) => {

    return (
        <View>
            <View style={styles.content}>
                <Text style={styles.key}>
                    {label}
                </Text>
                <Text style={styles.value}>
                    {value}
                </Text>
            </View>
            {!noIndicator && <Dash 
                dashThickness={1}
                dashLength={8}
                dashColor={COLORS.GRAY_2} />}
        </View>
    );
};

export default KeyValue;

const styles = StyleSheet.create({
    content: { 
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10
    },
    key: {
        ...Styles.typography.regular,
        fontSize: Configs.FontSize.size13
    },
    value: {
        ...Styles.typography.medium
    }
});
