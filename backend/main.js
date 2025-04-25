import express from "express";
import cors from "cors"
import multer from "multer";
import path from "path"

const app = express();

const logger = (req, res, next) => {
    console.log("request at: ", req.path);
    next();
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        console.log(file);
        cb(null, "uploads/")
    },
    filename: (req, file, cb) => {
        const prefix = Date.now() + '-' + Math.round(Math.random() * 1000);
        return cb(null, prefix + path.extname(file.originalname));
    }
})

const upload = multer({ storage });

app.use(express.json());
app.use(cors({
    origin: "*"
}));
app.use(logger);

import db from "./db.js";

app.post("/auth/login", (req, res) => {
    const { username, password } = req.body;
    const user = db.users.find(user => user.username === username);
    if(!user) return res.status(404).json({ message: "user not found" });
    if(user.password === password) return res.status(200).json({ message: "success", user });
    return res.status(401).json({ message: "wrong password" });
});

app.post("/upload", upload.single("file"), (req, res) => {
    console.log(req.file);
    return res.json({ message: "uploaded successfully" });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log("running");
})