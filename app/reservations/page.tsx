import Navbar from "../components/Navbar";
import Reservations from "../components/Reservations";
import Footer from "../components/Footer";

export default function ReservationsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <Reservations />
      </main>
      <Footer />
    </>
  );
}
