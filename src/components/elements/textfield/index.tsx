import React, {
    forwardRef,
    useCallback,
    useEffect,
    useImperativeHandle,
    useMemo,
    useRef,
    useState
} from 'react';
import { Animated, Platform, Text, TextInput, TextStyle, View } from 'react-native';

import { IconUnivest } from '@/assets/icons/icon-univest';
import { COLORS } from '@/theme';
import Validate from '@/utils/Validate';
import { Touchable } from '../touchable';
import { myTextFieldStyle } from './styles';
import { TextFieldActions, TextFieldProps, TypeKeyBoard } from './types';


export const MyTextInput = forwardRef<TextFieldActions, TextFieldProps>(
    (
        {
            keyboardType = 'DEFAULT',
            value,
            placeHolder,
            isPassword,
            disabled,
            inputStyle,
            hideIconClear = false,
            onChangeText,
            onEndEditing,
            maxLength,
            multiline,
            leftIcon,
            onFocusCallback,
            containerInput,
            rightIcon,
            iconSize
        }: TextFieldProps,
        ref?: any
    ) => {
        useImperativeHandle(ref, () => ({
            setValue,
            fillValue,
            getValue,
            focus,
            blur,
            setErrorMsg
        }));

        const [isFocusing, setFocus] = useState<boolean>(false);
        const [textfieldVal, setTextfieldVal] = useState<string>(`${value || ''}`);
        const [errMsg, setErrMsg] = useState<string>('');
        const [animation] = useState(new Animated.Value(0));

        const styles = myTextFieldStyle();

        const orgTextInput = useRef<TextInput>(null);

        const defInputProps = {
            keyboardType:
                TypeKeyBoard[
                    keyboardType === 'NUMBER'
                        ? Platform.OS === 'ios'
                            ? keyboardType
                            : 'NUMERIC'
                        : keyboardType
                ],
            editable: !disabled
        };

        useEffect(() => {
            if (onChangeText) {
                onChangeText(textfieldVal, placeHolder);
            }
        }, [onChangeText, placeHolder, textfieldVal]);

        const getValue = useCallback(() => {
            return textfieldVal.trim();
        }, [textfieldVal]);

        const setValue = useCallback(
            (text) => {
                if (maxLength) {
                    text = `${text}`.slice(0, maxLength);
                }
                setTextfieldVal(text);
                setErrMsg('');
            },
            [maxLength]
        );

        const fillValue = useCallback(
            (text) => {
                setValue(text);
            },
            [setValue]
        );

        useEffect(() => {
            if (!Validate.isEmpty(value)) {
                setValue(value);
            }
        }, [setValue, value]);

        const focus = useCallback(() => {
            if (orgTextInput.current) {
                orgTextInput.current?.focus();
            }
        }, []);

        const blur = useCallback(() => {
            if (orgTextInput.current) {
                orgTextInput.current?.blur();
            }
        }, []);

        const eventTextChange = useCallback(
            (text: string) => {
                setValue(text);
            },
            [setValue]
        );

        const eventEndEditing = useCallback(() => {
            if (onEndEditing) {
                onEndEditing(`${textfieldVal}`, placeHolder);
            }
        }, [onEndEditing, placeHolder, textfieldVal]);

        const onFocus = useCallback(() => {
            onFocusCallback?.(placeHolder);
            setFocus(true);
        }, [onFocusCallback, placeHolder]);

        const onBlur = useCallback(() => {
            setFocus(false);
        }, []);

        const eventClearText = useCallback(() => {
            eventTextChange('');
        }, [eventTextChange]);

        const containerStyle = useMemo(() => {
            const style = {
                borderColor: isFocusing ? COLORS.GREEN : COLORS.GRAY_2,
                backgroundColor: disabled ? COLORS.GRAY_2 : COLORS.WHITE
            };

            if (errMsg !== '') {
                style.borderColor = COLORS.RED;
            }
            return [styles.container, style, containerInput, { transform: [{ translateX: animation }] }];
        }, [animation, containerInput, disabled, errMsg, isFocusing, styles.container]);

        const leftIconStyle = useMemo(() => {
            const style = {
                color: isFocusing ? COLORS.GREEN : COLORS.LIGHT_GRAY,
                fontSize: iconSize || styles.leftIcon.fontSize
            };
            return [styles.leftIcon, style];
        }, [iconSize, isFocusing, styles.leftIcon]);

        const iconClearStyle = useMemo<TextStyle[]>(() => {
            let marginTop = 0;
            if (multiline) {
                marginTop = 7;
            }
            return [styles.showHidePassContainer, { marginTop }];
        }, [styles.showHidePassContainer, multiline]);

        const iconClearText = useMemo(() => {
            if (`${textfieldVal}`.length > 0 && !isPassword && !hideIconClear) {
                return (
                    <Touchable style={iconClearStyle} onPress={eventClearText}>
                        {/* <IconUnivest name={ICONS.WARNING} style={{
                        fontSize: Configs.IconSize.size16,
                        color: COLORS.DARK_GRAY
                    }} /> */}
                    </Touchable>
                );
            }
            return null;
        }, [textfieldVal, isPassword, hideIconClear, iconClearStyle, eventClearText]);

        const _inputStyle = useMemo(
            () => inputStyle || styles.inputFont,
            [styles.inputFont, inputStyle]
        );

        const startShake = useCallback(() => {
            Animated.sequence([
                Animated.timing(animation, { toValue: 10, duration: 50, useNativeDriver: true }),
                Animated.timing(animation, { toValue: -10, duration: 50, useNativeDriver: true }),
                Animated.timing(animation, { toValue: 10, duration: 50, useNativeDriver: true }),
                Animated.timing(animation, { toValue: 0, duration: 50, useNativeDriver: true })
            ]).start();
        }, [animation]);

        // generate error message
        const errorMessage = useMemo(() => {
            const paddingText = { paddingBottom: 0 };
            if (!Validate.isStringEmpty(errMsg)) {
                return <View style={paddingText}>
                    <Text
                        style={styles.errorMessage}>{errMsg}</Text>
                </View>;
            }
            return null;
        }, [errMsg, styles.errorMessage]);

        const setErrorMsg = useCallback((msg: string) => {
            if (Validate.isStringEmpty(msg)) {
                return;
            }
            setErrMsg(msg);
            startShake();
        }, [startShake]);

        return (
            <>
                <Animated.View
                    style={containerStyle}
                    ref={ref}
                >
                    <View style={styles.flexRow}>
                        {leftIcon && <IconUnivest name={leftIcon} style={leftIconStyle} />}
                        <TextInput
                            ref={orgTextInput}
                            {...defInputProps}
                            style={[styles.inputStyle, _inputStyle]}
                            placeholder={placeHolder}
                            placeholderTextColor={COLORS.GRAY_4}
                            selectionColor={COLORS.GRAY_4}
                            numberOfLines={1}
                            secureTextEntry={isPassword}
                            autoCorrect={false}
                            autoCapitalize="none"
                            value={`${textfieldVal}`}
                            maxLength={maxLength}
                            multiline={multiline}
                            returnKeyType={multiline ? 'next' : 'done'}
                            onChangeText={eventTextChange}
                            onEndEditing={eventEndEditing}
                            onFocus={onFocus}
                            onBlur={onBlur}
                            editable={!disabled}
                        />
                        {!disabled && iconClearText}
                        {rightIcon && <IconUnivest name={rightIcon} style={leftIconStyle} />}
                    </View>
                </Animated.View>
                {errorMessage}
            </>
        );
    }
);
