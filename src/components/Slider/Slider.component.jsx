import React, { useRef, useState } from 'react';
import classNames from 'classnames';
import { Text } from '../Text';
import { Link } from 'react-router-dom';
import { Button } from '../Button';
import { ButtonSizeVariants, ButtonVariants, IconsVariants, TextVariants } from '../../constants/VariantsOfComponents';
import { useLayoutEffect } from 'react';

export const SliderComponent = ({
  description,
  slides,
  className,
}) => {
  const SliderClass = classNames(
    'slider',
    className
  );

  const parentCards = useRef(null);
  const sliderCards = useRef([]);
  const [selected, setSelected] = useState(0);

  const handleClick = (toItem) => {
    setSelected(Math.max(0, Math.min(slides.length - 1, toItem)));
  }

  useLayoutEffect(() => {
    parentCards.current.style.left = `-${sliderCards.current[selected].offsetLeft}px`;
  }, [selected])

  return (
    <div className='left-container'>
      <Text className='slider-description'>{description}</Text>
      <div className='slider-tools'>
        <Button onClick={() => { handleClick(selected - 1) }} variant={ButtonVariants.purchase} size={ButtonSizeVariants.extra_large} icon={IconsVariants.Arrow_left} />
        <div className='sticks-container'>
          {
            slides.map((item, index) => <hr key={index} className={`${index === selected ? ' active' : ''}`} />)
          }
        </div>
        <Button onClick={() => { handleClick(selected + 1) }} variant={ButtonVariants.purchase} size={ButtonSizeVariants.extra_large} icon={IconsVariants.Arrow_right} />
      </div>
      <div ref={parentCards} className={SliderClass}>
        {
          slides.map((item, index) =>
            <div ref={(element) => sliderCards.current[index] = element} key={index} className={`slider-card${index === selected ? ' active' : ''}`}>
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
                  <img src={item.img} alt='' />
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