import { any } from 'prop-types';

import Languages from '@/commons/Languages';
import { ContractTypeModel } from '@/models/contract-type';

export const PHONE_PREFIX = '+84';

export const PHONE_REGEX = /^0+[3,5,7,8,9]{1}[0-9]{1}[1-9]{1}[0-9]{6}$/;
export const NUMBER_REGEX = /^[0-9]*$/;
export const EMAIL_REGEX = /^[\w+][\w\.\-]+@[\w\-]+(\.\w{2,10})+$/;
export const PASSWORD_REGEX = /^\w{6,20}$/;

export const SECONDS_IN_DAY = 864e5;
export const DELAY_CLICK = 3e2;


export enum StorageKeys {
    KEY_ACCESS_TOKEN = 'KEY_ACCESS_TOKEN',
    KEY_DEVICE_TOKEN = 'KEY_DEVICE_TOKEN',
    KEY_DEVICE_TOKEN_FIREBASE = 'KEY_DEVICE_TOKEN_FIREBASE',
    KEY_USER_INFO = 'KEY_USER_INFO',
    KEY_SKIP_ONBOARDING = 'KEY_SKIP_ONBOARDING',
    KEY_LAST_POSITION = 'KEY_LAST_POSITION',
    KEY_LAST_LOGIN_INFO = 'KEY_LAST_LOGIN_INFO',
    KEY_LATEST_NOTIFY_ID = 'KEY_LATEST_NOTIFY_ID',
    KEY_SAVED_API_VERSION = 'KEY_SAVED_API_VERSION',
    KEY_BIOMETRY_TYPE = 'KEY_BIOMETRY_TYPE',
    KEY_FAST_AUTHENTICATION = 'KEY_FAST_AUTHENTICATION',
    KEY_PASSCODE = 'KEY_PASSCODE',
}

export enum Events {
    TOAST = 'TOAST',
    LOGOUT = 'LOGOUT',
    SWITCH_KEYBOARD = 'SWITCH_KEYBOARD',
}

export enum ToastTypes {
    ERR = 0, //  red background
    MSG = 1, // dark blue background
    SUCCESS = 2, // green background
}

export enum PopupTypes {
    OTP = 1,
    POST_NEWS = 2,
}

export enum ErrorCodes {
    SUCCESS = 0,
    IMAGE_LIMIT_SIZE = 1,
}

export enum HistoryCodes {
    SUCCESS = 1,
    FAILS = 2,
}

export enum DisplayScreen {
    VISIBLE = 'flex',
    INVISIBLE = 'none',
}
export const configGoogleSignIn = {
    webClientId:
        '924291904930-mvgo75r0tbqurh3vor6u4j9evrnsotuh.apps.googleusercontent.com'
};
export enum MaxText {
    max = 40,
}

export enum Vehicle {
    CAR = 'OTO',
    MOTOR = 'XM',
}

export enum Bill {
    WATER = '0',
    ELECTRIC = '1',
    FINANCE = '2'
}

export const ContractTypes = [
    { index: 0, type: 17, label: Languages.contracts.loaning, key: Languages.ranking.first },
    // { type: 23, label: Languages.contracts.extended },
    { index: 1, type: 19, label: Languages.contracts.paid, key: Languages.ranking.second }
    // Mặc định là 17, còn các hợp đồng mới tạo và chưa được giải ngân sẽ có status nhỏ hơn 17
] as ContractTypeModel[];
