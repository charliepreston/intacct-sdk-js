/**
 * @module Intacct/SDK/Functions/AccountsReceivable
 */

/**
 * Copyright 2022 Sage Intacct, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"). You may not
 * use this file except in compliance with the License. You may obtain a copy
 * of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * or in the "LICENSE" file accompanying this file. This file is distributed on
 * an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */

 import IaXmlWriter from "../../Xml/IaXmlWriter";
 import AbstractFunction from "../AbstractFunction";
 import AbstractArAdvanceLine from "./AbstractArAdvanceLine";
 
 export default abstract class AbstractArAdvance extends AbstractFunction {
 
    public recordNo: number;
    public customerId: string;
    public paymentMethod: string;
    public paymentDate: Date;
    public receiptDate: Date;
    public financialEntity: string;
    public undepositedAccountNo: string;
    public prBatch: string;
    public docNumber: string;
    public description: string;
    public currency: string;
    public baseCurrency: string;
    public exchangeRateDate: Date;
    public exchangeRateTypeId: string;
    public exchangeRate: number;
    public attachmentId: string;
    public action: string;

    public lines: AbstractArAdvanceLine[];
 
}
 