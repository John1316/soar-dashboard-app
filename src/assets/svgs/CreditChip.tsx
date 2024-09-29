import { Image } from "@nextui-org/react";
export default function CreditChip({dark = true}: {dark?: boolean}) {
    return dark ? (
        <Image src="/Chip_Card.svg" alt="card-chip" />
    ): (
        <Image src="/Chip_Card_dark.svg" alt="card-chip" />
    );
}
