import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Gallery | Pandit Shubham Sharma',
  description: 'Gallery of events and consultations',
}

const galleryItems = [
  { id: '1', src: '/IMG-20260111-WA0002.jpg', alt: 'Gallery Image 1', title: 'Event 1' },
  { id: '2', src: '/IMG-20260111-WA0003.jpg', alt: 'Gallery Image 2', title: 'Event 2' },
  { id: '3', src: '/IMG-20260111-WA0004.jpg', alt: 'Gallery Image 3', title: 'Event 3' },
  { id: '4', src: '/IMG-20260111-WA0005.jpg', alt: 'Gallery Image 4', title: 'Event 4' },
  { id: '5', src: '/IMG-20260111-WA0006.jpg', alt: 'Gallery Image 5', title: 'Event 5' },
  { id: '6', src: '/IMG-20260111-WA0007.jpg', alt: 'Gallery Image 6', title: 'Event 6' },
  { id: '7', src: '/IMG-20260111-WA0008.jpg', alt: 'Gallery Image 7', title: 'Event 7' },
  { id: '8', src: '/IMG-20260111-WA0009.jpg', alt: 'Gallery Image 8', title: 'Event 8' },
  { id: '9', src: '/IMG-20260111-WA0010.jpg', alt: 'Gallery Image 9', title: 'Event 9' },
  { id: '10', src: '/IMG-20260111-WA0016.jpg', alt: 'Gallery Image 10', title: 'Event 10' },
  { id: '11', src: '/IMG-20260111-WA0017.jpg', alt: 'Gallery Image 11', title: 'Event 11' },
  { id: '12', src: '/IMG-20260111-WA0018.jpg', alt: 'Gallery Image 12', title: 'Event 12' },
  { id: '13', src: '/IMG-20260111-WA0019.jpg', alt: 'Gallery Image 13', title: 'Event 13' },
  { id: '14', src: '/IMG-20260111-WA0020.jpg', alt: 'Gallery Image 14', title: 'Event 14' },
  { id: '15', src: '/IMG-20260111-WA0021.jpg', alt: 'Gallery Image 15', title: 'Event 15' },
  { id: '16', src: '/IMG-20260111-WA0022.jpg', alt: 'Gallery Image 16', title: 'Event 16' },
  { id: '17', src: '/IMG-20260111-WA0023.jpg', alt: 'Gallery Image 17', title: 'Event 17' },
  { id: '18', src: '/IMG-20260111-WA0024.jpg', alt: 'Gallery Image 18', title: 'Event 18' },
  { id: '19', src: '/IMG-20260111-WA0025.jpg', alt: 'Gallery Image 19', title: 'Event 19' },
  { id: '20', src: '/IMG-20260111-WA0026.jpg', alt: 'Gallery Image 20', title: 'Event 20' },
  { id: '21', src: '/IMG-20260111-WA0027.jpg', alt: 'Gallery Image 21', title: 'Event 21' },
  { id: '22', src: '/IMG-20260111-WA0028.jpg', alt: 'Gallery Image 22', title: 'Event 22' },
  { id: '23', src: '/IMG-20260111-WA0029.jpg', alt: 'Gallery Image 23', title: 'Event 23' },
  { id: '24', src: '/IMG-20260111-WA0030.jpg', alt: 'Gallery Image 24', title: 'Event 24' },
  { id: '25', src: '/IMG-20260111-WA0031.jpg', alt: 'Gallery Image 25', title: 'Event 25' },
  { id: '26', src: '/IMG-20260111-WA0032.jpg', alt: 'Gallery Image 26', title: 'Event 26' },
  { id: '27', src: '/IMG-20260111-WA0033.jpg', alt: 'Gallery Image 27', title: 'Event 27' },
  { id: '28', src: '/IMG-20260111-WA0034.jpg', alt: 'Gallery Image 28', title: 'Event 28' },
  { id: '29', src: '/IMG-20260111-WA0035.jpg', alt: 'Gallery Image 29', title: 'Event 29' },
  { id: '30', src: '/IMG-20260111-WA0036.jpg', alt: 'Gallery Image 30', title: 'Event 30' },
  { id: '31', src: '/IMG-20260111-WA0037.jpg', alt: 'Gallery Image 31', title: 'Event 31' },
  { id: '32', src: '/IMG-20260111-WA0038.jpg', alt: 'Gallery Image 32', title: 'Event 32' },
  { id: '33', src: '/IMG-20260111-WA0039.jpg', alt: 'Gallery Image 33', title: 'Event 33' },
  { id: '34', src: '/IMG-20260111-WA0040.jpg', alt: 'Gallery Image 34', title: 'Event 34' },
  { id: '35', src: '/IMG-20260111-WA0041.jpg', alt: 'Gallery Image 35', title: 'Event 35' },
  { id: '36', src: '/IMG-20260111-WA0042.jpg', alt: 'Gallery Image 36', title: 'Event 36' },
  { id: '37', src: '/IMG-20260111-WA0043.jpg', alt: 'Gallery Image 37', title: 'Event 37' },
  { id: '38', src: '/IMG-20260111-WA0044.jpg', alt: 'Gallery Image 38', title: 'Event 38' },
  { id: '39', src: '/IMG-20260111-WA0045.jpg', alt: 'Gallery Image 39', title: 'Event 39' },
  { id: '40', src: '/IMG-20260111-WA0046.jpg', alt: 'Gallery Image 40', title: 'Event 40' },
  { id: '41', src: '/IMG-20260111-WA0047.jpg', alt: 'Gallery Image 41', title: 'Event 41' },
  { id: '42', src: '/IMG-20260111-WA0048.jpg', alt: 'Gallery Image 42', title: 'Event 42' },
  { id: '43', src: '/IMG-20260111-WA0049.jpg', alt: 'Gallery Image 43', title: 'Event 43' },
  { id: '44', src: '/IMG-20260111-WA0050.jpg', alt: 'Gallery Image 44', title: 'Event 44' },
  { id: '45', src: '/IMG-20260111-WA0051.jpg', alt: 'Gallery Image 45', title: 'Event 45' },
  { id: '46', src: '/IMG-20260111-WA0053.jpg', alt: 'Gallery Image 46', title: 'Event 46' },
  { id: '47', src: '/IMG-20260111-WA0054.jpg', alt: 'Gallery Image 47', title: 'Event 47' },
  { id: '48', src: '/IMG-20260111-WA0055.jpg', alt: 'Gallery Image 48', title: 'Event 48' },
  { id: '49', src: '/IMG-20260111-WA0056.jpg', alt: 'Gallery Image 49', title: 'Event 49' },
  { id: '50', src: '/IMG-20260111-WA0057.jpg', alt: 'Gallery Image 50', title: 'Event 50' },
  { id: '51', src: '/IMG-20260111-WA0058.jpg', alt: 'Gallery Image 51', title: 'Event 51' },
  { id: '52', src: '/IMG-20260111-WA0059.jpg', alt: 'Gallery Image 52', title: 'Event 52' },
  { id: '53', src: '/IMG-20260111-WA0060.jpg', alt: 'Gallery Image 53', title: 'Event 53' },
  { id: '54', src: '/IMG-20260111-WA0061.jpg', alt: 'Gallery Image 54', title: 'Event 54' },
  { id: '55', src: '/IMG-20260111-WA0062.jpg', alt: 'Gallery Image 55', title: 'Event 55' },
  { id: '56', src: '/IMG-20260111-WA0063.jpg', alt: 'Gallery Image 56', title: 'Event 56' },
  { id: '57', src: '/IMG-20260111-WA0064.jpg', alt: 'Gallery Image 57', title: 'Event 57' },
  { id: '58', src: '/IMG-20260111-WA0065.jpg', alt: 'Gallery Image 58', title: 'Event 58' },
  { id: '59', src: '/IMG-20260111-WA0066.jpg', alt: 'Gallery Image 59', title: 'Event 59' },
  { id: '60', src: '/IMG-20260111-WA0067.jpg', alt: 'Gallery Image 60', title: 'Event 60' },
  { id: '61', src: '/IMG-20260111-WA0068.jpg', alt: 'Gallery Image 61', title: 'Event 61' },
  { id: '62', src: '/IMG-20260111-WA0069.jpg', alt: 'Gallery Image 62', title: 'Event 62' },
  { id: '63', src: '/IMG-20260111-WA0070.jpg', alt: 'Gallery Image 63', title: 'Event 63' },
  { id: '64', src: '/IMG-20260111-WA0071.jpg', alt: 'Gallery Image 64', title: 'Event 64' },
  { id: '65', src: '/IMG-20260111-WA0072.jpg', alt: 'Gallery Image 65', title: 'Event 65' },
  { id: '66', src: '/IMG-20260111-WA0073.jpg', alt: 'Gallery Image 66', title: 'Event 66' },
  { id: '67', src: '/IMG-20260111-WA0074.jpg', alt: 'Gallery Image 67', title: 'Event 67' },
  { id: '68', src: '/IMG-20260111-WA0075.jpg', alt: 'Gallery Image 68', title: 'Event 68' },
  { id: '69', src: '/IMG-20260111-WA0076.jpg', alt: 'Gallery Image 69', title: 'Event 69' },
  { id: '70', src: '/IMG-20260111-WA0077.jpg', alt: 'Gallery Image 70', title: 'Event 70' },
  { id: '71', src: '/IMG-20260111-WA0078.jpg', alt: 'Gallery Image 71', title: 'Event 71' },
  { id: '72', src: '/IMG-20260111-WA0079.jpg', alt: 'Gallery Image 72', title: 'Event 72' },
  { id: '73', src: '/IMG-20260111-WA0080.jpg', alt: 'Gallery Image 73', title: 'Event 73' },
  { id: '74', src: '/IMG-20260111-WA0081.jpg', alt: 'Gallery Image 74', title: 'Event 74' },
  { id: '75', src: '/IMG-20260111-WA0082.jpg', alt: 'Gallery Image 75', title: 'Event 75' },
  { id: '76', src: '/IMG-20260111-WA0083.jpg', alt: 'Gallery Image 76', title: 'Event 76' },
  { id: '77', src: '/IMG-20260111-WA0084.jpg', alt: 'Gallery Image 77', title: 'Event 77' },
  { id: '78', src: '/IMG-20260111-WA0085.jpg', alt: 'Gallery Image 78', title: 'Event 78' },
  { id: '79', src: '/IMG-20260111-WA0086.jpg', alt: 'Gallery Image 79', title: 'Event 79' },
  { id: '80', src: '/IMG-20260111-WA0087.jpg', alt: 'Gallery Image 80', title: 'Event 80' },
  { id: '81', src: '/IMG-20260111-WA0088.jpg', alt: 'Gallery Image 81', title: 'Event 81' },
  { id: '82', src: '/IMG-20260111-WA0089.jpg', alt: 'Gallery Image 82', title: 'Event 82' },
  { id: '83', src: '/IMG-20260111-WA0090.jpg', alt: 'Gallery Image 83', title: 'Event 83' },
  { id: '84', src: '/IMG-20260111-WA0091.jpg', alt: 'Gallery Image 84', title: 'Event 84' },
  { id: '85', src: '/IMG-20260111-WA0092.jpg', alt: 'Gallery Image 85', title: 'Event 85' },
  { id: '86', src: '/IMG-20260111-WA0093.jpg', alt: 'Gallery Image 86', title: 'Event 86' },
  { id: '87', src: '/IMG-20260111-WA0094.jpg', alt: 'Gallery Image 87', title: 'Event 87' },
  { id: '88', src: '/IMG-20260111-WA0095.jpg', alt: 'Gallery Image 88', title: 'Event 88' },
  { id: '89', src: '/IMG-20260111-WA0096.jpg', alt: 'Gallery Image 89', title: 'Event 89' },
  { id: '90', src: '/IMG-20260111-WA0097.jpg', alt: 'Gallery Image 90', title: 'Event 90' },
  { id: '91', src: '/IMG-20260111-WA0098.jpg', alt: 'Gallery Image 91', title: 'Event 91' },
  { id: '92', src: '/IMG-20260111-WA0099.jpg', alt: 'Gallery Image 92', title: 'Event 92' },
  { id: '93', src: '/IMG-20260111-WA0100.jpg', alt: 'Gallery Image 93', title: 'Event 93' },
  { id: '94', src: '/IMG-20260111-WA0101.jpg', alt: 'Gallery Image 94', title: 'Event 94' },
  { id: '95', src: '/IMG-20260111-WA0102.jpg', alt: 'Gallery Image 95', title: 'Event 95' },
  { id: '96', src: '/IMG-20260111-WA0105.jpg', alt: 'Gallery Image 96', title: 'Event 96' },
  { id: '97', src: '/IMG-20260111-WA0106.jpg', alt: 'Gallery Image 97', title: 'Event 97' },
  { id: '98', src: '/IMG-20260111-WA0107.jpg', alt: 'Gallery Image 98', title: 'Event 98' },
  { id: '99', src: '/IMG-20260111-WA0108.jpg', alt: 'Gallery Image 99', title: 'Event 99' },
]

export default function GalleryPage() {
  return (
    <div className="section">
      <div className="container max-w-6xl">
        <h1 className="font-serif text-3xl md:text-4xl mb-8">Gallery</h1>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {galleryItems.map((item) => (
            <div key={item.id} className="relative w-full aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-4 w-full">
                  <p className="text-white font-semibold">{item.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
