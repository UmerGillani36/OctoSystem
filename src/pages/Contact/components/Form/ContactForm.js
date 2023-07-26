import React, { useState } from 'react';
import classes from './ContactForm.module.css';
import { useTranslation } from 'react-i18next';

const ContactForm = () => {
  const { t } = useTranslation();
  const [formValues, setFormValues] = useState({
    fname: '',
    lname: '',
    title: '',
    company: '',
    email: ''
  });
  const [emptyFields, setEmptyFields] = useState([]);

  const handleSubmit = () => {
    const requiredFields = ['fname', 'lname', 'title', 'company', 'email'];
    const emptyFields = requiredFields.filter((field) => {
      const value = formValues[field].trim();
      return value === '';
    });

    setEmptyFields(emptyFields);

    if (emptyFields.length === 0) {
      // Submit the form
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value
    }));
  };

  const getInputClasses = (fieldName) => {
    const isFieldEmpty = emptyFields.includes(fieldName);
    return `${classes.input} ${isFieldEmpty ? classes.emptyField : ''} ${isFieldEmpty ? classes.redBorder : ''}`;
  };

  return (
    <div className={classes.container}>
      <div className={classes.overlay}></div>
      <div className={classes.formContainer}>
        <div className={classes.content}>
          <h1>{t('Contact:heading')}</h1>
          <p>{t('Contact:line1')}</p>
          <p>{t('Contact:line2')}</p>
        </div>  
        <div className={classes.form}>
          <div className={classes.firstRow}>
            <div className={classes.inputContainerFirst}>
            <label className={classes.label}>
              {t('Contact:form_fname')}
              {emptyFields.includes('fname') && (
              <div className={classes.errorMessage}>
                {t('Contact:form_error')}
              </div>
            )}
            </label>
            <input
              id="fname"
              name="fname"
              className={getInputClasses('fname')}
              type="text"
              value={formValues.fname}
              onChange={handleInputChange}
            />
            </div>
            <div className={classes.inputContainerFirst}>
            <label className={classes.label}>
              {t('Contact:form_lname')}
              {emptyFields.includes('lname') && (
              <div className={classes.errorMessage}>
                {t('Contact:form_error')}
              </div>
            )}
            </label>
            <input
              name="lname"
              className={getInputClasses('lname')}
              type="text"
              value={formValues.lname}
              onChange={handleInputChange}
            />
            </div>
          </div>
          <div className={classes.inputContainer}>
            <label className={classes.label}>
              {t('Contact:form_title')}
              {emptyFields.includes('title') && (
              <div  className={classes.errorMessage} >
                {t('Contact:form_error')}
              </div>
            )}
            </label>

            <input
              name="title"
              className={getInputClasses('title')}
              type="text"
              value={formValues.title}
              onChange={handleInputChange}
            />
          </div>
          <div className={classes.inputContainer}>
            <label className={classes.label}>
              {t('Contact:form_company')}
              {emptyFields.includes('company') && (
              <div className={classes.errorMessage}>
                {t('Contact:form_error')}
              </div>
            )}
            </label>
            <input
              name="company"
              className={getInputClasses('company')}
              type="text"
              value={formValues.company}
              onChange={handleInputChange}
            />
          </div>
          <div className={classes.inputContainer}>
            <label className={classes.label}>
              {t('Contact:form_email')}
              {emptyFields.includes('email') && (
              <div className={classes.errorMessage}>
                {t('Contact:form_error')}
              </div>
            )}
            </label>
            <input
              name="email"
              className={getInputClasses('email')}
              type="email"
              value={formValues.email}
              onChange={handleInputChange}
            />
          </div>
          <button className={classes.action} onClick={handleSubmit}>
            {t('Contact:form_submit')}
          </button>
          <span className={classes.typeBody}>
            {t('Contact:form_footer_t1')}
            <span className={classes.privacyPolicy}>
              {t('Contact:form_footer_t2')}
            </span>
          </span>
        </div>
      </div>
      <div className={`${classes.imageContainer}`}>
        <img
          src={
            'https://octosystems.com.br/wp-content/uploads/2020/04/eye-1.jpg'
          }
          alt="Background"
          className={classes.backgroundImage}
        />
      </div>
    </div>
  );
};

export default ContactForm;
