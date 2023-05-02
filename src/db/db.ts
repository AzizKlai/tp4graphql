export const db =
    {   users:[
            {
                id:"1",
                name:"azizbob",
                email:"azizbob@example.com",
                role:"USER"
            },
            {
                id:"2",
                name:"adam",
                email:"adam@example.com",
                role:"USER"
            },
            {
                id:"3",
                name:"ala",
                email:"user3@gmail.com",
                role:"USER"
            }
        ],
        cvs:[
            {
                id:"1",
                name:"cv1",
                age:"30",
                job:"job1",
                userId:"1"
            },
            {
                id:"2",
                name:"cv2",
                age:"31",
                job:"job2",
                userId:"2"
            },{
                id:"3",
                name:"cv3",
                age:"32",
                job:"job3",
                userId:"3"
            },{
                id:"4",
                name:"cv4",
                age:"33",
                job:"job4",
                userId:"3"
            }
        ],
        skills:[
            {
                id:"1",
                designation:"d1"
            },
            {
                id:"2",
                designation:"d2"
            }
        ],
        cv_skill:[
            {
                id:"1",
                idCv:"1",
                idSkill:"1"
            },
            {
                id:"2",
                idCv:"1",
                idSkill:"2"
            },
            {
                id:"3",
                idCv:"2",
                idSkill:"1"
            },
            {
                id:"4",
                idCv:"2",
                idSkill:"2"
            },
            {
                id:"5",
                idCv:"3",
                idSkill:"1"
            }
        ]
    }
export const db1={
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
