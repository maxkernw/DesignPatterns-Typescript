

interface ResolveStrategy {
    CanHandle(key: string): boolean;
    Decode(data: string): void
}

interface Decode {
}

class JsonData implements ResolveStrategy {
    Decode(data: string): void {
        console.log(`Resolving JSON: ${data}`)
    }
    CanHandle(key: string): boolean {
        return key.toLowerCase() === "json";
    }
}

class XmlData implements ResolveStrategy {
    Decode(data: string): void {
        console.log(`Resolving XML: ${data}`)
    }
    CanHandle(key: string): boolean {
        return key.toLowerCase() === "xml"
    }
}

const resolvers: Array<ResolveStrategy> = [new JsonData(), new XmlData()]

resolvers.forEach(res => {
    if (res.CanHandle("JSON")) {
        res.Decode("someThing");
    }
});

resolvers.forEach(res => {
    if (res.CanHandle("XML")) {
        res.Decode("someThing");
    }
});

type Dictionary<T, K> = { [num: number]: (input: T) => K }

let strategy: Dictionary<string, void>
strategy = {
    [1]: (input: string) => console.log(`strategy 1 ${input}`),
    [200]: (input: string) => console.log(`strategy 200 ${input}`),
    [300]: (input: string) => console.log(`stragegy 300 ${input}`)
};

let strategy_2: Dictionary<number, void>

strategy_2 = {
    [1]: (input: number) => console.log(`strategy 1 ${input}`),
    [200]: (input: number) => console.log(`strategy 200 ${input}`),
    [300]: (input: number) => console.log(`stragegy 300 ${input}`)
};
const number = 300;
strategy[number]("myInput");