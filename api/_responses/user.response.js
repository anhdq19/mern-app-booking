import constants from "../_constants/user.constants.js";

export const GET_ALL_USER = {
    SUCCESS: (data) => {
        return {
            success: true,
            action: constants.GET_ALL_USER_CONSTANTS.action,
            message: constants.GET_ALL_USER_CONSTANTS.message.success,
            data
        }
    },
    FAILURE: (error) => {
        return {
            success: false,
            action: constants.GET_ALL_USER_CONSTANTS.action,
            message: constants.GET_ALL_USER_CONSTANTS.message.failure + ` : ${error}`,
            data: null
        }
    }
};

export const GET_USER_BY_ID = {
    SUCCESS: (data) => {
        return {
            success: true,
            action: constants.GET_USER_BY_ID_CONSTANTS.action,
            message: constants.GET_USER_BY_ID_CONSTANTS.message.success,
            data
        }
    },
    FAILURE: (error) => {
        return {
            success: false,
            action: constants.GET_USER_BY_ID_CONSTANTS.action,
            message: constants.GET_USER_BY_ID_CONSTANTS.message.failure + ` : ${error}`,
            data: null
        }
    }
};

export const CREATE_USER = {
    SUCCESS: (data) => {
        return {
            success: true,
            action: constants.CREATE_USER_CONSTANTS.action,
            message: constants.CREATE_USER_CONSTANTS.message.success,
            data
        }
    },
    FAILURE: (error) => {
        return {
            success: false,
            action: constants.CREATE_USER_CONSTANTS.action,
            message: constants.CREATE_USER_CONSTANTS.message.failure + ` : ${error}`,
            data: null
        }
    }
};

export const UPDATE_USER_BY_ID = {
    SUCCESS: (data) => {
        return {
            success: true,
            action: constants.UPDATE_USER_BY_ID_CONSTANTS.action,
            message: constants.UPDATE_USER_BY_ID_CONSTANTS.message.success,
            data
        }
    },
    FAILURE: (error) => {
        return {
            success: false,
            action: constants.UPDATE_USER_BY_ID_CONSTANTS.action,
            message: constants.UPDATE_USER_BY_ID_CONSTANTS.message.failure + ` : ${error}`,
            data: null
        }
    }
};

export const DELETE_USER = {
    SUCCESS: () => {
        return {
            success: true,
            action: constants.DELETE_USER_CONSTANTS.action,
            message: constants.DELETE_USER_CONSTANTS.message.success,
            data : null
        }
    },
    FAILURE: (error) => {
        return {
            success: false,
            action: constants.DELETE_USER_CONSTANTS.action,
            message: constants.DELETE_USER_CONSTANTS.message.failure + ` : ${error}`,
            data: null
        }
    }
}





