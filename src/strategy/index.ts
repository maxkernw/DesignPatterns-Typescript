

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