import mongoose from "mongoose";
import dns from "node:dns";

// Ensure Node can resolve MongoDB SRV records on Windows networks
try {
    dns.setServers(["8.8.8.8", "8.8.4.4", "1.1.1.1"]);
} catch {
    // Ignore if not supported
}

const connectDB = async () => {
    mongoose.connection.on("connected", () => {
        console.log("MongoDB connected");
    });
    await mongoose.connect(process.env.MONGODB_URI as string);
};

export default connectDB;

