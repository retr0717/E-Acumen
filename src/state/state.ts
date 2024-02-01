import { atom, selector } from "recoil";
import { Sort } from "../utils/Sort";

// action
const getActionList = async () => {
  try {
    const response = await fetch(import.meta.env.VITE_ACTION_URL);

    if (!response.ok) {
      throw new Error(`Failed to fetch data. Status: ${response.status}`);
    }

    const data = await response.json();
    return Sort(data.results) || [];
  } catch (error) {
    console.log("error occurred : ", error);
    return [];
  }
};

export const ActionSelector = selector({
  key: "action-selector",
  get: async () => {
    return await getActionList();
  },
  set: ({ set }, newData) => {
    set(ActionState, newData);
  },
});

export const ActionState = atom({
  key: "action",
  default: ActionSelector
});

//comedy
const getComedyList = async () => {
  try {
    const response = await fetch(import.meta.env.VITE_COMEDY_URL);

    if (!response.ok) {
      throw new Error(`Failed to fetch data. Status: ${response.status}`);
    }

    const data = await response.json();
    return Sort(data.results) || [];
  } catch (error) {
    console.log("error occurred : ", error);
    return [];
  }
};

export const ComedySelector = selector({
  key: "comedy-selector",
  get: async () => {
    return await getComedyList();
  },
  set: ({ set }, newData) => {
    set(ComedyState, newData);
  },
});

export const ComedyState = atom({
  key: "comedy",
  default: ComedySelector
});

//horror
const getHorrorList = async () => {
  try {
    const response = await fetch(import.meta.env.VITE_HORROR_URL);

    if (!response.ok) {
      throw new Error(`Failed to fetch data. Status: ${response.status}`);
    }

    const data = await response.json();
    return Sort(data.results) || [];
  } catch (error) {
    console.log("error occurred : ", error);
    return [];
  }
};

export const HorrorSelector = selector({
  key: "horror-selector",
  get: async () => {
    return await getHorrorList();
  },
  set: ({ set }, newData) => {
    set(HorrorState, newData);
  },
});

export const HorrorState = atom({
  key: "horror",
  default: ComedySelector
});

//documentary

const getDocList = async () => {
  try {
    const response = await fetch(import.meta.env.VITE_DOCUMENTARY_URL);

    if (!response.ok) {
      throw new Error(`Failed to fetch data. Status: ${response.status}`);
    }

    const data = await response.json();
    return Sort(data.results) || [];
  } catch (error) {
    console.log("error occurred : ", error);
    return [];
  }
};

export const DocSelector = selector({
  key: "doc-selector",
  get: async () => {
    return await getDocList();
  },
  set: ({ set }, newData) => {
    set(DocState, newData);
  },
});

export const DocState = atom({
  key: "documentary",
  default: ComedySelector
});

//romantic
const getRomList = async () => {
  try {
    const response = await fetch(import.meta.env.VITE_ROMANTIC_URL);

    if (!response.ok) {
      throw new Error(`Failed to fetch data. Status: ${response.status}`);
    }

    const data = await response.json();
    return Sort(data.results) || [];
  } catch (error) {
    console.log("error occurred : ", error);
    return [];
  }
};

export const RomSelector = selector({
  key: "rom-selector",
  get: async () => {
    return await getRomList();
  },
  set: ({ set }, newData) => {
    set(RomState, newData);
  },
});

export const RomState = atom({
  key: "romance",
  default: RomSelector
});