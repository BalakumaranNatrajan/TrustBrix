const handleSuccess = (data) => {
    return {
        success: true,
        status: 200,
        message: "Successfully retrived..",
        data: data
    }
}

const handleFailure = (message) => {
    return {
        success: false,
        status: 404,
        message: message,
        data: {}
    }
}

module.exports = { handleSuccess, handleFailure }