import actionTypes from "./action-types/actionTypes";
const UsernameAction = (data)=>{
    return{
        type : actionTypes.UserName,
        payload : data
    }
};
export default UsernameAction