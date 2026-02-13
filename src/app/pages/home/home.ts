import { Component, DestroyRef, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  private readonly destroyRef = inject(DestroyRef);

  protected readonly features = [
    {
      title: 'Dropdown',
      description: 'Keyboard-safe components, combobox behavior, and live accessibility feedback.',
      route: '/explore-all/dropdown',
    },
    {
      title: 'Reactive Forms',
      description: 'Floating labels, animated validation, and a real-time form state preview.',
      route: '/explore-all/reactive-forms',
    },
    {
      title: 'Signal Forms',
      description: 'Fine-grained reactivity with update metrics and signal flow visualization.',
      route: '/explore-all/signal-forms',
    },
  ];

  protected readonly testimonials = [
    'The UI feels modern, focused, and incredibly smooth.',
    'Dark mode gradients and micro-interactions feel production-ready.',
    'Signal and form demos are easy to explore and reason about.',
  ];

  protected readonly index = signal(0);
  protected readonly activeTestimonial = computed(
    () => this.testimonials[this.index()] ?? this.testimonials[0],
  );

  constructor() {
    const id = setInterval(() => this.next(), 4200);
    this.destroyRef.onDestroy(() => clearInterval(id));
  }

  protected next(): void {
    this.index.update((v) => (v + 1) % this.testimonials.length);
  }

  protected prev(): void {
    this.index.update((v) => (v - 1 + this.testimonials.length) % this.testimonials.length);
  }
}
