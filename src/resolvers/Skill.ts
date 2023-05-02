//import { db } from "../db/db"

export const Skill={
    cvs:({id}:any,_: any,{db}: any)=>{
        return db.cvs.filter((cv: { skills: string | any[] })=> cv.skills.includes(id) )
    },
  
    
}