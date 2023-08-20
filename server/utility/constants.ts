export const Constants = {
    // user
    userFetchSuccessfully: 'User fetch successfully',
    userRegisteredSuccessfully: 'User registered successfully',
    userUpdatedSuccessfully: 'User updated successfully',
    userDeletedSuccessfully: 'User deleted successfully',
    userLoggedInSuccessfully: 'User logged in successfully',
    userExists: 'User already exists',
    invalidUserId: 'Invalid user id',
    userNotFound: 'User not found',

    // challenge
    challengeCreatedSuccessfully: 'Challenge has been created successfully',
    challengeUpdatedSuccessfully: 'Challenge has been updated successfully',
    challengeDeletedSuccessfully: 'Challenge has been deleted successfully',
    challengesFetchedSuccessfully: 'Challenges has been fetched successfully',

    // category
    categoryCreatedSuccessfully: 'Category has been created successfully',
    categoryUpdatedSuccessfully: 'Category has been updated successfully',
    categoryDeletedSuccessfully: 'Category has been deleted successfully',
    categoriesFetchedSuccessfully: 'Categories has been fetched successfully',

    //badge
    badgeCreatedSuccessfully: 'Badge has been created successfully',
    badgeUpdatedSuccessfully: 'Badge has been updated successfully',
    badgeDeletedSuccessfully: 'Badge has been deleted successfully',
    badgesFetchedSuccessfully: 'Badge has been fetched successfully',

    invalidId: 'Invalid id',
    notFound: 'Not found',
    recordFound: 'Record found',
    routeNotFound: 'Route not found',
    pleaseAddPassword: 'Please add a password',
    loginToProceed: 'Please login to proceed',
    invalidCredentials: 'Invalid email or password',
    pleaseAddEmptyFields: (emptyFields:string) => `Please add ${emptyFields} field(s)`,
    pleaseAddName: 'Please add a name',
    pleaseAddEmail: 'Please add an email',
    authorizationError: 'You are not authorized',
    forbiddenParameters: (forbiddenParams:string) => `Forbidden parameter(s): ${forbiddenParams}`,
    requiredParameters: (requiredParams:string) => `Missing required parameter(s): ${requiredParams}`,
    notificationEmailSubject: (tournamentName:string, teamName:string) => `Registration for ${tournamentName} - ${teamName}`,
    notificationEmailBody: (tournamentName:string, teamName:string, fromName:string) => `<p>Hello,</p><p>Your team "${teamName}" has been registered for the "${tournamentName}" tournament by "${fromName}"</p><p>Thank you!</p>`,
    unauthorizedAccess: 'You are not authorised to access this resource',
    otpSentSuccessfully: 'Otp has been sent successfully',
    incorrectOtp: 'Otp is incorrect',
    changedPasswordSuccessfully: 'Password has been changed successfully',
    authenticationError: 'Not authenticated -no token',
    // models 
    emailRequired: 'Email is required',
    passwordRequired: 'Password is required',
    codeRequired: 'Code is required',

}


export const ROLES = {
    ADMIN : 'admin',
    USER: 'user'
}