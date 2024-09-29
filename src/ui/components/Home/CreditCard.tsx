import CreditCardType from "../../../assets/svgs/CreditCardType";
import CreditChip from "../../../assets/svgs/CreditChip";


export default function CreditCard({
    balance,
    cardHolder,
    validThru,
    cardNumber,
    dark = true
}: CreditCardProps) {
    // Mask card number, showing only the last 4 digits
    const maskedCardNumber = `${cardNumber.slice(0,4)} **** **** ${cardNumber.slice(-4)}`;

    return (
        <div className={`credit w-full ${dark ? `credit__dark` : ``}`}>
            {/* Top Section */}
            <div className="credit__top">
                <div className="flex justify-between mb-[33px]">

                    <div>
                        <h4 className={`credit__top--balance ${dark ? `!text-white`: ``}`}>Balance</h4>
                        <p className="credit__top--balance-text">{balance}</p>
                    </div>
                    {/* Chip or Logo */}
                    {(() => {
                        if(dark){
                            return <CreditChip />
                        }
                        return <CreditChip dark={false} />
                    })()}
                </div>
                <div className="grid grid-cols-2 justify-between">
                    <div>
                        <h4 className="credit__top--holder mb-[4px]">CARD HOLDER</h4>
                        <p className="credit__top--holder-name">{cardHolder}</p>
                    </div>
                    <div>
                        <h4 className="credit__top--valid mb-[4px]">VALID THRU</h4>
                        <p className="credit__top--valid-date">{validThru}</p>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className={`credit__bottom ${!dark ? `white` : ``}`}>
                <p className="credit__bottom--number">{maskedCardNumber}</p>

                {/* Card Logo or Network */}
                {(() => {
                    if(dark){
                        return <CreditCardType />
                    }
                    return <CreditCardType dark={false} />
                })()}
            </div>
        </div>
    );
};

