import constants from "../_constants/room.constants.js";

export const GET_ALL_ROOM = {
    SUCCESS: (data) => {
        return {
            success: true,
            action: constants.GET_ALL_ROOM_CONSTANTS.action,
            message: constants.GET_ALL_ROOM_CONSTANTS.message.success,
            data
        }
    },
    FAILURE: (error) => {
        return {
            success: false,
            action: constants.GET_ALL_ROOM_CONSTANTS.action,
            message: constants.GET_ALL_ROOM_CONSTANTS.message.failure + ` : ${error}`,
            data: null
        }
    }
};

export const GET_ROOM_BY_ID = {
    SUCCESS: (data) => {
        return {
            success: true,
            action: constants.GET_ROOM_BY_ID_CONSTANTS.action,
            message: constants.GET_ROOM_BY_ID_CONSTANTS.message.success,
            data
        }
    },
    FAILURE: (error) => {
        return {
            success: false,
            action: constants.GET_ROOM_BY_ID_CONSTANTS.action,
            message: constants.GET_ROOM_BY_ID_CONSTANTS.message.failure + ` : ${error}`,
            data: null
        }
    }
};

export const CREATE_ROOM = {
    SUCCESS: (data) => {
        return {
            success: true,
            action: constants.CREATE_ROOM_CONSTANTS.action,
            message: constants.CREATE_ROOM_CONSTANTS.message.success,
            data
        }
    },
    FAILURE: (error) => {
        return {
            success: false,
            action: constants.CREATE_ROOM_CONSTANTS.action,
            message: constants.CREATE_ROOM_CONSTANTS.message.failure + ` : ${error}`,
            data: null
        }
    }
};

export const UPDATE_ROOM_BY_ID = {
    SUCCESS: (data) => {
        return {
            success: true,
            action: constants.UPDATE_ROOM_BY_ID_CONSTANTS.action,
            message: constants.UPDATE_ROOM_BY_ID_CONSTANTS.message.success,
            data
        }
    },
    FAILURE: (error) => {
        return {
            success: false,
            action: constants.UPDATE_ROOM_BY_ID_CONSTANTS.action,
            message: constants.UPDATE_ROOM_BY_ID_CONSTANTS.message.failure + ` : ${error}`,
            data: null
        }
    }
};

export const DELETE_ROOM = {
    SUCCESS: () => {
        return {
            success: true,
            action: constants.DELETE_ROOM_CONSTANTS.action,
            message: constants.DELETE_ROOM_CONSTANTS.message.success,
            data : null
        }
    },
    FAILURE: (error) => {
        return {
            success: false,
            action: constants.DELETE_ROOM_CONSTANTS.action,
            message: constants.DELETE_ROOM_CONSTANTS.message.failure + ` : ${error}`,
            data: null
        }
    }
}





