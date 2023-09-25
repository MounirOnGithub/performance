import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Model } from "mongoose";

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
    @Prop({})
    id: string;

    @Prop({
        type: String,
        required: true,
    })
    firstname: string;

    @Prop({
        type: String,
        required: true,
    })
    lastname: string;

    @Prop({
        type: String,
        required: true,
    })
    username: string;

    @Prop({
        type: String,
        required: true,
    })
    password: string;

    @Prop({
        type: Date,
        required: true,
    })
    birthDate: Date;
}

export const UserSchema = SchemaFactory.createForClass(User)
