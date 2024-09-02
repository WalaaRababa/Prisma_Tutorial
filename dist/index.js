"use strict";
const express = require('express');
const app = express();
app.use(express.json());
const PORT = 5000;
const userRoutes = require("./routes/userRoutes");
app.use('/users', userRoutes);
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});
