import CardIcon from '../../../assets/svgs/CardIcon';
import DollarSign from '../../../assets/svgs/DollarSign';
import PaypalIcon from '../../../assets/svgs/PaypalIcon';

export default function TransactionItem({
title,
  date,
  amount,
  isPositive,
  bgColor = "",
}: TransactionItemProps) {
  return (
    <div className="flex items-center transactions__card--item">
      {/* Icon */}
      <div
        className={`transactions__card--item-icon w-[55px] h-[55px]  rounded-full flex items-center justify-center`} style={{backgroundColor: bgColor}}
      >
        {(() => {
          if(title === "Deposit from my Card"){
            return <CardIcon />
          }
          if(title === "Deposit Paypal"){
            return <PaypalIcon />
          }
          return <DollarSign />
        })()}
      </div>
      {/* Transaction Info */}
      <div className="flex-grow">
        <h5 className="transactions__card--item-title">{title}</h5>
        <p className="transactions__card--item-text">{date}</p>
      </div>
      {/* Amount */}
      <div>
        <p
          className={`text-sm font-semibold ${
            isPositive ? "text-green-500" : "text-red-500"
          }`}
        >
          {amount}
        </p>
      </div>
    </div>
  );
}
