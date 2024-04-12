import { Service } from "../../core";
import { clientInit, ServiceObject, MethodObject } from "../../core/types";
import { adresseRequest, adresseResponse, adresse } from "./types";

export class DAR extends Service {
  static Register = "DAR";
  private defaultApiVersion = "2.0.0";

  constructor(config: clientInit = {}) {
    super(config, "DAR", "rest");
  }

  async adresseV2(params: adresseRequest): Promise<adresseResponse[]> {
    const methodInfo = DAR.Methods.adresse;
    console.log("methodInfo", methodInfo);
    if (!methodInfo) {
      throw new Error("Method information for 'adresse' is undefined.");
    }

    return this.Request<adresseResponse[]>(methodInfo, params);
  }

  /**
   * @depreciated
   * Get an DAR address object
   * @param {string} [Id] - the dar id for the address
   * @return {array} Returns array of addresses
   */
  async getAdresse(params: adresseRequest): Promise<adresseResponse[]> {
    const methodInfo = DAR.Methods.adresse;
    if (!methodInfo) {
      throw new Error("Method information for 'adresse' is undefined.");
    }
    return await this.Request<adresseResponse[]>(methodInfo, params);
  }

  async adresse(params: adresseRequest): Promise<adresseResponse[]> {
    const methodInfo = DAR.Methods.adresse;
    if (!methodInfo) {
      throw new Error("Method information for 'adresse' is undefined.");
    }
    return await this.Request<adresseResponse[]>(methodInfo, params);
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
    } as const;
  }
}

/**  Experimenting - not in use */
// interface DarServiceObject extends ServiceObject {
//   DAR: "DAR";
//   DAR_BFE_Public: "DAR_BFE_Public";
// }

// interface DarMethodObject extends MethodObject {
//   adresse: { zone: "public"; service: ""; method: "" };
// }

// import Buffer from "buffer"
