
// used to check if the loaded admin secret is available and is of required length
export const isValidSecretLoaded = function() {
    // make sure secret is not null, undefined, or empty
    let isAdminSecretAvailable = !!process.env.admin_secret;
    if (!isAdminSecretAvailable) {
        return false;
    }

    // make sure secret is at least 32 chars
    let admin_secret = process.env.admin_secret;

    return admin_secret.length >= 32;
};

export const checkSecret = function(providedSecret) {
    let isSecretProvided = !!providedSecret;
    if (!isSecretProvided) {
        return false;
    }

    return providedSecret === process.env.admin_secret;
};