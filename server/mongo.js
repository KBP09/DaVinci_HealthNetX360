import mongoose from 'mongoose';

mongoose.connect("mongodb+srv://kanakbpandey2023:suytwqo0qaSWhu2H@userdata.9x2ov.mongodb.net/?retryWrites=true&w=majority&appName=Userdata", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log("MongoDB connected");
    })
    .catch((error) => {
        console.error("MongoDB connection failed:", error);
    });

const userSchema = new mongoose.Schema({
    firstName : {
        type: String,
        required: true
    },
    lastName : {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true,
        unique: true
    },
    password : {
        type: String,
        required: true,
        unique: true
    }
})

const collection = mongoose.model("Collection",userSchema);

module.exports = collection;