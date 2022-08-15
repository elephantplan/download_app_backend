
const { getAuth } = require('firebase-admin/auth');


exports.getUserId = (userId) => {
    console.log("getUserId")
    return getAuth()
        .getUser(userId)
        .then((userRecord) => {
            console.log("userRecord: "+JSON.stringify(userRecord))
            return true;
        })
        .catch((error) => {
            console.log('Error fetching user data:', error);
            return false;
        });
}