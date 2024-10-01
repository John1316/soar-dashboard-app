import TransactionItem from './TransactionItem';
// import CardIcon from '../../../assets/svgs/CardIcon';
// import DollarSign from '../../../assets/svgs/DollarSign';
// import PaypalIcon from '../../../assets/svgs/PaypalIcon';
import SectionTitle from './SectionTitle';


export default function RecentTransactions ({transactions}: {transactions: TransactionItem[]}) {


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

