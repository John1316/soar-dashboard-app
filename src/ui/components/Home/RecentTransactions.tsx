import TransactionItem from './TransactionItem';
// import CardIcon from '../../../assets/svgs/CardIcon';
// import DollarSign from '../../../assets/svgs/DollarSign';
// import PaypalIcon from '../../../assets/svgs/PaypalIcon';
import SectionTitle from './SectionTitle';


export default function RecentTransactions ({transactions}: {transactions: TransactionItem[]}) {
  // Example transaction data
  // const transactions = [
  //   {
  //     icon: <CardIcon /> , // Replace with actual SVG or icon
  //     title: 'Deposit from my Card',
  //     date: '28 January 2021',
  //     amount: '-$850',
  //     isPositive: false,
  //     bgColor: '#FFF5D9',
  //   },
  //   {
  //     icon: <PaypalIcon />, // Replace with actual SVG or icon
  //     title: 'Deposit Paypal',
  //     date: '25 January 2021',
  //     amount: '+$2,500',
  //     isPositive: true,
  //     bgColor: '#E7EDFF',
  //   },
  //   {
  //     icon: <DollarSign />, // Replace with actual SVG or icon
  //     title: 'Jemi Wilson',
  //     date: '21 January 2021',
  //     amount: '+$5,400',
  //     isPositive: true,
  //     bgColor: '#DCFAF8',
  //   },
  // ];

  return (
    <div className="transactions ">
      <SectionTitle title='Recent Transaction' className='mb-[20px]' />
      <div className="transactions__card">
        {transactions?.length ? transactions.map((transaction: TransactionItem, index: number) => (
            <TransactionItem
            key={index}
            // icon={transaction.icon}
            title={transaction.title}
            date={transaction.date}
            amount={transaction.amount}
            isPositive={transaction.isPositive}
            bgColor={transaction.bgColor}
            />
        )): ""}
      </div>
    </div>
  );
};

