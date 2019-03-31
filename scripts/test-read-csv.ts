import * as fs from 'fs';
import * as rd from 'readline'

class TestRead {
    /**
     * Reads from CSV file
     */
    public readFromCsvFile(): any[] {
        // Get the file
		let csvData: any[] = this.convertCsvToArray('data/fake.csv');
        return csvData;
    }

    /**
	 * Converts CSV data to js array of objects
	 * @param filename csv filename
	 */
	private convertCsvToArray(filename: string): any[] {
		// Read the file
		let data = fs.readFileSync(filename);

		// Convert to buffer string
		let buffer = data.toString();

		// Items are split by new lines
		const items = buffer.split('\n');

		// Item attributes are split by commas
		// First line of csv is attribute names
		// So we can easily convert this into a typed object
		const attributes = items[0].split(',');

		// Convert to array of objects
		const jsonObj = [];
		for (let i = 1; i < items.length; i++) {
			const data = items[i].split(',');
			const obj: any = {};
			for (let j = 0; j < data.length; j++) {
				obj[attributes[j].trim()] = data[j].trim();
			}
			jsonObj.push(obj);
		}

		return jsonObj;
	}
}

var testRead = new TestRead();
var csvData = testRead.readFromCsvFile();
csvData.forEach((csvItem: any) => {
    console.log(csvItem);
});
