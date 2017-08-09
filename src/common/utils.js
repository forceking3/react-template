/**
 * Created by changjin.zhang on 7/11/2017.
 */
export const checkProp=(object,name)=>{
    const arr=name.split('.');
    let temp=object;
    for(let index=0;index<arr.length;index++){
        if (!temp) {
            return false;
        }
        if(index<arr.length-1) {
            let item = arr[index + 1];
            temp = temp[item];
        }
    }
    return true;
};