/* ⚖️ Why Use computed?

Feature	Benefit
Automatic dependency tracking	Only re-runs when inputs change
Lazy evaluation	Computation runs on first access, then caches result
Pure & side-effect free	Guaranteed to produce the same output each time
No manual subscriptions	Cleaner than RxJS for simple derived state */

import { CurrencyPipe } from '@angular/common';
import { Component, computed, inject, Input, input } from '@angular/core';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-results',
  standalone: false,
  // imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  // constructor(private investmentService: InvestmentService) {}
  private investmentService = inject(InvestmentService); // We can also inject rather than construct

  // Option - 1: Results
  // get results() {
  //   return this.investmentService.resultData;
  // }

  // Option - 2: Results
  results = computed(() => this.investmentService.resultData()); // Read only signal

  // Option - 3: Results
  // results = () => this.investmentService.resultData.asReadonly(); // Read only signal without computed function

  // SIGNAL
  // results = input<{
  //   year: number;
  //   interest: number;
  //   valueEndOfYear: number;
  //   annualInvestment: number;
  //   totalInterest: number;
  //   totalAmountInvested: number;
  // }[]>()

  // @Input() results?: {
  //   year: number;
  //   interest: number;
  //   valueEndOfYear: number;
  //   annualInvestment: number;
  //   totalInterest: number;
  //   totalAmountInvested: number;
  // }[];
}
