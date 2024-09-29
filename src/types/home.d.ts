type CreditCardProps = {
    balance: string;
    cardHolder: string;
    validThru: string;
    cardNumber: string;
    dark?: boolean
  }
  type SectionTitle = {
    title: string,
    className?: string
  }
  type  TransactionItemProps = {
    icon: React.ReactNode;
    title: string;
    date: string;
    amount: string;
    isPositive: boolean;
    bgColor: string
  }