import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongoDbModule } from './modules/mongodb-crud/mongodb.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongoDbModule, MongooseModule.forRoot('mongodb://127.0.0.1/mahir')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
