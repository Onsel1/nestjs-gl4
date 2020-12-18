import { Controller, Delete, Get } from '@nestjs/common';

@Controller()
export class TestController {
    @Get('test')
    get(): string {
        console.log('Test Get');
        return 'TEST GET';
    }
    @Delete('test')
    delete(): string {
        console.log('Test DELETE');
        return ' TEST DELETE';
    }
}
