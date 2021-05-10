/*
 * @Descripttion: 测试用例运行脚本
 * @Author: 蔡远程
 * @Date: 2021-02-25 16:46:31
 * @LastEditTime: 2021-03-03 10:59:03
 * @LastEditors: 蔡远程
 */
const shell = require('shelljs');
const fs = require('fs');

const arg = process.argv.splice(2);


if (arg.length === 0) {
    shell.exec('npm run mocha \'test/**/*.test.ts\'');
} else {
    const fileName = arg[0];
    const path =  findFilePath('./test', fileName);

    if (path) {
        shell.exec(`npm run mocha ${path}`);
    } else {
        console.error(`error: sorry! cannot find ${fileName}.test.ts file`);
    }
}

function findFilePath(directory, fileName) {
    const fileArr = fs.readdirSync(directory);
    for (let i = 0, len = fileArr.length; i < len; i++) {
        const item = fileArr[i];
        const filePath = `${directory}/${item}`;
        const stat = fs.lstatSync(filePath);
        if (!!stat.isDirectory()) {
            const res =  findFilePath(filePath, fileName);
            if (res) {
                return res;
            }
            continue;

        } else if (!!stat.isFile()) {
            if (item.includes('.test.ts') && item === `${fileName}.test.ts`) {
                return filePath;
            }
            continue;
        }
    }
}