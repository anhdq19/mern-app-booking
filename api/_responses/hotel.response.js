import constants from "../_constants/hotel.constants.js";

export const GET_ALL_HOTEL = {
    SUCCESS: (data) => {
        return {
            success: true,
            action: constants.GET_ALL_HOTEL_CONSTANTS.action,
            message: constants.GET_ALL_HOTEL_CONSTANTS.message.success,
            data
        }
    },
    FAILURE: (error) => {
        return {
            success: false,
            action: constants.GET_ALL_HOTEL_CONSTANTS.action,
            message: constants.GET_ALL_HOTEL_CONSTANTS.message.failure + ` : ${error}`,
            data: null
        }
    }
};

export const GET_HOTEL_BY_ID = {
    SUCCESS: (data) => {
        return {
            success: true,
            action: constants.GET_HOTEL_BY_ID_CONSTANTS.action,
            message: constants.GET_HOTEL_BY_ID_CONSTANTS.message.success,
            data
        }
    },
    FAILURE: (error) => {
        return {
            success: false,
            action: constants.GET_HOTEL_BY_ID_CONSTANTS.action,
            message: constants.GET_HOTEL_BY_ID_CONSTANTS.message.failure + ` : ${error}`,
            data: null
        }
    }
};

export const CREATE_HOTEL = {
    SUCCESS: (data) => {
        return {
            success: true,
            action: constants.CREATE_HOTEL_CONSTANTS.action,
            message: constants.CREATE_HOTEL_CONSTANTS.message.success,
            data
        }
    },
    FAILURE: (error) => {
        return {
            success: false,
            action: constants.CREATE_HOTEL_CONSTANTS.action,
            message: constants.CREATE_HOTEL_CONSTANTS.message.failure + ` : ${error}`,
            data: null
        }
    }
};

export const UPDATE_HOTEL_BY_ID = {
    SUCCESS: (data) => {
        return {
            success: true,
            action: constants.UPDATE_HOTEL_BY_ID_CONSTANTS.action,
            message: constants.UPDATE_HOTEL_BY_ID_CONSTANTS.message.success,
            data
        }
    },
    FAILURE: (error) => {
        return {
            success: false,
            action: constants.UPDATE_HOTEL_BY_ID_CONSTANTS.action,
            message: constants.UPDATE_HOTEL_BY_ID_CONSTANTS.message.failure + ` : ${error}`,
            data: null
        }
    }
};

export const DELETE_HOTEL = {
    SUCCESS: () => {
        return {
            success: true,
            action: constants.DELETE_HOTEL_CONSTANTS.action,
            message: constants.DELETE_HOTEL_CONSTANTS.message.success,
            data : null
        }
    },
    FAILURE: (error) => {
        return {
            success: false,
            action: constants.DELETE_HOTEL_CONSTANTS.action,
            message: constants.DELETE_HOTEL_CONSTANTS.message.failure + ` : ${error}`,
            data: null
        }
    }
}





