const { default: mongoose } = require("mongoose");

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
    },
    image: {
        type: String
    },
    mobile: {
        type: String,
        required: true
    },
    userID: { type: mongoose.Types.ObjectId, ref: "users" }
})

contactSchema.set("timestamps", true);
contactSchema.index({ userID: 1, mobile: 1 }, { unique: true });

module.exports = mongoose.model("contacts", contactSchema)
