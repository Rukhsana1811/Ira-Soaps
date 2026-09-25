import { Injectable } from '@angular/core';
import { RawMaterial, RawMaterialCategory } from './raw-materials';

@Injectable({ providedIn: 'root' })
export class RawMaterialService {
  readonly categories: RawMaterialCategory[] = [
    { id: 'moulds', label: 'Moulds' },
    { id: 'fragrance-oils', label: 'Fragrance oils' },
    { id: 'essential-oils', label: 'Essential oils' },
    { id: 'soap-base', label: 'Soap base' },
    { id: 'face-wash-bases', label: 'Face wash bases' },
    { id: 'body-wash-bases', label: 'Body wash bases' },
    { id: 'shampoo-bases', label: 'Shampoo bases' },
    { id: 'concrete-mixing-powder', label: 'Concrete mixing powder' },
    { id: 'soap-colors', label: 'Soap colors' },
    { id: 'orange-slices-dehydrated', label: 'Dehydrated orange slices' },
    { id: 'dehydrated-flowers', label: 'Dehydrated flowers' },
    { id: 'herbal-powders', label: 'Herbal powders' },
    { id: 'ipa-spray', label: 'IPA spray' },
    { id: 'foam-booster', label: 'Foam booster' },
    { id: 'soap-making-beginner-kit', label: 'Soap making beginner level kit' },
    { id: 'face-wash-kit', label: 'Face wash kit' },
    { id: 'shampoo-kit', label: 'Shampoo kit' },
    { id: 'body-wash-kit', label: 'Body wash kit' },
    { id: 'concrete-art-making-kit', label: 'Concrete art making kit' }
  ];

  readonly moulds: RawMaterial[] = [
    ['bubble-tray', 'Bubble Tray Mould', 'bubble-tray.jpeg', 299],
    ['trinket-tray', 'Trinket Tray Mould', 'trinket-tray.jpeg', 299],
    ['daisy', 'Daisy Flower Mould', 'daisy.jpeg', 119],
    ['floral', 'Floral Mould', 'floral.jpeg', 199],
    ['heart', 'Heart Mould', 'heart.jpeg', 199],
    ['honey-bee-hexagon', 'Honey Bee Hexagon Mould', 'honey-bee-hexagon.jpeg', 199],
    ['lily-tulip', 'Lily Tulip Mould', 'lily-tulip.jpeg', 199],
    ['lined-vase', 'Lined Vase Mould', 'lined-vase.jpeg', 299],
    ['mini-heart', 'Mini Heart Mould', 'mini-heart.jpeg', 149],
    ['pears', 'Pear Mould', 'pears.jpeg', 249],
    ['peony', 'Peony Mould', 'peony.jpeg', 299],
    ['small-candy-jar', 'Small Candy Jar Mould', 'small-candy-jar.jpeg', 389],
    ['small-rectangle', 'Small Rectangle Mould', 'small-rectangle.jpeg', 169],
    ['square', 'Square Mould', 'sqaure.jpeg', 199],
    ['sunflower', 'Sunflower Mould', 'sunflower.jpeg', 119]
  ].map(([id, name, image, price]) => ({
    id: `mould-${id}`,
    name: name as string,
    category: 'moulds',
    img: `assets/products/raw-material/${image}`,
    tagline: 'Reusable soap-making mould',
    description: 'A durable mould for creating distinctive handmade soaps and crafts.',
    price: price as number,
    size: '1 mould',
    ingredients: ['Reusable silicone', 'Maker-friendly quality']
  }));

  readonly materials: RawMaterial[] = [
    ...this.moulds,
    ...this.categories
      .filter((category) => category.id !== 'moulds')
      .map((category, index) => this.createMaterial(category, index))
  ];

  getByCategory(category: string): RawMaterial[] {
    if (!category || category === 'all') return this.materials;
    return this.materials.filter((material) => material.category === category);
  }

  getById(id: string): RawMaterial | undefined {
    return this.materials.find((material) => material.id === id);
  }

  private createMaterial(category: RawMaterialCategory, index: number): RawMaterial {
    const prices = [349, 399, 249, 299, 299, 349, 499, 149, 199, 249, 199, 179, 229, 999, 799, 899, 799, 1299];
    return {
      id: `raw-${category.id}`,
      name: category.label,
      category: category.id,
      img: this.imageFor(category.id),
      tagline: category.id.endsWith('-kit') ? 'Everything to get started' : 'Small-batch making essential',
      description: `Quality ${category.label.toLowerCase()} for your next handmade batch.`,
      price: prices[index],
      size: category.id.endsWith('-kit') ? 'Complete kit' : '250 g / 250 ml pack',
      ingredients: ['Maker-friendly quality', 'Packed with care']
    };
  }

  private imageFor(category: string): string {
    if (category.includes('kit')) return 'assets/live-session.png';
    if (category.includes('concrete')) return 'assets/products/concrete/decorative-tray.png';
    if (category.includes('shampoo')) return 'assets/shampoo.jpeg';
    if (category.includes('face-wash')) return 'assets/facewash1.jpeg';
    if (category.includes('body-wash')) return 'assets/shower-gel.png';
    if (category.includes('fragrance')) return 'assets/fragrance-oil.png';
    if (category.includes('essential')) return 'assets/products/raw-material/floral.jpeg';
    if (category.includes('moulds')) return 'assets/products/raw-material/daisy.jpeg';
    return 'assets/soaps.png';
  }
}
