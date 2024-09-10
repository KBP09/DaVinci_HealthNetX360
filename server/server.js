import express from 'express';
import reportRoutes from './routes/report.route.js';
import path from 'path';
import { fileURLToPath } from 'url';
import mongoose from 'mongoose';


const app = express();
const PORT = process.env.PORT || 3000;


app.post("/", async (req, res) => {
    const { email, password } = req.body;

    try {
        const check = await collection.findOne({ email: email });
        if (check) {
            res.json("exist");
        } else {
            res.json("not exist");
        }
    } catch (e) {
        console.error(e);
        res.status(500).json("error");
    }
});
app.post("/signup", async (req, res) => {
    const { firstName,lastName,email, password } = req.body;
    const data = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
    };
    try {
        const check = await collection.findOne({ email: email });
        if (check) {
            res.json("exist");
        } else {
            await collection.insertMany([data]);
            res.json("created");
        }
    } catch (e) {
        console.error(e);
        res.status(500).json("error");
    }
});





const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.get('/', (req, res) => {
    res.send('<h1>Server is running</h1>');
});


app.use('/api/v1/reports', reportRoutes);


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
