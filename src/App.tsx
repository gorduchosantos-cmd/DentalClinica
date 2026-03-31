import { Header, Hero, AuthorityStrip, BentoServices, Testimonials, Footer } from "./components/DentalClinic";

export default function App() {
  return (
    <div className="relative">
      <div className="grain" />
      <Header />
      <main>
        <Hero />
        <AuthorityStrip />
        <BentoServices />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
