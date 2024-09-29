import { Image } from "@nextui-org/react";
import React from "react";

export default function CreditChip({dark = true}: {dark?: boolean}) {
    return dark ? (
        <Image src="/Chip_Card.svg" />
    ): (
        <Image src="/Chip_Card_dark.svg" />
    );
}
