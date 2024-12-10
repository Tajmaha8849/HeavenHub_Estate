import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css/bundle';
import ListingItem from '../components/ListingItem';

export default function Home() {
  const [offerListings, setOfferListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);
  SwiperCore.use([Navigation]);
  console.log(offerListings);
  useEffect(() => {
    const fetchOfferListings = async () => {
      try {
        const res = await fetch('/api/listing/get?offer=true&limit=4');
        const data = await res.json();
        setOfferListings(data);
        fetchRentListings();
      } catch (error) {
        console.log(error);
      }
    };
    const fetchRentListings = async () => {
      try {
        const res = await fetch('/api/listing/get?type=rent&limit=4');
        const data = await res.json();
        setRentListings(data);
        fetchSaleListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchSaleListings = async () => {
      try {
        const res = await fetch('/api/listing/get?type=sale&limit=4');
        const data = await res.json();
        setSaleListings(data);
      } catch (error) {
        log(error);
      }
    };
    fetchOfferListings();
  }, []);
  return (
    <div
  style={{
    background: 'linear-gradient(to right, #e3f2fd, #bbdefb)',
    minHeight: '100vh',
  }}
>
  {/* Top Section */}
  <div className="flex flex-col gap-6 p-8 md:p-20 max-w-6xl mx-auto text-center md:text-left">
    <h1 className="text-gray-800 font-extrabold text-3xl md:text-6xl leading-tight">
      Find your next <span className="text-blue-600">perfect</span> <br />
      place with ease
    </h1>
    <p className="text-gray-600 text-sm md:text-lg">
      HavenHub is the best place to find your next perfect place to live. We
      have a wide range of properties for you to choose from.
    </p>
    <Link
      to={'/search'}
      className="text-white bg-blue-600 px-6 py-2 rounded-md shadow-md hover:bg-blue-700 transition-all self-center md:self-start"
    >
      Let's Get Started
    </Link>
  </div>

  {/* Swiper Section */}
  <Swiper navigation>
    {offerListings &&
      offerListings.length > 0 &&
      offerListings.map((listing) => (
        <SwiperSlide key={listing._id}>
          <div
            style={{
              background: `url(${listing.imageUrls[0]}) center no-repeat`,
              backgroundSize: 'cover',
            }}
            className="h-[500px] rounded-lg shadow-lg"
          ></div>
        </SwiperSlide>
      ))}
  </Swiper>

  {/* Listings Section */}
  <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-10 my-10">
    {offerListings && offerListings.length > 0 && (
      <div>
        <div className="flex justify-between items-center my-4">
          <h2 className="text-2xl font-semibold text-gray-800">Recent Offers</h2>
          <Link
            className="text-blue-600 hover:text-blue-800 transition"
            to={'/search?offer=true'}
          >
            Show more offers →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {offerListings.map((listing) => (
            <ListingItem listing={listing} key={listing._id} />
          ))}
        </div>
      </div>
    )}

    {rentListings && rentListings.length > 0 && (
      <div>
        <div className="flex justify-between items-center my-4">
          <h2 className="text-2xl font-semibold text-gray-800">Places for Rent</h2>
          <Link
            className="text-blue-600 hover:text-blue-800 transition"
            to={'/search?type=rent'}
          >
            Show more places for rent →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {rentListings.map((listing) => (
            <ListingItem listing={listing} key={listing._id} />
          ))}
        </div>
      </div>
    )}

    {saleListings && saleListings.length > 0 && (
      <div>
        <div className="flex justify-between items-center my-4">
          <h2 className="text-2xl font-semibold text-gray-800">Places for Sale</h2>
          <Link
            className="text-blue-600 hover:text-blue-800 transition"
            to={'/search?type=sale'}
          >
            Show more places for sale →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {saleListings.map((listing) => (
            <ListingItem listing={listing} key={listing._id} />
          ))}
        </div>
      </div>
    )}
  </div>
</div>

  );
}
