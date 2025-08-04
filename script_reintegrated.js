// Dados completos da planilha
const dadosOriginais = [
    {unidade: "Bela Vista", cbo: "Assistente Social", jan: 0, fev: 0, mar: 0, abr: 0, mai: 0, jun: 6},
    {unidade: "Jardim Bandeirantes", cbo: "Assistente Social", jan: 0, fev: 0, mar: 0, abr: 0, mai: 0, jun: 6},
    {unidade: "Jardim Eldorado", cbo: "Assistente Social", jan: 0, fev: 0, mar: 0, abr: 0, mai: 0, jun: 3},
    {unidade: "Multi I", cbo: "Assistente Social", jan: 10, fev: 17, mar: 21, abr: 19, mai: 10, jun: 0},
    {unidade: "Multi II", cbo: "Assistente Social", jan: 6, fev: 5, mar: 5, abr: 2, mai: 1, jun: 0},
    {unidade: "Multi III", cbo: "Assistente Social", jan: 0, fev: 0, mar: 0, abr: 0, mai: 4, jun: 12},
    {unidade: "Multi IV", cbo: "Assistente Social", jan: 17, fev: 30, mar: 0, abr: 21, mai: 16, jun: 17},
    {unidade: "Santa Cruz", cbo: "Assistente Social", jan: 0, fev: 0, mar: 0, abr: 0, mai: 0, jun: 1},
    {unidade: "Unidade Xv", cbo: "Assistente Social", jan: 0, fev: 0, mar: 0, abr: 0, mai: 0, jun: 1},
    {unidade: "Agua Branca", cbo: "Auxiliar de enfermagem", jan: 0, fev: 0, mar: 0, abr: 1, mai: 0, jun: 0},
    {unidade: "Csu Eldorado", cbo: "Auxiliar de enfermagem", jan: 0, fev: 0, mar: 0, abr: 0, mai: 1, jun: 6},
    {unidade: "Jardim Bandeirantes", cbo: "Auxiliar de enfermagem", jan: 703, fev: 723, mar: 601, abr: 926, mai: 1827, jun: 535},
    {unidade: "Jardim Eldorado", cbo: "Auxiliar de enfermagem", jan: 0, fev: 36, mar: 48, abr: 50, mai: 169, jun: 32},
    {unidade: "Multi II", cbo: "Auxiliar de enfermagem", jan: 0, fev: 0, mar: 0, abr: 0, mai: 0, jun: 1},
    {unidade: "Novo Eldorado", cbo: "Auxiliar de enfermagem", jan: 175, fev: 28, mar: 54, abr: 202, mai: 0, jun: 0},
    {unidade: "Parque São João", cbo: "Auxiliar de enfermagem", jan: 51, fev: 194, mar: 323, abr: 139, mai: 2, jun: 0},
    {unidade: "Perobas", cbo: "Auxiliar de enfermagem", jan: 138, fev: 128, mar: 303, abr: 186, mai: 313, jun: 238},
    {unidade: "Unidade Xv", cbo: "Auxiliar de enfermagem", jan: 355, fev: 421, mar: 358, abr: 474, mai: 585, jun: 291},
    {unidade: "Agua Branca", cbo: "Cirurgião Dentista", jan: 153, fev: 172, mar: 173, abr: 147, mai: 174, jun: 194},
    {unidade: "Csu Eldorado", cbo: "Cirurgião Dentista", jan: 166, fev: 158, mar: 85, abr: 101, mai: 76, jun: 137},
    {unidade: "Jardim Eldorado", cbo: "Cirurgião Dentista", jan: 0, fev: 146, mar: 134, abr: 140, mai: 152, jun: 135},
    {unidade: "Novo Eldorado", cbo: "Cirurgião Dentista", jan: 141, fev: 128, mar: 21, abr: 118, mai: 71, jun: 34},
    {unidade: "Parque São João", cbo: "Cirurgião Dentista", jan: 179, fev: 225, mar: 183, abr: 208, mai: 257, jun: 0},
    {unidade: "Unidade Xv", cbo: "Cirurgião Dentista", jan: 246, fev: 327, mar: 250, abr: 272, mai: 364, jun: 346},
    {unidade: "Agua Branca", cbo: "Enfermeiro", jan: 545, fev: 714, mar: 281, abr: 457, mai: 828, jun: 593},
    {unidade: "Bela Vista", cbo: "Enfermeiro", jan: 97, fev: 182, mar: 45, abr: 103, mai: 199, jun: 179},
    {unidade: "Csu Eldorado", cbo: "Enfermeiro", jan: 740, fev: 541, mar: 680, abr: 950, mai: 1272, jun: 1349},
    {unidade: "Jardim Bandeirantes", cbo: "Enfermeiro", jan: 631, fev: 473, mar: 287, abr: 222, mai: 543, jun: 568},
    {unidade: "Jardim Eldorado", cbo: "Enfermeiro", jan: 231, fev: 252, mar: 256, abr: 353, mai: 341, jun: 392},
    {unidade: "Multi II", cbo: "Enfermeiro", jan: 0, fev: 0, mar: 0, abr: 0, mai: 0, jun: 14},
    {unidade: "Novo Eldorado", cbo: "Enfermeiro", jan: 95, fev: 79, mar: 98, abr: 57, mai: 302, jun: 538},
    {unidade: "Parque São João", cbo: "Enfermeiro", jan: 778, fev: 584, mar: 126, abr: 474, mai: 628, jun: 0},
    {unidade: "Perobas", cbo: "Enfermeiro", jan: 234, fev: 315, mar: 22, abr: 374, mai: 565, jun: 531},
    {unidade: "Santa Cruz", cbo: "Enfermeiro", jan: 198, fev: 63, mar: 103, abr: 192, mai: 168, jun: 184},
    {unidade: "Unidade Xv", cbo: "Enfermeiro", jan: 1611, fev: 1257, mar: 860, abr: 749, mai: 1196, jun: 1314},
    {unidade: "Csu Eldorado", cbo: "Fisioterapeuta", jan: 0, fev: 1, mar: 0, abr: 1, mai: 0, jun: 0},
    {unidade: "Multi I", cbo: "Fisioterapeuta/Emulti", jan: 92, fev: 2, mar: 43, abr: 36, mai: 48, jun: 0},
    {unidade: "Multi II", cbo: "Fisioterapeuta/Emulti", jan: 48, fev: 54, mar: 49, abr: 53, mai: 36, jun: 0},
    {unidade: "Multi IV", cbo: "Fisioterapeuta/Emulti", jan: 14, fev: 36, mar: 29, abr: 49, mai: 38, jun: 0},
    {unidade: "Novo Eldorado", cbo: "Fisioterapeuta", jan: 0, fev: 6, mar: 16, abr: 4, mai: 1, jun: 0},
    {unidade: "Agua Branca", cbo: "Fonoaudiologo", jan: 0, fev: 0, mar: 0, abr: 0, mai: 0, jun: 18},
    {unidade: "Bela Vista", cbo: "Fonoaudiologo", jan: 0, fev: 0, mar: 0, abr: 0, mai: 0, jun: 3},
    {unidade: "Csu Eldorado", cbo: "Fonoaudiologo", jan: 0, fev: 0, mar: 0, abr: 0, mai: 0, jun: 48},
    {unidade: "Jardim Eldorado", cbo: "Fonoaudiologo", jan: 0, fev: 0, mar: 0, abr: 0, mai: 0, jun: 5},
    {unidade: "Multi I", cbo: "Fonoaudiologo", jan: 7, fev: 50, mar: 38, abr: 51, mai: 40, jun: 0},
    {unidade: "Multi II", cbo: "Fonoaudiologo", jan: 41, fev: 49, mar: 41, abr: 34, mai: 42, jun: 28},
    {unidade: "Multi III", cbo: "Fonoaudiologo", jan: 0, fev: 0, mar: 0, abr: 2, mai: 32, jun: 22},
    {unidade: "Multi IV", cbo: "Fonoaudiologo", jan: 0, fev: 0, mar: 0, abr: 0, mai: 0, jun: 18},
    {unidade: "Novo Eldorado", cbo: "Fonoaudiologo", jan: 0, fev: 0, mar: 0, abr: 0, mai: 0, jun: 49},
    {unidade: "Perobas", cbo: "Fonoaudiologo", jan: 0, fev: 0, mar: 0, abr: 0, mai: 0, jun: 32},
    {unidade: "Santa Cruz", cbo: "Fonoaudiologo", jan: 0, fev: 0, mar: 0, abr: 0, mai: 0, jun: 2},
    {unidade: "Unidade Xv", cbo: "Fonoaudiologo", jan: 0, fev: 0, mar: 0, abr: 0, mai: 0, jun: 11},
    {unidade: "Csu Eldorado", cbo: "Médico Clinico", jan: 171, fev: 55, mar: 166, abr: 179, mai: 217, jun: 174},
    {unidade: "Jardim Bandeirantes", cbo: "Médico Clinico", jan: 111, fev: 192, mar: 170, abr: 162, mai: 201, jun: 181},
    {unidade: "Novo Eldorado", cbo: "Médico Clinico", jan: 163, fev: 15, mar: 107, abr: 116, mai: 138, jun: 138},
    {unidade: "Parque São João", cbo: "Médico Clinico", jan: 0, fev: 1, mar: 0, abr: 2, mai: 0, jun: 0},
    {unidade: "Unidade Xv", cbo: "Médico Clinico", jan: 43, fev: 46, mar: 122, abr: 103, mai: 109, jun: 133},
    {unidade: "Agua Branca", cbo: "Médico Estrategia da Familia", jan: 832, fev: 604, mar: 825, abr: 783, mai: 1027, jun: 895},
    {unidade: "Bela Vista", cbo: "Médico Estrategia da Familia", jan: 165, fev: 303, mar: 243, abr: 282, mai: 321, jun: 293},
    {unidade: "Csu Eldorado", cbo: "Médico Estrategia da Familia", jan: 719, fev: 875, mar: 946, abr: 1020, mai: 1159, jun: 968},
    {unidade: "Jardim Bandeirantes", cbo: "Médico Estrategia da Familia", jan: 681, fev: 709, mar: 604, abr: 614, mai: 910, jun: 774},
    {unidade: "Jardim Eldorado", cbo: "Médico Estrategia da Familia", jan: 612, fev: 482, mar: 509, abr: 338, mai: 748, jun: 578},
    {unidade: "Novo Eldorado", cbo: "Médico Estrategia da Familia", jan: 442, fev: 472, mar: 436, abr: 501, mai: 474, jun: 501},
    {unidade: "Parque São João", cbo: "Médico Estrategia da Familia", jan: 689, fev: 796, mar: 766, abr: 507, mai: 408, jun: 0},
    {unidade: "Perobas", cbo: "Médico Estrategia da Familia", jan: 198, fev: 320, mar: 366, abr: 329, mai: 494, jun: 368},
    {unidade: "Santa Cruz", cbo: "Médico Estrategia da Familia", jan: 416, fev: 590, mar: 501, abr: 496, mai: 564, jun: 405},
    {unidade: "Unidade Xv", cbo: "Médico Estrategia da Familia", jan: 1201, fev: 958, mar: 914, abr: 1018, mai: 1206, jun: 1039},
    {unidade: "Agua Branca", cbo: "Médico Ginecologista Obstetra", jan: 0, fev: 0, mar: 1, abr: 0, mai: 1, jun: 10},
    {unidade: "Bela Vista", cbo: "Médico Ginecologista Obstetra", jan: 10, fev: 27, mar: 33, abr: 7, mai: 23, jun: 31},
    {unidade: "Csu Eldorado", cbo: "Médico Ginecologista Obstetra", jan: 20, fev: 93, mar: 71, abr: 75, mai: 50, jun: 63},
    {unidade: "Jardim Bandeirantes", cbo: "Médico Ginecologista Obstetra", jan: 32, fev: 38, mar: 38, abr: 29, mai: 29, jun: 29},
    {unidade: "Jardim Eldorado", cbo: "Médico Ginecologista Obstetra", jan: 0, fev: 0, mar: 0, abr: 0, mai: 0, jun: 20},
    {unidade: "Multi I", cbo: "Médico Ginecologista Obstetra", jan: 20, fev: 26, mar: 30, abr: 17, mai: 26, jun: 0},
    {unidade: "Multi II", cbo: "Médico Ginecologista Obstetra", jan: 7, fev: 23, mar: 18, abr: 23, mai: 0, jun: 0},
    {unidade: "Multi III", cbo: "Médico Ginecologista Obstetra", jan: 84, fev: 78, mar: 56, abr: 43, mai: 97, jun: 50},
    {unidade: "Multi IV", cbo: "Médico Ginecologista Obstetra", jan: 0, fev: 0, mar: 12, abr: 0, mai: 0, jun: 0},
    {unidade: "Novo Eldorado", cbo: "Médico Ginecologista Obstetra", jan: 0, fev: 0, mar: 0, abr: 7, mai: 21, jun: 41},
    {unidade: "Parque São João", cbo: "Médico Ginecologista Obstetra", jan: 29, fev: 61, mar: 53, abr: 40, mai: 52, jun: 0},
    {unidade: "Perobas", cbo: "Médico Ginecologista Obstetra", jan: 18, fev: 30, mar: 27, abr: 33, mai: 35, jun: 34},
    {unidade: "Santa Cruz", cbo: "Médico Ginecologista Obstetra", jan: 0, fev: 0, mar: 0, abr: 0, mai: 28, jun: 17},
    {unidade: "Unidade Xv", cbo: "Médico Ginecologista Obstetra", jan: 0, fev: 0, mar: 0, abr: 0, mai: 0, jun: 10},
    {unidade: "Agua Branca", cbo: "Médico Pediatra", jan: 0, fev: 0, mar: 0, abr: 0, mai: 0, jun: 8},
    {unidade: "Csu Eldorado", cbo: "Médico Pediatra", jan: 54, fev: 55, mar: 48, abr: 16, mai: 23, jun: 48},
    {unidade: "Jardim Bandeirantes", cbo: "Médico Pediatra", jan: 0, fev: 0, mar: 0, abr: 0, mai: 0, jun: 30},
    {unidade: "Jardim Eldorado", cbo: "Médico Pediatra", jan: 46, fev: 40, mar: 27, abr: 30, mai: 0, jun: 19},
    {unidade: "Multi I", cbo: "Médico Pediatra", jan: 6, fev: 32, mar: 34, abr: 32, mai: 1, jun: 0},
    {unidade: "Multi II", cbo: "Médico Pediatra", jan: 0, fev: 0, mar: 0, abr: 33, mai: 65, jun: 8},
    {unidade: "Multi IV", cbo: "Médico Pediatra", jan: 0, fev: 2, mar: 82, abr: 83, mai: 117, jun: 13},
    {unidade: "Novo Eldorado", cbo: "Médico Pediatra", jan: 26, fev: 31, mar: 34, abr: 24, mai: 2, jun: 19},
    {unidade: "Parque São João", cbo: "Médico Pediatra", jan: 33, fev: 33, mar: 45, abr: 33, mai: 0, jun: 0},
    {unidade: "Perobas", cbo: "Médico Pediatra", jan: 21, fev: 24, mar: 18, abr: 28, mai: 0, jun: 0},
    {unidade: "Santa Cruz", cbo: "Médico Pediatra", jan: 35, fev: 33, mar: 0, abr: 0, mai: 0, jun: 21},
    {unidade: "Unidade Xv", cbo: "Médico Pediatra", jan: 30, fev: 37, mar: 35, abr: 24, mai: 0, jun: 0},
    {unidade: "Agua Branca", cbo: "Médico Psiquiatra", jan: 51, fev: 55, mar: 37, abr: 45, mai: 0, jun: 44},
    {unidade: "Csu Eldorado", cbo: "Médico Psiquiatra", jan: 0, fev: 1, mar: 1, abr: 0, mai: 1, jun: 17},
    {unidade: "Jardim Bandeirantes", cbo: "Médico Psiquiatra", jan: 0, fev: 0, mar: 0, abr: 0, mai: 0, jun: 28},
    {unidade: "Jardim Eldorado", cbo: "Médico Psiquiatra", jan: 0, fev: 0, mar: 1, abr: 0, mai: 2, jun: 9},
    {unidade: "Multi I", cbo: "Médico Psiquiatra", jan: 0, fev: 2, mar: 2, abr: 11, mai: 0, jun: 0},
    {unidade: "Multi II", cbo: "Médico Psiquiatra", jan: 111, fev: 109, mar: 60, abr: 90, mai: 97, jun: 81},
    {unidade: "Multi IV", cbo: "Médico Psiquiatra", jan: 58, fev: 105, mar: 90, abr: 54, mai: 45, jun: 20},
    {unidade: "Unidade Xv", cbo: "Médico Psiquiatra", jan: 2, fev: 0, mar: 0, abr: 1, mai: 0, jun: 31},
    {unidade: "Agua Branca", cbo: "Médico Residente", jan: 223, fev: 284, mar: 149, abr: 121, mai: 150, jun: 109},
    {unidade: "Agua Branca", cbo: "Nutricionista", jan: 0, fev: 0, mar: 0, abr: 0, mai: 0, jun: 9},
    {unidade: "Bela Vista", cbo: "Nutricionista", jan: 0, fev: 0, mar: 0, abr: 0, mai: 0, jun: 9},
    {unidade: "Csu Eldorado", cbo: "Nutricionista", jan: 0, fev: 0, mar: 0, abr: 0, mai: 1, jun: 6},
    {unidade: "Jardim Bandeirantes", cbo: "Nutricionista", jan: 0, fev: 0, mar: 0, abr: 0, mai: 0, jun: 16},
    {unidade: "Jardim Eldorado", cbo: "Nutricionista", jan: 0, fev: 0, mar: 0, abr: 0, mai: 0, jun: 1},
    {unidade: "Multi I", cbo: "Nutricionista", jan: 0, fev: 0, mar: 4, abr: 11, mai: 64, jun: 0},
    {unidade: "Multi II", cbo: "Nutricionista", jan: 45, fev: 34, mar: 13, abr: 20, mai: 10, jun: 1},
    {unidade: "Multi III", cbo: "Nutricionista", jan: 0, fev: 4, mar: 17, abr: 30, mai: 29, jun: 22},
    {unidade: "Multi IV", cbo: "Nutricionista", jan: 3, fev: 0, mar: 0, abr: 27, mai: 69, jun: 1},
    {unidade: "Novo Eldorado", cbo: "Nutricionista", jan: 0, fev: 1, mar: 0, abr: 0, mai: 0, jun: 14},
    {unidade: "Perobas", cbo: "Nutricionista", jan: 0, fev: 0, mar: 0, abr: 0, mai: 0, jun: 8},
    {unidade: "Santa Cruz", cbo: "Nutricionista", jan: 0, fev: 0, mar: 0, abr: 0, mai: 0, jun: 8},
    {unidade: "Unidade Xv", cbo: "Nutricionista", jan: 0, fev: 0, mar: 0, abr: 0, mai: 0, jun: 6},
    {unidade: "Novo Eldorado", cbo: "Professor de medicina", jan: 4, fev: 5, mar: 11, abr: 28, mai: 12, jun: 0},
    {unidade: "Parque São João", cbo: "Professor de medicina", jan: 10, fev: 18, mar: 17, abr: 23, mai: 0, jun: 0},
    {unidade: "Multi I", cbo: "Professor de Educação Fisica", jan: 130, fev: 122, mar: 110, abr: 3, mai: 0, jun: 0},
    {unidade: "Parque São João", cbo: "Professor de Educação Fisica", jan: 0, fev: 0, mar: 0, abr: 0, mai: 1, jun: 0},
    {unidade: "Agua Branca", cbo: "Pscologo Clinico", jan: 0, fev: 0, mar: 0, abr: 0, mai: 0, jun: 5},
    {unidade: "Bela Vista", cbo: "Pscologo Clinico", jan: 0, fev: 0, mar: 0, abr: 0, mai: 0, jun: 6},
    {unidade: "Jardim Bandeirantes", cbo: "Pscologo Clinico", jan: 0, fev: 0, mar: 0, abr: 0, mai: 0, jun: 19},
    {unidade: "Multi I", cbo: "Pscologo Clinico", jan: 100, fev: 77, mar: 51, abr: 64, mai: 102, jun: 0},
    {unidade: "Multi II", cbo: "Pscologo Clinico", jan: 44, fev: 79, mar: 54, abr: 60, mai: 70, jun: 45},
    {unidade: "Multi III", cbo: "Pscologo Clinico", jan: 77, fev: 133, mar: 125, abr: 132, mai: 164, jun: 65},
    {unidade: "Multi IV", cbo: "Pscologo Clinico", jan: 71, fev: 60, mar: 61, abr: 14, mai: 72, jun: 41},
    {unidade: "Novo Eldorado", cbo: "Pscologo Clinico", jan: 0, fev: 0, mar: 0, abr: 0, mai: 0, jun: 81},
    {unidade: "Perobas", cbo: "Pscologo Clinico", jan: 0, fev: 0, mar: 0, abr: 0, mai: 0, jun: 6},
    {unidade: "Santa Cruz", cbo: "Pscologo Clinico", jan: 0, fev: 0, mar: 0, abr: 0, mai: 0, jun: 5},
    {unidade: "Unidade Xv", cbo: "Pscologo Clinico", jan: 0, fev: 0, mar: 0, abr: 0, mai: 0, jun: 27},
    {unidade: "Agua Branca", cbo: "Tecnico de Enfermagem", jan: 1613, fev: 987, mar: 1589, abr: 1073, mai: 1137, jun: 1218},
    {unidade: "Bela Vista", cbo: "Tecnico de Enfermagem", jan: 258, fev: 258, mar: 226, abr: 319, mai: 446, jun: 356},
    {unidade: "Csu Eldorado", cbo: "Tecnico de Enfermagem", jan: 1235, fev: 1389, mar: 1014, abr: 663, mai: 805, jun: 610},
    {unidade: "Jardim Bandeirantes", cbo: "Tecnico de Enfermagem", jan: 1633, fev: 1418, mar: 1413, abr: 2128, mai: 2525, jun: 2170},
    {unidade: "Jardim Eldorado", cbo: "Tecnico de Enfermagem", jan: 750, fev: 665, mar: 621, abr: 851, mai: 840, jun: 795},
    {unidade: "Novo Eldorado", cbo: "Tecnico de Enfermagem", jan: 1814, fev: 1749, mar: 1676, abr: 1446, mai: 1941, jun: 1937},
    {unidade: "Parque São João", cbo: "Tecnico de Enfermagem", jan: 720, fev: 698, mar: 835, abr: 720, mai: 693, jun: 0},
    {unidade: "Perobas", cbo: "Tecnico de Enfermagem", jan: 142, fev: 171, mar: 231, abr: 28, mai: 5, jun: 0},
    {unidade: "Santa Cruz", cbo: "Tecnico de Enfermagem", jan: 857, fev: 1055, mar: 926, abr: 933, mai: 1199, jun: 1108},
    {unidade: "Unidade Xv", cbo: "Tecnico de Enfermagem", jan: 1844, fev: 1764, mar: 1567, abr: 1698, mai: 1892, jun: 1796}
];

// Variáveis globais
let dadosFiltrados = [...dadosOriginais];
let chartUnidades, chartMeses, chartCBOs;

// Inicialização
document.addEventListener("DOMContentLoaded", function() {
    Chart.register(ChartDataLabels);
    
    popularFiltros();
    atualizarGraficos();
    atualizarTotal();
    
    // Event listeners
    document.getElementById("btnAtualizar").addEventListener("click", aplicarFiltros);
    document.getElementById("btnLimpar").addEventListener("click", atualizarDados);
    document.getElementById("btnDownload").addEventListener("click", downloadExcel);
    
    // Auto-aplicar filtros quando o mês mudar
    document.getElementById("filtroMes").addEventListener("change", aplicarFiltros);
});

function popularFiltros() {
    // Obter lista de unidades e CBOs únicas
    const unidades = [...new Set(dadosOriginais.map(d => d.unidade))].sort();
    const cbos = [...new Set(dadosOriginais.map(d => d.cbo))].sort();

    // Popular checkboxes de unidades
    const checkboxUnidadesDiv = document.getElementById("checkboxUnidades");
    unidades.forEach(unidade => {
        const div = document.createElement("div");
        div.className = "flex items-center";
        div.innerHTML = `
            <input type="checkbox" id="unidade-${unidade.replace(/\s/g, ">")}" value="${unidade}" class="checkbox-filtro mr-2">
            <label for="unidade-${unidade.replace(/\s/g, ">")}" class="text-sm text-gray-700">${unidade}</label>
        `;
        checkboxUnidadesDiv.appendChild(div);
    });

    // Popular checkboxes de CBOs
    const checkboxCBOsDiv = document.getElementById("checkboxCBOs");
    cbos.forEach(cbo => {
        const div = document.createElement("div");
        div.className = "flex items-center";
        div.innerHTML = `
            <input type="checkbox" id="cbo-${cbo.replace(/\s|\//g, ">")}" value="${cbo}" class="checkbox-filtro mr-2">
            <label for="cbo-${cbo.replace(/\s|\//g, ">")}" class="text-sm text-gray-700">${cbo}</label>
        `;
        checkboxCBOsDiv.appendChild(div);
    });

    // Adicionar event listeners para os checkboxes
    document.querySelectorAll(".checkbox-filtro").forEach(checkbox => {
        checkbox.addEventListener("change", aplicarFiltros);
    });
}

function aplicarFiltros() {
    const filtroMes = document.getElementById("filtroMes").value;
    const unidadesSelecionadas = Array.from(document.querySelectorAll("#checkboxUnidades input[type='checkbox']:checked")).map(cb => cb.value);
    const cbosSelecionados = Array.from(document.querySelectorAll("#checkboxCBOs input[type='checkbox']:checked")).map(cb => cb.value);

    dadosFiltrados = dadosOriginais.filter(dado => {
        const mesValido = filtroMes === "" || dado[filtroMes] > 0;
        const unidadeValida = unidadesSelecionadas.length === 0 || unidadesSelecionadas.includes(dado.unidade);
        const cboValido = cbosSelecionados.length === 0 || cbosSelecionados.includes(dado.cbo);
        return mesValido && unidadeValida && cboValido;
    });

    atualizarGraficos();
    atualizarTotal();
}

function atualizarDados() {
    // Limpar filtros
    document.getElementById("filtroMes").value = "";
    document.querySelectorAll("#checkboxUnidades input[type='checkbox']").forEach(cb => cb.checked = false);
    document.querySelectorAll("#checkboxCBOs input[type='checkbox']").forEach(cb => cb.checked = false);
    
    dadosFiltrados = [...dadosOriginais];
    atualizarGraficos();
    atualizarTotal();
}

function atualizarTotal() {
    const total = dadosFiltrados.reduce((sum, dado) => {
        const meses = ["jan", "fev", "mar", "abr", "mai", "jun"];
        return sum + meses.reduce((mesSum, mes) => mesSum + dado[mes], 0);
    }, 0);
    document.getElementById("totalAtendimentos").textContent = total.toLocaleString("pt-BR");
}

function atualizarGraficos() {
    // Destruir gráficos existentes para evitar sobreposição
    if (chartUnidades) chartUnidades.destroy();
    if (chartMeses) chartMeses.destroy();

    // Preparar dados para o gráfico de unidades
    const dadosUnidades = dadosFiltrados.reduce((acc, dado) => {
        const totalUnidade = ["jan", "fev", "mar", "abr", "mai", "jun"].reduce((sum, mes) => sum + dado[mes], 0);
        acc[dado.unidade] = (acc[dado.unidade] || 0) + totalUnidade;
        return acc;
    }, {});

    const sortedUnidades = Object.entries(dadosUnidades)
        .sort(([, a], [, b]) => b - a)
        .slice(0, 10);

    const labelsUnidades = sortedUnidades.map(item => item[0]);
    const dataUnidades = sortedUnidades.map(item => item[1]);

    // Gráfico de Unidades
    const ctxUnidades = document.getElementById("chartUnidades").getContext("2d");
    chartUnidades = new Chart(ctxUnidades, {
        type: "bar",
        data: {
            labels: labelsUnidades,
            datasets: [{
                label: "Total de Atendimentos",
                data: dataUnidades,
                backgroundColor: "rgba(75, 192, 192, 0.6)",
                borderColor: "rgba(75, 192, 192, 1)",
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                datalabels: {
                    anchor: "end",
                    align: "top",
                    formatter: (value) => value.toLocaleString("pt-BR"),
                    color: "#444",
                    font: {
                        weight: "bold"
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: "Número de Atendimentos"
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: "Unidade de Saúde"
                    }
                }
            }
        }
    });

    // Preparar dados para o gráfico de meses
    const dadosMeses = dadosFiltrados.reduce((acc, dado) => {
        acc.jan = (acc.jan || 0) + dado.jan;
        acc.fev = (acc.fev || 0) + dado.fev;
        acc.mar = (acc.mar || 0) + dado.mar;
        acc.abr = (acc.abr || 0) + dado.abr;
        acc.mai = (acc.mai || 0) + dado.mai;
        acc.jun = (acc.jun || 0) + dado.jun;
        return acc;
    }, {});

    const labelsMeses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho"];
    const dataMeses = [dadosMeses.jan, dadosMeses.fev, dadosMeses.mar, dadosMeses.abr, dadosMeses.mai, dadosMeses.jun];

    // Gráfico de Meses
    const ctxMeses = document.getElementById("chartMeses").getContext("2d");
    chartMeses = new Chart(ctxMeses, {
        type: "line",
        data: {
            labels: labelsMeses,
            datasets: [{
                label: "Total de Atendimentos",
                data: dataMeses,
                backgroundColor: "rgba(153, 102, 255, 0.6)",
                borderColor: "rgba(153, 102, 255, 1)",
                borderWidth: 1,
                fill: false
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                datalabels: {
                    anchor: "end",
                    align: "top",
                    formatter: (value) => value.toLocaleString("pt-BR"),
                    color: "#444",
                    font: {
                        weight: "bold"
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: "Número de Atendimentos"
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: "Mês"
                    }
                }
            }
        }
    });

    // Atualizar tabela de CBOs
    atualizarTabelaCBOs();
}

function atualizarTabelaCBOs() {
    const corpoTabelaCBOs = document.getElementById("corpoTabelaCBOs");
    const tabelaCBOsHead = document.querySelector("#tabelaCBOs thead");
    corpoTabelaCBOs.innerHTML = ""; // Limpar conteúdo anterior
    tabelaCBOsHead.innerHTML = ""; // Limpar cabeçalho anterior

    // Agrupar dados por CBO
    const dadosPorCBO = dadosFiltrados.reduce((acc, dado) => {
        if (!acc[dado.cbo]) {
            acc[dado.cbo] = { total: 0, jan: 0, fev: 0, mar: 0, abr: 0, mai: 0, jun: 0 };
        }
        acc[dado.cbo].jan += dado.jan;
        acc[dado.cbo].fev += dado.fev;
        acc[dado.cbo].mar += dado.mar;
        acc[dado.cbo].abr += dado.abr;
        acc[dado.cbo].mai += dado.mai;
        acc[dado.cbo].jun += dado.jun;
        acc[dado.cbo].total += [dado.jan, dado.fev, dado.mar, dado.abr, dado.mai, dado.jun].reduce((s, v) => s + v, 0);
        return acc;
    }, {});

    // Criar cabeçalho da tabela
    const headerRow = tabelaCBOsHead.insertRow();
    ["CBO", "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Total"].forEach(text => {
        const th = document.createElement("th");
        th.textContent = text;
        th.className = "px-4 py-2 text-left";
        headerRow.appendChild(th);
    });

    // Preencher corpo da tabela
    Object.entries(dadosPorCBO).sort().forEach(([cbo, totais]) => {
        const row = corpoTabelaCBOs.insertRow();
        row.className = "bg-white even:bg-gray-50";
        row.insertCell().textContent = cbo;
        row.insertCell().textContent = totais.jan.toLocaleString("pt-BR");
        row.insertCell().textContent = totais.fev.toLocaleString("pt-BR");
        row.insertCell().textContent = totais.mar.toLocaleString("pt-BR");
        row.insertCell().textContent = totais.abr.toLocaleString("pt-BR");
        row.insertCell().textContent = totais.mai.toLocaleString("pt-BR");
        row.insertCell().textContent = totais.jun.toLocaleString("pt-BR");
        row.insertCell().textContent = totais.total.toLocaleString("pt-BR");
        row.querySelectorAll("td").forEach(cell => cell.className = "px-4 py-2");
    });
}

function downloadExcel() {
    const ws_data = [
        ["CBO", "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Total"]
    ];

    const dadosPorCBO = dadosFiltrados.reduce((acc, dado) => {
        if (!acc[dado.cbo]) {
            acc[dado.cbo] = { total: 0, jan: 0, fev: 0, mar: 0, abr: 0, mai: 0, jun: 0 };
        }
        acc[dado.cbo].jan += dado.jan;
        acc[dado.cbo].fev += dado.fev;
        acc[dado.cbo].mar += dado.mar;
        acc[dado.cbo].abr += dado.abr;
        acc[dado.cbo].mai += dado.mai;
        acc[dado.cbo].jun += dado.jun;
        acc[dado.cbo].total += [dado.jan, dado.fev, dado.mar, dado.abr, dado.mai, dado.jun].reduce((s, v) => s + v, 0);
        return acc;
    }, {});

    Object.entries(dadosPorCBO).sort().forEach(([cbo, totais]) => {
        ws_data.push([
            cbo,
            totais.jan,
            totais.fev,
            totais.mar,
            totais.abr,
            totais.mai,
            totais.jun,
            totais.total
        ]);
    });

    const ws = XLSX.utils.aoa_to_sheet(ws_data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Atendimentos por CBO");
    XLSX.writeFile(wb, "Atendimentos_Distrito_Eldorado.xlsx");
}

