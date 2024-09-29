import { Image } from '@nextui-org/react'

export default function CreditCardType({dark = true}: {dark?: boolean}) {
  return dark ? (
    <Image src='/MasterCard.svg' alt='mastercard-logo'/>
  ): (
    <Image src='/MasterCardDark.svg' alt='mastercard-logo'/>
  )
}
