const express = require('express')
const app = express()
app.use(express.json())
const PORT = 5000
const userRoutes = require("./routes/userRoutes")
const postRouters = require("./routes/postRoutes")

app.use('/users', userRoutes)
app.use("/post",postRouters)
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);

})

