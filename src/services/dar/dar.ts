import { Service } from "../../core";
import { clientInit, ServiceObject, MethodObject } from "../../core/types";
import { AdresseTilEnhedBfeSchema } from "./types/AdresseTilEnhedBfe.schema";
import { adresseRequest } from "./models/adresse";
import { AdresseSchema } from "./types/Adresse.schema";
import { husnummerRequest } from "./models/husmmer";
import { HusnummerSchema } from "./types/Husnummer.schema";
import { HusnummerTilBygningBfeRequest } from "./models/husnummerTilBygningBfe";
import { HusnummerTilBygningBfeSchema } from "./types/HusnummerTilbygningBfe.schema";
import { adresseTileEnhedBfeRequest } from "./models/adresseTilEnhedBfe";

export class DAR extends Service {
  static Register = "DAR";
  private defaultApiVersion = "2.0.0";

  constructor(config: clientInit = {}) {
    super(config, "DAR", "rest");
  }

  async adresseV2(params: adresseRequest): Promise<AdresseSchema> {
    const methodInfo = DAR.Methods.adresse;
    // console.log("methodInfo", methodInfo);
    if (!methodInfo) {
      throw new Error("Method information for 'adresse' is undefined.");
    }

    return this.Request<AdresseSchema>(methodInfo, params);
  }

  async adresseTilEnhedBfe(
    params: adresseTileEnhedBfeRequest
  ): Promise<AdresseTilEnhedBfeSchema> {
    const methodInfo = DAR.Methods.adresseTilEnhedBfe;
    if (!methodInfo) {
      throw new Error("Method information for 'adresse' is undefined.");
    }
    return await this.Request<AdresseTilEnhedBfeSchema>(methodInfo, params);
  }

  async husnummerTilBygningBfe(
    params: HusnummerTilBygningBfeRequest
  ): Promise<HusnummerTilBygningBfeSchema> {
    const methodInfo = DAR.Methods.husnummerTilBygningBfe;
    if (!methodInfo) {
      throw new Error("Method information for 'adresse' is undefined.");
    }
    return await this.Request<HusnummerTilBygningBfeSchema>(
      methodInfo,
      params
    );
  }

  async husnummer(params: husnummerRequest): Promise<HusnummerSchema> {
    const methodInfo = DAR.Methods.husnummer;
    if (!methodInfo) {
      throw new Error("Method information for 'husnummer' is undefined.");
    }
    return await this.Request<HusnummerSchema>(methodInfo, params);
  }

  static get Services() {
    return {
      DAR_BFE_Public: {
        DAR: "DAR",
        service: "DAR_BFE_Public",
      },
      DAR: {
        DAR: "DAR",
        service: "DAR",
      },
    };
  }

  // https://services.datafordeler.dk/DAR/DAR/2.0.0/rest/adresse?id=1bd87b16-f0bf-472b-95e9-a357bd1aa2a6
  static get Methods(): Readonly<MethodObject> {
    return {
      adresse: {
        zone: "public",
        service: DAR.Services.DAR.service,
        method: "adresse",
        version: "2.0.0",
      },
      adresseTilEnhedBfe: {
        zone: "public_protected",
        service: DAR.Services.DAR_BFE_Public.service,
        method: "adresseTilEnhedBfe",
        version: "1",
      },
      husnummerTilBygningBfe: {
        zone: "public_protected",
        service: DAR.Services.DAR_BFE_Public.service,
        method: "husnummerTilBygningBfe",
        version: "1",
      },
      husnummer: {
        zone: "public",
        service: DAR.Services.DAR.service,
        method: "husnummer",
        version: "2.0.0",
      },
    } as const;
  }
}
