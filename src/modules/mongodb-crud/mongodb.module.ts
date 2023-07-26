import { Module } from '@nestjs/common';
import { MongoDbController } from './mongodb.controller';
import { MongoDbService } from './mongodb.service';

import { MongooseModule } from '@nestjs/mongoose';
import { Cat, CatSchema } from '../Cat/schemas/cat.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Cat.name, schema: CatSchema }])
    ],
    controllers: [MongoDbController],
    providers: [MongoDbService],
    exports: [MongoDbService]
})
export class MongoDbModule { }