import { useRef } from "react";
import { Button } from "../../components/Button";
import { useKeydown } from "../../hooks/useKeydown";

interface Props {
    onDescriptionDone: (description: string) => void
}

const DescriptionStep = ({ onDescriptionDone }: Props) => {
    const inputRef = useRef<HTMLTextAreaElement>(null);

    useKeydown('Enter', () => {
        onDescriptionDone(inputRef?.current?.value || '')
    });


    return (
        <div className="flex flex-col justify-center h-full">
            <textarea ref={inputRef} placeholder="Add your description here..." rows={6}
                className="block w-full border-0 focus:border-0 bg-transparent resize-none focus:ring-0 outline-none"
                autoFocus
            />
            <Button text="Complete" onClick={() => onDescriptionDone(inputRef?.current?.value || '')}/>
        </div>
    )
}

export { DescriptionStep };
