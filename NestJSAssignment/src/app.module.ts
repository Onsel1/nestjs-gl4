import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestModule } from './test/test.module';
import { TodoModule } from './todo/todo.module';
import { TransformController } from './transform/transform.controller';
import * as dotenv from 'dotenv'
import { TodoEntity } from './todo/entities/todo.entity';
dotenv.config()
@Module({
  imports: [
    TestModule, 
    TodoModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: 3308,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: ["dist/**/*.entity{.ts,.js}" ],
      synchronize: true,
    }),
  
  ],
  controllers: [AppController, TransformController],
  providers: [AppService],
})
export class AppModule {}
