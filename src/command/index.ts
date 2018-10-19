class Bulb {
    public TurnOn(): void {
        console.log("Bulb has been lit");
    }

    public TurnOff(): void {
        console.log("Darkness!");
    }
}

interface ICommand {
    Execute(): void;
    Undo(): void;
    Redo(): void;
}

class TurnOn implements ICommand {
    private _bulb: Bulb;

    constructor(bulb: Bulb) {
        this._bulb = bulb;
    }
    Execute(): void {
        this._bulb.TurnOn();
    }
    Undo(): void {
        this._bulb.TurnOff();
    }
    Redo(): void {
        this.Execute();
    }
}

class TurnOff implements ICommand {
    private _bulb: Bulb;

    constructor(bulb: Bulb) {
        this._bulb = bulb;
    }
    Execute(): void {
        this._bulb.TurnOff();
    }
    Undo(): void {
        this._bulb.TurnOn();
    }
    Redo(): void {
        this.Execute();
    }
}

class RemoteControl {
    public Submit(command: ICommand): void {
        command.Execute();
    }
}

const bulb = new Bulb();

const turnOn = new TurnOn(bulb);
const turnOff = new TurnOff(bulb);

const remote = new RemoteControl();
remote.Submit(turnOn); // Bulb has been lit!
remote.Submit(turnOff); // Darkness!