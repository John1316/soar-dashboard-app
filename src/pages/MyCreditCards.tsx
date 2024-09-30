import React, { useEffect, useState } from 'react'
import { CardService } from '../services/Cards'
import CreditCard from '../ui/components/Home/CreditCard'

export default function MyCreditCards() {
    const [creditCards, setCreditCards] = useState<CreditCardProps[]>([])

    async function getCreditCards() {
        const responseCardService= await CardService()
        setCreditCards(responseCardService.creditCards || [])
        // setRecentTransactions(responseOftransactions?.transactions || [])
        console.log("🚀 ~ responseCardService ~ responseOftransactions:",responseCardService)
      }
      useEffect(() => {
        getCreditCards()
        return () => {
    
        }
      }, [])
  return (
    <section className="grid lg:grid-cols-3 grid-cols-1 gap-[30px] mb-[24px]">

        {creditCards?.length ? creditCards.map((credit: CreditCardProps, index: number) => <CreditCard
          balance={credit.balance}
          cardHolder={credit.cardHolder}
          cardNumber={credit.cardNumber}
          validThru={credit.validThru}
          dark={index % 2 === 0}
        />): ""}
        {/* <CreditCard
          balance="$5,756"
          cardHolder="Eddy Cusuma"
          cardNumber="3778411414471234"
          validThru="12/22"
          dark={false}
        /> */}
  </section>
  )
}
