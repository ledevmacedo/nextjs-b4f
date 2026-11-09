export type Restaurant = {
  slug: string;
  name: string;
  cuisine: string;
  area: string;
};

export const restaurants: Restaurant[] = [
  {
    slug: "mesa-do-bairro",
    name: "Mesa do Bairro",
    cuisine: "Portuguesa",
    area: "Alvalade",
  },
  {
    slug: "ramen-da-praca",
    name: "Ramen da Praça",
    cuisine: "Japonesa",
    area: "Arroios",
  },
  {
    slug: "acai-do-ze",
    name: "Açai do Zé",
    cuisine: "Brasileira",
    area: "Gaia",
  },
];
