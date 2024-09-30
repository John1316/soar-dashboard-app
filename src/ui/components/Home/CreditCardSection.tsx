import SectionTitle from './SectionTitle'
import { Button } from '@nextui-org/react'
import { NavLink } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import CreditCard from './CreditCard';

export default function CreditCardSection({creditCards}: {creditCards:CreditCardProps[]}) {
  return <>
            <div className="flex justify-between mb-[21px]">
            <SectionTitle title="My Cards" />
            {creditCards?.length > 2 && <Button to={'/creditCards'} as={NavLink} aria-label="see__all--button" className="see__all">See All</Button>}
          </div>
          <Swiper
            spaceBetween={20} // Space between slides
            slidesPerView={1.2} // Default slides per view (for mobile)
            breakpoints={{
              // Breakpoint for larger screens
              1024: {
                spaceBetween: 30,
                slidesPerView: 2, // Show 2 slides on large screens
              }
            }}
            draggable={true}
          >
            {creditCards?.length
              ? creditCards.slice(0, 2).map((credit: CreditCardProps, index: number) => (
                <SwiperSlide key={index}>
                  <CreditCard
                    balance={credit.balance}
                    cardHolder={credit.cardHolder}
                    cardNumber={credit.cardNumber}
                    validThru={credit.validThru}
                    dark={index % 2 === 0}
                  />
                </SwiperSlide>
              ))
              : ""}
          </Swiper>
  </>
}
