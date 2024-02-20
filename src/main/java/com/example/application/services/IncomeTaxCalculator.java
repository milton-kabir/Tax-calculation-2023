package com.example.application.services;

import com.vaadin.flow.server.auth.AnonymousAllowed;
import dev.hilla.BrowserCallable;
import org.springframework.stereotype.Service;

@BrowserCallable
@AnonymousAllowed
@Service
public class IncomeTaxCalculator {

    public Double calculateTotalTax(Long income) {
        double taxFreeIncome = income / 3.0;
        double taxableIncome = income - Math.min(450000, taxFreeIncome);
        int[] taxSlabRate = {5, 10, 15, 20};
        int[] taxSlabAmount = {100000, 300000, 400000, 500000};
        double totalTax = 0;
        taxableIncome = Math.max(0, taxableIncome - 350000);
        for (int i = 0; i < taxSlabRate.length; i++) {
            totalTax += Math.min(taxableIncome, taxSlabAmount[i]) * taxSlabRate[i] / 100;
            taxableIncome = Math.max(0, taxableIncome - taxSlabAmount[i]);
        }
        totalTax += taxableIncome * 25 / 100;
        return totalTax > 0 ? Math.max(totalTax, 50000) : totalTax;
    }
}
