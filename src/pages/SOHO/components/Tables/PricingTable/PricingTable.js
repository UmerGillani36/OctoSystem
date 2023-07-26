import React from 'react'
import classes from './PricingTable.module.css';
import { useTranslation } from 'react-i18next';  
const PricingTable = () => {
  const { t } = useTranslation();
  return (
        <div className={classes.container}>
        <div className={classes.tableWrapper}>
        <table className={classes.table}>
        <thead>
          <tr>
            <th>{t('SOHO:pricing_table_r1c1')}</th>
            <th>{t('SOHO:pricing_table_r1c2')}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{t('SOHO:pricing_table_r2c1')}</td>
            <td>{t('SOHO:pricing_table_upto')}</td>
          </tr>
          <tr>
            <td>{t('SOHO:pricing_table_r3c1')}</td>
            <td>{t('SOHO:pricing_table_upto')}</td>
          </tr>
          <tr>
            <td>{t('SOHO:pricing_table_r4c1')}</td>
            <td>{t('SOHO:pricing_table_upto')}</td>
          </tr>
          <tr>
            <td>{t('SOHO:pricing_table_r5c1')}</td>
            <td>{t('SOHO:pricing_table_max')}</td>
          </tr>
        </tbody>
      </table>
      <p className={classes.bodyType}>{t('SOHO:pricing_table_description')}</p>
        </div>
    </div>
  )
}

export default PricingTable