const express = require("express");

const connectDB = require("./config/db");
const app = express();

//connect to db
connectDB();

//init middleware(to accept data)
app.use(express.json({ extended: false }));

const PORT = process.env.PORT || 8000;

//Routes
app.use("/api/users", require("./routes/auth/users"));
app.use("/api/auth", require("./routes/auth/auth"));
app.use("/api/projects", require("./routes/projects"));

app.use(express.static("uploads"));

//Serve static assets in production
if (process.env.NODE_ENV === "production") {
  //Set static folder
  app.use(express.static("client/build"));
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

app.listen(PORT, () => console.log(`Server running on port${PORT}`));
