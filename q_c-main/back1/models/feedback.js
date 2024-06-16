import mongoose from "mongoose";
const Schema = mongoose.Schema;
let feedbackSchema = new Schema({
    name: {
        type: String,
        required:true
    },
    foodItem: {
        type: String,
        required:true
    },
    specialRequest: {
        type: String,
        required:true
    }
});
export default mongoose.model("feedbacks",feedbackSchema);
//export default mongoose.model(collectionname,schemavariablename)