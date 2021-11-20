import { Expose, plainToClass, Transform } from "class-transformer"
import { IsMongoId } from "class-validator"
import { ObjectId } from "mongodb"
import mongoose from "mongoose"

export class SampleWithObj {
  @Transform(({ obj }) => String(obj.id), { toClassOnly: true })
  @Expose()
  @IsMongoId()
  id: string

  static fromObject(obj: unknown): SampleWithObj {
    if (!obj) return null
    return plainToClass(SampleWithObj, obj)
  }
}

export class SampleWithValue {
  @Transform(({ value }) => String(value), { toClassOnly: true })
  @Expose()
  @IsMongoId()
  id: string

  static fromObject(obj: unknown): SampleWithValue {
    if (!obj) return null
    return plainToClass(SampleWithValue, obj)
  }
}

const printCls = (obj: { id: ObjectId }) => {
  console.log("plain obj: ", obj)
  console.log("deserialized obj: ", { id: String(obj.id) })

  console.log("============= test result ============")

  console.log("obj with String(): ", SampleWithObj.fromObject({ ...obj }))

  console.log("value with toString(): ", SampleWithValue.fromObject({ ...obj }))
}

const obj = { id: new mongoose.Types.ObjectId("61980e80fc741dcac3c60a83") }

printCls(obj)
