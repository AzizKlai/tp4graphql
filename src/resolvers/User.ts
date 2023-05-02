import { db } from "../db/db"

export const User={
    cvs:({id}:any,_: any,{db}: any)=>{
        return db.cvs.filter((cv: { userId: any })=> cv.userId===id )
    },
  
    
}