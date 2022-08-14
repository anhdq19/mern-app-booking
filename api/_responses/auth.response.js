import constants from "../_constants/auth.constants.js";

export const REGISTER = {
    SUCCESS: (data) => {
        return {
            success: true,
            action: constants.REGISTER_CONSTANTS.action,
            message: constants.REGISTER_CONSTANTS.message.success,
            data
        }
    },
    FAILURE: (error) => {
        return {
            success: false,
            action: constants.REGISTER_CONSTANTS.action,
            message: constants.REGISTER_CONSTANTS.message.failure + ` : ${error}`,
            data: null
        }
    }
};
export const LOGIN = {
    SUCCESS: (data) => {
        return {
            success: true,
            action: constants.LOGIN_CONSTANTS.action,
            message: constants.LOGIN_CONSTANTS.message.success,
            data
        }
    },
    FAILURE: (error) => {
        return {
            success: false,
            action: constants.LOGIN_CONSTANTS.action,
            message: constants.LOGIN_CONSTANTS.message.failure + ` : ${error}`,
            data: null
        }
    }
};
export const FORGET_PASSWORD = {
    SUCCESS: (data) => {
        return {
            success: true,
            action: constants.FORGET_CONSTANTS.action,
            message: constants.FORGET_CONSTANTS.message.success,
            data
        }
    },
    FAILURE: (error) => {
        return {
            success: false,
            action: constants.FORGET_CONSTANTS.action,
            message: constants.FORGET_CONSTANTS.message.failure + ` : ${error}`,
            data: null
        }
    }
};
export const RESET_PASSWORD = {
    SUCCESS: (data) => {
        return {
            success: true,
            action: constants.RESET_PASSWORD_CONSTANTS.action,
            message: constants.RESET_PASSWORD_CONSTANTS.message.success,
            data
        }
    },
    FAILURE: (error) => {
        return {
            success: false,
            action: constants.RESET_PASSWORD_CONSTANTS.action,
            message: constants.RESET_PASSWORD_CONSTANTS.message.failure + ` : ${error}`,
            data: null
        }
    }
};




