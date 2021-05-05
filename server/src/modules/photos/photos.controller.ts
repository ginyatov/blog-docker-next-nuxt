import {
  Post,
  UploadedFile,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common'
import { Controller } from '@nestjs/common'
import { AnyFilesInterceptor, FileInterceptor } from '@nestjs/platform-express'
import { PhotosService } from './photos.service'

@Controller('photos')
export class PhotosController {
  constructor(private readonly photosService: PhotosService) {}

  @Post('upload')
  @UseInterceptors(AnyFilesInterceptor())
  async uploadFile(@UploadedFiles() files) {
    return await this.photosService.uploadSingle(files[0])
  }
}
