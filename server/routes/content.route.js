import express from "express";
import mongoose from "mongoose";
import fetch from "node-fetch";

const router = express.Router();


const extDB = mongoose.connect(
  "mongodb+srv://kartikpokhriyal538:nvfKa5qWAWk4oKHe@mindmap.dyte1.mongodb.net/?retryWrites=true&w=majority&appName=MindMap"
);


const handleAI = async (data) => {
  try {
    const prompt = `Analyze the following data and provide insights: ${JSON.stringify(data)}`;
    const genAI = new GoogleGenerativeAI(process.env.API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(prompt);
    return result.response.text() 
  } catch (error) {
    console.error("Error calling AI service:", error);
    throw error;
  }
};


router.post("/getdata", async (req, res) => {
  try {
    const data = await extDB.find(); 
    const data1 = JSON.parse(JSON.stringify(data));  
    const refinedData = await handleAI(data1);
    res.status(200).json(refinedData);
  } catch (e) {
    console.error(e);
    res.status(500).json("error");
  }
});

export default router;
