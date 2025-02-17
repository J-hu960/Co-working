import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RegisterHotdesktopCommadHandler } from './core/application/hotDesktop/register-desktop.command-handler';
import { Hotdesktop_REPOSITORY } from './core/domain/hotDesktop/hotdesktop.repository';
import { HotdesktopInMemory } from './core/infrastructure/hotdesktop/hotdesktop-in-memory';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService,
    RegisterHotdesktopCommadHandler,
    {provide:Hotdesktop_REPOSITORY,useClass:HotdesktopInMemory}
  ],
})
export class AppModule {}
