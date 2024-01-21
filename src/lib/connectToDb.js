const mongoose = require("mongoose");

export const connectToDb = async () => {
  const connection = {};
  try {
    if (connection.isConnected) return;
    const db = await mongoose.connect(process.env.MONGO);
    connection.isConnected = db.connections[0].readyState;
    console.log("Connected to db");
  } catch (error) {
    console.log("Failed to connect to Db");
    throw new Error(error);
  }
};
