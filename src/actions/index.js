
export const UPDATE_CREDENTIALS = 'UPDATE_CREDENTIALS';

export const  updateCredentials=(userInfo = null) =>{
console.log("userInfo"+JSON.stringify(userInfo));
  return {
    type: UPDATE_CREDENTIALS,
    userInfo
  }
}