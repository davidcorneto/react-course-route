import MeetupList from '../components/meetups/MeetupList';
import { useState, useEffect } from 'react';

const DUMMY_DATA2 = {
  '@context': '/api/v2/contexts/Product',
  '@id': '/api/v2/shop/products',
  '@type': 'hydra:Collection',
  'hydra:member': [
    {
      '@id': '/api/v2/shop/products/000F_office_grey_jeans',
      '@type': 'Product',
      productTaxons: [
        '/api/v2/shop/product-taxons/216785',
        '/api/v2/shop/product-taxons/216786',
      ],
      mainTaxon: '/api/v2/shop/taxons/womens_jeans',
      reviews: [
        '/api/v2/shop/product-reviews/223446',
        '/api/v2/shop/product-reviews/223466',
        '/api/v2/shop/product-reviews/223468',
        '/api/v2/shop/product-reviews/223473',
      ],
      averageRating: 3.5,
      images: [
        {
          '@id': '/api/v2/shop/product-images/116704',
          '@type': 'ProductImage',
          id: 116704,
          type: 'main',
          path: '/media/image/c7/36/9ce4a21ff0a3714e7285a55b5404.jpg',
        },
      ],
      id: 117231,
      code: '000F_office_grey_jeans',
      variants: [
        '/api/v2/shop/product-variants/000F_office_grey_jeans-variant-0',
        '/api/v2/shop/product-variants/000F_office_grey_jeans-variant-1',
        '/api/v2/shop/product-variants/000F_office_grey_jeans-variant-2',
        '/api/v2/shop/product-variants/000F_office_grey_jeans-variant-3',
        '/api/v2/shop/product-variants/000F_office_grey_jeans-variant-4',
      ],
      options: ['/api/v2/shop/product-options/jeans_size'],
      createdAt: '2022-02-21 09:42:49',
      updatedAt: '2022-02-23 10:00:11',
      shortDescription:
        'Aut soluta optio aut deleniti ad voluptates ad accusantium. Exercitationem molestias laborum unde et sed. Delectus omnis laboriosam necessitatibus. Asperiores debitis aut asperiores velit velit.',
      name: '000F office grey jeans',
      description:
        'Quidem temporibus provident suscipit eos aliquid vitae laudantium. Ex quidem ullam accusantium velit unde doloribus eum qui. Eius at rerum nam est.\n\nNisi fugiat aut amet quo officia. Optio qui est autem fugit necessitatibus. Amet rerum nemo numquam aut. Cupiditate temporibus sed dolorem. Qui modi eveniet error optio pariatur.\n\nQuisquam qui sint modi enim provident consequatur nam. Consequatur voluptate incidunt soluta autem. Quis nihil aut ex qui. Nemo accusamus aliquid autem explicabo quidem dolore asperiores assumenda.',
      slug: '000f-office-grey-jeans',
      defaultVariant:
        '/api/v2/shop/product-variants/000F_office_grey_jeans-variant-0',
    },
    {
      '@id': '/api/v2/shop/products/007M_black_elegance_jeans',
      '@type': 'Product',
      productTaxons: [
        '/api/v2/shop/product-taxons/216779',
        '/api/v2/shop/product-taxons/216780',
      ],
      mainTaxon: '/api/v2/shop/taxons/mens_jeans',
      reviews: ['/api/v2/shop/product-reviews/223449'],
      averageRating: 3,
      images: [
        {
          '@id': '/api/v2/shop/product-images/116701',
          '@type': 'ProductImage',
          id: 116701,
          type: 'main',
          path: '/media/image/4f/34/b8ef849a33b9f92683ae238a4f9c.svg',
        },
      ],
      id: 117228,
      code: '007M_black_elegance_jeans',
      variants: [
        '/api/v2/shop/product-variants/007M_black_elegance_jeans-variant-0',
        '/api/v2/shop/product-variants/007M_black_elegance_jeans-variant-1',
        '/api/v2/shop/product-variants/007M_black_elegance_jeans-variant-2',
        '/api/v2/shop/product-variants/007M_black_elegance_jeans-variant-3',
        '/api/v2/shop/product-variants/007M_black_elegance_jeans-variant-4',
      ],
      options: ['/api/v2/shop/product-options/jeans_size'],
      createdAt: '2022-02-18 10:38:05',
      updatedAt: '2022-02-23 10:00:11',
      shortDescription:
        'Minus amet tenetur qui enim ipsam. Eaque aut quos earum modi et qui ipsa. Esse voluptas molestias est doloremque delectus reiciendis. Dolores ad illo est non voluptas. Dolorem sit nisi explicabo sed odio id.',
      name: '007M black elegance jeans',
      description:
        'Qui incidunt doloribus accusamus rem. Dolores omnis facere recusandae qui id exercitationem. Corporis rerum suscipit quidem. Molestiae fugiat culpa molestiae. Omnis dicta aliquam quia laboriosam id id.\n\nQuos voluptas eaque et rerum ea. Dolor quia velit voluptas quibusdam quasi. Possimus omnis maxime odio eaque quo in. Veritatis praesentium aut eos.\n\nReiciendis explicabo quo et qui quod. Qui quam ab ut saepe repellat voluptatem aliquam. Voluptas cumque eos explicabo excepturi at consequatur. Aut accusantium iste voluptates adipisci illo eos sit.',
      slug: '007m-black-elegance-jeans',
      defaultVariant:
        '/api/v2/shop/product-variants/007M_black_elegance_jeans-variant-0',
    },
    {
      '@id': '/api/v2/shop/products/111F_patched_jeans_with_fancy_badges',
      '@type': 'Product',
      productTaxons: [
        '/api/v2/shop/product-taxons/216783',
        '/api/v2/shop/product-taxons/216784',
      ],
      mainTaxon: '/api/v2/shop/taxons/womens_jeans',
      reviews: ['/api/v2/shop/product-reviews/223477'],
      averageRating: 0,
      images: [
        {
          '@id': '/api/v2/shop/product-images/116703',
          '@type': 'ProductImage',
          id: 116703,
          type: 'main',
          path: '/media/image/99/d8/d8e2676749fdc771bffcccaab83a.jpg',
        },
      ],
      id: 117230,
      code: '111F_patched_jeans_with_fancy_badges',
      variants: [
        '/api/v2/shop/product-variants/111F_patched_jeans_with_fancy_badges-variant-0',
        '/api/v2/shop/product-variants/111F_patched_jeans_with_fancy_badges-variant-1',
        '/api/v2/shop/product-variants/111F_patched_jeans_with_fancy_badges-variant-2',
        '/api/v2/shop/product-variants/111F_patched_jeans_with_fancy_badges-variant-3',
        '/api/v2/shop/product-variants/111F_patched_jeans_with_fancy_badges-variant-4',
      ],
      options: ['/api/v2/shop/product-options/jeans_size'],
      createdAt: '2022-02-21 03:42:30',
      updatedAt: '2022-02-23 10:00:11',
      shortDescription:
        'Est quae consequatur dolore exercitationem blanditiis fugiat iure. Quasi amet nobis rerum in laboriosam qui sed quia. Rerum ut excepturi iusto quis excepturi doloribus.',
      name: '111F patched jeans with fancy badges',
      description:
        'Doloribus accusantium mollitia vitae repudiandae ipsum natus sint. Laborum dolor facere voluptas molestiae quasi possimus minus. Consequatur officiis laboriosam ex et explicabo quia laudantium.\n\nQuibusdam voluptatum perferendis at iste voluptatem quo consequatur. Neque explicabo et non repellat nesciunt. Ea sequi in aut modi enim. Dolores quas ipsum iusto.\n\nVelit provident a maxime exercitationem deleniti. Eos nihil dolores deserunt unde qui. Ipsam odio id eos eius.',
      slug: '111f-patched-jeans-with-fancy-badges',
      defaultVariant:
        '/api/v2/shop/product-variants/111F_patched_jeans_with_fancy_badges-variant-0',
    },
  ],
  'hydra:totalItems': 21,
};

const DUMMY_DATA = [
  {
    id: 'm1',
    title: 'This is a first meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
    address: 'Meetupstreet 5, 12345 Meetup City',
    description:
      'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
  },
  {
    id: 'm2',
    title: 'This is a second meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
    address: 'Meetupstreet 5, 12345 Meetup City',
    description:
      'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    'hidden:member': 'hi',
    '@id': 'Nilai @ ID',
  },
];

function AllMeetupPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      'https://react-getting-started-21563-default-rtdb.firebaseio.com/meetups.json'
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];

        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetups.push(meetup);
        }

        setIsLoading(false);
        setLoadedMeetups(meetups);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Meetup</h1>
      <ul>
        <MeetupList meetups={loadedMeetups} />
      </ul>
    </section>
  );
}

export default AllMeetupPage;
