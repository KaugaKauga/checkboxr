import { FlowButton } from "../../components/FlowButton";
import { useKeydown } from "../../hooks/useKeydown";
import { Type } from "../../interfaces/todo";

interface Props {
    onSelectType: (arg0: Type) => void,
}

const TypeStep = ({ onSelectType }: Props) => {

    useKeydown('D', () => {
        onSelectType(Type.daily)
    });

    useKeydown('W', () => {
        onSelectType(Type.weekly)
    });

    useKeydown('M', () => {
        onSelectType(Type.monthly)
    });

    return (
        <div className="flex flex-col justify-center h-full space-y-8">
            <FlowButton text="Daily" onClick={() => onSelectType(Type.daily)} />
            <FlowButton text="Weekly" onClick={() => onSelectType(Type.weekly)}/>
            <FlowButton text="Monthly" onClick={() => onSelectType(Type.monthly)} />
        </div>
    )
}

export { TypeStep };
