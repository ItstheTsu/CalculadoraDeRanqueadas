function calcularNivel(vitorias, derrotas) {
  // Calcula saldo de partidas (vitórias - derrotas)
  const saldoVitorias = vitorias - derrotas;

  // Determina o nível baseado nas vitórias
  let nivel = '';

  if (vitorias < 10) {
    nivel = 'Ferro';
  } else if (vitorias >= 10 && vitorias <= 20) {
    nivel = 'Bronze';
  } else if (vitorias >= 21 && vitorias <= 50) {
    nivel = 'Prata';
  } else if (vitorias >= 51 && vitorias <= 80) {
    nivel = 'Ouro';
  } else if (vitorias >= 81 && vitorias <= 90) {
    nivel = 'Diamante';
  } else if (vitorias >= 91 && vitorias <= 100) {
    nivel = 'Lendário';
  } else if (vitorias >= 101) {
    nivel = 'Imortal';
  }

  // Mensagem final
  return `O Herói tem de saldo de **${saldoVitorias}** está no nível de **${nivel}**`;
}

// Exemplos de uso:
console.log(calcularNivel(5, 3));    // Ferro
console.log(calcularNivel(15, 5));   // Bronze
console.log(calcularNivel(40, 10));  // Prata
console.log(calcularNivel(60, 20));  // Ouro
console.log(calcularNivel(85, 10));  // Diamante
console.log(calcularNivel(95, 5));   // Lendário
console.log(calcularNivel(110, 10)); // Imortal
