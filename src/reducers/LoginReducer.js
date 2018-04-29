/*export default function(){

/*return {
'username':'pavan',
'password':'xyz'

}

}*/
const defaultState = {
  Credentials:{
 'username':'pavssan',
'password':'xyz'
}
};
export const LoginReducer = (state =defaultState , action) => {
  /*  var newState={};
   console.log("action happened"+JSON.stringify(action));
    if(action.type==='UPDATE_CREDENTIALS'){
   newState=Object.assign({},action.payload);
    }

   state=newState;
   */
     if(action.type==='UPDATE_CREDENTIALS'){
   return {...state,Credentials:action.userInfo};
 }else{

  return state;
 }


}

export default LoginReducer;
