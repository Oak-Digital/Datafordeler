export interface HusnummerTilBygningBfeSchema {
  bygningPaaFremmedGrundList: any[];
  jordstykkeList: JordstykkeList[];
}

export interface JordstykkeList {
  jordstykkeLokalId: string;
  samletFastEjendom: number;
}
