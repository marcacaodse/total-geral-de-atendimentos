// Dados completos da planilha
const dados = [
    ["Bela Vista", "Assistente Social", 0, 0, 0, 0, 0, 6],
    ["Jardim Bandeirantes", "Assistente Social", 0, 0, 0, 0, 0, 6],
    ["Jardim Eldorado", "Assistente Social", 0, 0, 0, 0, 0, 3],
    ["Multi I", "Assistente Social", 10, 17, 21, 19, 10, 0],
    ["Multi II", "Assistente Social", 6, 5, 5, 2, 1, 0],
    ["Multi III", "Assistente Social", 0, 0, 0, 0, 4, 12],
    ["Multi IV", "Assistente Social", 17, 30, 0, 21, 16, 17],
    ["Santa Cruz", "Assistente Social", 0, 0, 0, 0, 0, 1],
    ["Unidade Xv", "Assistente Social", 0, 0, 0, 0, 0, 1],
    ["Agua Branca", "Auxiliar de enfermagem", 0, 0, 0, 1, 0, 0],
    ["Csu Eldorado", "Auxiliar de enfermagem", 0, 0, 0, 0, 1, 6],
    ["Jardim Bandeirantes", "Auxiliar de enfermagem", 703, 723, 601, 926, 1827, 535],
    ["Jardim Eldorado", "Auxiliar de enfermagem", 0, 36, 48, 50, 169, 32],
    ["Multi II", "Auxiliar de enfermagem", 0, 0, 0, 0, 0, 1],
    ["Novo Eldorado", "Auxiliar de enfermagem", 175, 28, 54, 202, 0, 0],
    ["Parque São João", "Auxiliar de enfermagem", 51, 194, 323, 139, 2, 0],
    ["Perobas", "Auxiliar de enfermagem", 138, 128, 303, 186, 313, 238],
    ["Unidade Xv", "Auxiliar de enfermagem", 355, 421, 358, 474, 585, 291],
    ["Agua Branca", "Cirurgião Dentista", 153, 172, 173, 147, 174, 194],
    ["Csu Eldorado", "Cirurgião Dentista", 166, 158, 85, 101, 76, 137],
    ["Jardim Eldorado", "Cirurgião Dentista", 0, 146, 134, 140, 152, 135],
    ["Novo Eldorado", "Cirurgião Dentista", 141, 128, 21, 118, 71, 34],
    ["Parque São João", "Cirurgião Dentista", 179, 225, 183, 208, 257, 0],
    ["Unidade Xv", "Cirurgião Dentista", 246, 327, 250, 272, 364, 346],
    ["Agua Branca", "Enfermeiro", 545, 714, 281, 457, 828, 593],
    ["Bela Vista", "Enfermeiro", 97, 182, 45, 103, 199, 179],
    ["Csu Eldorado", "Enfermeiro", 740, 541, 680, 950, 1272, 1349],
    ["Jardim Bandeirantes", "Enfermeiro", 631, 473, 287, 222, 543, 568],
    ["Jardim Eldorado", "Enfermeiro", 231, 252, 256, 353, 341, 392],
    ["Multi II", "Enfermeiro", 0, 0, 0, 0, 0, 14],
    ["Novo Eldorado", "Enfermeiro", 95, 79, 98, 57, 302, 538],
    ["Parque São João", "Enfermeiro", 778, 584, 126, 474, 628, 0],
    ["Perobas", "Enfermeiro", 234, 315, 22, 374, 565, 531],
    ["Santa Cruz", "Enfermeiro", 198, 63, 103, 192, 168, 184],
    ["Unidade Xv", "Enfermeiro", 1611, 1257, 860, 749, 1196, 1314],
    ["Csu Eldorado", "Fisioterapeuta", 0, 1, 0, 1, 0, 0],
    ["Multi I", "Fisioterapeuta/Emulti", 92, 2, 43, 36, 48, 0],
    ["Multi II", "Fisioterapeuta/Emulti", 48, 54, 49, 53, 36, 0],
    ["Multi IV", "Fisioterapeuta/Emulti", 14, 36, 29, 49, 38, 0],
    ["Novo Eldorado", "Fisioterapeuta", 0, 6, 16, 4, 1, 0],
    ["Agua Branca", "Fonoaudiologo", 0, 0, 0, 0, 0, 18],
    ["Bela Vista", "Fonoaudiologo", 0, 0, 0, 0, 0, 3],
    ["Csu Eldorado", "Fonoaudiologo", 0, 0, 0, 0, 0, 48],
    ["Jardim Eldorado", "Fonoaudiologo", 0, 0, 0, 0, 0, 5],
    ["Multi I", "Fonoaudiologo", 7, 50, 38, 51, 40, 0],
    ["Multi II", "Fonoaudiologo", 41, 49, 41, 34, 42, 28],
    ["Multi III", "Fonoaudiologo", 0, 0, 0, 2, 32, 22],
    ["Multi IV", "Fonoaudiologo", 0, 0, 0, 0, 0, 18],
    ["Novo Eldorado", "Fonoaudiologo", 0, 0, 0, 0, 0, 49],
    ["Perobas", "Fonoaudiologo", 0, 0, 0, 0, 0, 32],
    ["Santa Cruz", "Fonoaudiologo", 0, 0, 0, 0, 0, 2],
    ["Unidade Xv", "Fonoaudiologo", 0, 0, 0, 0, 0, 11],
    ["Csu Eldorado", "Médico Clinico", 171, 55, 166, 179, 217, 174],
    ["Jardim Bandeirantes", "Médico Clinico", 111, 192, 170, 162, 201, 181],
    ["Novo Eldorado", "Médico Clinico", 163, 15, 107, 116, 138, 138],
    ["Parque São João", "Médico Clinico", 0, 1, 0, 2, 0, 0],
    ["Unidade Xv", "Médico Clinico", 43, 46, 122, 103, 109, 133],
    ["Agua Branca", "Médico Estrategia da Familia", 832, 604, 825, 783, 1027, 895],
    ["Bela Vista", "Médico Estrategia da Familia", 165, 303, 243, 282, 321, 293],
    ["Csu Eldorado", "Médico Estrategia da Familia", 719, 875, 946, 1020, 1159, 968],
    ["Jardim Bandeirantes", "Médico Estrategia da Familia", 681, 709, 604, 614, 910, 774],
    ["Jardim Eldorado", "Médico Estrategia da Familia", 612, 482, 509, 338, 748, 578],
    ["Novo Eldorado", "Médico Estrategia da Familia", 442, 472, 436, 501, 474, 501],
    ["Parque São João", "Médico Estrategia da Familia", 689, 796, 766, 507, 408, 0],
    ["Perobas", "Médico Estrategia da Familia", 198, 320, 366, 329, 494, 368],
    ["Santa Cruz", "Médico Estrategia da Familia", 416, 590, 501, 496, 564, 405],
    ["Unidade Xv", "Médico Estrategia da Familia", 1201, 958, 914, 1018, 1206, 1039],
    ["Agua Branca", "Médico Ginecologista Obstetra", 0, 0, 1, 0, 1, 10],
    ["Bela Vista", "Médico Ginecologista Obstetra", 10, 27, 33, 7, 23, 31],
    ["Csu Eldorado", "Médico Ginecologista Obstetra", 20, 93, 71, 75, 50, 63],
    ["Jardim Bandeirantes", "Médico Ginecologista Obstetra", 32, 38, 38, 29, 29, 29],
    ["Jardim Eldorado", "Médico Ginecologista Obstetra", 0, 0, 0, 0, 0, 20],
    ["Multi I", "Médico Ginecologista Obstetra", 20, 26, 30, 17, 26, 0],
    ["Multi II", "Médico Ginecologista Obstetra", 7, 23, 18, 23, 0, 0],
    ["Multi III", "Médico Ginecologista Obstetra", 84, 78, 56, 43, 97, 50],
    ["Multi IV", "Médico Ginecologista Obstetra", 0, 0, 12, 0, 0, 0],
    ["Novo Eldorado", "Médico Ginecologista Obstetra", 0, 0, 0, 7, 21, 41],
    ["Parque São João", "Médico Ginecologista Obstetra", 29, 61, 53, 40, 52, 0],
    ["Perobas", "Médico Ginecologista Obstetra", 18, 30, 27, 33, 35, 34],
    ["Santa Cruz", "Médico Ginecologista Obstetra", 0, 0, 0, 0, 28, 17],
    ["Unidade Xv", "Médico Ginecologista Obstetra", 0, 0, 0, 0, 0, 10],
    ["Agua Branca", "Médico Pediatra", 0, 0, 0, 0, 0, 8],
    ["Csu Eldorado", "Médico Pediatra", 54, 55, 48, 16, 23, 48],
    ["Jardim Bandeirantes", "Médico Pediatra", 0, 0, 0, 0, 0, 30],
    ["Jardim Eldorado", "Médico Pediatra", 46, 40, 27, 30, 0, 19],
    ["Multi I", "Médico Pediatra", 6, 32, 34, 32, 1, 0],
    ["Multi II", "Médico Pediatra", 0, 0, 0, 33, 65, 8],
    ["Multi IV", "Médico Pediatra", 0, 2, 82, 83, 117, 13],
    ["Novo Eldorado", "Médico Pediatra", 26, 31, 34, 24, 2, 19],
    ["Parque São João", "Médico Pediatra", 33, 33, 45, 33, 0, 0],
    ["Perobas", "Médico Pediatra", 21, 24, 18, 28, 0, 0],
    ["Santa Cruz", "Médico Pediatra", 35, 33, 0, 0, 0, 21],
    ["Unidade Xv", "Médico Pediatra", 30, 37, 35, 24, 0, 0],
    ["Agua Branca", "Médico Psiquiatra", 51, 55, 37, 45, 0, 44],
    ["Csu Eldorado", "Médico Psiquiatra", 0, 1, 1, 0, 1, 17],
    ["Jardim Bandeirantes", "Médico Psiquiatra", 0, 0, 0, 0, 0, 28],
    ["Jardim Eldorado", "Médico Psiquiatra", 0, 0, 1, 0, 2, 9],
    ["Multi I", "Médico Psiquiatra", 0, 2, 2, 11, 0, 0],
    ["Multi II", "Médico Psiquiatra", 111, 109, 60, 90, 97, 81],
    ["Multi IV", "Médico Psiquiatra", 58, 105, 90, 54, 45, 20],
    ["Unidade Xv", "Médico Psiquiatra", 2, 0, 0, 1, 0, 31],
    ["Agua Branca", "Médico Residente", 223, 284, 149, 121, 150, 109],
    ["Agua Branca", "Nutricionista", 0, 0, 0, 0, 0, 9],
    ["Bela Vista", "Nutricionista", 0, 0, 0, 0, 0, 9],
    ["Csu Eldorado", "Nutricionista", 0, 0, 0, 0, 1, 6],
    ["Jardim Bandeirantes", "Nutricionista", 0, 0, 0, 0, 0, 16],
    ["Jardim Eldorado", "Nutricionista", 0, 0, 0, 0, 0, 1],
    ["Multi I", "Nutricionista", 0, 0, 4, 11, 64, 0],
    ["Multi II", "Nutricionista", 45, 34, 13, 20, 10, 1],
    ["Multi III", "Nutricionista", 0, 4, 17, 30, 29, 22],
    ["Multi IV", "Nutricionista", 3, 0, 0, 27, 69, 1],
    ["Novo Eldorado", "Nutricionista", 0, 1, 0, 0, 0, 14],
    ["Perobas", "Nutricionista", 0, 0, 0, 0, 0, 8],
    ["Santa Cruz", "Nutricionista", 0, 0, 0, 0, 0, 8],
    ["Unidade Xv", "Nutricionista", 0, 0, 0, 0, 0, 6],
    ["Novo Eldorado", "Professor de medicina", 4, 5, 11, 28, 12, 0],
    ["Parque São João", "Professor de medicina", 10, 18, 17, 23, 0, 0],
    ["Multi I", "Professor de Educação Fisica", 130, 122, 110, 3, 0, 0],
    ["Parque São João", "Professor de Educação Fisica", 0, 0, 0, 0, 1, 0],
    ["Agua Branca", "Pscologo Clinico", 0, 0, 0, 0, 0, 5],
    ["Bela Vista", "Pscologo Clinico", 0, 0, 0, 0, 0, 6],
    ["Jardim Bandeirantes", "Pscologo Clinico", 0, 0, 0, 0, 0, 19],
    ["Multi I", "Pscologo Clinico", 100, 77, 51, 64, 102, 0],
    ["Multi II", "Pscologo Clinico", 44, 79, 54, 60, 70, 45],
    ["Multi III", "Pscologo Clinico", 77, 133, 125, 132, 164, 65],
    ["Multi IV", "Pscologo Clinico", 71, 60, 61, 14, 72, 41],
    ["Novo Eldorado", "Pscologo Clinico", 0, 0, 0, 0, 0, 81],
    ["Perobas", "Pscologo Clinico", 0, 0, 0, 0, 0, 6],
    ["Santa Cruz", "Pscologo Clinico", 0, 0, 0, 0, 0, 5],
    ["Unidade Xv", "Pscologo Clinico", 0, 0, 0, 0, 0, 27],
    ["Agua Branca", "Tecnico de Enfermagem", 1613, 987, 1589, 1073, 1137, 1218],
    ["Bela Vista", "Tecnico de Enfermagem", 258, 258, 226, 319, 446, 356],
    ["Csu Eldorado", "Tecnico de Enfermagem", 1235, 1389, 1014, 663, 805, 610],
    ["Jardim Bandeirantes", "Tecnico de Enfermagem", 1633, 1418, 1413, 2128, 2525, 2170],
    ["Jardim Eldorado", "Tecnico de Enfermagem", 750, 665, 621, 851, 840, 795],
    ["Novo Eldorado", "Tecnico de Enfermagem", 1814, 1749, 1676, 1446, 1941, 1937],
    ["Parque São João", "Tecnico de Enfermagem", 720, 698, 835, 720, 693, 0],
    ["Perobas", "Tecnico de Enfermagem", 142, 171, 231, 28, 5, 0],
    ["Santa Cruz", "Tecnico de Enfermagem", 857, 1055, 926, 933, 1199, 1108],
    ["Unidade Xv", "Tecnico de Enfermagem", 1084, 1208, 1389, 1258, 1163, 1527],
    ["Agua Branca", "Terapeuta Ocupacional", 0, 0, 0, 0, 0, 7],
    ["Jardim Eldorado", "Terapeuta Ocupacional", 0, 0, 0, 0, 1, 6],
    ["Multi I", "Terapeuta Ocupacional", 0, 39, 42, 25, 41, 0],
    ["Multi III", "Terapeuta Ocupacional", 0, 0, 0, 0, 43, 13],
    ["Multi IV", "Terapeuta Ocupacional", 49, 51, 3, 6, 0, 0],
    ["Novo Eldorado", "Terapeuta Ocupacional", 0, 0, 0, 0, 0, 3],
    ["Perobas", "Terapeuta Ocupacional", 0, 0, 0, 0, 4, 14],
    ["Unidade Xv", "Terapeuta Ocupacional", 0, 0, 0, 0, 0, 3]
];

const meses = ["jan./25", "fev./25", "mar./25", "abr./25", "mai./25", "jun./25"];
const unidades = [...new Set(dados.map(item => item[0]))].sort();
const cbos = [...new Set(dados.map(item => item[1]))].sort();

let barChart, doughnutChart;

// Inicializar filtros
function initializeFilters() {
    const unidadeSelect = document.getElementById('unidadeFilter');
    const cboSelect = document.getElementById('cboFilter');

    unidades.forEach(unidade => {
        const option = document.createElement('option');
        option.value = unidade;
        option.textContent = unidade;
        unidadeSelect.appendChild(option);
    });

    cbos.forEach(cbo => {
        const option = document.createElement('option');
        option.value = cbo;
        option.textContent = cbo;
        cboSelect.appendChild(option);
    });
}

// Filtrar dados
function filterData() {
    const mesFilter = document.getElementById('mesFilter').value;
    const unidadeFilter = document.getElementById('unidadeFilter').value;
    const cboFilter = document.getElementById('cboFilter').value;

    return dados.filter(item => {
        const unidadeMatch = !unidadeFilter || item[0] === unidadeFilter;
        const cboMatch = !cboFilter || item[1] === cboFilter;
        return unidadeMatch && cboMatch;
    });
}

// Criar gráfico de barras
function createBarChart() {
    const ctx = document.getElementById('barChart').getContext('2d');
    
    if (barChart) {
        barChart.destroy();
    }

    const filteredData = filterData();
    const mesFilter = document.getElementById('mesFilter').value;
    
    let unidadeTotals = {};

    if (mesFilter) {
        const mesIndex = meses.indexOf(mesFilter) + 2;
        filteredData.forEach(item => {
            if (!unidadeTotals[item[0]]) {
                unidadeTotals[item[0]] = 0;
            }
            unidadeTotals[item[0]] += item[mesIndex] || 0;
        });
    } else {
        filteredData.forEach(item => {
            if (!unidadeTotals[item[0]]) {
                unidadeTotals[item[0]] = 0;
            }
            for (let i = 2; i < 8; i++) {
                unidadeTotals[item[0]] += item[i] || 0;
            }
        });
    }

    const labels = Object.keys(unidadeTotals).sort();
    const values = labels.map(label => unidadeTotals[label]);

    barChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                data: values,
                backgroundColor: '#dc2626',
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        title: function() {
                            return '';
                        },
                        label: function(context) {
                            return `${context.label}: ${context.parsed.y}`;
                        }
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: '#000000',
                        font: {
                            weight: 'bold',
                            size: 10
                        },
                        maxRotation: 45,
                        minRotation: 45
                    },
                    grid: {
                        display: false
                    }
                },
                y: {
                    beginAtZero: true,
                    ticks: {
                        color: '#666666',
                        font: {
                            size: 10
                        }
                    },
                    grid: {
                        color: '#e5e7eb'
                    }
                }
            },
            layout: {
                padding: {
                    top: 30,
                    bottom: 10,
                    left: 10,
                    right: 10
                }
            },
            animation: {
                onComplete: function() {
                    const chart = this;
                    const ctx = chart.ctx;
                    ctx.font = 'bold 11px Arial';
                    ctx.fillStyle = '#000000';
                    ctx.textAlign = 'center';
                    
                    chart.data.datasets.forEach((dataset, i) => {
                        const meta = chart.getDatasetMeta(i);
                        meta.data.forEach((bar, index) => {
                            const data = dataset.data[index];
                            if (data > 0) {
                                ctx.fillText(data, bar.x, bar.y - 8);
                            }
                        });
                    });
                }
            }
        }
    });
}

// Criar gráfico de rosca
function createDoughnutChart() {
    const ctx = document.getElementById('doughnutChart').getContext('2d');
    
    if (doughnutChart) {
        doughnutChart.destroy();
    }

    const filteredData = filterData();
    const mesFilter = document.getElementById('mesFilter').value;
    let monthTotals = {};
    let centerText = '';

    if (mesFilter) {
        const mesIndex = meses.indexOf(mesFilter) + 2;
        const total = filteredData.reduce((sum, item) => sum + (item[mesIndex] || 0), 0);
        monthTotals[mesFilter] = total;
        
        const mesNomes = {
            'jan./25': 'Janeiro',
            'fev./25': 'Fevereiro', 
            'mar./25': 'Março',
            'abr./25': 'Abril',
            'mai./25': 'Maio',
            'jun./25': 'Junho'
        };
        centerText = `${mesNomes[mesFilter]}\n${total}`;
    } else {
        meses.forEach((mes, index) => {
            monthTotals[mes] = 0;
            filteredData.forEach(item => {
                monthTotals[mes] += item[index + 2] || 0;
            });
        });
        const totalGeral = Object.values(monthTotals).reduce((a, b) => a + b, 0);
        centerText = `Total Geral\n${totalGeral}`;
    }

    const labels = Object.keys(monthTotals);
    const values = Object.values(monthTotals);
    const total = values.reduce((a, b) => a + b, 0);

    const colors = ['#3b82f6', '#ef4444', '#10b981', '#f59e0b', '#8b5cf6', '#ec4899'];

    const centerTextPlugin = {
        id: 'centerText',
        afterDatasetsDraw: function(chart) {
            const ctx = chart.ctx;
            const centerX = chart.width / 2;
            const centerY = chart.height / 2;
            
            ctx.restore();
            ctx.font = 'bold 16px Arial';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillStyle = '#374151';
            
            const lines = centerText.split('\n');
            lines.forEach((line, index) => {
                ctx.fillText(line, centerX, centerY + (index * 20) - (lines.length - 1) * 10);
            });
            ctx.save();
        }
    };

    doughnutChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: labels.map(mes => {
                const mesNome = {
                    'jan./25': 'Janeiro',
                    'fev./25': 'Fevereiro', 
                    'mar./25': 'Março',
                    'abr./25': 'Abril',
                    'mai./25': 'Maio',
                    'jun./25': 'Junho'
                };
                return mesNome[mes] || mes;
            }),
            datasets: [{
                data: values,
                backgroundColor: colors.slice(0, values.length),
                borderWidth: 2,
                borderColor: '#ffffff'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '50%',
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        generateLabels: function(chart) {
                            const data = chart.data;
                            if (data.labels.length && data.datasets.length) {
                                return data.labels.map((label, i) => {
                                    const value = data.datasets[0].data[i];
                                    const percentage = total > 0 ? ((value / total) * 100).toFixed(1) : 0;
                                    return {
                                        text: `${label}: ${value} (${percentage}%)`,
                                        fillStyle: data.datasets[0].backgroundColor[i],
                                        strokeStyle: data.datasets[0].borderColor,
                                        lineWidth: data.datasets[0].borderWidth,
                                        hidden: false,
                                        index: i
                                    };
                                });
                            }
                            return [];
                        }
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const value = context.parsed;
                            const percentage = total > 0 ? ((value / total) * 100).toFixed(1) : 0;
                            return `${context.label}: ${value} (${percentage}%)`;
                        }
                    }
                }
            }
        },
        plugins: [centerTextPlugin]
    });
}

// Criar tabela
function createTable() {
    const filteredData = filterData();
    const mesFilter = document.getElementById('mesFilter').value;
    
    let tableData = {};

    cbos.forEach(cbo => {
        tableData[cbo] = {};
        unidades.forEach(unidade => {
            tableData[cbo][unidade] = 0;
        });
    });

    if (mesFilter) {
        const mesIndex = meses.indexOf(mesFilter) + 2;
        filteredData.forEach(item => {
            if (tableData[item[1]]) {
                tableData[item[1]][item[0]] = item[mesIndex] || 0;
            }
        });
    } else {
        filteredData.forEach(item => {
            if (tableData[item[1]]) {
                let total = 0;
                for (let i = 2; i < 8; i++) {
                    total += item[i] || 0;
                }
                tableData[item[1]][item[0]] = total;
            }
        });
    }

    const table = document.getElementById('dataTable');
    const thead = table.querySelector('thead tr');
    thead.innerHTML = '<th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200">CBO</th>';
    
    unidades.forEach(unidade => {
        const th = document.createElement('th');
        th.className = 'px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200';
        th.textContent = unidade;
        thead.appendChild(th);
    });

    const totalTh = document.createElement('th');
    totalTh.className = 'px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200';
    totalTh.textContent = 'Total';
    thead.appendChild(totalTh);

    const tbody = table.querySelector('tbody');
    tbody.innerHTML = '';

    Object.keys(tableData).forEach(cbo => {
        const tr = document.createElement('tr');
        tr.className = 'hover:bg-gray-50';

        const tdCbo = document.createElement('td');
        tdCbo.className = 'px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900 border-r border-gray-200';
        tdCbo.textContent = cbo;
        tr.appendChild(tdCbo);

        let rowTotal = 0;

        unidades.forEach(unidade => {
            const td = document.createElement('td');
            td.className = 'px-4 py-3 whitespace-nowrap text-sm text-gray-600 text-center';
            const value = tableData[cbo][unidade] || 0;
            td.textContent = value;
            rowTotal += value;
            tr.appendChild(td);
        });

        const tdTotal = document.createElement('td');
        tdTotal.className = 'px-4 py-3 whitespace-nowrap text-sm font-bold text-gray-900 bg-gray-50 border-l border-gray-200';
        tdTotal.textContent = rowTotal;
        tr.appendChild(tdTotal);

        tbody.appendChild(tr);
    });
}

function updateVisualization() {
    createBarChart();
    createDoughnutChart();
    createTable();
}

document.getElementById('mesFilter').addEventListener('change', updateVisualization);
document.getElementById('unidadeFilter').addEventListener('change', updateVisualization);
document.getElementById('cboFilter').addEventListener('change', updateVisualization);

document.addEventListener('DOMContentLoaded', function() {
    initializeFilters();
    updateVisualization();
});

