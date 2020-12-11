import { Module } from "@nestjs/common";
import { TestController } from './test.controller';

@Module({
    exports: [],
    imports: [],
    controllers: [TestController],
    providers: [],
})
export class TestModule {

}