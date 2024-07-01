import mongoose from 'mongoose'
import Icar from '../interfaces/ICar'

const userSchema = new mongoose.Schema<Icar>({
    model: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
        required: true
    },
    color: {
        type: String,
        required: true,
        unique: true
    },
    licensePlate: {
        type: String,
        required: true
    },
    owner: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        default: true
    }
})

export default mongoose.model<Icar>('car', userSchema)

