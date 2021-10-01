import { Mongoose } from "mongoose";

const userSchema = new Mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: 'User'
    },
    root: {
        type: Boolean,
        default: false
    },
    avatar: {
        type: String,
        default: 'D:\Academic(UOR)-Semester 05\Elective Modules\`EE5209 Web Application Development\Project - Computer shop Ecommerce\ComputerShop_Ecommerce\nextjs_ecommerce\avatarlogo\icon-5359553_1280.png'
    }
},{
    timestamps: true
})

let Dataset = Mongoose.models.user || Mongoose.model('user', userSchema)
export default Dataset
