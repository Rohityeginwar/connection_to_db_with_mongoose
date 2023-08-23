const mongoose = require ('mongoose');


main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/List') 
  console.log("connection done")
}

const studentSchema = new mongoose.Schema({
  name:{
    type:String,
    require:true
  },
  emailId:String,
  phoneNo : Number,

})

const Student = new mongoose.model("Student", studentSchema)

const createDocument = async () => {
 try{
  const dbStudent = new Student({
    name:"",
    EmailId:"Rohit@gmail.com",
    phoneNo:12345678

  })
  const out = await dbStudent.save();
  console.log(out);
 }
 catch(err){
  console.log(err)
 }
}

createDocument()


