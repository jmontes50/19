const convertDateToLocal = (fechaYHora, zonaHoraria = "es-ES") => {
    const options = {
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      };

    const fecha = new Date(fechaYHora);
    return fecha.toLocaleDateString(zonaHoraria, options);
    //'viernes, 31 de mayo de 2024'
}

export default convertDateToLocal;