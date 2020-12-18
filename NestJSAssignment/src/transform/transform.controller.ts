import { Body, Controller, Param, Post } from '@nestjs/common';
import {TransformPipe} from '../transform.pipe'
@Controller('transform')
export class TransformController {


    @Post('pipe')
    addTodo(
        @Body(TransformPipe) paramData,
        ) {
          return paramData
    }

}
