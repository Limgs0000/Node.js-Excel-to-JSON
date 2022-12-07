const xlsx = require('xlsx');
const fs = require('fs');

// const arg = process.argv;
// const jsonFileName = process.argv[2];
// const jsonFile = "";
// async function main() {
//     jsonFile = await fs.readFileSync(`./data/json/${jsonFileName}`, 'UTF-8');
// }

/** 1. 엑셀 파일 이름 입력받음. */
let excelName = process.argv[2];
let loadedExcel = "";

/** 2. ./data/excel 폴더 내에 해당 엑셀 파일이 있는지 검색 */
try {
    loadedExcel = xlsx.readFile(`./data/xlsx/${excelName}`);
} catch {
    loadedExcel = "N";
}

/** 입력받은 이름에 해당하는 엑셀이 없다면 프로세스 종료 */
if(loadedExcel === 'N') {
    console.log('입력하신 이름에 해당하는 엑셀이 존재하지 않습니다.');
    return;
}

const sheetName = loadedExcel.SheetNames[0];
console.log(sheetName);

const sheet = loadedExcel.Sheets[sheetName];
console.log(sheet);

