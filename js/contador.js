const fechaInicio = new Date('2024-09-28T00:00:00-05:00');

function actualizarContador() {
    const ahora = new Date();

    let años = ahora.getFullYear() - fechaInicio.getFullYear();
    let meses = ahora.getMonth() - fechaInicio.getMonth() + años * 12;
    let dias = ahora.getDate() - fechaInicio.getDate();

    if (dias < 0) {
        meses -= 1;
        const mesAnterior = new Date(ahora.getFullYear(), ahora.getMonth(), 0);
        dias += mesAnterior.getDate();
    }

    const tiempoJuntosLabel = `${meses} ${meses === 1 ? 'mes' : 'meses'} ${dias} ${dias === 1 ? 'día' : 'días'}`;
    document.getElementById('tiempo-juntos').textContent = tiempoJuntosLabel;

    const inicioDia = new Date(ahora);
    inicioDia.setHours(0, 0, 0, 0);

    const diffDia = ahora - inicioDia;

    const horas = Math.floor((diffDia / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diffDia / (1000 * 60)) % 60);
    const segundos = Math.floor((diffDia / 1000) % 60);

    document.getElementById('horas').textContent = horas;
    document.getElementById('minutos').textContent = minutos;
    document.getElementById('segundos').textContent = segundos;
}

actualizarContador();
setInterval(actualizarContador, 1000);