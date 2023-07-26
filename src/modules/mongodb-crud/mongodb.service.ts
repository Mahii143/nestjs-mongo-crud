import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Cat, CatDocument } from "../Cat/schemas/cat.schema";
import { Model } from "mongoose";
import { CreateCatDto } from "../Cat/dto/cat.dto";

@Injectable()
export class MongoDbService {
    // constructor(@InjectModel(Cat.name) private catModel: Model<CatDocument>) { }
    constructor(@InjectModel(Cat.name) private readonly catModel: Model<CatDocument>) { }

    async create(createCatDto: CreateCatDto): Promise<Cat> {
        const createdCat = new this.catModel(createCatDto);
        return createdCat.save();
    }

    async findAll(): Promise<Cat[]> {
        return this.catModel.find().exec();
    }

    async readById(id: string): Promise<Cat> {
        return await this.catModel.findById(id).exec();
    }

    async update(id: string, Cat: Cat): Promise<Cat> {
        return await this.catModel.findByIdAndUpdate(id, Cat, { new: true })
    }

    async delete(id: string): Promise<any> {
        return await this.catModel.findByIdAndRemove(id);
    }
}
