import mongoose from "mongoose";

const Connection = async (username = "collabo-vishal", password = "Vishal@1997") => {
  // Encode the password to handle special characters
  const encodedPassword = encodeURIComponent(password);

  const URL = `mongodb://${username}:${encodedPassword}@ac-7sk0qpo-shard-00-00.aibu7ha.mongodb.net:27017,ac-7sk0qpo-shard-00-01.aibu7ha.mongodb.net:27017,ac-7sk0qpo-shard-00-02.aibu7ha.mongodb.net:27017/?ssl=true&replicaSet=atlas-inbsig-shard-0&authSource=admin&retryWrites=true&w=majority`;

  try {
    await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
    console.log('Database connected successfully');
  } catch (error) {
    console.error('Error connecting to the database:', error);
  }
};

export default Connection;

