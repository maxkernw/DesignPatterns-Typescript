/*
    Using the proxy pattern, a class represents the functionality of another class.
*/

interface IDoor {
    Open(): void;
    Close(): void;
}

class Door implements IDoor {
    Open(): void {
        console.log("Opening door")
    }
    Close(): void {
        console.log("Closing door")
    }
}

class SecureDoor {
    private _door: IDoor;

    constructor(door: IDoor) {
        this._door = door;
    }

    Open(password: string): void {
        this.Authenticate(password) ? this._door.Open() : console.log("nope!")
    }

    Close(): void {
        this._door.Close()
    }
    private Authenticate(password: string): boolean {
        return password == "qwe123";
    }
}

class BrokenDoor {
    private _door: IDoor;
    private _isBroken = true;
    constructor(door: IDoor) {
        this._door = door;
    }

    Open() {
       this._isBroken ? console.log("Nope its broken") : this._door.Open();
    }

    Close() {
        this._isBroken ? console.log("Nope its broken") : this._door.Open();
    }
}

const door = new SecureDoor(new Door());
const door2 = new BrokenDoor(new Door());
door.Open("invalid");
door2.Open();
door.Open("qwe123");
door2.Close();
door.Close();