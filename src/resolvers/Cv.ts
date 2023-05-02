import { db } from "../db/db"

export const Cv={
    skills:({skills}:any,_: any,{db}: any)=>{
        return db.skills.filter((skill: { id: any })=> skills.includes(skill.id) )
    },
    user:({userId}:any,_: any,{db}: any)=>{
        return db.users.find((user: { id: any })=> user.id===userId)
        
    },
    
}