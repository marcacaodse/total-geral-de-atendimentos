function filtrarDados() {
    const mesSelecionado = document.getElementById("mes").value;
    const unidadesSelecionadas = Array.from(document.querySelectorAll("input[name=\'unidade\"]:checked")).map(cb => cb.value);
    const cboSelecionados = Array.from(document.querySelectorAll("input[name=\'cbo\"]:checked")).map(cb => cb.value);

    dadosFiltrados = dadosOriginais.filter(dado => {
        const mesCorresponde = mesSelecionado === "todos" || dado.mes === mesSelecionado;
        const unidadeCorresponde = unidadesSelecionadas.length === 0 || unidadesSelecionadas.includes(dado.unidade);
        const cboCorresponde = cboSelecionados.length === 0 || cboSelecionados.includes(dado.cbo);
        return mesCorresponde && unidadeCorresponde && cboCorresponde;
    });

    atualizarGraficos();
}

let chartUnidades = null; // Declarar fora da função para manter o escopo
let chartMeses = null; // Declarar fora da função para manter o escopo

function atualizarGraficos() {
    // Destruir gráficos existentes para evitar sobreposição
    if (chartUnidades) {
        chartUnidades.destroy();
        chartUnidades = null; // Resetar a variável após a destruição
    }
    if (chartMeses) {
        chartMeses.destroy();
        chartMeses = null; // Resetar a variável após a destruição
    }

    // Dados para o gráfico de Top 10 Unidades
    const dadosPorUnidade = dadosFiltrados.reduce((acc, dado) => {
        const total = typeof dado.total === 'number' ? dado.total : 0; // Garante que dado.total é um número
        acc[dado.unidade] = (acc[dado.unidade] || 0) + total;
        return acc;
    }, {});

    const top10Unidades = Object.entries(dadosPorUnidade)
        .sort(([, totalA], [, totalB]) => totalB - totalA)
        .slice(0, 10);

    const labelsUnidades = top10Unidades.map(([unidade,]) => unidade);
    const dataUnidades = top10Unidades.map(([, total]) => total);

    // Gráfico de Barras - Top 10 Unidades
    const ctxUnidades = document.getElementById("chartUnidades").getContext("2d");
    chartUnidades = new Chart(ctxUnidades, {
        type: "bar",
        data: {
            labels: labelsUnidades,
            datasets: [{
                label: "Total de Atendimentos",
                data: dataUnidades,
                backgroundColor: "rgba(139, 0, 0, 0.8)", // Vermelho mais escuro
                borderColor: "rgba(139, 0, 0, 1)",
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            indexAxis: "y", // Barras horizontais
            plugins: {
                legend: {
                    display: false
                },
                datalabels: {
                    anchor: "end",
                    align: "start",
                    formatter: (value) => value.toLocaleString("pt-BR"),
                    color: "#000",
                    font: {
                        weight: "bold"
                    }
                }
            },
            scales: {
                x: {
                    beginAtZero: true
                },
                y: {
                    ticks: {
                        font: {
                            weight: "bold" // Nomes das unidades em negrito
                        }
                    }
                }
            }
        }
    });

    // Dados para o gráfico de Atendimentos por Mês
    const dadosPorMes = dadosFiltrados.reduce((acc, dado) => {
        acc.jan += dado.jan;
        acc.fev += dado.fev;
        acc.mar += dado.mar;
        acc.abr += dado.abr;
        acc.mai += dado.mai;
        acc.jun += dado.jun;
        return acc;
    }, { jan: 0, fev: 0, mar: 0, abr: 0, mai: 0, jun: 0 });

    const labelsMeses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho"];
    const dataMeses = [
        dadosPorMes.jan,
        dadosPorMes.fev,
        dadosPorMes.mar,
        dadosPorMes.abr,
        dadosPorMes.mai,
        dadosPorMes.jun
    ];
    const totalGeralMeses = dataMeses.reduce((sum, value) => sum + value, 0);

    const backgroundColors = [
        "rgba(255, 0, 0, 0.9)", // Janeiro - Vermelho mais vibrante
        "rgba(0, 0, 255, 0.9)", // Fevereiro - Azul mais vibrante
        "rgba(255, 255, 0, 0.9)", // Março - Amarelo mais vibrante
        "rgba(0, 128, 0, 0.9)", // Abril - Verde mais vibrante
        "rgba(128, 0, 128, 0.9)", // Maio - Roxo mais vibrante
        "rgba(255, 165, 0, 0.9)"  // Junho - Laranja mais vibrante
    ];

    // Gráfico de Meses (Rosca)
    const ctxMeses = document.getElementById("chartMeses").getContext("2d");
    chartMeses = new Chart(ctxMeses, {
        type: "doughnut", // Alterado para gráfico de rosca
        data: {
            labels: labelsMeses,
            datasets: [{
                label: "Total de Atendimentos",
                data: dataMeses,
                backgroundColor: backgroundColors,
                borderColor: "#fff",
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                datalabels: {
                    formatter: (value, ctx) => {
                        let percentage = (value * 100 / totalGeralMeses).toFixed(1) + "%";
                        return ctx.chart.data.labels[ctx.dataIndex] + "\\n" + value.toLocaleString("pt-BR") + "\\n" + percentage;
                    },
                    color: "#fff",
                    font: {
                        weight: "bold",
                        size: 12
                    }
                },
                legend: {
                    position: "top",
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
