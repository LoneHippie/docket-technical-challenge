export interface Type {
  type: {
    name: string;
    id: number;
  };
}

interface Color {
  name: string;
}

interface Specs {
  color: {
    name: string;
  };
  genId: number;
}

export type Pokemon = {
  height: number;
  color: Color;
  id: number;
  name: string;
  types: Type[];
  weight: number;
  sprite: string | null;
  specs: Specs;
};
