import "@/styles/globals.css";
import '../styles/home.css';
import '../styles/faq.css';
import '../styles/history.css';
import '../styles/contact.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


export default function App({ Component, pageProps }) {
  // Ensure Bootstrap JavaScript initializes only once, during client-side rendering
  return <Component {...pageProps} />;
}
