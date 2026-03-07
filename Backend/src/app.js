// const express = require("express");
// const cookieParser = require("cookie-parser");
// const cors = require("cors");

// const app = express();

// const allowedOrigins = [
//   "https://aiinterviewmodel.netlify.app",
//   "https://69ac5e147071715eb4f8964c--aiinterviewmodel.netlify.app",
//   "http://localhost:5173",
// ];

// app.use(express.json());
// app.use(cookieParser());
// app.use(
//   cors({
//     origin: function (origin, callback) {
//       // Allow requests with no origin (mobile apps, Postman, etc.)
//       if (!origin) return callback(null, true);

//       // Allow exact matches from the allowedOrigins list
//       if (allowedOrigins.includes(origin)) {
//         return callback(null, true);
//       }

//       // Allow any Netlify preview/deploy-preview subdomain for this site
//       if (
//         /^https:\/\/[a-z0-9-]+--aiinterviewmodel\.netlify\.app$/.test(origin)
//       ) {
//         return callback(null, true);
//       }

//       callback(new Error("Not allowed by CORS"));
//     },
//     credentials: true,
//   }),
// );

// /* require all the routes here */
// const authRouter = require("./routes/auth.routes");
// const interviewRouter = require("./routes/interview.routes");

// /* using all the routes here */
// app.use("/api/auth", authRouter);
// app.use("/api/interview", interviewRouter);

// module.exports = app;

const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();

const allowedOrigins = [
  "https://aiinterviewmodel.netlify.app",
  "http://localhost:5173",
];

// Middleware
app.use(express.json());
app.use(cookieParser());

// CORS configuration
app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests without origin (Postman, mobile apps)
      if (!origin) return callback(null, true);

      // Allow main domains
      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      // Allow ANY Netlify preview or deploy preview
      if (/\.netlify\.app$/.test(origin)) {
        return callback(null, true);
      }

      return callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);

// Handle preflight requests
app.options("*", cors());

// Routes
const authRouter = require("./routes/auth.routes");
const interviewRouter = require("./routes/interview.routes");

app.use("/api/auth", authRouter);
app.use("/api/interview", interviewRouter);

module.exports = app;
