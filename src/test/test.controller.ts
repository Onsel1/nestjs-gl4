import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';


@Controller('test')
export class TestController {
    @Get('')
    getTest(){
        return 'TEST GET';
    }

    @Put('')
    putTest(){
        return 'TEST PUT';
    }

    @Post('')
    postTest(){
        return 'TEST POST';
    }

    @Patch('')
    patchTest(){
        return 'TEST PATCH';
    }

    @Delete('')
    deleteTest(){
        return 'TEST DELETE';
    }

}
