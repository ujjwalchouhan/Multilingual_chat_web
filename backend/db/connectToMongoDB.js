import mongoose from "mongoose";

const connectToMongoDB = async () => {
	try {
		await mongoose.connect('mongodb+srv://Vikas8055:Vikas123@cluster0.g4ce3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0%22');
		console.log("Connected to MongoDB");
	} catch (error) {
		console.log("Error connecting to MongoDB", error.message);
	}
};

export default connectToMongoDB;
