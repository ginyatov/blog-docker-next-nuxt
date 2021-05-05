import { Injectable } from '@nestjs/common'
import { BufferedFile } from '../minio/file.model'
import { MinioClientService } from '../minio/minio-client.service'

@Injectable()
export class PhotosService {
  constructor(private minioClientService: MinioClientService) {}

  async uploadSingle(image: BufferedFile) {
    const uploaded_image = await this.minioClientService.upload(image)

    return {
      image_url: uploaded_image.url,
      message: 'Successfully uploaded to MinIO S3',
    }
  }
}
