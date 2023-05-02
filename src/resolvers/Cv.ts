import { db } from "../db/db"

export const Cv={
    skills:(parent: { id: any; },_: any,{db}: any)=>{
        let sk:any []
        sk=[]
        for(const ele of db.cv_skill){
            if(parent.id=== ele.idCv){
                sk.push(db.skills.find((sl: { id: any })=>sl.id===ele.idSkill))
            }
        }
        return sk;
        //return db.skills.filter((skill: { id: any })=> skills.includes(skill.id) )
    },
    user:({userId}:any,_: any,{db}: any)=>{
        return db.users.find((user: { id: any })=> user.id===userId)
        
    },
    
}