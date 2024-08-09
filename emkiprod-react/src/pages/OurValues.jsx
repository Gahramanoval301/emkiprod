import React from 'react';
import { useTranslation } from 'react-i18next';
import { valuesSectionData } from '../data/sectionDatas';
import ValueCard from '../components/ValueCard';

const OurValues = () => {
  const { t, i18n } = useTranslation();

  console.log('Current language:', i18n.language);
  console.log('Loaded namespaces:', i18n.options.ns);
  // Translate valuesSectionData
  const translatedValues = valuesSectionData.map(value => ({
    ...value,
    title: t(value.titleKey),
    content: t(value.contentKey),
  }));
  console.log(translatedValues);

  return (
    <div className="our-values-section text-white section">
      <div className="w-80 flex items-center justify-center mb-8">
        <h4 className="inline-block font-semibold text-3xl">{t('home.ourvalues')}</h4>
      </div>
      <div className="our-values flex justify-evenly p-14 flex-wrap rounded-3xl">
        {translatedValues.map((value) => (
          <ValueCard key={value.id} value={value} />
        ))}
      </div>
    </div>
  );
};

export default OurValues;
