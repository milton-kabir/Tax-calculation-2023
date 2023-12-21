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
        int[] ar = {5, 10, 15, 20};
        int[] br = {100000, 300000, 400000, 500000};
        double tx = 0;
        taxableIncome = Math.max(0, taxableIncome - 350000);
        for (int i = 0; i < ar.length; i++) {
            tx += Math.min(taxableIncome, br[i]) * ar[i] / 100;
            taxableIncome = Math.max(0, taxableIncome - br[i]);
        }
        tx += taxableIncome * 25 / 100;
        return tx;
    }
}
