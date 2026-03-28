import dynamic from "next/dynamic";

import { CarouselSkeleton ,
  ButtonCardsSkeleton,
  ServicesSkeleton,
  TestimonialsSkeleton,
  HeaderSkeleton,
  ClientsSkeleton, } from "./components/LoadingSkeletons";
  // import { ServicesGrid } from "./components/products/ServicesGrid";


  const NavBar = dynamic(() => import("./components/NavBar"), {
    loading: () => <HeaderSkeleton />,
    ssr: true,
  });

  const ContactDetailsBar = dynamic(() => import("./components/ContactDetailsBar"), {
    ssr: true,
    loading: () => null,
  });


  const Footer = dynamic(() => import("./footer/Footer"), {
    ssr: true,
    loading: () => null,
  });


const Carousel = dynamic(() => import("./components/Carousel"), {
  loading: () => <CarouselSkeleton />,
  ssr: true,
});

const ButtonCards = dynamic(() => import("./components/ButtonCards"), {
  loading: () => <ButtonCardsSkeleton />,
  ssr: true,
});

const ContactForm = dynamic(() => import("./components/ContactForm"), {
  ssr: true,
  loading: () => null,
});

const ServicesGrid = dynamic(() => import("./components/products/ServicesGrid"), {
  ssr: true,
  loading: () => null,
});


const Services = dynamic(() => import("./components/Services"), {
  loading: () => <ServicesSkeleton />,
  ssr: true,
});

const Testimonials = dynamic(() => import("./components/Testimonials"), {
  loading: () => <TestimonialsSkeleton />,
  ssr: true,
});

const Clients = dynamic(() => import("./components/Clients"), {
  loading: () => <ClientsSkeleton />,
  ssr: true,
});

const LocationScroller = dynamic(()=> import("./components/LocationsWeServe"),{
   ssr: true,
  loading: () => null,
})

export default function Home() {
  return (
    <>
      {/* <NavBar />
      <ContactDetailsBar /> */}
    <main className="px-4 bg-[#fff] pb-6 pt-[1px] md:pt-[3px] sm:p-6 overflow-hidden">
         
      <Carousel />
      
      <ButtonCards />

      <ServicesGrid />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4 text-green-900">Our Services</h2>
        <Services />
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4 text-green-900">Testimonials</h2>
        <Testimonials />
      </section>

      <section className="mt-10 mt-6 mx-auto bg-[#E5E5E5] px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-semibold mb-4 text-green-900">Clients & Societies</h2>
        <Clients />
      </section>

       <section className="mt-10">
      <h2 className="text-2xl ml-auto mr-auto text-centre font-semibold mb-4 text-green-900">Areas We Serve</h2>
        <LocationScroller service="anti-bird-invisible-grills" />
      </section>

      <section className="mt-8">
        <ContactForm />
      </section>
    </main>
    </>
  );
}