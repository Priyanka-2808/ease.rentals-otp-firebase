const { Mongoose } = require("mongoose")
const Schema = mongoose.Schema;

const tokensSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "user",
        unique: true,
    },
    tokens:{
        type: String,
        required: true
    },
    createdAt: {
        typel: Date,
        default: Date.now(),
        expires: 3600
    }
});

module.exports = mongoose.model("tokens", tokensSchema)