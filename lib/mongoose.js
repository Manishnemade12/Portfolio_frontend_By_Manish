
import mongoose from "mongoose";

export async function mongooseConnect() {
    console.log("Attempting to connect to MongoDB...");
    try {
        if (mongoose.connection.readyState === 1) {
            console.log("Already connected to MongoDB.");
            return mongoose.connection.asPromise();
        } else {
            const uri = process.env.MONGODB_URI || "mongodb+srv://sedipi7327:qd9Meq7MtBIjmy10@cluster0.aacdl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
            await mongoose.connect(uri);
            console.log("MongoDB connected successfully.");
        }
    } catch (error) {
        console.error("Database connection error:", error);
        return null; // Return null instead of throwing error
    }
}



// import mongoose from "mongoose";

// export async function mongooseConnect() {
//     console.log("Attempting to connect to MongoDB...");
//     try {
//         if (mongoose.connection.readyState === 1) {
//             console.log("Already connected to MongoDB.");
//             return mongoose.connection.asPromise();
//         } else {
//             const uri = process.env.MONGODB_URI;
//             if (!uri) {
//                 throw new Error("MongoDB connection string is not defined in environment variables.");
//             }
//             await mongoose.connect(uri);
//             console.log("MongoDB connected successfully.");
//         }
//     } catch (error) {
//         console.error("Database connection error:", error);
//         throw error; // Rethrow to let the calling function handle it
//     }
// }
