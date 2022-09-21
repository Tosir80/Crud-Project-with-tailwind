const User = require("../models/userSchema");

exports.getUser = async (req, res) => {
  const user = await User.find({});
  res.json(user);
};


exports.getOneUser = async (req, res) => {
  const id=req.params.id
  console.log(id)
  const user = await User.findById({_id:id});
  res.json(user);
};
//add user
exports.addUser = async (req, res) => {
  try {
    const { name, email, phone, role } = req.body;
    const emailExist = await User.findOne({ email: email });
    if (emailExist)
      return res.status(404).json({
        status: "fail",
        message: "Email already Exsit",
        data: emailExist,
      });
    const phoneExist = await User.findOne({ phone: phone });
    if (phoneExist)
      return res.status(404).json({
        status: "fail",
        message: "Phone Number already Exsit",
        data: phoneExist,
      });

    const user = await new User({ name, email, phone, role });
    user.save();
    res.status(201).json({
      status:"Successfull",
      message:"User Created Successfully",
      data:user
    });
  } catch (error) {
    console.log(error);
  }
};



//deleted user 
exports.deleteUser = async(req,res)=>{
  const id= req.params.id
  try {
    const user= await User.findByIdAndDelete({_id:id})
    res.status(200).json({
      status:"Successfull",
      message:"Deleted successfully",
      data:user
    })
  } catch (error) {
    
  }
}


//edit user 
exports.updateUser= async(req,res)=>{
  const id= req.params.id
  const data= req.body
  try {
    const user= await User.updateOne( {_id:id} , { $set:data }, { runValidators:true})
   res.status(200).json({
    status:"Successfull",
    message:"Update successfully",
    data:user
  })
  } catch (error) {
    res.status(400).json({
      status:"Fail",
      message:"User not Updated",
      error:error.message
  } )
}
}