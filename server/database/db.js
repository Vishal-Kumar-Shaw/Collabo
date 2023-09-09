import mongoose from "mongoose";

const Connection = async (username='collabo-vishal', password='Vishal@1997') =>{
    const URL = `mongodb://${username}:${password}@ac-7sk0qpo-shard-00-00.aibu7ha.mongodb.net:27017,ac-7sk0qpo-shard-00-01.aibu7ha.mongodb.net:27017,ac-7sk0qpo-shard-00-02.aibu7ha.mongodb.net:27017/?ssl=true&replicaSet=atlas-inbsig-shard-0&authSource=admin&retryWrites=true&w=majority`;

    try{
        await mongoose.connect(URL, {useUnifiedTopology: true, useNewUrlParser: true});
        console.log('database connected successfully');
    }catch(error) {
        console.log('Error while connecting', error);
    }
}
export default Connection;