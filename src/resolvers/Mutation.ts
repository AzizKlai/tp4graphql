import { GraphQLError } from "graphql";
import { createPubSub } from "graphql-yoga";
const CV_UPDATED = 'CV_UPDATED';
const CV_DELETED = 'CV_DELETED';
const CV_ADDED = 'CV_ADDED';

export const Mutation={
    addcv : (parent: any,{cvaddinput}: any,context: any) =>{
    if(!context.db.users.some((user: { id: any; })=>user.id===cvaddinput.userId))
        
        throw new GraphQLError(`pas de user d'id ${cvaddinput.userId} `, {
            extensions: {
            http: {
            status: 404,
            headers: {
            "x-custom-header": "some-value",
            },
            },
            },})
    else {
     let bool =true;
     cvaddinput.skills.forEach((element: any) => {
        if(context.db.skills.length<parseInt(element))
          {bool=false;}
     });

     if(!bool)
     throw new GraphQLError(` il existe un skills indefini  `, {
        extensions: {
        http: {
        status: 404,
        headers: {
        "x-custom-header": "some-value",
        },
        },
        },})
  
     
     else{
        const newcv={
            id: (context.db.cvs.length+1).toString(),
            name: context.db.users.find((user: { id: any; })=> user.id==cvaddinput.userId).name,
           ...cvaddinput
        }
        context.db.cvs.push(newcv)
        context.pubSub.publish("cvsub", { msg: 'new CV_Added', cv: newcv });
        return newcv



     }



    }   


    },
    updatecv :(parent: any,args: any,context: {
        pubSub: any; db: any; cvs: any[]; 
}) =>{
    
        let _cv = context.db.cvs.find((cv: { id: any; }) => cv.id === args.cvupdateinput.id);
        if(!_cv){  
        
            throw new GraphQLError(`cv n'existe pas `, {
                extensions: {
                http: {
                status: 404,
                headers: {
                "x-custom-header": "some-value",
                },
                },
                },})
        }
        else{
        console.log(_cv);
        
        const index = context.db.cvs.indexOf(_cv!);
        if(args.cvupdateinput.name)
        _cv!.name = args.cvupdateinput.name;
        if(args.cvupdateinput.age)
        _cv!.age = args.cvupdateinput.age;
        if(args.cvupdateinput.job)
        _cv!.job = args.cvupdateinput.job;
        let skills:any[] = [];
        if(args.cvupdateinput.skillIds){
        for (let id of args.cvupdateinput.skillIds) {
            const result = context.db.skills.filter((skill: { id: any; }) => skill.id === id)
            // skills.push(context.skills.filter((skill) => skill.id === id))
            skills.concat(result)
        }
        _cv!.skills = skills;}
        const _user = context.db.users.find((user: { id: any; }) => args.cvupdateinput.userId == user.id);
        _cv!.user = _user!;
        context.db.cvs[index] = _cv!
        context.pubSub.publish("cvsub", { msg: 'CV_UPDATED', cv: _cv });

        return _cv;}
    },
    deleteCv: (parent: any, args: { id: any; }, context: {
        pubSub: any;
        db: any; cvs: any[]; 
}) => {
      // const c=context.db.users.some((user: { id: any; })=>user.id===args.id);
      let c = context.db.cvs.find((user: { id: any; }) =>user.id===args.id);
      
      if(!c)
       return false;
       else{
        const _cv = context.db.cvs.find((cv: { id: any; }) => cv.id === args.id);
        const index = context.db.cvs.indexOf(_cv!);
        context.db.cvs.splice(index, 1)
        context.pubSub.publish("cvsub", { msg: 'CV_DELETED', cv: _cv });

        return true;}
    }
    


}