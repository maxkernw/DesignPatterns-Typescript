/*
Mediator pattern adds a third party object (called mediator)
to control the interaction between two objects (called colleagues).
It helps reduce the coupling between the classes communicating
with each other.
Because now they don't need to have the knowledge of each other's implementation.
*/
class ChatUser {
    private _name: string;
    private _chatRoom: IChatRoomMediator;

    constructor(name: string, chatRoom: IChatRoomMediator) {
        this._name = name;
        this._chatRoom = chatRoom;
    }

    public GetName(): string {
        return this._name;
    }

    public Send(message: string): void {
        this._chatRoom.ShowMessage(this, message)
    }
}
interface IChatRoomMediator {
    ShowMessage(user: ChatUser, message: string)
}

class ChatRoom implements IChatRoomMediator {
    ShowMessage(user: ChatUser, message: string) {
        console.log(`${new Date().toDateString()} [${user.GetName()}]:${message}"`)
    }

}

const mediator = new ChatRoom();

const chatUser = new ChatUser("Derp1337", mediator);
const chatUser2 = new ChatUser("Mc-Derp", mediator);

chatUser.Send("LOL!!!!!!!!!!!!!!!!!!!!!!");
chatUser2.Send("FU")
