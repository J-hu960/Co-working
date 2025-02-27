import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RegisterHotdesktopCommadHandler } from './core/application/espacios/hotDesktop/register-desktop.command-handler';
import { Hotdesktop_REPOSITORY } from './core/domain/espacios/hotDesktop/hotdesktop.repository';
import { HotdesktopInMemory } from './core/infrastructure/espacios/hotdesktop/hotdesktop-in-memory';
import { RegisterHotdesktopController } from './core/ui/api/register-hotdesktop.controller';
import { RegisterMeetingroomController } from './core/ui/api/register-meetingRoom.controller';
import { RegisterMeetingRoomCommadHandler } from './core/application/espacios/meeting-room/register-meetingRoom.command-handler';
import { Meetingroom_REPOSITORY, MeetingroomInmemoryRepository } from './core/infrastructure/espacios/meeting-room/meetingRoom-inmemory';
import { RegisterOfficeCommandHandler } from './core/application/espacios/office/register-office.command-handler';
import { OFFICE_REPOSITORY, OfficeInmemory } from './core/infrastructure/espacios/office/office-inmemory';
import { RegisterOfficeController } from './core/ui/api/register-office.controller';
import { RegisterReservationCommadHandler } from './core/application/espacios/reservation/register-reservation';
import { EVENTEMMITER_NEST, EventEmmiterNest } from './core/infrastructure/eventPublisher';
import { ResgisterMeetingRoomReservationController } from './core/ui/api/register-reservation-meetingroom';
import { RESERVATION_REPOSITORY, ReservationInmemoryRepository } from './core/infrastructure/espacios/reservation/inmemory';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { ReservationCreatedHandler } from './core/ui/api/reservation-created.handler';
import { ReservationCreatedEventHandler } from './core/application/espacios/reservation/reservation-created.event-handler';

@Module({
  imports: [
    EventEmitterModule.forRoot()

  ],
  controllers: [AppController,RegisterHotdesktopController,RegisterMeetingroomController,RegisterOfficeController,ResgisterMeetingRoomReservationController],
  providers: [AppService,
    RegisterHotdesktopCommadHandler,
    {provide:Hotdesktop_REPOSITORY,useClass:HotdesktopInMemory},
     RegisterMeetingRoomCommadHandler,
     {provide:Meetingroom_REPOSITORY,useClass:MeetingroomInmemoryRepository},
     RegisterOfficeCommandHandler,
     {provide:OFFICE_REPOSITORY,useClass:OfficeInmemory},
     RegisterReservationCommadHandler,
     {provide:EVENTEMMITER_NEST,useClass:EventEmmiterNest},
     {provide:RESERVATION_REPOSITORY,useClass:ReservationInmemoryRepository},
     ReservationCreatedHandler,
     ReservationCreatedEventHandler

     
  ],
})
export class AppModule {}
