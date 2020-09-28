let $contenedor = document.querySelector('#contenedor');
    fetch('https://apis.datos.gob.ar/georef/api/provincias')
        .then(res => res.json())
        .then(data =>{
            console.log(data)
    //<select></select>
    //<option value="id">provincia</option>
            let $selectProvincia = document.createElement('select');
            let $option = document.createElement('option');
                $option.value= '';
                $option.innerText  = ('Selecciona una Provincia');
                $selectProvincia.appendChild($option);

            data.provincias.forEach(provincia =>{
            let $optionProvincia = document.createElement('option');
                $optionProvincia.value = provincia.id;
                $optionProvincia.innerText = `${provincia.nombre}`;

            $selectProvincia.appendChild($optionProvincia);
    });
    $contenedor.appendChild($selectProvincia);
    $selectProvincia.addEventListener('change',function(){
        fetch(`https://apis.datos.gob.ar/georef/api/municipios?provincia=${$selectProvincia.value}`)
        .then(res => res.json())
        .then (data =>{
            console.log(data)
            //<ul> <li> </li> </ul>
            let $municipios = document.createElement('ul');

            data.municipios.forEach(municipios =>{
                let $listaMuni = document.createElement('li');
                $listaMuni.value = '';
                $municipios.appendChild($listaMuni);
                $listaMuni.innerHTML = `${municipios.nombre}`;

                $municipios.appendChild($listaMuni);
            });
            $contenedor.appendChild($municipios);
        })
        .catch(err => {
            $msgError = document.createElement('div');
            $msgError.innerText = 'Hubo un error, intentalo más tarde';
            $container.appendChild($msgError);
        })
    })
})
    .catch(err => {
        $msgError = document.createElement('div');
        $msgError.innerText = 'Hubo un error, intentalo más tarde';
        $container.appendChild($msgError);
    })
