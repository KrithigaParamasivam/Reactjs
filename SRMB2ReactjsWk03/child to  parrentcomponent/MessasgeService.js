import {Subject} from 'rxjs' 

const subject=new Subject();

 export const MessageService={
     
     sendMessage:(message)=>subject.next({Text:message}),
     getMessage:()=>subject.asObservable(),
     clearMessage:()=>subject.next({}),
     
 } 