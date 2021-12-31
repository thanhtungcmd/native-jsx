import React, { useCallback, useMemo, useRef } from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    ViewStyle
} from 'react-native';

import { IconUnivest } from '@/assets/icons/icon-univest';
import { Configs } from '@/commons/Configs';
import { COLORS, Styles } from '@/theme';
import Utils from '@/utils/Utils';
import BottomSheetComponent, { ItemProps } from './BottomSheet';
import { ICONS } from '@/assets/icons/constant';

type PopupActions = {
    show: (content?: string) => any;
    hide?: (content?: string) => any;
    setContent?: (message: string) => void;
};
type PickerProps = {
    leftIcon?: string,
    containerStyle?: ViewStyle;
    label?: string;
    placeholder?: string;
    onPressItem?: (item: any) => void;
    value?: string;
    data?: Array<ItemProps>;
    labelStyle?: ViewStyle;
    pickerStyle?: ViewStyle;
    rightIcon?: string;
    disable?: boolean
};
const PickerValuation = ({
    leftIcon,
    label,
    placeholder,
    onPressItem,
    value,
    data,
    labelStyle,
    pickerStyle,
    rightIcon,
    containerStyle,
    disable
}: PickerProps) => {
    const bottomSheetRef = useRef<PopupActions>(null);

    const openPopup = useCallback(() => {
        bottomSheetRef.current?.show();
    }, []);

    const renderValue = useMemo(() => {
        if (value) {
            return <Text>{value}</Text>;
        }
        return (
            <Text style={styles.placeholder}>
                {placeholder}
            </Text>
        );
    }, [placeholder, value]);

    const _containerStyle = useMemo(() => {
        const style = {
            backgroundColor: !disable ? COLORS.WHITE : COLORS.GRAY_2
        };
        return [styles.wrapInput, pickerStyle, style];
    }, [disable, pickerStyle]);
    return (
        <View style={[styles.container, containerStyle]}>
            <View style={[styles.wrapLabel, labelStyle]}>
                <Text style={styles.label}>
                    {Utils.capitalizeFirstLetter(label || '')}
                </Text>
                <Text style={styles.red}> *</Text>
            </View>
            <TouchableOpacity
                onPress={openPopup}
                style={_containerStyle}
                disabled={disable}
            >
                {leftIcon && (
                    <IconUnivest name={leftIcon} style={styles.leftIcon} />
                )}
                {renderValue}
                <IconUnivest name={ICONS.RIGHT_ARROW} style={styles.rightIcon} />
            </TouchableOpacity>
            <BottomSheetComponent
                ref={bottomSheetRef}
                data={data}
                onPressItem={onPressItem}
            />
        </View>
    );
};

export default PickerValuation;

const styles = StyleSheet.create({
    container: {
        marginBottom: 15
    },
    wrapInput: {
        width: '100%',
        borderColor: COLORS.GRAY_6,
        borderWidth: 1,
        paddingVertical: 12,
        paddingHorizontal: 12,
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    wrapLabel: {
        flexDirection: 'row'
    },
    label: {
        ...Styles.typography.regular,
        marginBottom: 5
    },
    red: {
        ...Styles.typography.regular,
        color: COLORS.RED
    },
    placeholder: {
        ...Styles.typography.regular,
        color: COLORS.GRAY_6
    },
    leftIcon: {
        fontSize: Configs.IconSize.size18,
        color: COLORS.LIGHT_GRAY,
        marginRight: 10
    },
    rightIcon: {
        fontSize: Configs.IconSize.size18,
        color: COLORS.LIGHT_GRAY,
        marginRight: 10,
        position: 'absolute',
        right: 0,
        top: 12
    }
});
