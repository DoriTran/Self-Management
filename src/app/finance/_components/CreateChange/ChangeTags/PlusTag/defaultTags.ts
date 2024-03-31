export interface Tag {
  color: string;
  description: string;
  subTags?: string[];
}

export const defaultTags: { [key: string]: Tag } = {
  food: {
    color: "yellow",
    description: "Food and Drink",
    subTags: ["snack"],
  },
  game: {
    color: "red",
    description: "Game payments",
    subTags: ["laptop", "mobile"],
  },
  supply: {
    color: "purple",
    description: "Necessity",
  },
  travel: {
    color: "peach",
    description: "Gasoline and travel payments",
    subTags: ["gasoline", "travel"],
  },
  entertain: {
    color: "mint",
    description: "Movies, concerts ...",
    subTags: ["gasoline", "travel"],
  },
  self: {
    color: "pink",
    description: "Self payments",
    subTags: ["clothing", "toy"],
  },
  health: {
    color: "green",
    description: "Health payments and medication",
    subTags: ["health payment", "medication"],
  },
  rent: {
    color: "brown",
    description: "Rental payments",
  },
  energy: {
    color: "orange",
    description: "Electricity and Water",
    subTags: ["electricity", "water"],
  },
  learn: {
    color: "maroon",
    description: "Learning costs",
  },
  income: {
    color: "blue",
    description: "Salary and other income",
    subTags: ["salary", "income"],
  },
  invest: {
    color: "grey",
    description: "Investments",
  },
  other: {
    color: "black",
    description: "",
  },
};
