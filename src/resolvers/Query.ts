//import { db } from "../db/db"
import { GraphQLError } from "graphql";
import { Context } from "node:vm";


export const Query={
    
        hello: (parent: any,args: any,context: any,info: any) => "Hello World!",
        getCvs: (_: any,__: any,{db,pubSub}: any)=>{
            
            return db.cvs;
        },
        getCvById:(_: any,{id}: any,{db}:any)=>{
            const cv=db.cvs.find((cv: { id: any; })=> cv.id===id);
            if(!cv){
                
               // throw new Error(`il n'y a pas de cv d'id ${id} `);
                
                throw new GraphQLError(`il n'y a pas de cv d'id ${id} `, {
                    extensions: {
                    http: {
                    status: 404,
                    headers: {
                    "x-custom-header": "some-value",
                    },
                    },
                    },})




            }
            return cv;
        }
}