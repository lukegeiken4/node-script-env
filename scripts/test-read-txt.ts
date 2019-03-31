import * as fs from 'fs';
import * as rd from 'readline'

class TestRead {
    readFromTxtFile(): string[] {
        var reader = rd.createInterface(fs.createReadStream("data/fake.txt"))
        var data: string[] = [];
        reader.on("line", (l: string) => {
            console.log(l);
            data.push(l);
        })
        return data;
    }
}

var testRead = new TestRead();
console.log(testRead.readFromTxtFile().toString());
