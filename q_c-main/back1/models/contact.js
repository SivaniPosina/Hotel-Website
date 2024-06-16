import mongoose from "mongoose";
const Schema = mongoose.Schema;
let contactSchema = new Schema({
    name: {
        type: String,
        required:true
    },
    email: {
        type: String,
        required:true
    },
    number: {
        type: String,
        required:true
    }
});
export default mongoose.model("contacts",contactSchema);
//export default mongoose.model(collectionname,schemavariablename)