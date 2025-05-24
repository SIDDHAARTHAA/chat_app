import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
    {
        senderId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        }
        ,
        receiverId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        text: {
            type: String,
        },
        image: {
            type: String,
        },
        // isRead: {
        //     type:Boolean,
        //     default:false
        // }
        // messageType:{
        //     type:String,
        //     enum:["image","video","audio","text"],
        //     default:"text",
        // }
        //we can use this rather than separate image and text and use messageType
        // content:{
        //     type:String,
        //     required:true
        // }
    },
    { timestamps: true }
)

const Message = mongoose.model("Message", messageSchema);

export default Message;