import firestore from '@react-native-firebase/firestore';

const addRecordIntoTable = (tableName, data) => {
    firestore().collection(tableName).add(data).then((resolve)=>{
        return resolve;
    }).catch((exception)=>{
        console.log(exception)
        return false;
    });
}

const getAllRecordFromTable=async (tableName)=>{
   var data= await firestore().collection(tableName).get();
   
   return data.docs;
}

module.exports = {
    addRecordIntoTable:addRecordIntoTable,
    getAllRecordFromTable:getAllRecordFromTable
}