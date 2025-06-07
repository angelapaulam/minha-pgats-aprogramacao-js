//  export {} / import

// importar { o que queremos } de 'caminho do arquivo'
import {
  BRINQUEDOS,
  exibirNomePet,
  exibirIdade,
} from "./modularizacao-export.js";

exibirNomePet(`Pipoca`);
exibirNomePet(`angela`);
exibirNomePet(BRINQUEDOS);
exibirIdade(`49`);
