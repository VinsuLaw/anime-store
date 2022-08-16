module.exports = class ApiError extends Error {
    constructor(status, message) {
        super(message)
        this.status = status
        this.message = message
    }

    static BadRequest(message) {
        return new ApiError(404, message)
    }

    static Internal(message) {
        return new ApiError(500, message)
    }

    static Forbidden(message) {
        return new ApiError(403, message)
    }

    static UnauthorizedError() {
        return new ApiError(401, 'Not authorized')
    }
}
