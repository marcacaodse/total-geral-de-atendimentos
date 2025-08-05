// Dados simulados - substitua pelos seus dados reais
const rawData = [
    ["Agua Branca", "Assistente Social", 0, 0, 0, 0, 0, 0],
    ["Agua Branca", "Auxiliar de enfermagem", 0, 0, 0, 1, 0, 0],
    ["Agua Branca", "Cirurgião Dentista", 0, 0, 0, 1013, 0, 0],
    ["Agua Branca", "Enfermeiro", 0, 0, 0, 3418, 0, 0],
    ["Agua Branca", "Fisioterapeuta", 0, 0, 0, 0, 0, 0],
    ["Agua Branca", "Fisioterapeuta/Emulti", 0, 0, 0, 0, 0, 0],
    ["Agua Branca", "Fonoaudiologo", 0, 0, 0, 18, 0, 0],
    ["Agua Branca", "Médico Clinico", 0, 0, 0, 0, 0, 0],
    ["Agua Branca", "Médico Estrategia da Familia", 0, 0, 0, 4966, 0, 0],
    ["Agua Branca", "Médico Ginecologista Obstetra", 0, 0, 0, 12, 0, 0],
    ["Agua Branca", "Médico Pediatra", 0, 0, 0, 8, 0, 0],
    ["Agua Branca", "Médico Psiquiatra", 0, 0, 0, 232, 0, 0],
    ["Agua Branca", "Médico Residente", 0, 0, 0, 1036, 0, 0],
    ["Agua Branca", "Nutricionista", 0, 0, 0, 9, 0, 0],
    ["Agua Branca", "Professor de Educação Fisica", 0, 0, 0, 0, 0, 0],
    ["Agua Branca", "Professor de medicina", 0, 0, 0, 0, 0, 0],
    ["Agua Branca", "Pscologo Clinico", 0, 0, 0, 5, 0, 0],
    ["Agua Branca", "Tecnico de Enfermagem", 0, 0, 0, 7617, 0, 0],
    ["Agua Branca", "Terapeuta Ocupacional", 0, 0, 0, 7, 0, 0],
    ["Bela Vista", "Assistente Social", 0, 0, 0, 6, 0, 0],
    ["Bela Vista", "Auxiliar de enfermagem", 0, 0, 0, 0, 0, 0],
    ["Bela Vista", "Cirurgião Dentista", 0, 0, 0, 0, 0, 0],
    ["Bela Vista", "Enfermeiro", 0, 0, 0, 805, 0, 0],
    ["Bela Vista", "Fisioterapeuta", 0, 0, 0, 0, 0, 0],
    ["Bela Vista", "Fisioterapeuta/Emulti", 0, 0, 0, 0, 0, 0],
    ["Bela Vista", "Fonoaudiologo", 0, 0, 0, 3, 0, 0],
    ["Bela Vista", "Médico Clinico", 0, 0, 0, 0, 0, 0],
    ["Bela Vista", "Médico Estrategia da Familia", 0, 0, 0, 1607, 0, 0],
    ["Bela Vista", "Médico Ginecologista Obstetra", 0, 0, 0, 131, 0, 0],
    ["Bela Vista", "Médico Pediatra", 0, 0, 0, 0, 0, 0],
    ["Bela Vista", "Médico Psiquiatra", 0, 0, 0, 0, 0, 0],
    ["Bela Vista", "Médico Residente", 0, 0, 0, 0, 0, 0],
    ["Bela Vista", "Nutricionista", 0, 0, 0, 9, 0, 0],
    ["Bela Vista", "Professor de Educação Fisica", 0, 0, 0, 0, 0, 0],
    ["Bela Vista", "Professor de medicina", 0, 0, 0, 0, 0, 0],
    ["Bela Vista", "Pscologo Clinico", 0, 0, 0, 6, 0, 0],
    ["Bela Vista", "Tecnico de Enfermagem", 0, 0, 0, 1863, 0, 0],
    ["Bela Vista", "Terapeuta Ocupacional", 0, 0, 0, 0, 0, 0],
    ["Csu Eldorado", "Assistente Social", 0, 0, 0, 0, 0, 0],
    ["Csu Eldorado", "Auxiliar de enfermagem", 0, 0, 0, 7, 0, 0],
    ["Csu Eldorado", "Cirurgião Dentista", 0, 0, 0, 723, 0, 0],
    ["Csu Eldorado", "Enfermeiro", 0, 0, 0, 5532, 0, 0],
    ["Csu Eldorado", "Fisioterapeuta", 0, 0, 0, 2, 0, 0],
    ["Csu Eldorado", "Fisioterapeuta/Emulti", 0, 0, 0, 0, 0, 0],
    ["Csu Eldorado", "Fonoaudiologo", 0, 0, 0, 48, 0, 0],
    ["Csu Eldorado", "Médico Clinico", 0, 0, 0, 962, 0, 0],
    ["Csu Eldorado", "Médico Estrategia da Familia", 0, 0, 0, 5687, 0, 0],
    ["Csu Eldorado", "Médico Ginecologista Obstetra", 0, 0, 0, 372, 0, 0],
    ["Csu Eldorado", "Médico Pediatra", 0, 0, 0, 244, 0, 0],
    ["Csu Eldorado", "Médico Psiquiatra", 0, 0, 0, 20, 0, 0],
    ["Csu Eldorado", "Médico Residente", 0, 0, 0, 0, 0, 0],
    ["Csu Eldorado", "Nutricionista", 0, 0, 0, 7, 0, 0],
    ["Csu Eldorado", "Professor de Educação Fisica", 0, 0, 0, 0, 0, 0],
    ["Csu Eldorado", "Professor de medicina", 0, 0, 0, 0, 0, 0],
    ["Csu Eldorado", "Pscologo Clinico", 0, 0, 0, 0, 0, 0],
    ["Csu Eldorado", "Tecnico de Enfermagem", 0, 0, 0, 5716, 0, 0],
    ["Csu Eldorado", "Terapeuta Ocupacional", 0, 0, 0, 0, 0, 0],
    ["Jardim Bandeirantes", "Assistente Social", 0, 0, 0, 6, 0, 0],
    ["Jardim Bandeirantes", "Auxiliar de enfermagem", 0, 0, 0, 5315, 0, 0],
    ["Jardim Bandeirantes", "Cirurgião Dentista", 0, 0, 0, 0, 0, 0],
    ["Jardim Bandeirantes", "Enfermeiro", 0, 0, 0, 2724, 0, 0],
    ["Jardim Bandeirantes", "Fisioterapeuta", 0, 0, 0, 0, 0, 0],
    ["Jardim Bandeirantes", "Fisioterapeuta/Emulti", 0, 0, 0, 0, 0, 0],
    ["Jardim Bandeirantes", "Fonoaudiologo", 0, 0, 0, 0, 0, 0],
    ["Jardim Bandeirantes", "Médico Clinico", 0, 0, 0, 1017, 0, 0],
    ["Jardim Bandeirantes", "Médico Estrategia da Familia", 0, 0, 0, 4292, 0, 0],
    ["Jardim Bandeirantes", "Médico Ginecologista Obstetra", 0, 0, 0, 195, 0, 0],
    ["Jardim Bandeirantes", "Médico Pediatra", 0, 0, 0, 30, 0, 0],
    ["Jardim Bandeirantes", "Médico Psiquiatra", 0, 0, 0, 28, 0, 0],
    ["Jardim Bandeirantes", "Médico Residente", 0, 0, 0, 0, 0, 0],
    ["Jardim Bandeirantes", "Nutricionista", 0, 0, 0, 16, 0, 0],
    ["Jardim Bandeirantes", "Professor de Educação Fisica", 0, 0, 0, 0, 0, 0],
    ["Jardim Bandeirantes", "Professor de medicina", 0, 0, 0, 0, 0, 0],
    ["Jardim Bandeirantes", "Pscologo Clinico", 0, 0, 0, 19, 0, 0],
    ["Jardim Bandeirantes", "Tecnico de Enfermagem", 0, 0, 0, 11287, 0, 0],
    ["Jardim Bandeirantes", "Terapeuta Ocupacional", 0, 0, 0, 0, 0, 0],
    ["Jardim Eldorado", "Assistente Social", 0, 0, 0, 3, 0, 0],
    ["Jardim Eldorado", "Auxiliar de enfermagem", 0, 0, 0, 335, 0, 0],
    ["Jardim Eldorado", "Cirurgião Dentista", 0, 0, 0, 707, 0, 0],
    ["Jardim Eldorado", "Enfermeiro", 0, 0, 0, 1825, 0, 0],
    ["Jardim Eldorado", "Fisioterapeuta", 0, 0, 0, 0, 0, 0],
    ["Jardim Eldorado", "Fisioterapeuta/Emulti", 0, 0, 0, 0, 0, 0],
    ["Jardim Eldorado", "Fonoaudiologo", 0, 0, 0, 5, 0, 0],
    ["Jardim Eldorado", "Médico Clinico", 0, 0, 0, 0, 0, 0],
    ["Jardim Eldorado", "Médico Estrategia da Familia", 0, 0, 0, 3267, 0, 0],
    ["Jardim Eldorado", "Médico Ginecologista Obstetra", 0, 0, 0, 20, 0, 0],
    ["Jardim Eldorado", "Médico Pediatra", 0, 0, 0, 162, 0, 0],
    ["Jardim Eldorado", "Médico Psiquiatra", 0, 0, 0, 12, 0, 0],
    ["Jardim Eldorado", "Médico Residente", 0, 0, 0, 0, 0, 0],
    ["Jardim Eldorado", "Nutricionista", 0, 0, 0, 1, 0, 0],
    ["Jardim Eldorado", "Professor de Educação Fisica", 0, 0, 0, 0, 0, 0],
    ["Jardim Eldorado", "Professor de medicina", 0, 0, 0, 0, 0, 0],
    ["Jardim Eldorado", "Pscologo Clinico", 0, 0, 0, 0, 0, 0],
    ["Jardim Eldorado", "Tecnico de Enfermagem", 0, 0, 0, 4522, 0, 0],
    ["Jardim Eldorado", "Terapeuta Ocupacional", 0, 0, 0, 7, 0, 0],
    ["Multi I", "Assistente Social", 0, 0, 0, 77, 0, 0],
    ["Multi I", "Auxiliar de enfermagem", 0, 0, 0, 0, 0, 0],
    ["Multi I", "Cirurgião Dentista", 0, 0, 0, 0, 0, 0],
    ["Multi I", "Enfermeiro", 0, 0, 0, 0, 0, 0],
    ["Multi I", "Fisioterapeuta", 0, 0, 0, 0, 0, 0],
    ["Multi I", "Fisioterapeuta/Emulti", 0, 0, 0, 221, 0, 0],
    ["Multi I", "Fonoaudiologo", 0, 0, 0, 186, 0, 0],
    ["Multi I", "Médico Clinico", 0, 0, 0, 0, 0, 0],
    ["Multi I", "Médico Estrategia da Familia", 0, 0, 0, 0, 0, 0],
    ["Multi I", "Médico Ginecologista Obstetra", 0, 0, 0, 119, 0, 0],
    ["Multi I", "Médico Pediatra", 0, 0, 0, 105, 0, 0],
    ["Multi I", "Médico Psiquiatra", 0, 0, 0, 15, 0, 0],
    ["Multi I", "Médico Residente", 0, 0, 0, 0, 0, 0],
    ["Multi I", "Nutricionista", 0, 0, 0, 79, 0, 0],
    ["Multi I", "Professor de Educação Fisica", 0, 0, 0, 365, 0, 0],
    ["Multi I", "Professor de medicina", 0, 0, 0, 0, 0, 0],
    ["Multi I", "Pscologo Clinico", 0, 0, 0, 394, 0, 0],
    ["Multi I", "Tecnico de Enfermagem", 0, 0, 0, 0, 0, 0],
    ["Multi I", "Terapeuta Ocupacional", 0, 0, 0, 147, 0, 0],
    ["Multi II", "Assistente Social", 0, 0, 0, 19, 0, 0],
    ["Multi II", "Auxiliar de enfermagem", 0, 0, 0, 1, 0, 0],
    ["Multi II", "Cirurgião Dentista", 0, 0, 0, 0, 0, 0],
    ["Multi II", "Enfermeiro", 0, 0, 0, 14, 0, 0],
    ["Multi II", "Fisioterapeuta", 0, 0, 0, 0, 0, 0],
    ["Multi II", "Fisioterapeuta/Emulti", 0, 0, 0, 240, 0, 0],
    ["Multi II", "Fonoaudiologo", 0, 0, 0, 235, 0, 0],
    ["Multi II", "Médico Clinico", 0, 0, 0, 0, 0, 0],
    ["Multi II", "Médico Estrategia da Familia", 0, 0, 0, 0, 0, 0],
    ["Multi II", "Médico Ginecologista Obstetra", 0, 0, 0, 71, 0, 0],
    ["Multi II", "Médico Pediatra", 0, 0, 0, 106, 0, 0],
    ["Multi II", "Médico Psiquiatra", 0, 0, 0, 548, 0, 0],
    ["Multi II", "Médico Residente", 0, 0, 0, 0, 0, 0],
    ["Multi II", "Nutricionista", 0, 0, 0, 123, 0, 0],
    ["Multi II", "Professor de Educação Fisica", 0, 0, 0, 0, 0, 0],
    ["Multi II", "Professor de medicina", 0, 0, 0, 0, 0, 0],
    ["Multi II", "Pscologo Clinico", 0, 0, 0, 352, 0, 0],
    ["Multi II", "Tecnico de Enfermagem", 0, 0, 0, 0, 0, 0],
    ["Multi II", "Terapeuta Ocupacional", 0, 0, 0, 0, 0, 0],
    ["Multi III", "Assistente Social", 0, 0, 0, 16, 0, 0],
    ["Multi III", "Auxiliar de enfermagem", 0, 0, 0, 0, 0, 0],
    ["Multi III", "Cirurgião Dentista", 0, 0, 0, 0, 0, 0],
    ["Multi III", "Enfermeiro", 0, 0, 0, 0, 0, 0],
    ["Multi III", "Fisioterapeuta", 0, 0, 0, 0, 0, 0],
    ["Multi III", "Fisioterapeuta/Emulti", 0, 0, 0, 0, 0, 0],
    ["Multi III", "Fonoaudiologo", 0, 0, 0, 56, 0, 0],
    ["Multi III", "Médico Clinico", 0, 0, 0, 0, 0, 0],
    ["Multi III", "Médico Estrategia da Familia", 0, 0, 0, 0, 0, 0],
    ["Multi III", "Médico Ginecologista Obstetra", 0, 0, 0, 408, 0, 0],
    ["Multi III", "Médico Pediatra", 0, 0, 0, 0, 0, 0],
    ["Multi III", "Médico Psiquiatra", 0, 0, 0, 0, 0, 0],
    ["Multi III", "Médico Residente", 0, 0, 0, 0, 0, 0],
    ["Multi III", "Nutricionista", 0, 0, 0, 102, 0, 0],
    ["Multi III", "Professor de Educação Fisica", 0, 0, 0, 0, 0, 0],
    ["Multi III", "Professor de medicina", 0, 0, 0, 0, 0, 0],
    ["Multi III", "Pscologo Clinico", 0, 0, 0, 696, 0, 0],
    ["Multi III", "Tecnico de Enfermagem", 0, 0, 0, 0, 0, 0],
    ["Multi III", "Terapeuta Ocupacional", 0, 0, 0, 56, 0, 0],
    ["Multi IV", "Assistente Social", 0, 0, 0, 101, 0, 0],
    ["Multi IV", "Auxiliar de enfermagem", 0, 0, 0, 0, 0, 0],
    ["Multi IV", "Cirurgião Dentista", 0, 0, 0, 0, 0, 0],
    ["Multi IV", "Enfermeiro", 0, 0, 0, 0, 0, 0],
    ["Multi IV", "Fisioterapeuta", 0, 0, 0, 0, 0, 0],
    ["Multi IV", "Fisioterapeuta/Emulti", 0, 0, 0, 166, 0, 0],
    ["Multi IV", "Fonoaudiologo", 0, 0, 0, 18, 0, 0],
    ["Multi IV", "Médico Clinico", 0, 0, 0, 0, 0, 0],
    ["Multi IV", "Médico Estrategia da Familia", 0, 0, 0, 0, 0, 0],
    ["Multi IV", "Médico Ginecologista Obstetra", 0, 0, 0, 12, 0, 0],
    ["Multi IV", "Médico Pediatra", 0, 0, 0, 297, 0, 0],
    ["Multi IV", "Médico Psiquiatra", 0, 0, 0, 372, 0, 0],
    ["Multi IV", "Médico Residente", 0, 0, 0, 0, 0, 0],
    ["Multi IV", "Nutricionista", 0, 0, 0, 100, 0, 0],
    ["Multi IV", "Professor de Educação Fisica", 0, 0, 0, 0, 0, 0],
    ["Multi IV", "Professor de medicina", 0, 0, 0, 0, 0, 0],
    ["Multi IV", "Pscologo Clinico", 0, 0, 0, 319, 0, 0],
    ["Multi IV", "Tecnico de Enfermagem", 0, 0, 0, 0, 0, 0],
    ["Multi IV", "Terapeuta Ocupacional", 0, 0, 0, 109, 0, 0],
    ["Novo Eldorado", "Assistente Social", 0, 0, 0, 0, 0, 0],
    ["Novo Eldorado", "Auxiliar de enfermagem", 0, 0, 0, 459, 0, 0],
    ["Novo Eldorado", "Cirurgião Dentista", 0, 0, 0, 513, 0, 0],
    ["Novo Eldorado", "Enfermeiro", 0, 0, 0, 1169, 0, 0],
    ["Novo Eldorado", "Fisioterapeuta", 0, 0, 0, 27, 0, 0],
    ["Novo Eldorado", "Fisioterapeuta/Emulti", 0, 0, 0, 0, 0, 0],
    ["Novo Eldorado", "Fonoaudiologo", 0, 0, 0, 49, 0, 0],
    ["Novo Eldorado", "Médico Clinico", 0, 0, 0, 677, 0, 0],
    ["Novo Eldorado", "Médico Estrategia da Familia", 0, 0, 0, 2826, 0, 0],
    ["Novo Eldorado", "Médico Ginecologista Obstetra", 0, 0, 0, 69, 0, 0],
    ["Novo Eldorado", "Médico Pediatra", 0, 0, 0, 136, 0, 0],
    ["Novo Eldorado", "Médico Psiquiatra", 0, 0, 0, 0, 0, 0],
    ["Novo Eldorado", "Médico Residente", 0, 0, 0, 0, 0, 0],
    ["Novo Eldorado", "Nutricionista", 0, 0, 0, 15, 0, 0],
    ["Novo Eldorado", "Professor de Educação Fisica", 0, 0, 0, 0, 0, 0],
    ["Novo Eldorado", "Professor de medicina", 0, 0, 0, 60, 0, 0],
    ["Novo Eldorado", "Pscologo Clinico", 0, 0, 0, 81, 0, 0],
    ["Novo Eldorado", "Tecnico de Enfermagem", 0, 0, 0, 10563, 0, 0],
    ["Novo Eldorado", "Terapeuta Ocupacional", 0, 0, 0, 3, 0, 0],
    ["Parque São João", "Assistente Social", 0, 0, 0, 0, 0, 0],
    ["Parque São João", "Auxiliar de enfermagem", 0, 0, 0, 709, 0, 0],
    ["Parque São João", "Cirurgião Dentista", 0, 0, 0, 1052, 0, 0],
    ["Parque São João", "Enfermeiro", 0, 0, 0, 2590, 0, 0],
    ["Parque São João", "Fisioterapeuta", 0, 0, 0, 0, 0, 0],
    ["Parque São João", "Fisioterapeuta/Emulti", 0, 0, 0, 0, 0, 0],
    ["Parque São João", "Fonoaudiologo", 0, 0, 0, 0, 0, 0],
    ["Parque São João", "Médico Clinico", 0, 0, 0, 3, 0, 0],
    ["Parque São João", "Médico Estrategia da Familia", 0, 0, 0, 3166, 0, 0],
    ["Parque São João", "Médico Ginecologista Obstetra", 0, 0, 0, 235, 0, 0],
    ["Parque São João", "Médico Pediatra", 0, 0, 0, 144, 0, 0],
    ["Parque São João", "Médico Psiquiatra", 0, 0, 0, 0, 0, 0],
    ["Parque São João", "Médico Residente", 0, 0, 0, 0, 0, 0],
    ["Parque São João", "Nutricionista", 0, 0, 0, 0, 0, 0],
    ["Parque São João", "Professor de Educação Fisica", 0, 0, 0, 1, 0, 0],
    ["Parque São João", "Professor de medicina", 0, 0, 0, 68, 0, 0],
    ["Parque São João", "Pscologo Clinico", 0, 0, 0, 0, 0, 0],
    ["Parque São João", "Tecnico de Enfermagem", 0, 0, 0, 3666, 0, 0],
    ["Parque São João", "Terapeuta Ocupacional", 0, 0, 0, 0, 0, 0],
    ["Perobas", "Assistente Social", 0, 0, 0, 0, 0, 0],
    ["Perobas", "Auxiliar de enfermagem", 0, 0, 0, 1306, 0, 0],
    ["Perobas", "Cirurgião Dentista", 0, 0, 0, 0, 0, 0],
    ["Perobas", "Enfermeiro", 0, 0, 0, 2041, 0, 0],
    ["Perobas", "Fisioterapeuta", 0, 0, 0, 0, 0, 0],
    ["Perobas", "Fisioterapeuta/Emulti", 0, 0, 0, 0, 0, 0],
    ["Perobas", "Fonoaudiologo", 0, 0, 0, 32, 0, 0],
    ["Perobas", "Médico Clinico", 0, 0, 0, 0, 0, 0],
    ["Perobas", "Médico Estrategia da Familia", 0, 0, 0, 2075, 0, 0],
    ["Perobas", "Médico Ginecologista Obstetra", 0, 0, 0, 177, 0, 0],
    ["Perobas", "Médico Pediatra", 0, 0, 0, 91, 0, 0],
    ["Perobas", "Médico Psiquiatra", 0, 0, 0, 0, 0, 0],
    ["Perobas", "Médico Residente", 0, 0, 0, 0, 0, 0],
    ["Perobas", "Nutricionista", 0, 0, 0, 8, 0, 0],
    ["Perobas", "Professor de Educação Fisica", 0, 0, 0, 0, 0, 0],
    ["Perobas", "Professor de medicina", 0, 0, 0, 0, 0, 0],
    ["Perobas", "Pscologo Clinico", 0, 0, 0, 6, 0, 0],
    ["Perobas", "Tecnico de Enfermagem", 0, 0, 0, 577, 0, 0],
    ["Perobas", "Terapeuta Ocupacional", 0, 0, 0, 18, 0, 0],
    ["Santa Cruz", "Assistente Social", 0, 0, 0, 1, 0, 0],
    ["Santa Cruz", "Auxiliar de enfermagem", 0, 0, 0, 0, 0, 0],
    ["Santa Cruz", "Cirurgião Dentista", 0, 0, 0, 0, 0, 0],
    ["Santa Cruz", "Enfermeiro", 0, 0, 0, 908, 0, 0],
    ["Santa Cruz", "Fisioterapeuta", 0, 0, 0, 0, 0, 0],
    ["Santa Cruz", "Fisioterapeuta/Emulti", 0, 0, 0, 0, 0, 0],
    ["Santa Cruz", "Fonoaudiologo", 0, 0, 0, 2, 0, 0],
    ["Santa Cruz", "Médico Clinico", 0, 0, 0, 0, 0, 0],
    ["Santa Cruz", "Médico Estrategia da Familia", 0, 0, 0, 2972, 0, 0],
    ["Santa Cruz", "Médico Ginecologista Obstetra", 0, 0, 0, 45, 0, 0],
    ["Santa Cruz", "Médico Pediatra", 0, 0, 0, 89, 0, 0],
    ["Santa Cruz", "Médico Psiquiatra", 0, 0, 0, 0, 0, 0],
    ["Santa Cruz", "Médico Residente", 0, 0, 0, 0, 0, 0],
    ["Santa Cruz", "Nutricionista", 0, 0, 0, 8, 0, 0],
    ["Santa Cruz", "Professor de Educação Fisica", 0, 0, 0, 0, 0, 0],
    ["Santa Cruz", "Professor de medicina", 0, 0, 0, 0, 0, 0],
    ["Santa Cruz", "Pscologo Clinico", 0, 0, 0, 5, 0, 0],
    ["Santa Cruz", "Tecnico de Enfermagem", 0, 0, 0, 6078, 0, 0],
    ["Santa Cruz", "Terapeuta Ocupacional", 0, 0, 0, 0, 0, 0],
    ["Unidade Xv", "Assistente Social", 0, 0, 0, 1, 0, 0],
    ["Unidade Xv", "Auxiliar de enfermagem", 0, 0, 0, 2484, 0, 0],
    ["Unidade Xv", "Cirurgião Dentista", 0, 0, 0, 1805, 0, 0],
    ["Unidade Xv", "Enfermeiro", 0, 0, 0, 6987, 0, 0],
    ["Unidade Xv", "Fisioterapeuta", 0, 0, 0, 0, 0, 0],
    ["Unidade Xv", "Fisioterapeuta/Emulti", 0, 0, 0, 0, 0, 0],
    ["Unidade Xv", "Fonoaudiologo", 0, 0, 0, 11, 0, 0],
    ["Unidade Xv", "Médico Clinico", 0, 0, 0, 556, 0, 0],
    ["Unidade Xv", "Médico Estrategia da Familia", 0, 0, 0, 6336, 0, 0],
    ["Unidade Xv", "Médico Ginecologista Obstetra", 0, 0, 0, 10, 0, 0],
    ["Unidade Xv", "Médico Pediatra", 0, 0, 0, 126, 0, 0],
    ["Unidade Xv", "Médico Psiquiatra", 0, 0, 0, 34, 0, 0],
    ["Unidade Xv", "Médico Residente", 0, 0, 0, 0, 0, 0],
    ["Unidade Xv", "Nutricionista", 0, 0, 0, 6, 0, 0],
    ["Unidade Xv", "Professor de Educação Fisica", 0, 0, 0, 0, 0, 0],
    ["Unidade Xv", "Professor de medicina", 0, 0, 0, 0, 0, 0],
    ["Unidade Xv", "Pscologo Clinico", 0, 0, 0, 27, 0, 0],
    ["Unidade Xv", "Tecnico de Enfermagem", 0, 0, 0, 7629, 0, 0],
    ["Unidade Xv", "Terapeuta Ocupacional", 0, 0, 0, 3, 0, 0]
];

const meses = ["Janeiro 2025", "Fevereiro 2025", "Março 2025", "Abril 2025", "Maio 2025", "Junho 2025"];
const unidades = [...new Set(rawData.map(item => item[0]))];
const cbos = [...new Set(rawData.map(item => item[1]))];

// Inicializar filtros
function initializeFilters() {
    const monthSelect = document.getElementById('month-select');
    const unitSelect = document.getElementById('unit-select');
    const cboSelect = document.getElementById('cbo-select');

    // Limpar opções existentes (exceto a primeira)
    monthSelect.innerHTML = '<option value="all">Todos os meses</option>';
    unitSelect.innerHTML = '<option value="all">Todas as unidades</option>';
    cboSelect.innerHTML = '<option value="all">Todos os CBOs</option>';

    // Adicionar meses
    meses.forEach((mes, index) => {
        const option = document.createElement('option');
        option.value = `2025-${String(index + 1).padStart(2, '0')}`;
        option.textContent = mes;
        monthSelect.appendChild(option);
    });

    // Adicionar unidades
    unidades.forEach(unidade => {
        const option = document.createElement('option');
        option.value = unidade;
        option.textContent = unidade;
        unitSelect.appendChild(option);
    });

    // Adicionar CBOs
    cbos.forEach(cbo => {
        const option = document.createElement('option');
        option.value = cbo;
        option.textContent = cbo;
        cboSelect.appendChild(option);
    });
}

// Filtrar dados
function filterData() {
    const monthFilter = document.getElementById('month-select').value;
    const unitFilter = document.getElementById('unit-select').value;
    const cboFilter = document.getElementById('cbo-select').value;

    return rawData.filter(item => {
        const matchUnit = unitFilter === 'all' || item[0] === unitFilter;
        const matchCbo = cboFilter === 'all' || item[1] === cboFilter;
        return matchUnit && matchCbo;
    });
}

// Criar gráfico de barras com barras maiores
function createBarChart() {
    const ctx = document.getElementById('unitChart').getContext('2d');
    const filteredData = filterData();
    
    // Destruir gráfico existente se houver
    if (window.unitChart instanceof Chart) {
        window.unitChart.destroy();
    }

    // Agrupar dados por unidade
    const unitData = {};
    unidades.forEach(unidade => {
        unitData[unidade] = 0;
    });

    const monthFilter = document.getElementById('month-select').value;
    
    if (monthFilter !== 'all') {
        const monthIndex = meses.findIndex(mes => monthFilter === `2025-${String(meses.indexOf(mes) + 1).padStart(2, '0')}`);
        if (monthIndex !== -1) {
            filteredData.forEach(item => {
                unitData[item[0]] += item[monthIndex + 2] || 0;
            });
        }
    } else {
        filteredData.forEach(item => {
            let total = 0;
            for (let i = 2; i < 8; i++) {
                total += item[i] || 0;
            }
            unitData[item[0]] += total;
        });
    }

    const labels = Object.keys(unitData);
    const data = Object.values(unitData);

    window.unitChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Atendimentos',
                data: data,
                backgroundColor: 'rgba(30, 64, 175, 0.8)', // Azul mais escuro
                borderColor: 'rgba(30, 64, 175, 1)',
                borderWidth: 2,
                borderRadius: 4, // Bordas arredondadas
                borderSkipped: false,
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            layout: {
                padding: {
                    top: 20,
                    bottom: 20,
                    left: 20,
                    right: 20
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(0, 0, 0, 0.1)',
                        lineWidth: 1
                    },
                    ticks: {
                        callback: function(value) {
                            return value.toLocaleString();
                        },
                        font: {
                            size: 12
                        },
                        color: '#374151'
                    }
                },
                x: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        maxRotation: 45,
                        minRotation: 45,
                        font: {
                            size: 11
                        },
                        color: '#374151'
                    },
                    // Aumentar o espaçamento entre as barras
                    categoryPercentage: 0.9, // Aumentado de 0.8 para 0.9
                    barPercentage: 0.8 // Aumentado de 0.6 para 0.8
                }
            },
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                    labels: {
                        font: {
                            size: 14,
                            weight: 'bold'
                        },
                        color: '#1e40af'
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    titleColor: 'white',
                    bodyColor: 'white',
                    borderColor: '#1e40af',
                    borderWidth: 1,
                    callbacks: {
                        label: function(context) {
                            return `${context.dataset.label}: ${context.parsed.y.toLocaleString()}`;
                        }
                    }
                }
            }
        }
    });
}

// Plugin personalizado para legenda dentro do gráfico de rosca
const doughnutLegendPlugin = {
    id: 'doughnutLegend',
    beforeDraw: function(chart) {
        if (chart.config.type === 'doughnut') {
            const ctx = chart.ctx;
            const chartArea = chart.chartArea;
            const centerX = (chartArea.left + chartArea.right) / 2;
            const centerY = (chartArea.top + chartArea.bottom) / 2;
            
            // Desenhar texto central
            ctx.save();
            ctx.font = 'bold 16px Arial';
            ctx.fillStyle = '#333';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText('Total Geral', centerX, centerY - 10);
            
            ctx.font = 'bold 20px Arial';
            ctx.fillStyle = '#1e40af';
            const total = chart.data.datasets[0].data.reduce((a, b) => a + b, 0);
            ctx.fillText(total.toLocaleString(), centerX, centerY + 10);
            
            // Desenhar legendas dentro do gráfico
            const data = chart.data;
            const meta = chart.getDatasetMeta(0);
            
            data.labels.forEach((label, index) => {
                const arc = meta.data[index];
                const value = data.datasets[0].data[index];
                const percentage = total > 0 ? ((value / total) * 100).toFixed(1) : 0;
                
                // Calcular posição da legenda
                const angle = arc.startAngle + (arc.endAngle - arc.startAngle) / 2;
                const radius = (arc.innerRadius + arc.outerRadius) / 2;
                const x = centerX + Math.cos(angle) * radius;
                const y = centerY + Math.sin(angle) * radius;
                
                // Configurar texto
                ctx.font = 'bold 12px Arial';
                ctx.fillStyle = 'white';
                ctx.strokeStyle = 'rgba(0, 0, 0, 0.8)';
                ctx.lineWidth = 3;
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                
                // Desenhar texto com contorno
                const text = `${label}\n${percentage}%`;
                const lines = text.split('\n');
                
                lines.forEach((line, lineIndex) => {
                    const lineY = y + (lineIndex - (lines.length - 1) / 2) * 14;
                    ctx.strokeText(line, x, lineY);
                    ctx.fillText(line, x, lineY);
                });
            });
            
            ctx.restore();
        }
    }
};

// Criar gráfico de rosca com legenda interna
function createDoughnutChart() {
    const ctx = document.getElementById('monthChart').getContext('2d');
    const filteredData = filterData();
    
    // Destruir gráfico existente se houver
    if (window.monthChart instanceof Chart) {
        window.monthChart.destroy();
    }

    // Dados por mês (simulados - você deve ajustar conforme seus dados reais)
    const monthData = {
        'Janeiro': 25700,
        'Fevereiro': 25254,
        'Março': 23638,
        'Abril': 24378,
        'Maio': 30579,
        'Junho': 25318
    };

    const labels = Object.keys(monthData);
    const data = Object.values(monthData);
    const total = data.reduce((a, b) => a + b, 0);

    // Atualizar total na página
    document.getElementById('total-atendimentos').textContent = total.toLocaleString();

    const colors = [
        '#3B82F6', // Azul
        '#EF4444', // Vermelho
        '#10B981', // Verde
        '#F59E0B', // Amarelo
        '#8B5CF6', // Roxo
        '#EC4899'  // Rosa
    ];

    window.monthChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: labels,
            datasets: [{
                data: data,
                backgroundColor: colors,
                borderColor: '#fff',
                borderWidth: 3,
                hoverBorderWidth: 4,
                hoverOffset: 10
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '60%', // Aumentar o buraco central
            layout: {
                padding: 20
            },
            plugins: {
                legend: {
                    display: false // Desabilitar legenda padrão
                },
                tooltip: {
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    titleColor: 'white',
                    bodyColor: 'white',
                    borderColor: '#1e40af',
                    borderWidth: 1,
                    callbacks: {
                        label: function(context) {
                            const value = context.parsed;
                            const percentage = total > 0 ? ((value / total) * 100).toFixed(1) : 0;
                            return `${context.label}: ${value.toLocaleString()} (${percentage}%)`;
                        }
                    }
                }
            },
            animation: {
                animateRotate: true,
                animateScale: true,
                duration: 1000
            }
        },
        plugins: [doughnutLegendPlugin]
    });
}

// Criar tabela
function createTable() {
    const filteredData = filterData();
    const monthFilter = document.getElementById('month-select').value;
    
    let tableData = {};

    // Organizar dados por CBO
    cbos.forEach(cbo => {
        tableData[cbo] = {};
        unidades.forEach(unidade => {
            tableData[cbo][unidade] = 0;
        });
    });

    if (monthFilter !== 'all') {
        const monthIndex = meses.findIndex(mes => monthFilter === `2025-${String(meses.indexOf(mes) + 1).padStart(2, '0')}`);
        if (monthIndex !== -1) {
            filteredData.forEach(item => {
                if (tableData[item[1]]) {
                    tableData[item[1]][item[0]] = item[monthIndex + 2] || 0;
                }
            });
        }
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

    // Criar corpo da tabela
    const tbody = document.getElementById('data-table-body');
    tbody.innerHTML = '';

    Object.keys(tableData).forEach(cbo => {
        const tr = document.createElement('tr');
        tr.className = 'hover:bg-gray-50';

        // CBO
        const tdCbo = document.createElement('td');
        tdCbo.className = 'px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900';
        tdCbo.textContent = cbo;
        tr.appendChild(tdCbo);

        let rowTotal = 0;

        // Dados por unidade
        unidades.forEach(unidade => {
            const td = document.createElement('td');
            td.className = 'px-4 py-2 whitespace-nowrap text-sm text-gray-500';
            const value = tableData[cbo][unidade] || 0;
            td.textContent = value.toLocaleString();
            rowTotal += value;
            tr.appendChild(td);
        });

        // Total da linha
        const tdTotal = document.createElement('td');
        tdTotal.className = 'px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900';
        tdTotal.textContent = rowTotal.toLocaleString();
        tr.appendChild(tdTotal);

        tbody.appendChild(tr);
    });
}

// Atualizar visualizações
function updateVisualization() {
    createBarChart();
    createDoughnutChart();
    createTable();
}

// Event listeners para filtros
document.getElementById('month-select').addEventListener('change', updateVisualization);
document.getElementById('unit-select').addEventListener('change', updateVisualization);
document.getElementById('cbo-select').addEventListener('change', updateVisualization);

// Inicializar aplicação
document.addEventListener('DOMContentLoaded', function() {
    initializeFilters();
    updateVisualization();
});
