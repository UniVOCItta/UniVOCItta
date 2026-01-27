import React from 'react';
import '../App.css';
// Translation
import { useTranslation } from "react-i18next";

function Documentation() {

  // Translation 
  const { t } = useTranslation();
  
  return (
    <>
        <div className='container-fluid'>
            <h1 style={{textTransform: 'uppercase'}}>{t('footer.documentation')}</h1>
            <p>{t('footer.documentation_text')}</p>
        </div>
    </>
  )
}

export default Documentation