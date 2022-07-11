import React from 'react';
import classNames from 'classnames';
import { FooterInfo } from '../../constants/constants';
import { SvgIcon } from '../SvgIcon';
import { IconsVariants, TextVariants } from '../../constants/VariantsOfComponents';
import { Text } from '../Text';
import { FooterCard } from '../Cards';


export const FooterComponent = ({
  className,
}) => {
  const FooterClass = classNames(
    'footer',
    className
  );

  return (
    <footer className={FooterClass}>
      <div className='container footer-container'>
        <div className="links-container">
          <div className="footer-card-logo">
            <SvgIcon src={IconsVariants.Logo} size={48} />
            <Text variant={TextVariants.h1_medium}>Naizop</Text>
          </div>
          <div className="links">
            {FooterInfo.map((item, index) =>
              <FooterCard key={index} item={item} />
            )}
            <div className="footer-card-subscribe">
              <Text variant={TextVariants.h2}>Subscribe</Text>
              <div>
                <Text variant={TextVariants.h3_regular}>your e-mail</Text>
                <div className='light-svg' />
                <SvgIcon src={IconsVariants.Arrow_right} />
              </div>
              <hr />
            </div>
          </div>
        </div>
        <hr />
        <Text variant={TextVariants.h4_regular}>© naizop.com All rights reserved</Text>
      </div>
    </footer>
  );
};

FooterComponent.displayName = 'Footer';