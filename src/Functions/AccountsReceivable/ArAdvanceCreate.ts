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
 import AbstractArAdvance from "./AbstractArAdvance";
 
 export default class ArAdvanceCreate extends AbstractArAdvance {
 
     public writeXml(xml: IaXmlWriter): void {
        xml.writeStartElement("function");
        xml.writeAttribute("controlid", this.controlId, true);
        xml.writeStartElement("create");
        xml.writeStartElement("ARADVANCE");
        
        xml.writeElement("CUSTOMERID", this.customerId, true);
        xml.writeElement("PAYMENTMETHOD", this.paymentMethod, true);
        xml.writeElement("PAYMENTDATE", this.paymentDate, true);
        xml.writeElement("RECEIPTDATE", this.receiptDate, true);
        xml.writeElement("FINANCIALENTITY", this.financialEntity);
        xml.writeElement("UNDEPOSITEDACCOUNTNO", this.undepositedAccountNo);
        xml.writeElement("PRBATCH", this.prBatch);
        xml.writeElement("DOCNUMBER", this.docNumber);
        xml.writeElement("DESCRIPTION", this.description);
        xml.writeElement("CURRENCY", this.currency);
        xml.writeElement("BASECURR", this.baseCurrency);
        xml.writeElement("EXCH_RATE_DATE", this.exchangeRateDate);
        xml.writeElement("EXCH_RATE_TYPE_ID", this.exchangeRateTypeId);
        xml.writeElement("EXCHANGE_RATE", this.exchangeRate);
        xml.writeElement("SUPDOCID", this.attachmentId);
        xml.writeElement("ACTION", this.attachmentId);

        xml.writeStartElement("ARADVANCEITEMS");
        if (this.lines != null && this.lines.length > 0) {
            for (const line of this.lines) {
                line.writeXml(xml);
            }
        }

        xml.writeEndElement(); //ARADVANCEITEMS
        xml.writeEndElement(); //ARADVANCE
        xml.writeEndElement(); //create
        xml.writeEndElement(); //function
     }
 }
 