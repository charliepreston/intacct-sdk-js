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
 import IXmlObject from "../../Xml/IXmlObject";
 
 export default abstract class AbstractArAdvanceLine implements IXmlObject {
 
    public accountNumber: string;
    public accountLabel: string;
    public transactionAmount: number;
    public entryDescription: string;
    public locationId: string;
    public departmentId: string;
    public projectId: string;   
    public taskId: string;  
    public customerId: string;
    public vendorId: string;
    public employeeId: string;
    public itemId: string;
    public classId: string;
    public contractId: string;
    public warehouseId: string;
    public glDim: number;
 
    public abstract writeXml(xml: IaXmlWriter): void;
 }
 