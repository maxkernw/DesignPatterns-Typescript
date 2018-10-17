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


const door = new SecureDoor(new Door());
door.Open("invalid");

door.Open("qwe123");
door.Close();