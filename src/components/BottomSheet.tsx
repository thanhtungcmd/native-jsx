import {
    BottomSheetBackdrop,
    BottomSheetBackdropProps,
    BottomSheetFlatList,
    BottomSheetModal,
    BottomSheetTextInput
} from '@gorhom/bottom-sheet';
import React, {
    forwardRef,
    useCallback,
    useImperativeHandle,
    useMemo,
    useRef
} from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { COLORS } from '@/theme';
import { Configs } from '@/commons/Configs';

export type ItemProps = {
  value?: string;
  id?: string;
};

type BottomSheetProps = {
  data?: Array<ItemProps>;
  onPressItem?: (item: any) => void;
};

export type BottomSheetAction = {
  show: (content?: string) => any;
  hide?: (content?: string) => any;
  setContent?: (message: string) => void;
};

const CustomBackdrop = (props: BottomSheetBackdropProps) => {
    return <BottomSheetBackdrop {...props} pressBehavior="close" />;
};

const BottomSheetComponent = forwardRef<BottomSheetAction, BottomSheetProps>(
    ({ data, onPressItem }: BottomSheetProps, ref) => {
        const bottomSheetModalRef = useRef<BottomSheetModal>(null);
        const snapPoints = useMemo(() => ['25%', '40%'], []);
        const show = useCallback(() => {
            bottomSheetModalRef.current?.present();
        }, []);

        const hide = useCallback(() => {
            bottomSheetModalRef.current?.close();
        }, []);

        useImperativeHandle(ref, () => ({
            show,
            hide
        }));

        const handleSheetChanges = useCallback((index: number) => {
            console.log('handleSheetChanges', index);
        }, []);

        const renderItem = useCallback(
            ({ item }) => {
                const onPress = () => {
                    onPressItem?.(item);
                    hide();
                };
                return (
                    <TouchableOpacity onPress={onPress} style={styles.item}>
                        <Text>{item.value}</Text>
                    </TouchableOpacity>
                );
            },
            [hide, onPressItem]
        );

        const keyExtractor = useCallback((index) => {
            console.log(i);
            return `${index}`;
        }, []);

        return (
            <BottomSheetModal
                ref={bottomSheetModalRef}
                index={1}
                snapPoints={snapPoints}
                onChange={handleSheetChanges}
                backdropComponent={CustomBackdrop}
                keyboardBehavior={'interactive'}
                enablePanDownToClose={true}
            >
                <View style={styles.contentContainer}>
                    <View style={styles.row}>
                        <BottomSheetTextInput style={styles.input} />
                        {/* <View style={styles.wrapIcon}>
                            <IconUnivest name={'search'} style={styles.icon} />
                        </View> */}
                    </View>
                    <BottomSheetFlatList
                        data={data}
                        renderItem={renderItem}
                        style={styles.flatList}
                        contentContainerStyle={styles.flatListContainer}
                        keyExtractor={keyExtractor}
                    />
                </View>
            </BottomSheetModal>
        );
    }
);

export default BottomSheetComponent;

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1
    },
    flatList: {
        flex: 1,
        borderTopColor: COLORS.GRAY_6,
        marginTop: 20,
        borderTopWidth: 1,
        paddingHorizontal: 15,
        paddingTop: 10
    },
    flatListContainer: {
        paddingHorizontal: 24
    },
    input: {
        justifyContent: 'center',
        paddingHorizontal: 5,
        paddingVertical: 0,
        height: Configs.FontSize.size40,
        width: '90%'
    },
    item: {
        paddingVertical: 10
    },
    // icon: {
    //     fontSize: Configs.IconSize.size18,
    //     color: COLORS.GREEN,
    //     marginRight: 10
    // },
    row: {
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 5,
        marginHorizontal: 15,
        borderColor: COLORS.LIGHT_GRAY
    }
    // wrapIcon: {
    //     justifyContent: 'center'
    // }
});
