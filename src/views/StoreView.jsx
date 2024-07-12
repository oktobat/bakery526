import React from 'react';
import Title from '@/components/common/Title'
import StoreSection from '@/components/shop/StoreSection'

const StoreView = () => {
  return (
    <div className="row">
      <Title title="매장관리" />
      <StoreSection />
    </div>
  );
};

export default StoreView;