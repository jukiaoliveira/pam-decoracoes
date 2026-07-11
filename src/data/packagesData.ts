export interface Package {
  id: string;
  title: string;
  description: string;
  price: string;
  features: string[];
  isPopular?: boolean;
}

export const packagesData: Package[] = [
  {
    id: "bronze",
    title: "Bronze",
    description: "Ideal para celebrações intimistas, garantindo um cenário charmoso e completo.",
    price: "R$ 250,00",
    features: [
      "1 painel redondo com tecido",
      "Jogo de cilindros com capa",
      "4 bandejas",
      "1 boleira",
      "1 vaso com buxinho ou arranjo floral",
      "Escada de lembrancinha",
      "Tapete"
    ],
    isPopular: false
  },
  {
    id: "ouro",
    title: "Ouro",
    description: "A experiência máxima em cenografia. Estrutura robusta, iluminação e balões especiais.",
    price: "R$ 650,00",
    features: [
      "3 painéis (Romano e redondo à escolha)",
      "Kit cilindros com tecidos",
      "Kit cômoda fake ou kit mesa",
      "12 bandejas e boleiras",
      "Display ou pelúcias do tema (sob consulta)",
      "Número de led",
      "Bolo fake",
      "2 vasos com arranjos ou buxinho",
      "Escadinha para lembrancinha",
      "Tapete",
      "Arco de balões com até 3 cores e mega balões (até 2 de cada cor)"
    ],
    isPopular: true
  },
  {
    id: "prata",
    title: "Prata",
    description: "A harmonia perfeita para quem busca mais preenchimento, balões e detalhes encantadores.",
    price: "R$ 450,00",
    features: [
      "1 painel redondo com tecido",
      "1 painel romano com tecido",
      "Kit cilindros com capa",
      "Cômoda fake central",
      "6 bandejas",
      "1 boleira",
      "Escada de lembrancinha",
      "2 vasos com arranjos ou buxinhos",
      "Display do tema",
      "Tapete",
      "Arco de balões simples com até 2 cores"
    ],
    isPopular: false
  }
];