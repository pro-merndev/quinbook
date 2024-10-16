"use client"
import React, { useRef } from 'react';
import Banner from '../shared/banner';
import BannerImage from '../shared/banner-image';
import PrimaryButton from '../ui/primary-button';
import { useTranslations } from 'next-intl';

const ForWhomQuinbookBanner = () => {
  const commonT = useTranslations("Common");
  const ref = useRef(null);
  return (
    <div className="container pb-16 lg:pb-[100px]">
    <Banner title="FÜR WEN QUINBOOK?" description="Business Management einfach gemacht:  Optimiere deinen Workflow" button={<PrimaryButton contactButton>{commonT("learn_more")}</PrimaryButton>} />
    <BannerImage ref={ref} imagePath="/images/features/feature_4_banner.jpeg" />
  </div>
  );
};

export default ForWhomQuinbookBanner;