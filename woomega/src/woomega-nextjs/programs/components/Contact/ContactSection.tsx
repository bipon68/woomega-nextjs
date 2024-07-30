import Newsletter from "../PageSection/Newsletter/Newsletter";
import AddressSection from "./AddressSection/AddressSection";
import Contactsec from "./ContactSection/Contactsec";
import MapTouch from "./Map&Touch/MapTouch";

const ContactSection = () => {
  return (
    <div>
      <Contactsec />
      <AddressSection />
      <MapTouch />
      <Newsletter />
    </div>
  );
};

export default ContactSection;
