// Dados dos atendimentos
const dados = [
    ["Agua Branca", "Assistente Social", 0, 0, 0, 0, 0, 0, 0, 3],
    ["Agua Branca", "Auxiliar de enfermagem", 0, 0, 0, 1, 0, 0, 0, 0],
    ["Agua Branca", "Auxiliar em Saude Bucal", 0, 0, 0, 0, 0, 0, 0, 0],
    ["Agua Branca", "CirurgiÃ£o Dentista", 153, 172, 173, 147, 174, 194, 274, 207],
    ["Agua Branca", "Enfermeiro", 545, 714, 281, 457, 828, 593, 498, 593],
    ["Agua Branca", "Fisioterapeuta", 0, 0, 0, 0, 0, 0, 0, 14],
    ["Agua Branca", "Fonoaudiologo", 0, 0, 0, 0, 0, 18, 10, 11],
    ["Agua Branca", "MÃ©dico Clinico", 0, 0, 0, 0, 0, 0, 0, 0],
    ["Agua Branca", "MÃ©dico Estrategia da Familia", 832, 604, 825, 783, 1027, 895, 817, 940],
    ["Agua Branca", "MÃ©dico Ginecologista Obstetra", 0, 0, 1, 0, 1, 10, 43, 39],
    ["Agua Branca", "MÃ©dico Pediatra", 0, 0, 0, 0, 0, 8, 40, 0],
    ["Agua Branca", "MÃ©dico Psiquiatra", 51, 55, 37, 45, 0, 44, 43, 38],
    ["Agua Branca", "MÃ©dico Residente", 223, 284, 149, 121, 150, 109, 38, 58],
    ["Agua Branca", "Nutricionista", 0, 0, 0, 0, 0, 9, 9, 17],
    ["Agua Branca", "Professor de EducaÃ§Ã£o Fisica", 0, 0, 0, 0, 0, 0, 0, 72],
    ["Agua Branca", "Professor de medicina", 0, 0, 0, 0, 0, 0, 0, 0],
    ["Agua Branca", "Pscologo Clinico", 0, 0, 0, 0, 0, 5, 39, 39],
    ["Agua Branca", "Tecnico de Enfermagem", 1613, 987, 1589, 1073, 1137, 1218, 1161, 1319],
    ["Agua Branca", "Terapeuta Ocupacional", 0, 0, 0, 0, 0, 7, 15, 11],
    ["Bela Vista", "Assistente Social", 0, 0, 0, 0, 0, 6, 13, 6],
    ["Bela Vista", "Auxiliar de enfermagem", 0, 0, 0, 0, 0, 0, 0, 0],
    ["Bela Vista", "Auxiliar em Saude Bucal", 0, 0, 0, 0, 0, 0, 0, 0],
    ["Bela Vista", "CirurgiÃ£o Dentista", 0, 0, 0, 0, 0, 0, 0, 0],
    ["Bela Vista", "Enfermeiro", 97, 182, 45, 103, 199, 179, 89, 183],
    ["Bela Vista", "Fisioterapeuta", 0, 0, 0, 0, 0, 0, 0, 5],
    ["Bela Vista", "Fonoaudiologo", 0, 0, 0, 0, 0, 3, 0, 0],
    ["Bela Vista", "MÃ©dico Clinico", 0, 0, 0, 0, 0, 0, 0, 0],
    ["Bela Vista", "MÃ©dico Estrategia da Familia", 165, 303, 243, 282, 321, 293, 314, 310],
    ["Bela Vista", "MÃ©dico Ginecologista Obstetra", 10, 27, 33, 7, 23, 31, 12, 30],
    ["Bela Vista", "MÃ©dico Pediatra", 0, 0, 0, 0, 0, 0, 0, 20],
    ["Bela Vista", "MÃ©dico Psiquiatra", 0, 0, 0, 0, 0, 0, 0, 0],
    ["Bela Vista", "MÃ©dico Residente", 0, 0, 0, 0, 0, 0, 0, 0],
    ["Bela Vista", "Nutricionista", 0, 0, 0, 0, 0, 9, 5, 12],
    ["Bela Vista", "Professor de EducaÃ§Ã£o Fisica", 0, 0, 0, 0, 0, 0, 0, 0],
    ["Bela Vista", "Professor de medicina", 0, 0, 0, 0, 0, 0, 0, 0],
    ["Bela Vista", "Pscologo Clinico", 0, 0, 0, 0, 0, 6, 19, 18],
    ["Bela Vista", "Tecnico de Enfermagem", 258, 258, 226, 319, 446, 356, 504, 259],
    ["Bela Vista", "Terapeuta Ocupacional", 0, 0, 0, 0, 0, 0, 0, 0],
    ["Csu Eldorado", "Assistente Social", 0, 0, 0, 0, 0, 0, 0, 22],
    ["Csu Eldorado", "Auxiliar de enfermagem", 0, 0, 0, 0, 1, 6, 0, 1],
    ["Csu Eldorado", "Auxiliar em Saude Bucal", 0, 0, 0, 0, 0, 0, 0, 0],
    ["Csu Eldorado", "CirurgiÃ£o Dentista", 166, 158, 85, 101, 76, 137, 99, 52],
    ["Csu Eldorado", "Enfermeiro", 740, 541, 680, 950, 1272, 1349, 1354, 1328],
    ["Csu Eldorado", "Fisioterapeuta", 0, 1, 0, 1, 0, 0, 59, 53],
    ["Csu Eldorado", "Fonoaudiologo", 0, 0, 0, 0, 0, 48, 25, 4],
    ["Csu Eldorado", "MÃ©dico Clinico", 171, 55, 166, 179, 217, 174, 103, 215],
    ["Csu Eldorado", "MÃ©dico Estrategia da Familia", 719, 875, 946, 1020, 1159, 968, 1141, 966],
    ["Csu Eldorado", "MÃ©dico Ginecologista Obstetra", 20, 93, 71, 75, 50, 63, 28, 53],
    ["Csu Eldorado", "MÃ©dico Pediatra", 54, 55, 48, 16, 23, 48, 48, 51],
    ["Csu Eldorado", "MÃ©dico Psiquiatra", 0, 1, 1, 0, 1, 17, 27, 49],
    ["Csu Eldorado", "MÃ©dico Residente", 0, 0, 0, 0, 0, 0, 0, 0],
    ["Csu Eldorado", "Nutricionista", 0, 0, 0, 0, 1, 6, 0, 3],
    ["Csu Eldorado", "Professor de EducaÃ§Ã£o Fisica", 0, 0, 0, 0, 0, 0, 0, 0],
    ["Csu Eldorado", "Professor de medicina", 0, 0, 0, 0, 0, 0, 0, 7],
    ["Csu Eldorado", "Pscologo Clinico", 0, 0, 0, 0, 0, 0, 0, 28],
    ["Csu Eldorado", "Tecnico de Enfermagem", 1235, 1389, 1014, 663, 805, 610, 889, 1030],
    ["Csu Eldorado", "Terapeuta Ocupacional", 0, 0, 0, 0, 0, 0, 0, 0],
    ["Jardim Bandeirantes", "Assistente Social", 0, 0, 0, 0, 0, 6, 20, 10],
    ["Jardim Bandeirantes", "Auxiliar de enfermagem", 703, 723, 601, 926, 1827, 535, 397, 368],
    ["Jardim Bandeirantes", "Auxiliar em Saude Bucal", 0, 0, 0, 0, 0, 0, 0, 0],
    ["Jardim Bandeirantes", "CirurgiÃ£o Dentista", 0, 0, 0, 0, 0, 0, 0, 0],
    ["Jardim Bandeirantes", "Enfermeiro", 631, 473, 287, 222, 543, 568, 534, 376],
    ["Jardim Bandeirantes", "Fisioterapeuta", 0, 0, 0, 0, 0, 0, 0, 17],
    ["Jardim Bandeirantes", "Fonoaudiologo", 0, 0, 0, 0, 0, 0, 0, 0],
    ["Jardim Bandeirantes", "MÃ©dico Clinico", 111, 192, 170, 162, 201, 181, 66, 149],
    ["Jardim Bandeirantes", "MÃ©dico Estrategia da Familia", 681, 709, 604, 614, 910, 774, 803, 831],
    ["Jardim Bandeirantes", "MÃ©dico Ginecologista Obstetra", 32, 38, 38, 29, 29, 29, 64, 39],
    ["Jardim Bandeirantes", "MÃ©dico Pediatra", 0, 0, 0, 0, 0, 30, 39, 9],
    ["Jardim Bandeirantes", "MÃ©dico Psiquiatra", 0, 0, 0, 0, 0, 28, 62, 80],
    ["Jardim Bandeirantes", "MÃ©dico Residente", 0, 0, 0, 0, 0, 0, 0, 0],
    ["Jardim Bandeirantes", "Nutricionista", 0, 0, 0, 0, 0, 16, 13, 30],
    ["Jardim Bandeirantes", "Professor de EducaÃ§Ã£o Fisica", 0, 0, 0, 0, 0, 0, 0, 0],
    ["Jardim Bandeirantes", "Professor de medicina", 0, 0, 0, 0, 0, 0, 0, 0],
    ["Jardim Bandeirantes", "Pscologo Clinico", 0, 0, 0, 0, 0, 19, 37, 46],
    ["Jardim Bandeirantes", "Tecnico de Enfermagem", 1633, 1418, 1413, 2128, 2525, 2170, 2034, 1514],
    ["Jardim Bandeirantes", "Terapeuta Ocupacional", 0, 0, 0, 0, 0, 0, 0, 0],
    ["Jardim Eldorado", "Assistente Social", 0, 0, 0, 0, 0, 3, 20, 18],
    ["Jardim Eldorado", "Auxiliar de enfermagem", 0, 36, 48, 50, 169, 32, 216, 36],
    ["Jardim Eldorado", "Auxiliar em Saude Bucal", 0, 0, 0, 0, 0, 0, 0, 0],
    ["Jardim Eldorado", "CirurgiÃ£o Dentista", 0, 146, 134, 140, 152, 135, 146, 168],
    ["Jardim Eldorado", "Enfermeiro", 231, 252, 256, 353, 341, 392, 252, 174],
    ["Jardim Eldorado", "Fisioterapeuta", 0, 0, 0, 0, 0, 0, 0, 6],
    ["Jardim Eldorado", "Fonoaudiologo", 0, 0, 0, 0, 0, 5, 10, 15],
    ["Jardim Eldorado", "MÃ©dico Clinico", 0, 0, 0, 0, 0, 0, 0, 0],
    ["Jardim Eldorado", "MÃ©dico Estrategia da Familia", 612, 482, 509, 338, 748, 578, 616, 527],
    ["Jardim Eldorado", "MÃ©dico Ginecologista Obstetra", 0, 0, 0, 0, 0, 20, 42, 41],
    ["Jardim Eldorado", "MÃ©dico Pediatra", 46, 40, 27, 30, 0, 19, 41, 0],
    ["Jardim Eldorado", "MÃ©dico Psiquiatra", 0, 0, 1, 0, 2, 9, 21, 34],
    ["Jardim Eldorado", "MÃ©dico Residente", 0, 0, 0, 0, 0, 0, 0, 0],
    ["Jardim Eldorado", "Nutricionista", 0, 0, 0, 0, 0, 1, 0, 0],
    ["Jardim Eldorado", "Professor de EducaÃ§Ã£o Fisica", 0, 0, 0, 0, 0, 0, 0, 0],
    ["Jardim Eldorado", "Professor de medicina", 0, 0, 0, 0, 0, 0, 0, 0],
    ["Jardim Eldorado", "Pscologo Clinico", 0, 0, 0, 0, 0, 0, 0, 0],
    ["Jardim Eldorado", "Tecnico de Enfermagem", 750, 665, 621, 851, 840, 795, 656, 739],
    ["Jardim Eldorado", "Terapeuta Ocupacional", 0, 0, 0, 0, 1, 6, 8, 11],
    ["Multi I", "Assistente Social", 10, 17, 21, 19, 10, 0, 0, 0],
    ["Multi I", "Fisioterapeuta/Emulti", 92, 2, 43, 36, 48, 0, 0, 0],
    ["Multi I", "Fonoaudiologo", 7, 50, 38, 51, 40, 0, 0, 0],
    ["Multi I", "MÃ©dico Ginecologista Obstetra", 20, 26, 30, 17, 26, 0, 0, 0],
    ["Multi I", "MÃ©dico Pediatra", 6, 32, 34, 32, 1, 0, 0, 0],
    ["Multi I", "MÃ©dico Psiquiatra", 0, 2, 2, 11, 0, 0, 0, 0],
    ["Multi I", "Nutricionista", 0, 0, 4, 11, 64, 0, 0, 0],
    ["Multi I", "Professor de EducaÃ§Ã£o Fisica", 130, 122, 110, 3, 0, 0, 0, 0],
    ["Multi I", "Pscologo Clinico", 100, 77, 51, 64, 102, 0, 0, 0],
    ["Multi I", "Terapeuta Ocupacional", 0, 39, 42, 25, 41, 0, 0, 0],
    ["Multi II", "Assistente Social", 6, 5, 5, 2, 1, 0, 0, 0],
    ["Multi II", "Auxiliar de enfermagem", 0, 0, 0, 0, 0, 1, 0, 0],
    ["Multi II", "Enfermeiro", 0, 0, 0, 0, 0, 14, 0, 0],
    ["Multi II", "Fisioterapeuta/Emulti", 48, 54, 49, 53, 36, 0, 0, 0],
    ["Multi II", "Fonoaudiologo", 41, 49, 41, 34, 42, 28, 0, 0],
    ["Multi II", "MÃ©dico Ginecologista Obstetra", 7, 23, 18, 23, 0, 0, 0, 0],
    ["Multi II", "MÃ©dico Pediatra", 0, 0, 0, 33, 65, 8, 0, 0],
    ["Multi II", "MÃ©dico Psiquiatra", 111, 109, 60, 90, 97, 81, 0, 0],
    ["Multi II", "Nutricionista", 45, 34, 13, 20, 10, 1, 0, 0],
    ["Multi II", "Pscologo Clinico", 44, 79, 54, 60, 70, 45, 0, 0],
    ["Multi III", "Assistente Social", 0, 0, 0, 0, 4, 12, 0, 0],
    ["Multi III", "Fonoaudiologo", 0, 0, 0, 2, 32, 22, 0, 0],
    ["Multi III", "MÃ©dico Ginecologista Obstetra", 84, 78, 56, 43, 97, 50, 0, 0],
    ["Multi III", "Nutricionista", 0, 4, 17, 30, 29, 22, 0, 0],
    ["Multi III", "Pscologo Clinico", 77, 133, 125, 132, 164, 65, 0, 0],
    ["Multi III", "Terapeuta Ocupacional", 0, 0, 0, 0, 43, 13, 0, 0],
    ["Multi IV", "Assistente Social", 17, 30, 0, 21, 16, 17, 0, 0],
    ["Multi IV", "Fisioterapeuta/Emulti", 14, 36, 29, 49, 38, 0, 0, 0],
    ["Multi IV", "Fonoaudiologo", 0, 0, 0, 0, 0, 18, 0, 0],
    ["Multi IV", "MÃ©dico Ginecologista Obstetra", 0, 0, 12, 0, 0, 0, 0, 0],
    ["Multi IV", "MÃ©dico Pediatra", 0, 2, 82, 83, 117, 13, 0, 0],
    ["Multi IV", "MÃ©dico Psiquiatra", 58, 105, 90, 54, 45, 20, 0, 0],
    ["Multi IV", "Nutricionista", 3, 0, 0, 27, 69, 1, 0, 0],
    ["Multi IV", "Pscologo Clinico", 71, 60, 61, 14, 72, 41, 0, 0],
    ["Multi IV", "Terapeuta Ocupacional", 49, 51, 3, 6, 0, 0, 0, 0],
    ["Novo Eldorado", "Assistente Social", 0, 0, 0, 0, 0, 0, 0, 9],
    ["Novo Eldorado", "Auxiliar de enfermagem", 175, 28, 54, 202, 0, 0, 0, 0],
    ["Novo Eldorado", "Auxiliar em Saude Bucal", 0, 0, 0, 0, 0, 0, 0, 0],
    ["Novo Eldorado", "CirurgiÃ£o Dentista", 141, 128, 21, 118, 71, 34, 112, 73],
    ["Novo Eldorado", "Enfermeiro", 95, 79, 98, 57, 302, 538, 325, 306],
    ["Novo Eldorado", "Fisioterapeuta", 0, 6, 16, 4, 1, 0, 28, 20],
    ["Novo Eldorado", "Fonoaudiologo", 0, 0, 0, 0, 0, 49, 24, 3],
    ["Novo Eldorado", "MÃ©dico Clinico", 163, 15, 107, 116, 138, 138, 135, 54],
    ["Novo Eldorado", "MÃ©dico Estrategia da Familia", 442, 472, 436, 501, 474, 501, 450, 461],
    ["Novo Eldorado", "MÃ©dico Ginecologista Obstetra", 0, 0, 0, 7, 21, 41, 10, 18],
    ["Novo Eldorado", "MÃ©dico Pediatra", 26, 31, 34, 24, 2, 19, 22, 16],
    ["Novo Eldorado", "MÃ©dico Psiquiatra", 0, 0, 0, 0, 0, 0, 0, 17],
    ["Novo Eldorado", "MÃ©dico Residente", 0, 0, 0, 0, 0, 0, 0, 0],
    ["Novo Eldorado", "Nutricionista", 0, 1, 0, 0, 0, 14, 0, 4],
    ["Novo Eldorado", "Professor de EducaÃ§Ã£o Fisica", 0, 0, 0, 0, 0, 0, 0, 0],
    ["Novo Eldorado", "Professor de medicina", 4, 5, 11, 28, 12, 0, 0, 0],
    ["Novo Eldorado", "Pscologo Clinico", 0, 0, 0, 0, 0, 81, 74, 53],
    ["Novo Eldorado", "Tecnico de Enfermagem", 1814, 1749, 1676, 1446, 1941, 1937, 1775, 1969],
    ["Novo Eldorado", "Terapeuta Ocupacional", 0, 0, 0, 0, 0, 3, 0, 0],
    ["Parque SÃ£o JoÃ£o", "Assistente Social", 0, 0, 0, 0, 0, 0, 0, 22],
    ["Parque SÃ£o JoÃ£o", "Auxiliar de enfermagem", 51, 194, 323, 139, 2, 233, 323, 372],
    ["Parque SÃ£o JoÃ£o", "Auxiliar em Saude Bucal", 0, 0, 0, 0, 0, 0, 0, 0],
    ["Parque SÃ£o JoÃ£o", "CirurgiÃ£o Dentista", 179, 225, 183, 208, 257, 262, 190, 249],
    ["Parque SÃ£o JoÃ£o", "Enfermeiro", 778, 584, 126, 474, 628, 761, 514, 533],
    ["Parque SÃ£o JoÃ£o", "Fisioterapeuta", 0, 0, 0, 0, 0, 8, 21, 17],
    ["Parque SÃ£o JoÃ£o", "Fonoaudiologo", 0, 0, 0, 0, 0, 19, 16, 18],
    ["Parque SÃ£o JoÃ£o", "MÃ©dico Clinico", 0, 1, 0, 2, 0, 0, 0, 0],
    ["Parque SÃ£o JoÃ£o", "MÃ©dico Estrategia da Familia", 689, 796, 766, 507, 408, 560, 580, 704],
    ["Parque SÃ£o JoÃ£o", "MÃ©dico Ginecologista Obstetra", 29, 61, 53, 40, 52, 59, 22, 58],
    ["Parque SÃ£o JoÃ£o", "MÃ©dico Pediatra", 33, 33, 45, 33, 0, 0, 25, 59],
    ["Parque SÃ£o JoÃ£o", "MÃ©dico Psiquiatra", 0, 0, 0, 0, 0, 5, 13, 16],
    ["Parque SÃ£o JoÃ£o", "MÃ©dico Residente", 0, 0, 0, 0, 0, 0, 0, 93],
    ["Parque SÃ£o JoÃ£o", "Nutricionista", 0, 0, 0, 0, 0, 5, 14, 11],
    ["Parque SÃ£o JoÃ£o", "Professor de EducaÃ§Ã£o Fisica", 0, 0, 0, 0, 1, 0, 76, 46],
    ["Parque SÃ£o JoÃ£o", "Professor de medicina", 10, 18, 17, 23, 0, 15, 0, 2],
    ["Parque SÃ£o JoÃ£o", "Pscologo Clinico", 0, 0, 0, 0, 0, 21, 27, 16],
    ["Parque SÃ£o JoÃ£o", "Tecnico de Enfermagem", 720, 698, 835, 720, 693, 484, 674, 569],
    ["Parque SÃ£o JoÃ£o", "Terapeuta Ocupacional", 0, 0, 0, 0, 4, 24, 20, 22],
    ["Perobas", "Assistente Social", 0, 0, 0, 0, 0, 0, 0, 11],
    ["Perobas", "Auxiliar de enfermagem", 138, 128, 303, 186, 313, 238, 275, 264],
    ["Perobas", "Auxiliar em Saude Bucal", 0, 0, 0, 0, 0, 0, 0, 0],
    ["Perobas", "CirurgiÃ£o Dentista", 0, 0, 0, 0, 0, 0, 0, 0],
    ["Perobas", "Enfermeiro", 234, 315, 22, 374, 565, 531, 367, 368],
    ["Perobas", "Fisioterapeuta", 0, 0, 0, 0, 0, 0, 0, 16],
    ["Perobas", "Fonoaudiologo", 0, 0, 0, 0, 0, 32, 20, 25],
    ["Perobas", "MÃ©dico Clinico", 0, 0, 0, 0, 0, 0, 0, 0],
    ["Perobas", "MÃ©dico Estrategia da Familia", 198, 320, 366, 329, 494, 368, 271, 478],
    ["Perobas", "MÃ©dico Ginecologista Obstetra", 18, 30, 27, 33, 35, 34, 16, 34],
    ["Perobas", "MÃ©dico Pediatra", 21, 24, 18, 28, 0, 0, 14, 24],
    ["Perobas", "MÃ©dico Psiquiatra", 0, 0, 0, 0, 0, 0, 0, 0],
    ["Perobas", "MÃ©dico Residente", 0, 0, 0, 0, 0, 0, 0, 0],
    ["Perobas", "Nutricionista", 0, 0, 0, 0, 0, 8, 8, 8],
    ["Perobas", "Professor de EducaÃ§Ã£o Fisica", 0, 0, 0, 0, 0, 0, 0, 43],
    ["Perobas", "Professor de medicina", 0, 0, 0, 0, 0, 0, 0, 0],
    ["Perobas", "Pscologo Clinico", 0, 0, 0, 0, 0, 6, 0, 0],
    ["Perobas", "Tecnico de Enfermagem", 142, 171, 231, 28, 5, 0, 12, 66],
    ["Perobas", "Terapeuta Ocupacional", 0, 0, 0, 0, 4, 14, 26, 20],
    ["Santa Cruz", "Assistente Social", 0, 0, 0, 0, 0, 1, 7, 8],
    ["Santa Cruz", "Auxiliar de enfermagem", 0, 0, 0, 0, 0, 0, 0, 0],
    ["Santa Cruz", "Auxiliar em Saude Bucal", 0, 0, 0, 0, 0, 0, 0, 0],
    ["Santa Cruz", "CirurgiÃ£o Dentista", 0, 0, 0, 0, 0, 0, 0, 0],
    ["Santa Cruz", "Enfermeiro", 198, 63, 103, 192, 168, 184, 125, 218],
    ["Santa Cruz", "Fisioterapeuta", 0, 0, 0, 0, 0, 0, 0, 5],
    ["Santa Cruz", "Fonoaudiologo", 0, 0, 0, 0, 0, 2, 0, 0],
    ["Santa Cruz", "MÃ©dico Clinico", 0, 0, 0, 0, 0, 0, 0, 0],
    ["Santa Cruz", "MÃ©dico Estrategia da Familia", 416, 590, 501, 496, 564, 405, 445, 431],
    ["Santa Cruz", "MÃ©dico Ginecologista Obstetra", 0, 0, 0, 0, 28, 17, 11, 25],
    ["Santa Cruz", "MÃ©dico Pediatra", 35, 33, 0, 0, 0, 21, 21, 27],
    ["Santa Cruz", "MÃ©dico Psiquiatra", 0, 0, 0, 0, 0, 0, 0, 23],
    ["Santa Cruz", "MÃ©dico Residente", 0, 0, 0, 0, 0, 0, 0, 0],
    ["Santa Cruz", "Nutricionista", 0, 0, 0, 0, 0, 8, 18, 6],
    ["Santa Cruz", "Professor de EducaÃ§Ã£o Fisica", 0, 0, 0, 0, 0, 0, 0, 0],
    ["Santa Cruz", "Professor de medicina", 0, 0, 0, 0, 0, 0, 0, 0],
    ["Santa Cruz", "Pscologo Clinico", 0, 0, 0, 0, 0, 5, 26, 15],
    ["Santa Cruz", "Tecnico de Enfermagem", 857, 1055, 926, 933, 1199, 1108, 1236, 972],
    ["Santa Cruz", "Terapeuta Ocupacional", 0, 0, 0, 0, 0, 0, 0, 0],
    ["Unidade Xv", "Assistente Social", 0, 0, 0, 0, 0, 1, 17, 18],
    ["Unidade Xv", "Auxiliar de enfermagem", 355, 421, 358, 474, 585, 291, 442, 450],
    ["Unidade Xv", "Auxiliar em Saude Bucal", 0, 0, 0, 0, 0, 0, 0, 52],
    ["Unidade Xv", "CirurgiÃ£o Dentista", 246, 327, 250, 272, 364, 346, 367, 317],
    ["Unidade Xv", "Enfermeiro", 1611, 1257, 860, 749, 1196, 1314, 1327, 1085],
    ["Unidade Xv", "Fisioterapeuta", 0, 0, 0, 0, 0, 0, 0, 24],
    ["Unidade Xv", "Fonoaudiologo", 0, 0, 0, 0, 0, 11, 37, 22],
    ["Unidade Xv", "MÃ©dico Clinico", 43, 46, 122, 103, 109, 133, 156, 157],
    ["Unidade Xv", "MÃ©dico Estrategia da Familia", 1201, 958, 914, 1018, 1206, 1039, 1157, 895],
    ["Unidade Xv", "MÃ©dico Ginecologista Obstetra", 0, 0, 0, 0, 0, 10, 42, 60],
    ["Unidade Xv", "MÃ©dico Pediatra", 30, 37, 35, 24, 0, 0, 7, 25],
    ["Unidade Xv", "MÃ©dico Psiquiatra", 2, 0, 0, 1, 0, 31, 72, 91],
    ["Unidade Xv", "MÃ©dico Residente", 0, 0, 0, 0, 0, 0, 0, 0],
    ["Unidade Xv", "Nutricionista", 0, 0, 0, 0, 0, 6, 0, 0],
    ["Unidade Xv", "Professor de EducaÃ§Ã£o Fisica", 0, 0, 0, 0, 0, 0, 0, 0],
    ["Unidade Xv", "Professor de medicina", 0, 0, 0, 0, 0, 0, 0, 0],
    ["Unidade Xv", "Pscologo Clinico", 0, 0, 0, 0, 0, 27, 54, 102],
    ["Unidade Xv", "Tecnico de Enfermagem", 1084, 1208, 1389, 1258, 1163, 1527, 1379, 1565],
    ["Unidade Xv", "Terapeuta Ocupacional", 0, 0, 0, 0, 0, 3, 15, 9]
];

const meses = ["jan./25", "fev./25", "mar./25", "abr./25", "mai./25", "jun./25", "jul./25", "ago./25"];
const mesesNomes = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto"];

// Função para ordenar unidades colocando Multi I, II, III, IV por último
function sortUnidades(unidades) {
    const multiUnits = unidades.filter(u => u.startsWith('Multi')).sort();
    const otherUnits = unidades.filter(u => !u.startsWith('Multi')).sort();
    return [...otherUnits, ...multiUnits];
}

const unidades = sortUnidades([...new Set(dados.map(item => item[0]))]);
const cbos = [...new Set(dados.map(item => item[1]))].sort();

let barChart, monthChart, doughnutChart, cboChart;
let selectedMeses = [];
let selectedUnidades = [];
let selectedCbos = [];

// Inicializar filtros
function initializeFilters() {
    // Filtro de Unidades
    const unidadeDropdown = document.getElementById('unidadeFilterDropdown');
    unidades.forEach(unidade => {
        const option = document.createElement('div');
        option.className = 'multiselect-option';
        option.innerHTML = `
            <input type="checkbox" id="unidade_${unidade.replace(/\s+/g, '_')}" value="${unidade}">
            <label for="unidade_${unidade.replace(/\s+/g, '_')}">${unidade}</label>
        `;
        unidadeDropdown.appendChild(option);
    });

    // Filtro de CBOs
    const cboDropdown = document.getElementById('cboFilterDropdown');
    cbos.forEach(cbo => {
        const option = document.createElement('div');
        option.className = 'multiselect-option';
        option.innerHTML = `
            <input type="checkbox" id="cbo_${cbo.replace(/\s+/g, '_')}" value="${cbo}">
            <label for="cbo_${cbo.replace(/\s+/g, '_')}">${cbo}</label>
        `;
        cboDropdown.appendChild(option);
    });

    // Event listeners para filtros
    document.addEventListener('change', function(e) {
        if (e.target.type === 'checkbox') {
            updateFilters();
        }
    });
}

// Função para alternar dropdown
function toggleDropdown(filterId) {
    const dropdown = document.getElementById(filterId + 'Dropdown');
    const display = document.querySelector(`#${filterId}Container .multiselect-display`);
    
    // Fechar outros dropdowns
    document.querySelectorAll('.multiselect-dropdown').forEach(d => {
        if (d !== dropdown) {
            d.classList.remove('show');
            d.parentElement.querySelector('.multiselect-display').classList.remove('active');
        }
    });
    
    dropdown.classList.toggle('show');
    display.classList.toggle('active');
}

// Fechar dropdowns ao clicar fora
document.addEventListener('click', function(e) {
    if (!e.target.closest('.custom-multiselect')) {
        document.querySelectorAll('.multiselect-dropdown').forEach(d => {
            d.classList.remove('show');
            d.parentElement.querySelector('.multiselect-display').classList.remove('active');
        });
    }
});

// Atualizar filtros
function updateFilters() {
    // Meses
    selectedMeses = Array.from(document.querySelectorAll('#mesFilterDropdown input:checked')).map(cb => cb.value);
    const mesDisplay = document.getElementById('mesFilterDisplay');
    mesDisplay.textContent = selectedMeses.length > 0 ? 
        selectedMeses.map(m => m.replace('./25', '')).join(', ') : 
        'Selecione os meses...';

    // Unidades
    selectedUnidades = Array.from(document.querySelectorAll('#unidadeFilterDropdown input:checked')).map(cb => cb.value);
    const unidadeDisplay = document.getElementById('unidadeFilterDisplay');
    unidadeDisplay.textContent = selectedUnidades.length > 0 ? 
        (selectedUnidades.length > 2 ? `${selectedUnidades.length} unidades selecionadas` : selectedUnidades.join(', ')) : 
        'Selecione as unidades...';

    // CBOs
    selectedCbos = Array.from(document.querySelectorAll('#cboFilterDropdown input:checked')).map(cb => cb.value);
    const cboDisplay = document.getElementById('cboFilterDisplay');
    cboDisplay.textContent = selectedCbos.length > 0 ? 
        (selectedCbos.length > 2 ? `${selectedCbos.length} CBOs selecionados` : selectedCbos.join(', ')) : 
        'Selecione os CBOs...';

    updateCharts();
    updateTable();
    updateTotalValue();
}

// Filtrar dados
function filterData() {
    return dados.filter(item => {
        const unidadeMatch = selectedUnidades.length === 0 || selectedUnidades.includes(item[0]);
        const cboMatch = selectedCbos.length === 0 || selectedCbos.includes(item[1]);
        return unidadeMatch && cboMatch;
    });
}

// Atualizar valor total
function updateTotalValue() {
    const filteredData = filterData();
    let total = 0;

    filteredData.forEach(item => {
        if (selectedMeses.length > 0) {
            selectedMeses.forEach(mes => {
                const mesIndex = meses.indexOf(mes) + 2;
                total += item[mesIndex] || 0;
            });
        } else {
            for (let i = 2; i < item.length; i++) {
                total += item[i] || 0;
            }
        }
    });

    document.getElementById('valorTotal').textContent = total.toLocaleString('pt-BR');
}

// Criar gráfico de barras por unidade
function createBarChart() {
    const ctx = document.getElementById('barChart').getContext('2d');
    
    if (barChart) {
        barChart.destroy();
    }

    const filteredData = filterData();
    let unidadeTotals = {};

    if (selectedMeses.length > 0) {
        selectedMeses.forEach(mes => {
            const mesIndex = meses.indexOf(mes) + 2;
            filteredData.forEach(item => {
                if (!unidadeTotals[item[0]]) {
                    unidadeTotals[item[0]] = 0;
                }
                unidadeTotals[item[0]] += item[mesIndex] || 0;
            });
        });
    } else {
        filteredData.forEach(item => {
            if (!unidadeTotals[item[0]]) {
                unidadeTotals[item[0]] = 0;
            }
            for (let i = 2; i < item.length; i++) {
                unidadeTotals[item[0]] += item[i] || 0;
            }
        });
    }

    const allUnidades = Object.keys(unidadeTotals);
    const labels = sortUnidades(allUnidades);
    const values = labels.map(label => unidadeTotals[label] || 0);

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
                            size: 14
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
                            size: 12
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
                    ctx.font = 'bold 12px Arial';
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

// Criar gráfico de barras por mês
function createMonthChart() {
    const ctx = document.getElementById('monthChart').getContext('2d');
    
    if (monthChart) {
        monthChart.destroy();
    }

    const filteredData = filterData();
    let monthTotals = {};

    // Inicializar totais dos meses
    meses.forEach(mes => {
        monthTotals[mes] = 0;
    });

    // Calcular totais por mês
    filteredData.forEach(item => {
        meses.forEach((mes, index) => {
            const mesIndex = index + 2;
            monthTotals[mes] += item[mesIndex] || 0;
        });
    });

    // Se há filtro de mês, mostrar apenas os meses selecionados
    let labels, values;
    if (selectedMeses.length > 0) {
        labels = selectedMeses.map(mes => mesesNomes[meses.indexOf(mes)]);
        values = selectedMeses.map(mes => monthTotals[mes]);
    } else {
        labels = mesesNomes;
        values = meses.map(mes => monthTotals[mes]);
    }

    monthChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                data: values,
                backgroundColor: '#ea580c', // Cor laranja
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
                            size: 14
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
                            size: 12
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
                    ctx.font = 'bold 12px Arial';
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

// Criar gráfico de rosca (sem tooltip de valor total)
function createDoughnutChart() {
    const ctx = document.getElementById('doughnutChart').getContext('2d');
    
    if (doughnutChart) {
        doughnutChart.destroy();
    }

    const filteredData = filterData();
    let monthTotals = {};

    meses.forEach(mes => {
        monthTotals[mes] = 0;
    });

    filteredData.forEach(item => {
        meses.forEach((mes, index) => {
            const mesIndex = index + 2;
            monthTotals[mes] += item[mesIndex] || 0;
        });
    });

    let labels, values;
    if (selectedMeses.length > 0) {
        labels = selectedMeses.map(mes => mesesNomes[meses.indexOf(mes)]);
        values = selectedMeses.map(mes => monthTotals[mes]);
    } else {
        labels = mesesNomes;
        values = meses.map(mes => monthTotals[mes]);
    }

    const total = values.reduce((a, b) => a + b, 0);

    doughnutChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: labels,
            datasets: [{
                data: values,
                backgroundColor: [
                    '#3b82f6', // Azul
                    '#ef4444', // Vermelho
                    '#8b5cf6', // Roxo
                    '#ea580c', // Laranja
                    '#10b981', // Verde
                    '#f59e0b'  // Amarelo
                ],
                borderWidth: 2,
                borderColor: '#ffffff',
                cutout: '50%'
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
                    enabled: false // Desabilita o tooltip
                }
            },
            animation: {
                onComplete: function() {
                    const chart = this;
                    const ctx = chart.ctx;
                    
                    // Texto central
                    ctx.save();
                    ctx.font = 'bold 16px Arial';
                    ctx.fillStyle = '#ffffff';
                    ctx.strokeStyle = '#000000';
                    ctx.lineWidth = 2;
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'middle';
                    
                    const centerX = chart.width / 2;
                    const centerY = chart.height / 2;
                    
                    ctx.strokeText('Total Geral', centerX, centerY - 10);
                    ctx.fillText('Total Geral', centerX, centerY - 10);
                    ctx.strokeText(total.toLocaleString('pt-BR'), centerX, centerY + 10);
                    ctx.fillText(total.toLocaleString('pt-BR'), centerX, centerY + 10);
                    
                    // Labels nos segmentos
                    chart.data.datasets[0].data.forEach((value, index) => {
                        if (value > 0) {
                            const meta = chart.getDatasetMeta(0);
                            const arc = meta.data[index];
                            const angle = (arc.startAngle + arc.endAngle) / 2;
                            const radius = (arc.innerRadius + arc.outerRadius) / 2;
                            
                            const x = centerX + Math.cos(angle) * radius;
                            const y = centerY + Math.sin(angle) * radius;
                            
                            const percentage = ((value / total) * 100).toFixed(1);
                            
                            ctx.font = 'bold 12px Arial';
                            ctx.fillStyle = '#ffffff';
                            ctx.strokeStyle = '#000000';
                            ctx.lineWidth = 1;
                            
                            ctx.strokeText(labels[index], x, y - 8);
                            ctx.fillText(labels[index], x, y - 8);
                            ctx.strokeText(`${percentage}%`, x, y + 8);
                            ctx.fillText(`${percentage}%`, x, y + 8);
                        }
                    });
                    
                    ctx.restore();
                }
            }
        }
    });
}

// Criar gráfico de barras horizontais por CBO
function createCboChart() {
    const ctx = document.getElementById('cboChart').getContext('2d');
    
    if (cboChart) {
        cboChart.destroy();
    }

    const filteredData = filterData();
    let cboTotals = {};

    // Calcular totais por CBO baseado nos filtros
    filteredData.forEach(item => {
        const cbo = item[1];
        if (!cboTotals[cbo]) {
            cboTotals[cbo] = 0;
        }
        
        if (selectedMeses.length > 0) {
            selectedMeses.forEach(mes => {
                const mesIndex = meses.indexOf(mes) + 2;
                cboTotals[cbo] += item[mesIndex] || 0;
            });
        } else {
            for (let i = 2; i < item.length; i++) {
                cboTotals[cbo] += item[i] || 0;
            }
        }
    });

    // Ordenar CBOs por valor total (maior para menor)
    const sortedCbos = Object.keys(cboTotals)
        .filter(cbo => cboTotals[cbo] > 0)
        .sort((a, b) => cboTotals[b] - cboTotals[a]);

    const values = sortedCbos.map(cbo => cboTotals[cbo]);

    cboChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: sortedCbos,
            datasets: [{
                label: 'Total de Atendimentos',
                data: values,
                backgroundColor: '#166534', // Verde escuro
                borderColor: '#166534',
                borderWidth: 1
            }]
        },
        options: {
            indexAxis: 'x', // Barras verticais
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    enabled: true
                }
            },
            layout: {
                padding: {
                    top: 10,
                    bottom: 80, // Aumentado para acomodar rótulos rotacionados
                    left: 10,
                    right: 10
                }
            },
            scales: {
                x: {
                    ticks: {
                        font: {
                            size: 12 // Aumentado para melhor legibilidade
                        },
                        maxRotation: 45, // Rotaciona os rótulos para evitar sobreposição
                        minRotation: 45,
                        autoSkip: false, // Desabilita o auto-skip para mostrar todos os rótulos
                        callback: function(value, index) {
                            const label = this.getLabelForValue(value);
                            return label.length > 15 ? label.substring(0, 15) + '...' : label; // Limita o tamanho do rótulo
                        }
                    },
                    grid: {
                        display: false
                    }
                },
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return value.toLocaleString("pt-BR");
                        }
                    },
                    grid: {
                        color: '#e5e7eb'
                    }
                }
            }
        }
    });
}

// Atualizar tabela
function updateTable() {
    const filteredData = filterData();
    
    const cboData = {};
    filteredData.forEach(item => {
        const cbo = item[1];
        const unidade = item[0];
        
        if (!cboData[cbo]) {
            cboData[cbo] = {};
        }
        
        if (!cboData[cbo][unidade]) {
            cboData[cbo][unidade] = 0;
        }
        
        if (selectedMeses.length > 0) {
            selectedMeses.forEach(mes => {
                const mesIndex = meses.indexOf(mes) + 2;
                cboData[cbo][unidade] += item[mesIndex] || 0;
            });
        } else {
            for (let i = 2; i < item.length; i++) {
                cboData[cbo][unidade] += item[i] || 0;
            }
        }
    });

    const table = document.getElementById('dataTable');
    const thead = table.querySelector('thead');
    const tbody = table.querySelector('tbody');
    
    thead.innerHTML = '';
    tbody.innerHTML = '';
    
    const unidadesUnicas = [...new Set(filteredData.map(item => item[0]))];
    const unidadesOrdenadas = sortUnidades(unidadesUnicas);
    
    const headerRow = document.createElement('tr');
    headerRow.innerHTML = `
        <th class="px-4 py-3 text-left text-xs font-medium text-black font-bold uppercase tracking-wider border-b border-gray-200">CBO</th>
        ${unidadesOrdenadas.map(unidade => 
            `<th class="px-4 py-3 text-center text-xs font-medium text-black font-bold uppercase tracking-wider border-b border-gray-200">${unidade}</th>`
        ).join('')}
        <th class="px-4 py-3 text-center text-xs font-medium text-black font-bold uppercase tracking-wider border-b border-gray-200 bg-gray-50 border-l border-gray-200">Total</th>
    `;
    thead.appendChild(headerRow);
    
    Object.keys(cboData).sort().forEach(cbo => {
        const row = document.createElement('tr');
        row.className = 'hover:bg-gray-50';
        
        let totalCbo = 0;
        const unidadeCells = unidadesOrdenadas.map(unidade => {
            const valor = cboData[cbo][unidade] || 0;
            totalCbo += valor;
            return `<td class="px-4 py-3 whitespace-nowrap text-sm text-black text-center">${valor}</td>`;
        }).join('');
        
        row.innerHTML = `
            <td class="px-4 py-3 whitespace-nowrap text-sm font-medium text-black border-r border-gray-200">${cbo}</td>
            ${unidadeCells}
            <td class="px-4 py-3 whitespace-nowrap text-sm font-bold text-black bg-gray-50 border-l border-gray-200">${totalCbo}</td>
        `;
        
        tbody.appendChild(row);
    });
}

// Atualizar gráficos
function updateCharts() {
    createBarChart();
    createMonthChart();
    createDoughnutChart();
    createCboChart();
}

// Limpar filtros
function clearFilters() {
    document.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = false);
    selectedMeses = [];
    selectedUnidades = [];
    selectedCbos = [];
    
    document.getElementById('mesFilterDisplay').textContent = 'Selecione os meses...';
    document.getElementById('unidadeFilterDisplay').textContent = 'Selecione as unidades...';
    document.getElementById('cboFilterDisplay').textContent = 'Selecione os CBOs...';
    
    updateCharts();
    updateTable();
    updateTotalValue();
}

// Exportar para Excel
function exportToExcel() {
    const filteredData = filterData();
    
    let csvContent = "data:text/csv;charset=utf-8,";
    csvContent += "Unidade,CBO,Janeiro,Fevereiro,Março,Abril,Maio,Junho,Julho,Agosto,Total\n";
    
    filteredData.forEach(item => {
        const total = item.slice(2, 8).reduce((a, b) => a + b, 0);
        const row = [item[0], item[1], ...item.slice(2, 8), total].join(',');
        csvContent += row + "\n";
    });
    
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    
    const filterText = [];
    if (selectedMeses.length > 0) filterText.push(`meses_${selectedMeses.join('_')}`);
    if (selectedUnidades.length > 0) filterText.push(`unidades_${selectedUnidades.length}`);
    if (selectedCbos.length > 0) filterText.push(`cbos_${selectedCbos.length}`);
    
    const fileName = filterText.length > 0 ? 
        `atendimentos_${filterText.join('_')}.csv` : 
        'atendimentos_todos.csv';
    
    link.setAttribute("download", fileName);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    initializeFilters();
    updateCharts();
    updateTable();
    updateTotalValue();
    
    document.getElementById('clearFiltersBtn').addEventListener('click', clearFilters);
    document.getElementById('exportExcelBtn').addEventListener('click', exportToExcel);
});
