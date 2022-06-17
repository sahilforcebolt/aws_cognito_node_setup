const cognitoService =require("../Services.js/cognito")
module.exports = {
    async signUp(req,res){
      const cognito = new cognitoService();
         cognito.signUpUser(req.body.email,req.body.password)
        .then(sucess => {
            if(sucess){
                res.send("hi");
            }
            else {
                res.status(400).send("Something Went Wrong");
            }
        })
    },
    async signIn(req,res){
        res.send("hi")
      },
      async verify(req,res){
        res.send("hi")
      }
  }