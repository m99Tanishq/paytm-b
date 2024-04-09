const express = require("express");
const app = express();
const cors = require('cors');
const { authMiddleware } = require("./middleware");

app.use(cors());
app.use(express.json());
const rootRouter = require("./routes/index")
app.use(authMiddleware);

app.use("/api/v1/", rootRouter);

app.listen(3000);
