import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PostDocument } from './post.schema';
import { Post } from './entities/post.entity';

@Injectable()
export class PostService {

  constructor(@InjectModel(Post.name) private readonly model: Model<PostDocument>){}

  create(createPostDto: CreatePostDto) {
    return this.model.create(createPostDto);
    return createPostDto;
  }

  findAll() {
    // return `This action returns all post`;
    return this.model.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} post`;
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
