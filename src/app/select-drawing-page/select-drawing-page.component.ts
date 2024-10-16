import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-select-drawing-page',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './select-drawing-page.component.html',
  styleUrl: './select-drawing-page.component.css'
})

export class SelectDrawingPageComponent {
  drawings = [
    { name: 'مستويات بناء جسم الحيوان', src: 'assets/images/animalBodyPlans.jpg' },
    { name: 'الخلية اللاسعة', src: 'assets/images/cnidarians.jpg' },
    { name: 'فم اللاسعات', src: 'assets/images/cnidariansMouth.jpg' },
    { name: 'اليولوجينات', src: 'assets/images/euglenoids.jpg' },
    { name: 'الجاستولا', src: 'assets/images/gastrula.jpg' },
    { name: 'التكوين الجنيني المبكر', src: 'assets/images/gastrulaDevelopment.jpg' },
    { name: 'البراسيميوم', src: 'assets/images/paramicia.jpg' },
    { name: 'اللحميات (الجذريا القدم)', src: 'assets/images/saracodina.jpg' },
    { name: 'الفروقات بين الاسفنجيات واللاسعات', src: 'assets/images/spongeAndCnidariansTable.jpg' },
    { name: 'التناظر', src: 'assets/images/symmetry.jpg' }
  ];

  selectedDrawing: { name: string, src: string } | null = null;
  isBlurred = true;
  ahyaaCover = 'assets/images/ahyaaCover.jpg'; // Update with your cover image path

  onDrawingClick(drawing: { name: string, src: string }): void {
    this.selectedDrawing = drawing;
  }

  onBackClick(): void {
    this.selectedDrawing = null;
    this.isBlurred = true; // Ensure blur is enabled when clicking back
  }

  onMouseMove(event: MouseEvent): void {
    if (!this.isBlurred) return; // Do nothing if blur is disabled

    const target = event.currentTarget as HTMLElement;
    const rect = target.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const unblurredImage = target.querySelector('.unblurred-img') as HTMLElement;

    if (unblurredImage) {
      unblurredImage.style.clipPath = `ellipse(45px 25px at ${x}px ${y}px)`; // Reveal a circular area around the cursor
    }
  }

  toggleBlur(): void {
    this.isBlurred = !this.isBlurred;

    // Reset the clip-path immediately when blur is disabled
    const unblurredImage = document.querySelector('.unblurred-img') as HTMLElement;
    if (unblurredImage) {
      unblurredImage.style.clipPath = this.isBlurred ? 'circle(0 at 0 0)' : 'none';
    }
  }

}




