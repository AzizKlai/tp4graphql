//import { db } from "../db/db"
import { createPubSub } from "graphql-yoga";
import { Context } from "node:vm";

const CV_UPDATED = 'CV_UPDATED';
const CV_DELETED = 'CV_DELETED';
const CV_ADDED = 'CV_ADDED';


export const Subscription={
    
       
    cvSub: {
        subscribe: (_: any,__: any,{db,pubSub}: any) => pubSub.subscribe("cvsub"),
        resolve: (payload: any) => { return payload }
    },
}