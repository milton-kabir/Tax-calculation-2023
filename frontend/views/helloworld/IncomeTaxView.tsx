import {Button} from '@hilla/react-components/Button.js';
import {IncomeTaxCalculator} from 'Frontend/generated/endpoints.js';
import {useState} from 'react';
import {NumberField} from "@hilla/react-components/NumberField";

export default function IncomeTaxView() {
    const [totalEarning, setTotalEarning] = useState(0);
    const [dps, setDps] = useState(0);
    const [savingsCertificate, setSavingsCertificate] = useState(0);
    const [tax, setTax] = useState(-1);
    const [rebate, setRebate] = useState(-1);

    return (
        <>
            <section className="flex p-m gap-m items-end">
                <div>Currently this income tax is calculated for a male living in Dhaka city
                </div>
            </section>
            <section className="flex p-m gap-m items-end">
                <NumberField
                    label="(Salary + bonus)"
                    onValueChanged={(e) => {
                        setTotalEarning(parseInt(e.detail.value));
                    }}
                />
                <Button
                    onClick={async () => {
                        const serverResponse = await IncomeTaxCalculator.calculateTotalTax(totalEarning);
                        setTax(serverResponse);
                    }}
                >
                    Calculate
                </Button>
                {tax !== -1 && (
                    <p>Your total tax is {tax}</p>
                )}
            </section>


            <section className="flex p-m gap-m items-end">
                <div>Currently this tax rebate is calculated for a male living in Dhaka city
                </div>
            </section>
            <section className="flex p-m gap-m items-end">
                <NumberField
                    label="(DPS amount)"
                    onValueChanged={(e) => {
                        setDps(parseInt(e.detail.value));
                    }}
                />
                <NumberField
                    label="(Savings Certificate)"
                    onValueChanged={(e) => {
                        setSavingsCertificate(parseInt(e.detail.value));
                    }}
                />
                <Button
                    onClick={async () => {
                        const serverResponse = await IncomeTaxCalculator.calculateTaxRebate(totalEarning, dps, savingsCertificate);
                        setRebate(serverResponse);
                    }}
                >
                    Calculate
                </Button>
                {rebate !== -1 && (
                    <p>Your total tax rebate is {rebate}</p>
                )}
            </section>
        </>
    );
}
