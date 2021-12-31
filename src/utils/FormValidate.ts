// import { CommonServices } from '@/api';
import Languages from '@/commons/Languages';
import Validate from './Validate';

const validateEmoji = (username: string) => {
    return /!(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/.test(
        username
    );
};
const validateNumber = (username: string) => {
    const reg = /^([^0-9]*)$/;
    return reg.test(username);
};
const validateEmail = (email: string) =>{
    return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
function userNameValidate(userName: string) {
    let errMsg = '';
    if (Validate.isStringEmpty(userName)) {
        errMsg = Languages.errorMsg.userNameRequired;
    } else if (userName.length < 8) {
        errMsg = Languages.errorMsg.userNameLength;
    } else if (!validateEmoji(userName) && !validateNumber(userName)){
        errMsg = Languages.errorMsg.userNameRegex;
    }
    return errMsg;
}
function emailValidate(email: string) {
    let errMsg = '';
    if (Validate.isStringEmpty(email)) {
        errMsg = Languages.errorMsg.emailNull;
    } else if (!validateEmail(email)){
        errMsg = Languages.errorMsg.emailRegex;
    }
    return errMsg;
}
function cardValidate(card: string) {
    let errMsg = '';
    if (Validate.isStringEmpty(card)) {
        errMsg = Languages.errorMsg.cardNull;
    } else if (validateNumber(card)){
        errMsg = Languages.errorMsg.cardRegex;
    } else if (card.length < 9 || card.length > 12) {
        errMsg = Languages.errorMsg.cardCheck;
    }
    return errMsg;
}

function passValidate(pwd: string) {
    let errMsg = '';
    if (Validate.isStringEmpty(pwd)) {
        errMsg = Languages.errorMsg.pwdNull;
    }  else if (pwd.length < 6) {
        errMsg = Languages.errorMsg.pwdCheck;
    }
    return errMsg;
}
function passConFirmValidate(pwd: string, conFirmPwd: string) {
    let errMsg = '';
    if (Validate.isStringEmpty(conFirmPwd)) {
        errMsg = Languages.errorMsg.pwdNull;
    }  else if (pwd !== conFirmPwd) {
        errMsg = Languages.errorMsg.conFirmPwd;
    }
    return errMsg;
}


export default {
    userNameValidate,
    emailValidate,
    cardValidate,
    passValidate,
    passConFirmValidate
};
