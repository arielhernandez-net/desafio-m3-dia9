const pacientesRadiologia = [
    {
        hora: '11:00',
        especialista: 'IGNACIO SCHULZ',
        paciente: 'FRANCISCA ROJAS',
        rut: '9878782-1',
        prevision: 'FONASA',
    },
    {
        hora: '11:30',
        especialista: 'FEDERICO SUBERCASEAUX',
        paciente: 'PAMELA ESTRADA',
        rut: '15345241-3',
        prevision: 'ISAPRE',
    },
    {
        hora: '15:00',
        especialista: 'FERNANDO WURTHZ',
        paciente: 'ARMANDO LUNA',
        rut: '16445345-9',
        prevision: 'ISAPRE',
    },
    {
        hora: '15:30',
        especialista: 'MANUEL GODOY',
        paciente: 'ANA MARIA GODOY',
        rut: '17666419-0',
        prevision: 'FONASA',
    },
    {
        hora: '16:00',
        especialista: 'PATRICIA SUAZO',
        paciente: 'RAMON ULLOA',
        rut: '14989389-K',
        prevision: 'FONASA',
    }
];

const pacientesTraumatologia = [
    {
        hora: '08:00',
        especialista: 'MARIA PAZ ALTUZARRA',
        paciente: 'PAULA SANCHEZ',
        rut: '15554774-5',
        prevision: 'FONASA',
    },
    {
        hora: '10:00',
        especialista: 'RAUL ARAYA',
        paciente: 'ANGÉLICA NAVAS',
        rut: '15444147-9',
        prevision: 'ISAPRE',
    },
    {
        hora: '10:30',
        especialista: 'MARIA ARRIAGADA',
        paciente: 'ANA KLAPP',
        rut: '17879423-9',
        prevision: 'ISAPRE',
    },
    {
        hora: '11:00',
        especialista: 'ALEJANDRO BADILLA',
        paciente: 'FELIPE MARDONES',
        rut: '1547423-6',
        prevision: 'ISAPRE',
    },
    {
        hora: '11:30',
        especialista: 'CECILIA BUDNIK',
        paciente: 'DIEGO MARRE',
        rut: '16554741-K',
        prevision: 'FONASA',
    },
    {
        hora: '12:00',
        especialista: 'ARTURO CAVAGNARO',
        paciente: 'CECILIA MENDEZ',
        rut: '9747535-8',
        prevision: 'ISAPRE',
    },
    {
        hora: '12:30',
        especialista: 'ANDRES KANACRI',
        paciente: 'MARCIAL SUAZO',
        rut: '11254785-5',
        prevision: 'ISAPRE',
    }

];

const pacientesDental = [
    {
        hora: '08:30',
        especialista: 'ANDREA ZUÑIGA',
        paciente: 'MARCELA RETAMAL',
        rut: '11123425-6',
        prevision: 'ISAPRE',
    },
    {
        hora: '11:00',
        especialista: 'MARIA PIA ZAÑARTU',
        paciente: 'ANGEL MUÑOZ',
        rut: '9878789-2',
        prevision: 'ISAPRE',
    },
    {
        hora: '11:30',
        especialista: 'SCARLETT WITTING',
        paciente: 'MARIO KAST',
        rut: '7998789-5',
        prevision: 'FONASA',
    },
    {
        hora: '13:00',
        especialista: 'FRANCISCO VON TEUBER',
        paciente: 'KARIN FERNANDEZ',
        rut: '18887662-K',
        prevision: 'FONASA',
    },
    {
        hora: '13:30',
        especialista: 'EDUARDO VIÑUELA',
        paciente: 'HUGO SANCHEZ',
        rut: '17665461-4',
        prevision: 'FONASA',
    },
    {
        hora: '14:00',
        especialista: 'RAQUEL VILLASECA',
        paciente: 'ANA SEPULVEDA',
        rut: '14441281-0',
        prevision: 'ISAPRE',
    }
];

pacientesTraumatologia.push(
    {
        hora: '09:00',
        especialista: 'RENÉ POBLETE',
        paciente: 'ANA GELLONA',
        rut: '13123329-7',
        prevision: 'ISAPRE',
    },
    {
        hora: '09:30',
        especialista: 'MARIA SOLAR',
        paciente: 'RAMIRO ANDRADE',
        rut: '12221451-K',
        prevision: 'FONOSA',
    },
    {
        hora: '10:00',
        especialista: 'RAUL LOYOLA',
        paciente: 'CARMEN ISLA',
        rut: '10112348-3',
        prevision: 'ISAPRE',
    },
    {
        hora: '10:30',
        especialista: 'ANTONIO LARENAS',
        paciente: 'PABLO LOAYZA',
        rut: '13453234-1',
        prevision: 'ISAPRE',
    },
    {
        hora: '12:00',
        especialista: 'MATIAS ARAVENA',
        paciente: 'SUSANA POBLETE',
        rut: '14345656-6',
        prevision: 'FONOSA',
    }

)
 
pacientesRadiologia.shift();
pacientesRadiologia.pop();

// pacientes radiologia

let pacientesRadiologiaTabla = `<table class="table">`;
pacientesRadiologiaTabla += `<tr><th>Hora</th><th>Especialista</th><th>Paciente</th><th>Rut</th><th>Previsión</th></tr>`;

for (const paciente of pacientesRadiologia) {
    pacientesRadiologiaTabla += `<tr>
        <td>${paciente.hora}</td>
        <td>${paciente.especialista}</td>
        <td>${paciente.paciente}</td>
        <td>${paciente.rut}</td>
        <td>${paciente.prevision}</td>
    </tr>`;
}

pacientesRadiologiaTabla += `</table>`;
const divTabla = document.getElementById('tablaRadiologia');
divTabla.innerHTML = pacientesRadiologiaTabla;

// pacientes traumatologica

let pacientesTraumatologiaTabla = `<table class="table">`;
pacientesTraumatologiaTabla += `<tr><th>Hora</th><th>Especialista</th><th>Paciente</th><th>Rut</th><th>Previsión</th></tr>`;
for (const paciente of pacientesTraumatologia) {
    pacientesTraumatologiaTabla += `<tr>
        <td>${paciente.hora}</td>
        <td>${paciente.especialista}</td>
        <td>${paciente.paciente}</td>
        <td>${paciente.rut}</td>
        <td>${paciente.prevision}</td>
    </tr>`;
}

pacientesTraumatologiaTabla += `</table>`;
const divTabla2 = document.getElementById('tablaTraumatologia');
divTabla2.innerHTML = pacientesTraumatologiaTabla;

//pacientes dental

const pacientesDentalLista = `<ul class="list-unstyled">
  ${pacientesDental.map(paciente => `${paciente.hora} - ${paciente.especialista} - ${paciente.paciente} - ${paciente.rut} - ${paciente.prevision}`).join('</li><li>')}
</ul>`;

const divTabla3 = document.getElementById('tablaDental');
divTabla3.innerHTML = pacientesDentalLista;


// todos los pacientes

const pacientesUnidos = pacientesRadiologia.concat(pacientesTraumatologia, pacientesDental);
console.log(pacientesUnidos);

let todoPacientes = `<table class="table">`;
todoPacientes += `<tr><th>Pacientes</th></tr>`;
for (const paciente of pacientesUnidos) {
    todoPacientes += `<tr>
        <td>${paciente.paciente}</td>
    </tr>`;
}  
todoPacientes += `</table>`;
const divTabla4 = document.getElementById('todosPacientes');
divTabla4.innerHTML = todoPacientes;

// pacientes isapre dental

const pacientesDentalIsapre = pacientesDental.filter(paciente => paciente.prevision === 'ISAPRE');
const tabla = `<table class="table">
  <tr><th>Paciente</th><th>Previsión</th></tr>
  ${pacientesDentalIsapre.map(paciente => `<tr>
      <td>${paciente.paciente}</td>
      <td>${paciente.prevision}</td>
  </tr>`).join('')}
</table>`;
const divTabla5 = document.getElementById('pacientesDentalIsapre');
divTabla5.innerHTML = tabla;

// pacientes fonasa traumatologia

const pacientesTraumaFonasa = pacientesTraumatologia.filter(paciente => paciente.prevision === 'FONASA');
const tabla2 = `<table class="table">   
  <tr><th>Paciente</th><th>Previsión</th></tr>
  ${pacientesTraumaFonasa.map(paciente => `<tr>
      <td>${paciente.paciente}</td>
      <td>${paciente.prevision}</td>
      </tr>`).join('')}
</table>`;
const divTabla6 = document.getElementById('pacientesTraumaFonasa');
divTabla6.innerHTML = tabla2;