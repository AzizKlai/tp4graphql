//import { db } from "../db/db"
import { createPubSub } from "graphql-yoga";
import { Context } from "node:vm";

const CV_UPDATED = 'CV_UPDATED';
const CV_DELETED = 'CV_DELETED';
const CV_ADDED = 'CV_ADDED';


export const Subscription={
    
       
    cvUpdated: {
        subscribe: (_: any,__: any,{db,pubSub}: any) => pubSub.subscribe(CV_UPDATED),
        resolve: (payload: any) => { return payload }
    },
    cvadded: {
        subscribe: (_: any,__: any,{db,pubSub}: any) => pubSub.subscribe(CV_ADDED),
        resolve: (payload: any) => { return payload }
    },
    cvdeledted: {
        subscribe: (_: any,__: any,{db,pubSub}: any) => pubSub.subscribe(CV_DELETED),
        resolve: (payload: any) => { return payload }
    }
}