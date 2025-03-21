const errorResponse = (res, statusCode, message) => {
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message,
        data: null,
    });
};

class CustomError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
    }
}

module.exports = { errorResponse, CustomError };