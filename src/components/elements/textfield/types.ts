import { ViewStyle } from 'react-native';

import { ICONS } from '@/assets/icons/constant';

export enum TypeKeyBoard {
    DEFAULT = 'default',
    NUMBER = 'number-pad',
    NUMERIC = 'numeric',
    // number with dot
    DECIMAL = 'decimal-pad',
    EMAIL = 'email-address',
    PHONE = 'phone-pad'
}

export type TextFieldProps = {
    keyboardType?: keyof typeof TypeKeyBoard,
    label?: string;
    value?: string | number;
    placeHolder?: string;
    isPassword?: boolean;
    rightIcon?: string;
    disabled?: boolean;
    hasUnderline?: boolean;
    multiline?: boolean;
    maxLength?: number;
    formatPrice?: boolean;
    formatNumber?: boolean;
    formatEmail?: boolean;
    verified?: boolean;
    showRestriction?: boolean;
    priceSuffix?: string;
    // true:  unit  vndong: 'VNĐ', false: unit dong: 'đ',
    backgroundColor?: any;
    leftIcon?: string;
    iconSize?: number;
    inputStyle?: any;
    containerInput?:ViewStyle;
    hideIconClear?: boolean;
    minHeight?: number | string;
    maxHeight?: number | string;
    onChangeText?: (text: string, tag?: string) => any;
    onEndEditing?: (text: string, tag?: string) => any;
    onClickRightIcon?: (text: string) => any;
    onFocusCallback?: (tag?: string) => any;
}

export type TextFieldActions = {
    setValue: (text: string | number) => void;
    fillValue: (text: string | number) => void;
    getValue: () => string;
    focus: () => void;
    blur: () => void;
    setErrorMsg: (msg?: string) => void;
};

