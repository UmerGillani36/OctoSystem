import React from 'react'
import classes from './FeaturedTable.module.css';
import { icons } from '../../../../../resources/icons';
import { useTranslation } from 'react-i18next';  

const FeaturedTable = () => {
  const { t } = useTranslation();
  return (
    <div className={classes.container}>
        <div className={classes.tableWrapper}>
               <table className={classes.table}>
        <thead>
          <tr>
            <th>{t('SOHO:featured_table_r1c1')}</th>
            <th>{t('SOHO:featured_table_r1c2')}</th>
            <th>{t('SOHO:featured_table_r1c3')}</th>
            <th>{t('SOHO:featured_table_r1c4')}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{t('SOHO:featured_table_r2c1')}</td>
            <td>{icons.checkIcon}</td>
            <td>{icons.checkIcon}</td>
            <td>{icons.checkIcon}</td>
          </tr>
          <tr>
            <td>{t('SOHO:featured_table_r3c1')}</td>
            <td>{icons.checkIcon}</td>
            <td></td>
            <td>{icons.checkIcon}</td>
          </tr>
          <tr>
            <td>{t('SOHO:featured_table_r4c1')}</td>
            <td></td>
            <td>{icons.checkIcon}</td>
            <td>{icons.checkIcon}</td>
          </tr>
          <tr>
            <td>{t('SOHO:featured_table_r5c1')}</td>
            <td>{icons.checkIcon}</td>
            <td>{icons.checkIcon}</td>
            <td>{icons.checkIcon}</td>
          </tr>
        </tbody>
      </table>
        </div>
    </div>
  )
}

export default FeaturedTable