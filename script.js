/* Base de datos estática incrustada */
const baseDeDatos = {
    // --- 25 CERTIFICADOS DE APROBACIÓN ---
    "FIMEE-A01": { tipo: "Aprobación", nombre: "Vasquez Davila José Antonio", escuela: "Ingeniería Mecánica Eléctrica", nota: "18/20" },
    "FIMEE-A02": { tipo: "Aprobación", nombre: "Urrutia Aquije Genesis Muriel", escuela: "Ingeniería Mecánica Eléctrica", nota: "XX/20" },
    "FIMEE-A03": { tipo: "Aprobación", nombre: "Cuchula Lima Mario César", escuela: "Ingeniería Mecánica Eléctrica", nota: "XX/20" },
    "FIMEE-A04": { tipo: "Aprobación", nombre: "Castañeda PISCOYA BRUSS Javier", escuela: "Ingeniería Electrónica", nota: "XX/20" },
    "FIMEE-A05": { tipo: "Aprobación", nombre: "Tipiana Cabrera Héctor Luis", escuela: "Ingeniería Mecánica Eléctrica", nota: "XX/20" },
    "FIMEE-A06": { tipo: "Aprobación", nombre: "Quincho Elias Diego Fabricio", escuela: "Ingeniería Mecánica Eléctrica", nota: "XX/20" },
    "FIMEE-A07": { tipo: "Aprobación", nombre: "Marcatoma Cruz Carlos David", escuela: "Ingeniería Mecánica Eléctrica", nota: "XX/20" },
    "FIMEE-A08": { tipo: "Aprobación", nombre: "Ramírez Ramos Rodrigo Francisco", escuela: "Ingeniería Mecánica Eléctrica", nota: "XX/20" },
    "FIMEE-A09": { tipo: "Aprobación", nombre: "Huamani Sandoval Emma Alexandra", escuela: "Ingeniería Mecánica Eléctrica", nota: "XX/20" },
    "FIMEE-A10": { tipo: "Aprobación", nombre: "Cabrera Munalla Juan Leonardo", escuela: "Ingeniería Mecánica Eléctrica", nota: "XX/20" },
    "FIMEE-A11": { tipo: "Aprobación", nombre: "MENDOZA TAGUADA YANELLA", escuela: "Ingeniería Mecánica Eléctrica", nota: "XX/20" },
    "FIMEE-A12": { tipo: "Aprobación", nombre: "Inca conde Erickson Esteban", escuela: "Ingeniería Mecánica Eléctrica", nota: "XX/20" },
    "FIMEE-A13": { tipo: "Aprobación", nombre: "JARA ARELLANO MIRLON ANDRES", escuela: "Ingeniería Mecánica Eléctrica", nota: "XX/20" },
    "FIMEE-A14": { tipo: "Aprobación", nombre: "Yanella Juana Rosa Mendoza Taguada", escuela: "Ingeniería Mecánica Eléctrica", nota: "XX/20" },
    "FIMEE-A15": { tipo: "Aprobación", nombre: "Quispe Talla Elvis Harold Smith", escuela: "Ingeniería Mecánica Eléctrica", nota: "XX/20" },
    "FIMEE-A16": { tipo: "Aprobación", nombre: "Mendoza Taguada Yanella Juana Rosa", escuela: "Ingeniería Mecánica Eléctrica", nota: "XX/20" },
    "FIMEE-A17": { tipo: "Aprobación", nombre: "Lopez Castillo Abigail Georgina", escuela: "Ingeniería Mecánica Eléctrica", nota: "XX/20" },
    "FIMEE-A18": { tipo: "Aprobación", nombre: "Talía Pacompia Aragón", escuela: "Ingeniería Mecánica Eléctrica", nota: "18/20" },
    "FIMEE-A19": { tipo: "Aprobación", nombre: "xxx", escuela: "xxx", nota: "XX/20" },
    "FIMEE-A20": { tipo: "Aprobación", nombre: "xxx", escuela: "xxx", nota: "XX/20" },
    "FIMEE-A21": { tipo: "Aprobación", nombre: "xxx", escuela: "xxx", nota: "XX/20" },
    "FIMEE-A22": { tipo: "Aprobación", nombre: "xxx", escuela: "xxx", nota: "XX/20" },
    "FIMEE-A23": { tipo: "Aprobación", nombre: "xxx", escuela: "xxx", nota: "XX/20" },
    "FIMEE-A24": { tipo: "Aprobación", nombre: "xxx", escuela: "xxx", nota: "XX/20" },
    "FIMEE-A25": { tipo: "Aprobación", nombre: "xxx", escuela: "xxx", nota: "XX/20" },

    // --- 10 CERTIFICADOS DE PARTICIPACIÓN ---
    "FIMEE-P01": { tipo: "Participación", nombre: "Velásquez Vera jhonny david", escuela: "Ingeniería Mecánica Eléctrica" },
    "FIMEE-P02": { tipo: "Participación", nombre: "Inca conde Erickson Esteban", escuela: "Ingeniería Mecánica Eléctrica" },
    "FIMEE-P03": { tipo: "Participación", nombre: "Vidal Paucar Fabricio Sebastián", escuela: "Ingeniería Electrónica" },
    "FIMEE-P04": { tipo: "Participación", nombre: "FERNANDEZ HUILLCAMASCCO MIGUEL YANDEL", escuela: "Ingeniería Mecánica Eléctrica" },
    "FIMEE-P05": { tipo: "Participación", nombre: "Vilcatoma Antaya Anyelo Josue", escuela: "Ingeniería Mecánica Eléctrica" },
    "FIMEE-P06": { tipo: "Participación", nombre: "Jair Leandro Palomino Vásquez", escuela: "Ingeniería Mecánica Eléctrica" },
    "FIMEE-P07": { tipo: "Participación", nombre: "Medina Huaroto", escuela: "Ingeniería Mecánica Eléctrica" },
    "FIMEE-P08": { tipo: "Participación", nombre: "Meneses Chamorro Johan Fabian", escuela: "Ingeniería Electrónica" },
    "FIMEE-P09": { tipo: "Participación", nombre: "xxx", escuela: "xxx" },
    "FIMEE-P10": { tipo: "Participación", nombre: "xxx", escuela: "xxx" },

    // --- 7 CERTIFICADOS DE ORGANIZADORES ---
    "FIMEE-ORG1": { tipo: "Organizador", nombre: "Vasquez Davila José Antonio", escuela: "Ingeniería Mecánica Eléctrica", rol: "Comité Organizador" },
    "FIMEE-ORG2": { tipo: "Organizador", nombre: "Urrutia Aquije Genesis Muriel", escuela: "Ingeniería Mecánica Eléctrica", rol: "Comité Organizador" },
    "FIMEE-ORG3": { tipo: "Organizador", nombre: "JARA ARELLANO MIRLON ANDRES", escuela: "Ingeniería Mecánica Eléctrica", rol: "Comité Organizador" },
    "FIMEE-ORG4": { tipo: "Organizador", nombre: "Yanella Juana Rosa Mendoza Taguada", escuela: "Ingeniería Mecánica Eléctrica", rol: "Comité Organizador" },
    "FIMEE-ORG5": { tipo: "Organizador", nombre: "Quispe Talla Elvis Harold Smith", escuela: "Ingeniería Mecánica Eléctrica", rol: "Comité Organizador" },
    "FIMEE-ORG6": { tipo: "Organizador", nombre: "Mendoza Taguada Yanella Juana Rosa", escuela: "Ingeniería Mecánica Eléctrica", rol: "Comité Organizador" },
    "FIMEE-ORG7": { tipo: "Organizador", nombre: "Lopez Castillo Abigail Georgina", escuela: "Ingeniería Mecánica Eléctrica", rol: "Comité Organizador" },

    // --- 1 CERTIFICADO DE DOCENTE/PONENTE ---
    "FIMEE-IIT-DOC1": { tipo: "Ponente", nombre: "Dr. Victor Joel Arroyo Quispe", escuela: "Docente FIMEE - UNICA", rol: "Ponente Principal"  }
};

document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const credentialId = urlParams.get('id');
    
    // Simular tiempo de validación
    setTimeout(() => {
        validateCredential(credentialId);
    }, 1000);
});

function validateCredential(id) {
    const loadingState = document.getElementById('loading-state');
    const resultContainer = document.getElementById('validation-result');
    
    loadingState.classList.add('hidden');
    resultContainer.classList.remove('hidden');
    
    if (!id || id.trim() === '') {
        renderError("No se proporcionó un ID válido. Verifique el enlace escaneado.");
        return;
    }
    
    // Convertir a mayúsculas para evitar problemas
    const idUpper = id.toUpperCase();
    const record = baseDeDatos[idUpper] || baseDeDatos[id];
    
    if (record) {
        renderSuccess(idUpper, record);
    } else {
        renderError(`El código de credencial "${id}" no existe en la base de datos oficial o no es válido.`);
    }
}

function renderSuccess(id, record) {
    const resultContainer = document.getElementById('validation-result');
    
    let roleOrGradeHtml = '';
    let typeBadgeClass = 'badge';
    let tituloOficial = '';
    
    if (record.tipo === 'Aprobación') {
        typeBadgeClass += ' success-badge';
        tituloOficial = 'Certificación de Aprobación en Diseño Asistido por Computadora (AutoCAD)';
        roleOrGradeHtml = `
            <div class="data-group">
                <div class="data-label">Nota Obtenida</div>
                <div class="data-value highlight">${record.nota || 'Aprobado'}</div>
            </div>
        `;
    } else if (record.tipo === 'Participación') {
        tituloOficial = 'Certificado de Participación: Seminario Especializado en Diseño Asistido por Computadora (AutoCAD)';
        // Participación no muestra campos extra
    } else if (record.tipo === 'Ponente') {
        typeBadgeClass += ' brand-badge';
        tituloOficial = 'Reconocimiento Académico por Ponencia Magistral en Diseño Asistido por Computadora (AutoCAD)';
        roleOrGradeHtml = `
            <div class="data-group">
                <div class="data-label">Labor / Rol Desempeñado</div>
                <div class="data-value"><span class="badge brand-badge">${record.rol || 'Ponente Principal'}</span></div>
            </div>
        `;
    } else if (record.tipo === 'Organizador') {
        typeBadgeClass += ' brand-badge';
        tituloOficial = 'Reconocimiento al Mérito Organizativo del Programa Especializado en AutoCAD';
        roleOrGradeHtml = `
            <div class="data-group">
                <div class="data-label">Labor / Rol Desempeñado</div>
                <div class="data-value"><span class="badge brand-badge">${record.rol || 'Asignado'}</span></div>
            </div>
        `;
    }

    resultContainer.innerHTML = `
        <div class="card-header success">
            <div class="status-icon success-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
            </div>
            <div class="status-text">
                <h2>Credencial Válida</h2>
                <p>Verificación institucional exitosa</p>
            </div>
        </div>
        <div class="card-content">
            <div class="data-group" style="text-align: center; background-color: #ffffff; padding: 1.5rem 1rem; border-radius: 8px; border: 1px solid var(--border-soft); box-shadow: 0 4px 12px rgba(0,0,0,0.03); margin-bottom: 2rem;">
                <div class="data-label" style="color: var(--accent-brand);">Título Oficial</div>
                <div class="data-value highlight" style="font-size: 1.1rem; line-height: 1.4; color: var(--text-main); margin-top: 0.5rem; text-transform: uppercase;">${tituloOficial}</div>
            </div>

            <div class="data-group">
                <div class="data-label">Titular de la Credencial</div>
                <div class="data-value highlight" style="font-size: 1.15rem;">${record.nombre}</div>
                <div class="${typeBadgeClass}">${record.tipo}</div>
            </div>
            
            <div class="data-group">
                <div class="data-label">Escuela Académico Profesional</div>
                <div class="data-value" style="font-weight: 600;">${record.escuela}</div>
            </div>
            
            ${roleOrGradeHtml}
            
            <div class="data-group">
                <div class="data-label">Identificador Único</div>
                <div class="data-value" style="font-family: monospace; letter-spacing: 1.5px; color: var(--text-muted);">${id}</div>
            </div>
        </div>
    `;
}

function renderError(message) {
    const resultContainer = document.getElementById('validation-result');
    
    resultContainer.innerHTML = `
        <div class="card-header error">
            <div class="status-icon error-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </div>
            <div class="status-text">
                <h2>Credencial Inválida</h2>
                <p>Alerta de validación</p>
            </div>
        </div>
        <div class="error-content">
            <p>${message}</p>
            <div class="help-text">
                Si considera que esto es un error, por favor contacte a la Facultad de Ingeniería Mecánica Eléctrica y Electrónica (FIMEE - UNICA).
            </div>
        </div>
    `;
}
