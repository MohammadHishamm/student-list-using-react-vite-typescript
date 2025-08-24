import mongoose, {Schema,Document} from "mongoose";

interface Istudent extends Document{
    name: string,
    age: number,
    grade: string
}

const studentSchema: Schema = new Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    grade: { type: String, required: true }
})

export const studentModel= mongoose.model<Istudent>("Student", studentSchema);