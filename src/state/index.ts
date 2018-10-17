interface IWritingState {
    Write(words: string): void;
}

class UpperCase implements IWritingState {
    Write(words: string): void {
        console.log(words.toUpperCase())
    }
}

class LowerCase implements IWritingState {
    Write(words: string): void {
        console.log(words.toLowerCase())
    }
}

class DefaultCase implements IWritingState {
    Write(words: string): void {
        console.log(words)
    }
}

class CaseEditor {
    private _state: IWritingState;

    constructor() {
        this._state = new DefaultCase();
    }

    SetState(state: IWritingState): void {
        this._state = state;
    }

    Type(words: string): void {
        this._state.Write(words);
    }
}

const caseEditor = new CaseEditor();

caseEditor.Type("First line");

caseEditor.SetState(new UpperCase());

caseEditor.Type("Second Line");
caseEditor.Type("Third Line");

caseEditor.SetState(new LowerCase());

caseEditor.Type("Fourth Line");
caseEditor.Type("Fifthe Line");