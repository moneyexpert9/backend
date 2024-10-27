const express = require("express");
const mongoose = require("mongoose");
const investmentRoutes = require("./routes/investmentRoutes");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());



mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("Database connected"))


app.use("/api/investments", investmentRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
