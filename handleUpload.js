const { ipcMain, dialog } = require('electron')
const fs = require('fs');


async function abrirSeletorArquivo() {

    const resultado = await dialog.showOpenDialog(
        {
            properties: ['openFile'],
            filters: [
                { name: 'Jsons', extensions: ['json'] },
                { name: 'pdf files', extensions: ['pdf'] }

            ]
        }
    );

    if (resultado.canceled || resultado.filePaths.length === 0) {
        return null
    }

    let caminho = resultado.filePaths[0];
    let lerJson = fs.readFileSync(caminho, 'utf-8');
    let converter = JSON.parse(lerJson)
    return converter


}

function configurarHandleSelectFile() {
    ipcMain.handle('select-file', abrirSeletorArquivo);

};


module.exports = {
    configurarHandleSelectFile
}


