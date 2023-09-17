import { Schema, model } from "mongoose"

export interface ITestModal {
  title: String
  description: String
}

const testModalSchema = new Schema<ITestModal>({
  title: { type: String, required: true },
  description: { type: String, required: true },
})

const TestModal = model<ITestModal>("Modal", testModalSchema)
export default TestModal
