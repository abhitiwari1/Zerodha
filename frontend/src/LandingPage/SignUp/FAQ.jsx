export default function FAQ(){
    return (
    <div class="container p-5" style={{marginLeft: "175px", marginRight: "175px"}}>
        <h2 class="mb-5">FAQs</h2>
        <div class="accordion" id="faqAccordion">
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                        What is a Zerodha account?
                    </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div class="accordion-body">
                        A Zerodha account is a combined demat and trading account that allows investors to buy, sell, and hold securities digitally.
                    </div>
                </div>
            </div>

            <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                        What documents are required to open a demat account?
                    </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                    <div class="accordion-body">
                        <p>The following documents are required to open a Zerodha account online:</p>
                        <ul>
                            <li>PAN number</li>
                            <li>Aadhaar Card (Linked with a phone number for OTP verification)</li>
                            <li>Cancelled cheque or bank account statement (To link your bank account)</li>
                            <li>Income proof (Required only if you wish to trade in Futures & options)</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree">
                        Is Zerodha account opening free?
                    </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div class="accordion-body">
                        Yes, It is completely free.
                    </div>
                </div>
            </div>

            <div class="accordion-item">
                <h2 class="accordion-header" id="headingFour">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour">
                        Are there any maintenance charges for a demat account?
                    </button>
                </h2>
                <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div class="accordion-body">
                        The account maintaince charges is appliacable based on the. <br />
                        For Basic Services Demat Account: Zero charges if the holding value is less than ₹4,00,000. <br />
                        For non-Basic Services Demat Account demat accounts: ₹300 per year + GST. <br />
                        To learn more about BSDA, <a href="" style={{textDecoration: "none"}}>Click here</a>.
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingFive">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive">
                        Can I open a demat account without a bank account?
                    </button>
                </h2>
                <div id="collapseFive" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div class="accordion-body">
                        To open a demat account, you must have a bank account in your name. <br />
                        If UPI verification is completed successfully, no proof of bank is needed. However, if bank verification fails, you'll need to provide either a <br />cancelled cheque or a bank statement to link your bank account to Zerodha.
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}