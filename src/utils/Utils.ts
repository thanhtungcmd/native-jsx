
import { Linking, Share } from 'react-native';

import Validate from './Validate';

function formatFloatNumber(num: string, decimal?: number) {
    return Number(num || 0)
        .toFixed(decimal || 0)
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
}

function formatTextToNumber(textNumber: string) {
    const num = (`${textNumber}`).replace(/[^0-9]/g, '');
    return num;
}

function callNumber(phone: string) {
    const phoneNumber = `tel:${phone}`;
    Linking.canOpenURL(phoneNumber).then((supported) => {
        if (supported) {
            Linking.openURL(phoneNumber);
        } else {
            console.log('Don\'t know how to go');
        }
    }).catch((err) => console.error('An error occurred', err));
};

function share(text: string) {
    if (Validate.isStringEmpty(text)) {
        return;
    }
    try {
        Share.share({
            message: text
        });
    } catch (error) {
        console.log(error);
    }
}

function openURL(url: string) {
    Linking.canOpenURL(url)
        .then((supported) => {
            if (!supported) {
                console.error(`Unsupported url: ${url}`);
            } else {
                Linking.openURL(url);
            }
        })
        .catch((err) => {
            console.error('An error occurred', err);
        });
};
function capitalizeFirstLetter(text: string) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}
function formatMoney(number: string | number) {
    if (!number) {
        return '0 đ';
    }
    return (
        `${Math.ceil(Number(number))
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, '.')}đ`
    );
}

export default {
    callNumber,
    share,
    openURL,
    formatFloatNumber,
    formatTextToNumber,
    capitalizeFirstLetter,
    formatMoney,
};
