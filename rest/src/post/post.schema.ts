import {Schema, Prop, SchemaFactory} from '@nestjs/mongoose'

import { Document } from 'mongoose';

export type PostDocument = Document & Post;

@Schema()
class Post {
    @Prop()
    id: string;

    @Prop()
    title: string;

    @Prop()
    content:string;
}

export const PostSchema = SchemaFactory.createForClass(Post);