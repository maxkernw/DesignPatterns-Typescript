/*
Memento pattern is about capturing and storing the current state of an object
in a manner that it can be restored later on in a smooth manner.
*/

class EditorMemento {
    private _content: string;

    constructor(content: string) {
        this._content = content;
    }

    get Content(): string {
        return this._content
    }
}

class Editor {
    private _content = "";
    private _memento: EditorMemento;

    constructor() {
        this._memento = new EditorMemento("");
    }

    Type(words: string): void {
        this._content = `${this._content} ${words}`;
    }

    get Content(): string {
        return this._content;
    }

    Save(): void {
        this._memento = new EditorMemento(this._content);
    }

    Restore(): void {
        this._content = this._memento.Content;
    }
}

const editor = new Editor();

//Type some stuff
editor.Type("This is the first sentence.");
editor.Save();

editor.Type("This is second.");

// Save the state to restore to : This is the first sentence. This is second.

//Type some more
editor.Type("This is third.");

//Output the content
console.log(editor.Content); // This is the first sentence. This is second. This is third.

//Restoring to last saved state
editor.Restore();

console.log(editor.Content); // This is the first sentence. This is second