import { Button } from '@hilla/react-components/Button.js';
import { IncomeTaxCalculator } from 'Frontend/generated/endpoints.js';
import { useState } from 'react';
import {NumberField} from "@hilla/react-components/NumberField";

export default function IncomeTaxView() {
  const [income, setIncome] = useState(0);
  const [tax, setTax] = useState(-1); // State variable to store the calculated tax

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
            setIncome(parseInt(e.detail.value));
          }}
        />
        <Button
          onClick={async () => {
            const serverResponse = await IncomeTaxCalculator.calculateTotalTax(income);
            setTax(serverResponse);
          }}
        >
          Calculate
        </Button>
          {tax !== -1 && (
              <p>Your total tax is {tax}</p>
          )}
      </section>
    </>
  );
}
