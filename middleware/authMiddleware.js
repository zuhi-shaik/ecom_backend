const jwt = require('jsonwebtoken')

const authMiddleware = (req,res,next)=>{
    const authHeader=req.header("Authorization")

    if(!authHeader)return res.status(401).json({message:"Invalid authorization"})

        const token=authHeader.split(" ")[1]
        if(!token) return res.status(401).json({message:"no token provided"})
            try{
        const verified=jwt.verify(token,process.env.JWT_SECRET)
        req.user=verified
        next()
    }
    catch(err){
        return res.status(401).json({message:"Invalid token"})
    }
}
module.exports=authMiddleware
//lAuthorization:Bearer,eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3ZDdjMmY5YTU0MzU2ZDAzMjI3MjJmNCIsImlhdCI6MTc0MjE5MzQwOX0.jbhIB7ypqKNjLUhxs7PPXPOnYWOj7YN4iNmylmzhz3k