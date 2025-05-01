
document.getElementById('btn').addEventListener('click',selectFile)



  async function selectFile() {
    const filePath = await window.api.selectFile();
  
    for(i=0; i<filePath.length; i++){
  
        msg = (filePath[i].Tarefa)
      const label = document.createElement('label');
      label.classList.add('tarefa');
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      label.appendChild(checkbox);
      label.append(msg)
      const file_path = document.getElementById('output')
      file_path.append(label)
      const br= document.createElement('br')
      file_path.append(br)

    }
    

    /*let msg;

    if(filePath){
      msg =`Arquivo selecionado` + JSON.stringify(filePath);
      
    }else{
     msg = 'Nenhum arquivo selecionado.';
    }*/

    //document.getElementById('output').textContent =  JSON.stringify(filePath);

  }
