    var prodId = getParameterByName('prodId');


    const inventario = [
      { nombre: 'Rodrigo Salazar', ci: 444888 },
      { nombre: 'Scarlett Johansson', ci: 111222 },
      { nombre: 'Jimmy Hendrix', ci: 222333 },
    ];

    var item = inventario.find(item => item.ci === parseInt(prodId, 10));

    function getParameterByName(name) {
      name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
      var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
      return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }
    //console.log(item.nombre);
    function getMiembro() {
      document.getElementById("nombres").innerHTML = item.nombre;
      document.getElementById("ci").innerHTML = item.ci;
    }