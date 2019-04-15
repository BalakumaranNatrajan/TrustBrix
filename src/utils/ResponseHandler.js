const handleSuccess = (data) => {
    return {
        success: true,
        status: 200,
        message: "Successfully retrived..",
        data: data
    }
}

const handleEmailSuccess = () => {
    return {
        success: true,
        status: 200,
        message: "Email send successfully",
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

module.exports = { handleSuccess, handleFailure, handleEmailSuccess }