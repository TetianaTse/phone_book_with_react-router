export const validateContactName = (name) => {
    const regEx = /^[A-Z][a-z]{1,} [A-Z][a-z]{1,}$/;
    return regEx.test(name);
}

export const validateContactMail = (mail) => {
    const regEx = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,8})+$/;
    return regEx.test(mail);
}

export const validateContactPnone = (phone) => {
    const regEx = /^(\s*)?(\+)?([- ()+]?\d[- ()+]?){10,14}(\s*)?$/;
    return regEx.test(phone);
}
