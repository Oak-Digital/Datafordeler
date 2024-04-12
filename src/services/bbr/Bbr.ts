import { Service } from "../../core";
import { clientInit, ServiceObject, MethodObject } from "../../core/types";
import {
  EnhedRequest,
  EnhedResponse,
  BygningRequest,
  BygningResponse,
  EjendomsrelationRequest,
  EjendomsrelationResponse,
  BbrsagRequest,
  BbrsagResponse,
  GrundResponse,
  GrundRequest,
} from "./models";

export class BBR extends Service {
  static Register = "BBR";

  constructor(config: clientInit = {}) {
    super(config, "BBR", "rest");
  }

  /**
   * Get an ejerSkabMedStamoplysninger object
   * @param {string} [Id] - the dar id for the address
   * @return {array} Returns array of addresses
   */

  async enhed(params: EnhedRequest): Promise<EnhedResponse> {
    const methodInfo = BBR.Methods.Enhed;
    if (!methodInfo) {
      throw new Error("Method information for 'Enhed' is undefined.");
    }

    return await this.Request<EnhedResponse>(methodInfo, params);
  }

  async bygning(params: BygningRequest): Promise<BygningResponse> {
    const methodInfo = BBR.Methods.Bygning;

    if (!methodInfo) {
      throw new Error("Method information for 'Bygning' is undefined.");
    }

    return await this.Request<BygningResponse>(methodInfo, params);
  }

  async ejendomsrelation(
    params: EjendomsrelationRequest
  ): Promise<EjendomsrelationResponse> {
    const methodInfo = BBR.Methods.Ejendomsrelation;

    if (!methodInfo) {
      throw new Error(
        "Method information for 'Ejendomsrelation' is undefined."
      );
    }

    return await this.Request<EjendomsrelationResponse>(methodInfo, params);
  }

  async grund(params: GrundRequest): Promise<GrundResponse> {
    const methodInfo = BBR.Methods.Grund;
    if (!methodInfo) {
      throw new Error("Method information for 'Grund' is undefined.");
    }
    return await this.Request<GrundResponse>(methodInfo, params);
  }

  async bbrsag(params: BbrsagRequest): Promise<BbrsagResponse> {
    const methodInfo = BBR.Methods.Bbrsag;
    if (!methodInfo) {
      throw new Error("Method information for 'Bbrsag' is undefined.");
    }
    return await this.Request<BbrsagResponse>(methodInfo, params);
  }

  static get Services(): Readonly<ServiceObject> {
    return {
      BBRPublic: "BBRPublic",
    } as const;
  }

  static get Methods(): Readonly<MethodObject> {
    return {
      Enhed: {
        zone: "public_protected",
        service: BBR.Services.BBRPublic!,
        method: "enhed",
      } as const,
      Bygning: {
        zone: "public_protected",
        service: BBR.Services.BBRPublic as string,
        method: "bygning",
      } as const,
      Ejendomsrelation: {
        zone: "public_protected",
        service: BBR.Services.BBRPublic as string,
        method: "ejendomsrelation",
      } as const,
      Bbrsag: {
        zone: "public_protected",
        service: BBR.Services.BBRPublic as string,
        method: "bbr",
      } as const,
      Grund: {
        zone: "public_protected",
        service: BBR.Services.BBRPublic as string,
        method: "grund",
      } as const,
    };
  }
}
