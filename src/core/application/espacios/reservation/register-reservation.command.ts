export class RegisterReservationCommand{
    constructor(
        readonly date:string,
        readonly hour:number,
        readonly meetingRoomId:string,
        readonly userId: string,
        readonly duration:number,
    ){}
}