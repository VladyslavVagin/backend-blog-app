import { Global, Module } from '@nestjs/common';
import { MailService } from './providers/mail.service';
import { MailerModule } from '@nestjs-modules/mailer';
import { ConfigService } from '@nestjs/config';
import { EjsAdapter } from '@nestjs-modules/mailer/dist/adapters/ejs.adapter';
import { join } from 'path';

@Global()
@Module({
  imports: [MailerModule.forRootAsync({
    inject: [ConfigService],
    useFactory: async (config: ConfigService) => ({
      transport: {
        host: config.get('appConfig.mailHost'),
        secure: false,
        port: 2525,
        auth: {
          user: config.get('appConfig.smtpUsername'),
          pass: config.get('appConfig.smtpPassword'),
        }
      },
      defaults: {
        from: `My Blog <no-reply@nestjs-blog.com>`
      },
      template: {
        dir: join(__dirname, 'templates'),
        adapter: new EjsAdapter({
          inlineCssEnabled: true,
        }),
        options: {
          strict: false,
        }
      }
    })
  })],
  providers: [MailService],
  exports: [MailService],
})
export class MailModule {}