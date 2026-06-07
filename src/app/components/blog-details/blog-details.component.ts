import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-blog-details',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './blog-details.component.html',
  styleUrl: './blog-details.component.css'
})
export class BlogDetailsComponent {
  blog: any = null;

  blogs = [
    {
      id: 1,
      title: '10 Tips for a Modern Living Room',
      category: 'Interior Design',
      date: 'Oct 2026',
      description: 'Discover how to transform your living room into a modern and stylish space with these simple tips.',
      content: 'A modern living room combines clean lines, neutral colors, and functional furniture. Start by choosing a neutral color palette, then add accent colors through accessories. Invest in quality furniture that serves multiple purposes. Use lighting strategically to create ambiance. Add plants for a natural touch. Keep clutter to a minimum. Choose rugs that define spaces. Mix textures for visual interest. Add mirrors to create the illusion of space. Finally, personalize with art and accessories that reflect your style.',
      imgURL: 'https://media.homecentre.com/i/homecentre/163650487-163650487-HC18082021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$'
    },
    {
      id: 2,
      title: 'How to Care for Glass Furniture',
      category: 'Furniture Care',
      date: 'Sep 2026',
      description: 'Learn the best practices for maintaining and cleaning your glass furniture to keep it looking new.',
      content: 'Glass furniture adds elegance to any room but requires proper care. Clean regularly with a glass cleaner and microfiber cloth. Avoid abrasive cleaners that can scratch the surface. Use coasters to prevent water rings. Keep away from direct sunlight to prevent discoloration. Handle with care to avoid chips and cracks.',
      imgURL: 'https://media.homecentre.com/i/homecentre/163645951-163645951-HC07102021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$'
    },
    {
      id: 3,
      title: 'Best Color Combinations for Your Home',
      category: 'Home Decor',
      date: 'Aug 2026',
      description: 'Explore the best color combinations that will make your home look elegant and welcoming.',
      content: 'Color combinations can make or break a room. Navy blue and gold create a luxurious feel. White and wood tones bring warmth and simplicity. Gray and yellow add energy and sophistication. Green and brown connect to nature. Black and white create timeless elegance.',
      imgURL: 'https://media.homecentre.com/i/homecentre/160079085-160079085-HC020518_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$'
    },
    {
      id: 4,
      title: 'How to Choose the Perfect Dining Chair',
      category: 'Buying Guide',
      date: 'Jul 2026',
      description: 'A complete guide to help you choose the right dining chair for your home and lifestyle.',
      content: 'Choosing the right dining chair involves several factors. Consider the height of your dining table first. The chair seat should be 10-12 inches below the tabletop. Think about comfort for long meals. Upholstered chairs offer more comfort but require more maintenance.',
      imgURL: 'https://media.homecentre.com/i/homecentre/161257427-161257427-HC280119_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$'
    },
    {
      id: 5,
      title: 'Top Furniture Trends for 2026',
      category: 'Trends',
      date: 'Jun 2026',
      description: 'Stay up to date with the latest furniture trends that are taking the interior design world by storm.',
      content: '2026 brings exciting furniture trends. Curved and rounded furniture is replacing sharp edges. Sustainable and eco-friendly materials are in demand. Multifunctional furniture is essential for smaller spaces. Warm earth tones dominate color palettes.',
      imgURL: 'https://media.homecentre.com/i/homecentre/161684469-161684469-HC210519_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$'
    },
    {
      id: 6,
      title: 'Maximizing Space in Small Rooms',
      category: 'Tips',
      date: 'May 2026',
      description: 'Smart furniture choices and arrangement tips to make the most of your small living spaces.',
      content: 'Small rooms can feel spacious with the right approach. Choose furniture with legs to create visual space. Use mirrors to reflect light and create depth. Opt for multifunctional furniture like storage ottomans. Mount shelves on walls to free up floor space.',
      imgURL: 'https://media.homecentre.com/i/homecentre/163688823-163688823-HC05102021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$'
    }
  ];

  constructor(private route: ActivatedRoute) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.blog = this.blogs.find(b => b.id === id);
  }
}