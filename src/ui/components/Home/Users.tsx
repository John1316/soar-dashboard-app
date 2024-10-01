import { ChangeEvent, useState } from "react";
import NextArrowIcon from "../../../assets/svgs/NextArrowIcon";
import UserItem from "./UserItem";
import { Button } from "@nextui-org/react";
import SendButtonIcon from "../../../assets/svgs/SendButtonIcon";


export default function Users({ users, onSuccess }: UserListProps) {
    const maxVisibleUsers = 3; // Maximum users to display without showing the arrow
    const [currentIndex, setCurrentIndex] = useState(0);
    const [amount, setAmount] = useState('')

    // Handle navigation to next set of users
    const handleNext = () => {

        setTimeout(() => {
            // Increment index by 1 and loop back to start if exceeding length
            setCurrentIndex((prevIndex) => (prevIndex + 1) % users.length);
        }, 300); // Match the duration of your animation
    };

    function onSendAmount(){
        setAmount('')
        onSuccess()
    }
    // Slice users array to show only the first 3
    const visibleUsers = [
        ...users.slice(currentIndex, currentIndex + maxVisibleUsers),
        ...users.slice(0, Math.max(0, currentIndex + maxVisibleUsers - users.length)),
    ];
    return (
        <div className="">
            {/* User Avatars */}
           
            <div className="flex relative items-center justify-between gap-[24px]">
                <div className="flex  md:gap-[24px] gap-[21px]">

                {visibleUsers.map((user) => <UserItem
                    key={user.key}
                    avatar={user.avatar}
                    name={user.name}
                    role={user.role}
                    />)}
                    </div>
                {users.length > maxVisibleUsers && (
                    <Button aria-label="users__slider--button" onClick={handleNext} className="users__slider--button w-[50px] h-[50px]">
                        <NextArrowIcon />
                    </Button>
                )}
            </div>
            {/* Arrow Button (conditionally rendered) */}

            {/* Amount Input & Send Button */}
            <div className="lg:flex items-center gap-[24px] mt-[30px]">
                    <p className="users__form--label md:mb-0 mb-[16px]">Write Amount</p>
                    <div className="relative w-full">
                        <div className="field">
                            <div className="flex flex-col gap-[4px]">
                                <input
                                onChange={(event: ChangeEvent<HTMLInputElement>) => setAmount(event.target.value)}
                                value={amount}
                                type="number"
                                    placeholder={"Amount"}
                                    className={`field__input focus:outline-none focus:ring-2 focus:ring-blue-500 !rounded-full w-full`}
                                />
                            </div>
                        </div>

                        <Button aria-label="users__form--button" onClick={onSendAmount} className="users__form--button absolute right-0 top-0 bottom-0">
                            Send
                            <SendButtonIcon />
                        </Button>
                    </div>
            </div>
        </div>
    );
};

