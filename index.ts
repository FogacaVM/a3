import * as fs from "fs";
import { interpretProgram } from "./interpreter";

function main() {
  const filePaths = ["programa_if.prg"]; // Lista de arquivos para processar
  for (const filePath of filePaths) {
    try {
      // Ler o conteúdo do arquivo .prg
      const input = fs.readFileSync(filePath, "utf8");

      // Passa o conteúdo para o interpretador executar
      console.log(`Executando: ${filePath}`);
      interpretProgram(input);
    } catch (error) {
      console.error(`Erro ao ler o arquivo ${filePath}:`);
      console.error(error);
    }
  }
}

main();
