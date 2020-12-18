import { ArgumentMetadata, HttpException, HttpStatus, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class TransformPipe implements PipeTransform {
  transform(entry: { skills: string[] }, metadata: ArgumentMetadata) {
    console.log(entry)
    if(metadata.type === 'body') {
      if(entry.skills){    
        return entry.skills.map((element)=>element.toUpperCase()).join('-');
      }
      else{
        throw new HttpException('Skills is required', HttpStatus.BAD_REQUEST);
      }
    }
    return entry;
  }
}
