import { Module } from '@nestjs/common'
import { MinioClientModule } from '../minio/minio-client.module'
import { PhotosController } from './photos.controller'
import { PhotosService } from './photos.service'

@Module({
  imports: [MinioClientModule],
  controllers: [PhotosController],
  providers: [PhotosService],
})
export class PhotosModule {}
