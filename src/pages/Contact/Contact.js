import React, { useEffect , useLayoutEffect} from 'react';
import config from '../../config.json';
import Footer from '../../components/Footer/Footer';
import ContactForm from './components/Form/ContactForm';
import classes from './Contact.module.css';
import AddressDetails from './components/Form/AddressDetails';
import { useTranslation } from 'react-i18next';
function Contact() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { t } = useTranslation();
  useEffect(() => {
    document.title = `${t('Header:contact')} - ${config.title}`;
  }, [t]);

  return (
    <div className={classes.contact}>
      <ContactForm />
      <AddressDetails />
      <Footer />
    </div>
  );
}

export default Contact;
