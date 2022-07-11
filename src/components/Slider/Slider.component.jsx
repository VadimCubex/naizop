import React, { useRef, useState } from 'react';
import classNames from 'classnames';
import { Text } from '../Text';
import { Link } from 'react-router-dom';
import { Button } from '../Button';
import { ButtonSizeVariants, ButtonVariants, IconsVariants, TextVariants } from '../../constants/VariantsOfComponents';

export const SliderComponent = ({
  description,
  slides,
  className,
}) => {
  const SliderClass = classNames(
    'slider',
    className
  );

  const sliderCard = useRef(null);
  const [selected, setSelected] = useState(0);
  const [left, setLeft] = useState(0);

  const handleClick = (action, toElem) => {
    switch (action) {
      case 'left':
        if (toElem >= 0) {
          setLeft((sliderCard.current.clientWidth + 80) * (selected - 1))
          setSelected(toElem);
        }
        break;

      case 'right':
        if (toElem <= slides.length - 1) {
          setLeft((sliderCard.current.clientWidth + 80) * (selected + 1))
          setSelected(toElem);
        }
        break;
    }
  }

  return (
    <div className='left-container'>
      <Text className='slider-description'>{description}</Text>
      <div className='slider-tools'>
        <Button onClick={() => { handleClick('left', selected - 1) }} variant={ButtonVariants.purchase} size={ButtonSizeVariants.extra_large} icon={IconsVariants.Arrow_left} />
        <div className='sticks-container'>
          {
            slides.map((item, index) => <hr key={index} className={`${index === selected ? ' active' : ''}`} />)
          }
        </div>
        <Button onClick={() => { handleClick('right', selected + 1) }} variant={ButtonVariants.purchase} size={ButtonSizeVariants.extra_large} icon={IconsVariants.Arrow_right} />
      </div>
      <div style={{ left: -left }} className={SliderClass}>
        {
          slides.map((item, index) =>
            <div ref={sliderCard} key={index} className={`slider-card${index === selected ? ' active' : ''}`}>
              <div className='info'>
                <Text >{item.title}</Text>
                <Text className='description' variant={TextVariants.h1_medium}>{item.description}</Text>
                {item.link &&
                  <div className='link'>
                    <Link to={item.link} >
                      <Text variant={TextVariants.h3_regular}>{item.text_link}</Text>
                    </Link>
                    <hr />
                  </div>
                }
              </div>
              <div className='slider-img'>
                <div>
                  <div className='light-number'></div>
                  <Text className='img-number'>{`0${index + 1}`}</Text>
                  <div className='img-background'>
                    <div className='lines' />
                  </div>
                  <img src={item.img} />
                </div>
                <hr />
              </div>
            </div>
          )
        }
      </div>
    </div>
  );
};

SliderComponent.displayName = 'Slider';