import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  blogs = [
    {
      id: 1,
      title: '10 Tips for a Modern Living Room',
      category: 'Interior Design',
      date: 'Oct 2026',
      description: 'Discover how to transform your living room into a modern and stylish space with these simple tips.',
      imgURL: 'https://media.homecentre.com/i/homecentre/163650487-163650487-HC18082021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$'
    },
    {
      id: 2,
      title: 'How to Care for Glass Furniture',
      category: 'Furniture Care',
      date: 'Sep 2026',
      description: 'Learn the best practices for maintaining and cleaning your glass furniture to keep it looking new.',
      imgURL: 'https://media.homecentre.com/i/homecentre/163645951-163645951-HC07102021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$'
    },
    {
      id: 3,
      title: 'Best Color Combinations for Your Home',
      category: 'Home Decor',
      date: 'Aug 2026',
      description: 'Explore the best color combinations that will make your home look elegant and welcoming.',
      imgURL: 'https://media.homecentre.com/i/homecentre/160079085-160079085-HC020518_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$'
    },
    {
      id: 4,
      title: 'How to Choose the Perfect Dining Chair',
      category: 'Buying Guide',
      date: 'Jul 2026',
      description: 'A complete guide to help you choose the right dining chair for your home and lifestyle.',
      imgURL: 'https://media.homecentre.com/i/homecentre/161257427-161257427-HC280119_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$'
    },
    {
      id: 5,
      title: 'Top Furniture Trends for 2026',
      category: 'Trends',
      date: 'Jun 2026',
      description: 'Stay up to date with the latest furniture trends that are taking the interior design world by storm.',
      imgURL: 'https://media.homecentre.com/i/homecentre/161684469-161684469-HC210519_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$'
    },
    {
      id: 6,
      title: 'Maximizing Space in Small Rooms',
      category: 'Tips',
      date: 'May 2026',
      description: 'Smart furniture choices and arrangement tips to make the most of your small living spaces.',
      imgURL: 'https://media.homecentre.com/i/homecentre/163688823-163688823-HC05102021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$'
    }
  ];
}