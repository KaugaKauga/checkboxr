import { MouseEventHandler } from "react";

interface Props {
    onClick?: MouseEventHandler<HTMLButtonElement>,
    text: string
}


const FlowButton = ({ onClick, text }: Props) => (
    <button onClick={onClick} className="text-stone-700 font-medium text-lg uppercase hover:underline active:underline">
        {text}
    </button>
)

export { FlowButton };
