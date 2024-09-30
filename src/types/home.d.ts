type CreditCardProps = {
  balance: string;
  cardHolder: string;
  validThru: string;
  cardNumber: string;
  dark?: boolean;
};
type SectionTitle = {
  title: string;
  className?: string;
};
type TransactionItemProps = {
  // icon: React.ReactNode;
  title: string;
  date: string;
  amount: string;
  isPositive: boolean;
  bgColor: string;
};
type TransactionItem = {
  // icon: React.ReactNode;
  title: string;
  date: string;
  amount: string;
  isPositive: boolean;
  bgColor: string;
};
type User = {
  key: string;
  name: string;
  role: string;
  avatar: string; // URL or path to the avatar image
};

type UserListProps = {
  users: User[];
  onSuccess: () => void
};
