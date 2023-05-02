export const db={
users:[
    { id: "1", name: "adam", email: "adam@example.com", role: "ADMIN"  },
    { id: "2", name: "azizbob", email: "azizbob@example.com", role: "USER" },
  ],
  
  skills: [
    { id: "1", designation: "JavaScript" },
    { id: "2", designation: "React" },
    { id: "3", designation: "GraphQL" },
  ],
  
  cvs:[
    {
      id: "1",
      name: "aziz klai",
      age: "21",
      job: "sstudent",
      skills: ["1","2","3"],
      userId:"2"
    },
    {
      id: "2",
      name: "adam 7sin",
      age: "22",
      job: "student",
      skills: ["2","3"],
      userId:"1"
    },
  ]
}
