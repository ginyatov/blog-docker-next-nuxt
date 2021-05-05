import { Logger, ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { AppModule } from './app.module'

async function bootstrap() {
  const logger = new Logger('bootstrap')

  const app = await NestFactory.create(AppModule)
  app.setGlobalPrefix('api/v1')

  const config = new DocumentBuilder()
    .setTitle('Ginyatov API')
    .setDescription('The API for ginyatov.com')
    .setVersion('0.1')
    .addTag('posts')
    .addTag('auth')
    .build()
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api', app, document)

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  )

  app.enableCors()

  const port = 4000
  await app.listen(port)

  logger.log(`Сервер запущен на порте: ${port}`)
}
bootstrap()
