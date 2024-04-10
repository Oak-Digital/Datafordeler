import { Service } from "../../core/";
import { clientInit, ServiceObject, MethodObject } from "../../core/types";
import { Request, Response } from "./types";

export class Haendelser extends Service {
  static Register = "system";

  constructor(config: clientInit) {
    super(config, "system", "custom", "1.0.0");
  }

  /**
   * Get an DAR address object
   * @param {string} [Id] - the dar id for the address
   * @return {array} Returns array of addresses
   */
  async getPublicEvents(params: Request): Promise<Response> {
    const methodInfo = Haendelser.Methods.public;
    if (!methodInfo) {
      throw new Error("Method information for 'public' is undefined.");
    }
    return await this.Request<Response>(methodInfo, params);
  }
  async getPrivateEvents(params: Request): Promise<Response> {
    const methodInfo = Haendelser.Methods.protected;
    if (!methodInfo) {
      throw new Error("Method information for 'protected' is undefined.");
    }
    return await this.Request<Response>(methodInfo, params);
  }

  static get Services(): Readonly<ServiceObject> {
    return {
      EventMessages: "EventMessages",
    } as const;
  }

  static get Methods(): Readonly<MethodObject> {
    return {
      public: {
        zone: "public_protected",
        service: Haendelser.Services.EventMessages!,
        method: "",
      },
      protected: {
        zone: "cert5",
        service: Haendelser.Services.EventMessages!,
        method: "",
      },
    } as const;
  }
}
