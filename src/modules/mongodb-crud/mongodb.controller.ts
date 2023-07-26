import { Controller, Get, Post, Res, Body, HttpStatus, Param, Put, Delete } from '@nestjs/common';
import { MongoDbService } from './mongodb.service';
import { Response } from 'express';
import { Cat } from '../Cat/schemas/cat.schema';

@Controller('cats')
export class MongoDbController {
    constructor(private catService: MongoDbService) { }

    @Post()
    async createCat(@Res() res: Response, @Body() cat: Cat) {
        const response = await this.catService.create(cat);
        res.status(HttpStatus.CREATED).send(JSON.stringify(response));
    }

    @Get()
    async findAll(@Res() res: Response) {
        const response = await this.catService.findAll();
        res.status(HttpStatus.OK).send(JSON.stringify(response));
    }

    @Get(':id')
    async findOne(@Res() res: Response, @Param('id') id: string) {
        const response = await this.catService.readById(id);
        res.status(HttpStatus.OK).send(JSON.stringify(response));
    }

    @Put(':id')
    async update(@Res() res: Response, @Param('id') id: string, @Body() cat: Cat) {
        const response = await this.catService.update(id, cat);
        res.status(HttpStatus.OK).send(JSON.stringify(response));
    }

    @Delete(':id')
    async delete(@Res() res: Response, @Param('id') id: string) {
        const response = await this.catService.delete(id);
        res.status(HttpStatus.OK).send(JSON.stringify(response));
    }
}