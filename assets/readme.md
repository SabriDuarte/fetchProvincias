Trabajando con FETCH
Utilizando el API REST de datos del gobierno, realizar:

1 - Crear un select el cual liste todas las provincias argentinas, el value de cada option tiene que ser el ID de la pronvicia. Este ID lo tenemos en los datos que nos retorna la API (usando FETCH).

2 - Al eligir una provincia en nuestro select, se deben listar en pantalla todas las localidades que tiene esa provincia.

Las url que van a necesitar para conseguir los datos son:

https://apis.datos.gob.ar/georef/api/provincias
Este endpoint nos va a retonar un JSON con datos de todas las provincias argentinas.

https://apis.datos.gob.ar/georef/api/municipios?provincia={id}
Este endpoint nos va a retonar un JSON con datos de todas las localidades de la provincia que le indiquemos en el id. Por ejemplo, si usamos el id 22 ( https://apis.datos.gob.ar/georef/api/municipios?provincia=22 ) el api nos devolverá todas las localidades de Chaco, ya que 22 es su id.