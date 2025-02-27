import { MeetingRoom } from "./meetingRoom.entity";
import { MeetingRoomId } from "./value-objects/id";
import { MeetingroomName } from "./value-objects/name";

export interface MeetingRoomRepository{
    exists(name:MeetingroomName):boolean;
    save(meetingRoom:MeetingRoom):void;
    existsId(meetingRoom:MeetingRoomId):boolean;

}

//Se debe crear entidad Reservation, con sus expeciones, value objects, repositorio etc.
//a parte de la interfaz de repositorio, vamos a necesitar una para emitir eventos?
//caso de uso (application/ReserveMeetingRoomUseCase) -> Valida que se pueda reservar... 
//lanza evento (Meetingroom.Reserved)

//en API/UI, debemos crear un EventHandler que escuche cuando haya una reserva, y haga una llamada
//al caso de uso AssignHotdesktop, que va a ver si hay disponibilidad de un Hotdesktop para el
//dia de la reserva y lo va a hacer (si no hay disponibilidad solo informar de que no hay pero no lanzar error).
