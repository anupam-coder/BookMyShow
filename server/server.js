const path = require("path");
const express = require("express");
const cors = require("cors");
const app = express();
app.use(
  cors({
    origin: [
      "*",
      "https://bookmyshow-u020.onrender.com",
      "https://sunny-speculoos-459c93.netlify.app",
    ],
    methods: ["GET", "PUT", "PATCH", "POST", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
const clientBuildPath = path.join(__dirname, "../client/build");
console.log("clientBuildPath", clientBuildPath);
app.use(express.static(clientBuildPath));
require("dotenv").config(); //load environment variables

const connectDB = require("./config/db");
const usersRouter = require("./routes/userRoutes");
const movieRouter = require("./routes/movieRoutes");
const theatreRouter = require("./routes/theatreRoutes");
const showRouter = require("./routes/showRoutes");
const bookingRouter = require("./routes/bookingRoutes");

connectDB();

app.use(express.json());
app.use("/api/users", usersRouter);
app.use("/api/movies", movieRouter);
app.use("/api/theatres", theatreRouter);
app.use("/api/shows", showRouter);
app.use("/api/bookings", bookingRouter);

app.listen(8082, () => {
  console.log("Server is running on port 8082");
});
